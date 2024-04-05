$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

document.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    document.querySelector('.banner3').style.backgroundPositionY = -scrolled * 0.5 + 'px';
  });
