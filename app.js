

/*-----------------------{Slider}------------------------*/

let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnail = document.querySelectorAll('.thumbnail .item');

//count
let countItem = items.length;
let itemActive= 0;

// next click

next.onclick = function(){
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}
//prev click
prev.onclick = function(){
    itemActive = itemActive - 1;
    if (itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();    
}

//auto run
let refreshInt = setInterval(() => {
    next.click();}, 5000);

function showSlider(){
    let itemOldActive = document.querySelector('.slider .list .item.active');
    let thumbnailOldActive = document.querySelector('.thumbnail .item.active');
    itemOldActive.classList.remove('active');
    thumbnailOldActive.classList.remove('active');


    // new active item
    items[itemActive].classList.add('active');
    thumbnail[itemActive].classList.add('active');

    clearInterval(refreshInt);
    refreshInt = setInterval(() => {
        next.click();}, 5000);
}

//thumbnail click
thumbnail.forEach((thumbnail, index) =>{
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})
/*-----------------------------------------------------------*/

/*-----------------------{Login Form}------------------------*/


//Select class
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");

inputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.classList.add("active");
  });
  inp.addEventListener("blur", () => {
    if (inp.value != "") return;
    inp.classList.remove("active");
  });
});

toggle_btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    main.classList.toggle("sign-up-mode");
  });
});



function moveSlider() {
  let index = this.dataset.value;

  let currentImage = document.querySelector(`.img-${index}`);
  images.forEach((img) => img.classList.remove("show"));
  currentImage.classList.add("show");

  const textSlider = document.querySelector(".text-group");
  textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  bullets.forEach((bull) => bull.classList.remove("active"));
  this.classList.add("active");

}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);

}

);

/*-----------------------------------------------------------*/


/*-----------------------{Pop up Login}------------------------*/
document.querySelector("#present").addEventListener("click",function(){
  document.querySelector(".box").classList.add("active");
});

document.querySelector(".forms-wrap .close-btn").addEventListener("click",function(){
  document.querySelector(".box").classList.remove("active");
});

/*-----------------------{active Header}------------------------*/
var lastScrollTop = 0;
  navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function(){
    var scrollTop = window.pageXOffset || this.document
    
  })