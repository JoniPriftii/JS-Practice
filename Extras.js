/*      Slider Part     */
var slider = document.querySelector('#slider');
var dot1 = document.querySelector('#dot1');
var dot2 = document.querySelector('#dot2');
var dot3 = document.querySelector('#dot3');
var dot4 = document.querySelector('#dot4');

dot1.addEventListener('click' , function(e){
    slider.style.transform = 'translateX(0)';    
})
dot2.addEventListener('click' , function(e){
    slider.style.transform = 'translateX(calc(-100%/6))';
})
dot3.addEventListener('click' , function(e){
    slider.style.transform = 'translateX(calc(-100%/6*2))';
})
dot4.addEventListener('click' , function(e){
    slider.style.transform = 'translateX(calc(-100%/6*3))'; 
})

/*     Slider at logos at the bottom      */
let leftArrow = document.querySelector('#scroll-icons .left');
let rightArrow = document.querySelector('#scroll-icons .right');
let firstDot = document.querySelector('#scroll-icons .dots');
let secondDot = document.querySelectorAll('#scroll-icons .dots')[1];
let logoSlide = document.querySelector('#logos #slider2');

const logoMove = (posit) =>{
    logoSlide.style.left = posit;
}
const toggleClasses = (leftDot ,rightDot, arrowl , arrowR) =>{
    leftDot.classList.add('black-background');
    rightDot.classList.remove('black-background');
    arrowl.classList.add('hide');
    arrowR.classList.remove('hide');
}


leftArrow.addEventListener('click' , function(){
    logoMove("0")
    toggleClasses(firstDot , secondDot , leftArrow , rightArrow);
})
firstDot.addEventListener('click' , function(){
    logoMove("0");
    toggleClasses(firstDot , secondDot , leftArrow , rightArrow);
})

rightArrow.addEventListener('click' , function(){
    logoMove("-900px");
    toggleClasses(secondDot , firstDot , rightArrow , leftArrow);
})
secondDot.addEventListener('click' , function(){
    logoMove("-900px");
    toggleClasses(secondDot , firstDot , rightArrow , leftArrow);
})






/*      Inputs      */
let inputs = document.querySelectorAll('.input-wrapper input')

let placeholdToggle = (placeholder, classChange) => {
    placeholder.classList.toggle(classChange);
}

for(input of inputs){ 
    
input.addEventListener('focus' , function(){
    if(this.value ===''){
    placeholdToggle(this.nextElementSibling , 'placeholder-toggler');
    }
})
input.addEventListener('blur' , function(){
    if(this.value === ''){
    placeholdToggle(this.nextElementSibling , 'placeholder-toggler');
    }
})

}








/*      footer      */
let footerHeaders = document.querySelectorAll('.footer-headers');


for(footHead of footerHeaders){
footHead.addEventListener('click' , function(){
    this.nextElementSibling.classList.toggle('display');
})
}
