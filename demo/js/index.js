$(function(){
    var page = $('#page'),
        menu = $('#menu'),
        winW = $(window).width(),
        asideWidth = winW * 0.7,
        pageLeft = 0,
        menuLeft = winW * 0.65,
        LorR = null,
        tmp = -1,
        menuDisplay = null,
        IsHeng = false,
        flag = false;
    $(window).resize(function(){
        winW = $(window).width();
        asideWidth = winW * 0.7;
        menuLeft = winW * 0.7;
        hiddenMenu();
        menuDisplay = null;
        IsPad();
        orien();
    });
    //是否是ipad
   function IsPad(){
     var userAgentInfo = navigator.userAgent;
     var Agents = new Array("iPad","iPod","Pad","Pod","pad","pod");
     flag = false;
     for (var v = 0; v < Agents.length; v++) {
         if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = true; break; }
     }
    }
    IsPad();
    //是否是横屏
    console.log(window.orientation);
    function orien(){
        if (window.orientation === 180 || window.orientation === 0) {
            IsHeng = false;
            $('#orn').css('display','none')
            // alert('shu');
        }

        if (window.orientation === 90 || window.orientation === -90 ){
            IsHeng = true;
            // alert('heng');
            // alert('not pad');
            if(flag){
            alert('ispad');
                $('#orn').css({'display':'none'})
            }else{
                $('#orn').css({'display':'block'})
            }
        }
    }
    orien();

    //menu 收起
    function hiddenMenu(){
        pageLeft = 0;
        menuLeft = winW * 0.65;
         $('#page,#mask').animate({
            left:0
        },50,function(){
            $('#page').css({left:0})
            $('#menu').css({left:winW * 0.65})
        });
        $('#mask').animate({opacity:0},50).css({display:'none'});
        $('.menu-btn').toggleClass('close')
    }
    //menu 展开
    function showMenu(){
        pageLeft = - winW * 0.7;
        menuLeft = winW * 0.3;
        $('#page,#mask').animate({
            left:'-70vw'
        },50);
        $('#menu').animate({
            left:'30vw'
        },50);
        $('#mask').animate({opacity:1},50).css({display:'block'});
        // $('.menu-btn').toggleClass('close')
    }
    //menu moveimg
    function menuMoveimg(distance){
        // console.log();
        $('#page,#mask').css({
            left:pageLeft + tmp * distance
        });
        $('#menu').css({
            left:menuLeft + tmp * distance /2
        });
        if(LorR == 'left'){
            $('.menu-btn').removeClass('open')
            $('#mask').css({display:'block',opacity:1 * distance / asideWidth});
            $('.line1').css({'transform':'rotate('+45*distance / asideWidth+'deg)',top:8*distance / asideWidth+'px',position: 'relative'});
            $('.line3').css({'transform':'rotate('+-45*distance / asideWidth+'deg)',bottom:8*distance / asideWidth+'px',position: 'relative'});
        }else{
            $('.menu-btn').removeClass('close').addClass('open')
            $('#mask').css({display:'block',opacity:1 -  distance / asideWidth });
           $('.line1').css({'transform':'rotate('+(45-45*distance / asideWidth)+'deg)',top:8*distance / asideWidth+'px',position: 'relative'});
            $('.line3').css({'transform':'rotate('+(45-45*distance / asideWidth)+'deg)',bottom:8*distance / asideWidth+'px',position: 'relative'});
        }
    }
    $('#page,#menu').swipe({
        allowPageScroll:'auto',
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
                // console.log(event.type);
            if(direction == 'left' || direction == 'right'){
                LorR = direction;
            }
            if( !IsHeng &&  event.type == 'touchmove' &&  direction == 'left'&& distance < asideWidth && !menuDisplay ){
                tmp = -1;
                menuMoveimg(distance);

            }else if( !IsHeng && event.type == 'touchmove' &&  direction == 'right'&& distance < asideWidth && menuDisplay ){
                tmp = 1;
                menuMoveimg(distance);
        }
        // console.log(duration);
            if( !IsHeng && event.type == 'touchend' && distance > 15){
                if(LorR == 'left'){
                    showMenu();
                    menuDisplay = '已经展开';
                    $('.line1').css({'transform':'',top:'',position: ''});
                    $('.line3').css({'transform':'',top:'',position: ''});
                    $('.menu-btn').removeClass('open').addClass('close')
                }else if(LorR == 'right'){
                   hiddenMenu();
                   menuDisplay = null;
                   $('.line1').css({'transform':'rotate(0deg)',top:'',position: ''});
                    $('.line3').css({'transform':'rotate(0deg)',top:'',position: ''});
                    $('.menu-btn').removeClass('close').addClass('open')
                }

                console.log(LorR+'   '+menuDisplay);


            }
        },

    });
     $('#mask').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
            // console.log(event.type);
        if( !IsHeng && ( event.type == 'touchend' || event.type == 'mouseup' ) ){
                hiddenMenu()
                menuDisplay = null;
                console.log(LorR+' '+menuDisplay);

        }
    }});
     //导航
     $('.nav a').click(function(){
        $('.nav a').removeClass('active');
        $(this).addClass('active')
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

    $('.menu-btn').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
            // console.log(event.type);
        if( !IsHeng && ( event.type == 'touchend' || event.type == 'mouseup' )){
                if(LorR == 'left'){
                    showMenu();
                    menuDisplay = '已经展开';
                    $('.line1').css({'transform':'',top:'',position: ''});
                    $('.line3').css({'transform':'',top:'',position: ''});
                    $('.menu-btn').removeClass('open').addClass('close')
                }else if(LorR == 'right'){
                   hiddenMenu();
                   menuDisplay = null;
                   $('.line1').css({'transform':'rotate(0deg)',top:'',position: ''});
                    $('.line3').css({'transform':'rotate(0deg)',top:'',position: ''});
                    $('.menu-btn').removeClass('close').addClass('open')
                }
        }
    }
    });
});