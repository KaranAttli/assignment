var box = document.getElementById('CompleteTodos');
var table = document.createElement('table');

var STATUS_OK = 200;
var READY_STATE  =4;
var xhr = new XMLHttpRequest();

function CompleteTodos(){


    box.innerHtml = " ";
    table.innerHTML = "";


    xhr.open('GET','/completetodo',true);


    xhr.onreadystatechange = function () {

        if(xhr.readyState==READY_STATE &&xhr.status == STATUS_OK){
            var data = JSON.parse(xhr.responseText);

            for(var p in data){
                var row = table.insertRow();
                var cell = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var image = document.createElement('img');
                image.style.width = '20px';
                image.style.width = '15px';
                image.setAttribute('data-id',p);
                image.setAttribute('onclick','deletetask('+p+')');
                image.setAttribute('src','/images/cross.jpg');
                cell.innerHTML = '<input type="checkbox" checked="true" onclick="makeActive('+p+')">'
                cell1.innerHTML = data[p].Title ;
                cell2.appendChild(image);
                box.appendChild(table);





            }








        }
    }

    xhr.send();




}

function makeActive(p){

    xhr.open('PUT','/makeActive/'+p,true);

    xhr.onreadystatechange = function () {

        if(xhr.status==STATUS_OK && xhr.readyState==READY_STATE){
            display();
        }

    }

    xhr.send();



}