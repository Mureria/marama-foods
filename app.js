// set date dynamically
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// toggle
const navToggle = document.querySelector('.menu');
const block = document.querySelector('.block');
const navTogge = document.querySelector('.menu');

navToggle.addEventListener('click', function(){
    block.classList.toggle("block")

});

// const navbar = document.getElementById('nav');
// const topLink =document.querySelector('.topContainer'); 
// // fixed navbar
// window.addEventListener('scroll', function(){
//     const scrollHeight = window.pageYOffset;
//     const navHeight = navbar.getBoundingClientRect().height;

//     if(scrollHeight > navHeight) {
//         navbar.classList.add('fixed-nav');
//     }else{
//         navbar.classList.remove('fixed-nav');
//     }

// });


