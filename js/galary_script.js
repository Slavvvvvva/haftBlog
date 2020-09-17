'use strict';
let text = document.querySelector('#short');
let bidimg= document.querySelectorAll('.imgb');
let hamBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.nav');

let check2 = true;
let check1 = true;
let check = true;
 

// Увеличения изображения

bidimg.forEach(function(i){
i.addEventListener("click",function(){
    console.log("agaimg");
    if (check==true){
        i.classList.add("img2activ");
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
        check= true;
    }
    
});
});

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

 

