'use strict';
let text = document.querySelector('#short');
let bidimg= document.querySelectorAll('.imgb');
let hamBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.nav');


let check2 = true;
let check1 = true;
let check = true;
 

//  Кнопка появления меню

hamBtn.addEventListener("click",function(){
    if (check2==true){
        console.log("aga");
        menu.classList.remove("close_menu");
        check2 = false;
    } else{
        menu.classList.add("close_menu");
        check2= true;
    }
});

// Slider

   //Увеличения всех изображений при клике на любое

let littleSlider = document.querySelectorAll(".little_slider");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

littleSlider.forEach(function(i){
    i.addEventListener("click",function(){
        console.log("agaimg");
        if (check==true){
            i.classList.add("img2activ");
            next.classList.add("show");
            prev.classList.add("show");
            check = false; 
            //  Ограничение максимальной высоты изображения при изменения розмера окна
    
            let Img2Activ = document.querySelector('.img2activ');
            let WindiwHeight = document.documentElement.clientHeight;
            
            Img2Activ.style.maxHeight=`${WindiwHeight-50}px`;
            window.addEventListener('resize', function(){
                let WindiwHeight = document.documentElement.clientHeight; 
                console.log("resized");
                Img2Activ.style.maxHeight=`${WindiwHeight-50}px`;
            });
    
        } else{
            i.classList.remove("img2activ");
            next.classList.remove("show");
            prev.classList.remove("show");
            check= true;
        }
        
    });
});

// Сам слайдер
let slideIndex = 1;

function showSlids(n){
    if (n > littleSlider.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = littleSlider.length;
    }
    littleSlider.forEach(i => i.classList.remove("img2activ"));
    littleSlider[slideIndex-1].classList.add("img2activ");
}
function plusSlides(n) {
    showSlids(slideIndex +=n);
}

prev.addEventListener("click", () =>{
    plusSlides(-1);
});
next.addEventListener("click", () =>{
    plusSlides(1);
});