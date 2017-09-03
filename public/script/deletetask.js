
var STATUS_OK = 200;
var READY_STATE  =4;
var xhr = new XMLHttpRequest();


function deletetask(id){

    xhr.open('delete','/'+id,true);

    xhr.onreadystatechange = function () {

        if(xhr.status==STATUS_OK && xhr.readyState==READY_STATE){
            display();
        }

    }

    xhr.send();






}