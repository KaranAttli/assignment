
function display() {
    getActiveList();
    CompleteTodos();
    fetchDeleteList();
}

window.onload = display();


var STATUS_OK = 200;
var READY_STATE  =4;

function getActiveList(){

    var xhr = new XMLHttpRequest();
    xhr.open("GET",'/active',true);

    xhr.onreadystatechange = function () {

        if(xhr.readyState==READY_STATE &&xhr.status == STATUS_OK){

            var data = JSON.parse(xhr.responseText);
            var ActiveTodos = document.getElementById("ActiveTodos");
            ActiveTodos.innerHTML = "";
            var table = document.createElement("table");

            for(var p in data){
                var row = table.insertRow();
                var cell = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);

                cell2.innerHTML = '<img src="/images/cross.jpg" onclick="deletetask('+p+')" width="20px" height="15px" />'
                //var image= document.createElement('img');
                //image.setAttribute('src','/images/cross.jpg');
                //image.setAttribute('onclick','changeStatusComplete('+p+')');
                //image.style.width = '20px';
                //image.style.height= '15px';
                cell.innerHTML = '<input type ="checkbox" data-id = '+p+' onclick = "changeStatusComplete('+p+')"  />';
                //cell2.appendChild(image);
                cell1.innerHTML = data[p].Title;
            }

            ActiveTodos.appendChild(table);


        }

    }

    xhr.send();



}