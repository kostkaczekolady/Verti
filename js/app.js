var mobile=window.matchMedia("screen and (max-width: 760px)");
var menu=document.querySelector(".menu");
var menuTrigger=document.getElementById("menu-trigger");


if(mobile.matches){
    menuTrigger.style.display='block';
}else{
    menuTrigger.style.display='none';
}

mobile.addListener(function(){
    if(mobile.matches){
        menuTrigger.style.display='block';
    }else{
        menuTrigger.style.display='none';
    }
});


// mobile.addListener(function(){
//     if(mobile.matches){
//         menu.classList.add("hidden");
//     }else{
//         menu.classList.remove("hidden");
//     }
// });