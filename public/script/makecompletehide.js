
var link = document.getElementById('completehide');
link.addEventListener("click",function (event) {
    event.preventDefault();
});
var showcomplete = true;


function makecompletehide() {

    var item = document.getElementById('CompleteTodos');
    showcomplete=!showcomplete;
    if(showcomplete==false){
        item.setAttribute('class','hidden');
    }else{
        item.setAttribute('class','show');
    }


}