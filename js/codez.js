/* check local storage  color option $*/

let mainCollor = localStorage.getItem("color-option");

console.log(mainCollor);

if(mainCollor !== null){

    document.documentElement.style.setProperty("--main-color", mainCollor );

    document.querySelectorAll(".color-list li").forEach(li => {

        li.classList.remove("active");

        if(li.dataset.color === mainCollor){

            li.classList.add("active");
        }
    
   });
}
/*end */


/* landing cover*/

let landingPage = document.querySelector(".landing-page");

let imgarray = ["hhhh.JPG", "imgo.JPEG", "office.JPEG", "pexels-photo.JPEG", "photo.JPEG", "islam.JPEG" ];



let randomBackground = true;

let backgroundInterval;
/*chek */
let localBackground = localStorage.getItem("background-option");

if(localStorage.getItem("background-option") !== null){

    if(localStorage.getItem("background-option") === 'true'){ 

        randomBackground = true;
       

    }
    else{
        randomBackground = false;

    }

    /*remove classs */
    document.querySelectorAll(".random-background span").forEach(span => {

        span.classList.remove("active")
    })

   if(localStorage.getItem("background-option") === 'true'){

    document.querySelector(".random-background .Yes").classList.add("active");

   }else{
    document.querySelector(".random-background .No").classList.add("active");
   }


    }
function backElrn(){

    "use strict"


    if(randomBackground === true){

      backgroundInterval = setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgarray.length);
        
            landingPage.style.backgroundImage = 'url( "./img/' + imgarray[randomNumber] + '")';
        
        }, 2000);

    }
}
backElrn();


/*end */



/*--- setting box----*/

document.querySelector(".setting-toggle .fa-gear").onclick = function () {

    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
}
/*end */


/* jquery methot */
/*
    $(".fa-gear").on("click", function(){
        $(".setting-box").toggleClass("open")
        }) 
    $(".fa-gear").on("click", function(){
            $(this).toggleClass("fa-spin")
            }) 
*/
/* jquery methot */
    

/*li color*/

const colorli = document.querySelectorAll(".color-list li");

colorli.forEach(li => {

    li.addEventListener("click", (e) => {

        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

        localStorage.setItem("color-option", e.target.dataset.color);

           /* remove and add class */

        e.target.parentElement.querySelectorAll(".active").forEach(li => {

            li.classList.remove("active")
        })

        e.target.classList.add("active");


    })
})
/*end */


/*start span color */

const spanEL = document.querySelectorAll(".random-background span");

spanEL.forEach(span => {

    span.addEventListener("click", (e) => {

           /* remove and add class */

        e.target.parentElement.querySelectorAll(".active").forEach(Element => {

            Element.classList.remove("active");
        })
               /* add class */
        e.target.classList.add("active");

        /* check span */ 

        if( e.target.dataset.background === 'yes'){

            randomBackground = true;

            backElrn();

            localStorage.setItem("background-option", true);


        }else{
            randomBackground = false;

            clearInterval(backgroundInterval);
            localStorage.setItem("background-option", false)
        }


    })
})

/*end */
/* start skills progress */

var ourSkills = document.querySelector(".about-skills");


window.onscroll = function () {

    let skillsOfsettop = this.scrollY;
  
    let outerHiget = this.outerHeight
   
     let windoHieght = this.innerHeight;
     
     let windowscTop = this.pageYOffset;
    
    let collwction = windoHieght + outerHiget - skillsOfsettop - 400;
      

    if(windowscTop > collwction){
       
       document.querySelectorAll(".about-skills .skills-box span ").forEach(Element => {
     
        Element.style.width = Element.dataset.progress;
       })
    

    }
   
    
      


}


/* end skills progress */
/* start gallery */
let ourGallery = document.querySelectorAll(".gallery .image-box img ");

