window.onscroll=function() {scrollFunction()};

function scrollFuntion(){
    if(document.body.scrollTop> 20 || document.documentElement.scrollTop > 20){
        document.getElementById("narbar").style.backgroundcolor="white";
    }else{
        document.getElementById("narbar").style.backgroundcolor="transparent";
    }
}