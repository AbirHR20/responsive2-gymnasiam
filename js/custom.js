$(document).ready(function(){

    

    $('.banner-slider').slick({
        arrows : false,
        autoplay : true,
        dots : true,
        responsive : [
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows : false,
                }
              },
        ]
    });

    var nav =$('nav');

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();

        if (scrolling > 100){
            nav.addClass('navfix');
        }
        else{
            nav.removeClass('navfix');
        }

    });

    $('.venobox').venobox(); 



    $('.test-slider').slick({
        arrows : false,
        autoplay : true,
        dots : true,
        slidesToShow : 2,
        responsive : [
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows : false,
                }
              },
        ]
    });

    $('.counter').counterUp();

  });