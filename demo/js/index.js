$(function(){
    var page = $('#page'),
        menu = $('#menu'),
        winW = $(window).width(),
        asideWidth = winW * 0.7,
        pageLeft = 0,
        menuLeft = winW * 0.65,
        LorR = null,
        tmp = -1;
    var menuDisplay = null;
    $(window).resize(function(){
        winW = $(window).width();
        asideWidth = winW * 0.7;
        menuLeft = winw * 0.7;
    });
    //menu 收起
    function hiddenMenu(){
        pageLeft = 0;
        menuLeft = winW * 0.65;
         $('#page,#mask').animate({
            left:0
        },100,function(){
            $('#page').css({left:0})
            $('#menu').css({left:winW * 0.65})
        });
        $('#mask').animate({opacity:0},100).css({display:'none'});
    }
    //menu 展开
    function showMenu(){
        pageLeft = - winW * 0.7;
        menuLeft = winW * 0.3;
        $('#page,#mask').animate({
            left:'-70vw'
        },100);
        $('#menu').animate({
            left:'30vw'
        },100);
        $('#mask').animate({opacity:1},100).css({display:'block'});
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
            $('#mask').css({display:'block',opacity:1 * distance / asideWidth});
        }else{
            $('#mask').css({display:'block',opacity:1 -  distance / asideWidth });
        }
    }
    $('#page,#menu').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
                // console.log(event.type);
            if(direction == 'left' || direction == 'right'){
                LorR = direction;
            }
            if( event.type == 'touchmove' &&  direction == 'left'&& distance < asideWidth && !menuDisplay ){
                tmp = -1;
                menuMoveimg(distance);

            }else if( event.type == 'touchmove' &&  direction == 'right'&& distance < asideWidth && menuDisplay ){
                tmp = 1;
                menuMoveimg(distance);
        }
        // console.log(duration);
            if(event.type == 'touchend' && duration > 200){
                if(LorR == 'left'){
                    showMenu();
                    menuDisplay = '已经展开';

                }else if(LorR == 'right'){
                   hiddenMenu();
                   menuDisplay = null;

                }
                console.log(LorR+'   '+menuDisplay);


            }
        }
    });
     $('#mask').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
            // console.log(event.type);
        if( event.type == 'touchend'  ){
                hiddenMenu()
                menuDisplay = null;
                console.log(LorR+' '+menuDisplay);

        }
    }});


});