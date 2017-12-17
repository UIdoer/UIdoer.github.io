$(function(){
     // 窗口滚动条 scroll style
    $('html').niceScroll({
        ccursorcolor:"#444",
        background:'rgba(0,0,0,0.2)',
        cursoropacitymax:1,
        touchbehavior:false,
        cursorwidth:"8px",
        cursorborder:"0",
        cursorborderradius:"8px"
    });

    // banner
    var swiper = new Swiper('.swiper-container',{
        spaceBetween: 30,
        speed:200,
        loop:true,
        pagination:{
            el: '.swiper-pagination',
            dynamicBullets: true,
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

    function launchFullScreen(element) {
      if(element.requestFullscreen) {
        element.requestFullscreen();
      } else if(element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if(element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if(element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    launchFullScreen(document.documentElement);
    // alert(navigator.userAgent);
    alert($('html'));
});