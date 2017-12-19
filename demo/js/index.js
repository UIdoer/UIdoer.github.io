$(function(){
    var page = $('#page'),
        menu = $('#menu'),
        winW = $(window).width();
    var asideWidth = winW * 0.7;
    $(window).resize(function(){
        winW = $(window).width();
        asideWidth = winW * 0.7;
    });
    var pageLeft = parseFloat( $('#page').css('left') );
    var menuLeft = parseFloat( $('#menu').css('left') );
    var LorR = null;
    var tmp = -1;
    var menuDisplay = null;
    //menu 收起
    function hiddenMenu(){
         $('#page,#mask').animate({
            left:0
        },100,function(){
            $(this).css({left:0})
        });
        $('#mask').animate({opacity:0},100).css({display:'none'});
    }
    //menu 展开
    function showMenu(){
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
            if(event.type == 'touchend' ){
                if(LorR == 'left'){
                    showMenu();
                    menuDisplay = '已经展开';
                }else if(LorR == 'right'){
                   hiddenMenu();
                   menuDisplay = null;
                }
                pageLeft = parseFloat( $('#page').css('left') );
                menuLeft = parseFloat( $('#menu').css('left') );
                console.log(pageLeft);
            }
        }
    });
     $('#mask').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
            // console.log(event.type);
        if( event.type == 'touchend'  ){
                hiddenMenu()
        }
    }});


});