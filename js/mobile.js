$(function(){
     // 窗口滚动条 scroll style
    $('html').niceScroll({
        ccursorcolor:"#444",
        background:'rgba(0,0,0,0.2)',
        cursoropacitymax:1,
        touchbehavior:false,
        cursorwidth:"8px",
        cursorborder:"0",
        cursorborderradius:"8px",
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
    var winW,winH;
    function getWinSize(){
        winW = $(window).width();
        winH = $(window).height();
    }
    getWinSize();
    $(window).resize(function(){
        getWinSize();
    });
    function org0(){
        $('.link').removeClass('hidden-xs hidden-sm fr').css({
                zIndex:999999,
                width:'70vw',
                height:'100vh !important',
                margin:0,
                background:'red',
                position:'fixed',
                top:0,
                right:'-70vw',
            }).appendTo('body')
            $('.header').css({
                zIndex:9999,
                width:'100vw',
            });
            $('.page').css({
                zIndex:999,
                width:'100vw',
                position:'relative',
                top:0,
                right:0,
                background:'#fff'
            })

            // alert('竖')
    }

    function org90(){
        $('.menu-btn').before($('.link').addClass('hidden-xs hidden-sm fr').removeAttr('style'));
        $('.header .page').removeAttr('style')
        // alert('横')
    }

    if( window.orientation == 90 ){
        org90();
    }else if( window.orientation == 0 ){
        org0();
    }
    window.addEventListener("orientationchange", function() {
        if( window.orientation == 90 ){
            org90();
        }else if( window.orientation == 0 ){
            org0();
        }
    }, false);


    var LoR = null;
    function showR(){
        $('.header,.page').animate({
            marginLeft: - winW * 0.7
        },200);
        $('.link').animate({
            right:0
        },200);
        Mask('show','-70vw');
    }
    function Mask(display,left){
        if(display == 'show'){
            $('#mask').css({
                width:'100vw',
                height:'100vh',
                background:'rgba(0,0,0,0.5)',
                zIndex:999999,
                position:'fixed',
                top:0,
                'left':0
            }).animate({
                'left':'-70vw',
            },200).show();
        }else{

        }

    }
    $('#mask').click(function(){
        if(LoR == 'left'){
            $('.header,.page').animate({
                marginLeft: 0
            },200);
             $('.link').animate({
                right:'-70vw'
            },200);
             $(this).css({'left':0}).hide(200);
        }else{
            $('.header,.page').animate({
                marginLeft: 0
            },200);
             $('.me').animate({
                left:'-70vw'
            },200);
             $(this).css({'left':0}).hide(200);
        }
    });

    $('.page').swipe({
          threshold:0,
          allowPageScroll:'auto',
          swipeStatus:function(event, phase, direction, distance, duration,fingerCount) {
            if(direction == 'left' ){
                // alert('click window');
               LoR = 'left';
               showR()
            }
          }

      });

});