$(function(){

    // banner
    var swiper = new Swiper('.banner',{
        spaceBetween: 30,
        speed:200,
        loop:true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        slidesPerView : 1,
        spaceBetween : 0,
        autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
        autoplayDisableOnInteraction : false,
    });

    // scroll style
    $('html').niceScroll({
        ccursorcolor:"#444",
        background:'rgba(0,0,0,0.2)',
        cursoropacitymax:1,
        touchbehavior:false,
        cursorwidth:"8px",
        cursorborder:"0",
        cursorborderradius:"8px"
    });




});