ourGallery.forEach(img => {
    img.addEventListener('click', (e) => {
        let overLay = document.createElement("div");

        overLay.className = "popup-over";

        document.body.appendChild(overLay);

         let imageBox = document.createElement('div');

         imageBox.className = 'imag-box';

         if(img.alt !== null){ 

            let imageHeading = document.createElement("h3");

            let imageText = document.createTextNode(img.alt);

            imageHeading.appendChild(imageText);

            imageBox.appendChild(imageHeading);
        }

         let imageImg = document.createElement('img');

         imageImg.src = img.src;
         
         imageBox.appendChild(imageImg);

         document.body.appendChild(imageBox);

         let closeButton = document.createElement("span");
         
         closeButton.className = 'close-button';

         let closeTextbutton = document.createTextNode("x");

         closeButton.appendChild(closeTextbutton);

         imageBox.appendChild(closeButton)         

    })
  
})
document.addEventListener("click", (e) => {

    if(e.target.className == 'close-button'){

        e.target.parentNode.remove();

        document.querySelector('.popup-over').remove();
        


    }

})

/* end gallery  */
/* start nav-bullets  */
let  navparent = document.querySelectorAll(".nav-bullets .bllut");

navparent.forEach(bllut => {
    bllut.addEventListener("click", (e) => {
         document.querySelector(e.target.dataset.section).scrollIntoView(
             { behavior:'smooth'}
         );
    })
} )
/* end nav-bullets */
/* start header linkes */


let  alllinks = document.querySelectorAll(".links a");

alllinks.forEach(a  => {


    
    a.addEventListener("click", (e) => {
        e.preventDefault();
         document.querySelector(e.target.dataset.section).scrollIntoView(
            { behavior:'smooth'}
            
         );
    
        
       
    })
   
    
    

} )

/* end header linkes */

/* start sting option */
/* start sting option  second span*/
let testbut = document.querySelectorAll(".bullets-option span");

let navestbut = document.querySelector(".nav-bullets");

let localspan = localStorage.getItem("option-span");
if(localspan !== null){
    testbut.forEach(span => {
        span.classList.remove('active');
    } );
    if(localspan === 'block'){
        navestbut.style.display = 'block';
        document.querySelector(".bullets-option  .Yes").classList.add('active');
    }
    else{
        navestbut.style.display = 'none';
        document.querySelector(".bullets-option  .No").classList.add('active');
    }
    
}

testbut.forEach(span => {

   

    span.addEventListener("click", (e) => {

        if(span.dataset.display === 'show'){

            navestbut.style.display = 'block';
            localStorage.setItem("option-span",'block')
        }else{
            navestbut.style.display = 'none';
            localStorage.setItem("option-span",'none')
        }

        /* remove and add class */
        e.target.parentElement.querySelectorAll(".active").forEach(Element => {

            Element.classList.remove("active");
        })
               /* add class */
        e.target.classList.add("active");

     })
})
    
/* end header linkes */
   
/* start resetg btuton */
let resetButton = document.querySelector(".reset-option").onclick = function(){
    localStorage.clear();
    window.location.reload();
}
/* end resetg btuton */


/* start header  */

let toggleMenu = document.querySelector(".toggle-mene");

let linke0 = document.querySelector(".links");

toggleMenu.onclick = function(e){

    e.stopPropagation();

    this.classList.toggle("menue-active");

    linke0.classList.toggle("open");
}
/* click every where */
document.addEventListener("click", (e) => {
    
    if(e.target !== toggleMenu && e.target !== linke0){

        if( linke0.classList.contains("open")){

            toggleMenu.classList.toggle("menue-active");

            linke0.classList.toggle("open");

        }
       
    }

})

linke0.onclick = function (e) {
    
    e.stopPropagation();

}

/* start header */

$(function(){
    'use strict'
    $('body').css('padding-top', $('.header-area').outerHeight() - 3)
})

let header = document.querySelector('.header-area');
let headroom = new Headroom(header);
headroom.init();

/* end header */
/* startg headerrom*/
$(function(){
    $(window).scroll(function(){
        $()
    })
})




/* end headerrom*/

 
$(function(){
    $('.header-area .links li a').click(function(){
        $('.links a').removeClass('active');
        $(this).addClass('active');
    })
    $(window).scroll(function(){
        $('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top ){
                $('.links a').removeClass('active');
                var blocked = $(this).attr('id');
                $('.header-area .links li a[data-section = "' + '.' + blocked + '"]').addClass('active');
             
            }

        })
    })
})
/*$(function(){
    $(window).scroll(function(){
        $('.block').each(function(){
        if($(window).scrollTop() = $(this).offset().top ){
            console.log($(this).attr('id'))
        }
    })
    })
})*/

    







