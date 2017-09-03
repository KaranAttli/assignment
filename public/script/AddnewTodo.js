

var form = document.getElementById('form');
form.addEventListener("submit",function (event) {
    event.preventDefault();
    document.getElementById('task').value="";
})


function AddnewTodo(){

    var task = document.getElementById('task');

    var STATUS_OK = 200;
    var READY_STATE  =4;

    var xhr = new XMLHttpRequest();
    xhr.open('POST','/',true);

    xhr.onreadystatechange = function () {
        if(xhr.status==STATUS_OK && xhr.readyState==READY_STATE){
            display();
        }
    }
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

    if(task.value)
    xhr.send('task='+task.value);


}


