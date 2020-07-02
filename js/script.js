'use strict';
let bigger = document.querySelector('#bigger2');
let text = document.querySelector('#short');

let check = true;

bigger.addEventListener("click",function(){
    console.log("aga");
    if (check==true){
        text.classList.remove("shorter");
        check = false;
    } else{
        text.classList.add("shorter");
        check = true;
    }
    
});


