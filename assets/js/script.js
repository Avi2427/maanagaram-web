// Owlcarousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:10,
    nav:true,
	autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    center: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });

  document.getElementsByClassName('owl-prev').src="img/arrow1.png";

});