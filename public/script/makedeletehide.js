var showdelete = true;

document.getElementById('deletehide').addEventListener('click',function (event) {
    event.preventDefault();
})

function makedeletehide() {


    var item = document.getElementById('delete');



    showdelete= !showdelete;
    if(showdelete==false){
        item.setAttribute('class','hidden');
    }else{
        item.setAttribute('class','show');
    }


}