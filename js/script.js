'use strict';
let bigger = document.querySelector('#bigger2');
let text = document.querySelector('#short');
let bidimg= document.querySelectorAll('.imgb');
let hamBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.nav');

let check2 = true;
let check1 = true;
let check = true;

bigger.addEventListener("click",function(){
    console.log("aga");
    if (check1==true){
        text.classList.remove("shorter");
        check1 = false;
    } else{
        text.classList.add("shorter");
        check1= true;
    }
    
});
console.log(bidimg);

bidimg.forEach(function(i){
i.addEventListener("click",function(){
    console.log("agaimg");
    if (check==true){
        i.classList.add("img2activ");
        check = false;
    } else{
        i.classList.remove("img2activ");
        check= true;
    }
    
});
});

hamBtn.addEventListener("click",function(){
    if (check2==true){
        console.log("aga")
        menu.classList.remove("close_menu");
        check2 = false;
    } else{
        menu.classList.add("close_menu");
        check2= true;
    }
});


