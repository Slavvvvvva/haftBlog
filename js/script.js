'use strict';
let bigger = document.querySelector('#bigger2');
let text = document.querySelector('#short');
let bidimg= document.querySelectorAll('.imgb');

let check1 = true;
let check=true;

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

