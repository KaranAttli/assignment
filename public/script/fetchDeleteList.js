
var container= document.getElementById('delete');
var table2 = document.createElement('table');

function  fetchDeleteList() {

    var xhr = new XMLHttpRequest();
    xhr.open('GET','/delete',true);

    xhr.onreadystatechange =function () {
        container.setAttribute('class','delete');

        if(xhr.status==200 && xhr.readyState==4){

           var data = JSON.parse(xhr.responseText);
            container.innerHTML="";
            table2.innerHTML="";


           for(var p in data){
               var row = table2.insertRow();
               var cell = row.insertCell(0);
               cell.innerHTML = data[p].Title;
           }



        }

        container.append(table2);

    }

    xhr.send();



}