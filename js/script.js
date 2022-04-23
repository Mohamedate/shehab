/*---------- shwo navbar---------*/
let navbar = document.querySelector('.navbar'); 
document.querySelector('#menu-btn').onclick = ()=> { 
    navbar.classList.toggle('active');
}
/*---------- close navbar---------*/
document.querySelector('#close-navbar').onclick = ()=> { 
    navbar.classList.remove('active');
}

/*---------- shwo form search---------*/
let searchForm = document.querySelector('.search-form'); 
document.querySelector('#search-btn').onclick = ()=> { 
    searchForm.classList.toggle('active');
}

window.addEventListener('scroll',function() { 
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
})

/*------------ slider image------------------*/
let slides = document.querySelectorAll('.home .slide');
let index = 0;
function next () { 
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev () { 
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


var swiper = new Swiper(".products-slider", {
    loop: true,
    grabeCursor: true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        550: {
          slidesPerView: 2,
        },
        850: {
          slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
          },
      },
  });
