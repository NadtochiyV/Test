$(function(){

	  $('.slider__wrapper').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  pauseOnHover: true,
	  infinite: true,
	  arrow: false,
	  dots: false,
	  fade: true,
	  centerMode: true,
	  responsive: [
	    // {
	    //   breakpoint: 768,
	    //   settings: {
	    //     slidesToShow: 1,
	    //     slidesToScroll: 1
	    //   }
	    // },
	  ]
	});

      $('#burger').click(function() {
        $('.menu-mobile').animate({ 
            right: '0px' 
        }, 200);
          $('#close').click(function() {
	        $('.menu-mobile').animate({
	            right: '-200px'
	        }, 200);
	    });
    });

      $('.sub').hover(
	function(){
		if ($('> a',this).attr('class') != 'active'){
		$('.sub ul').slideUp();
		$('a',this).next().slideToggle();
		$('.menu-mobile__wrapper > ul > li > a').removeClass('active');
		$('> a',this).addClass('active');
		}
	},
	function(){
		$('.sub ul').slideUp();
		$('.menu-mobile__wrapper > ul > li > a').removeClass('active');
	});
    $('.sub ul > li > a').click(function(){
       $('.sub ul > li > a').removeClass('active');
       $(this).addClass('active');
    });
    $("#hidden, .footer__menu, .header__wrapper-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('#popup, #popup-2').click(function() {
        $('#modal').animate({ 
           top: '50%' 
        }, 200);
          $('#close-popup').click(function() {
	        $('#modal').animate({
	            top: '200%'
	        }, 200);
	    });
    });
});



