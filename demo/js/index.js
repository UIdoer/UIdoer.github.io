$(function(){
    var page = $('#page'),
        menu = $('#menu'),
        me   = $('#me');
    var winW = $(window).width();
    var asideWidth = winW * 0.7;
    $(window).resize(function(){
        winW = $(window).width();
        asideWidth = winW * 0.7;
    });
    // var swiptw = $(".page").width() - $(".borrowlistcon .block").eq(0).width();
    var pageLeft = parseFloat( $('#page').css('left') );
    var menuLeft = parseFloat( $('#menu').css('left') );
    var LorR = null;
    var num = 0 ;
    $('#page,#menu').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
                console.log(event.type);
            if( event.type == 'touchmove' &&  direction == 'left'&& distance < asideWidth ){
                LorR = 'left';
                num = 1;
                $('#page,#mask').css({
                    left:pageLeft - distance
                });
                $('#menu').css({
                    left:menuLeft - distance * ( 2 - distance / asideWidth )
                });
                $('#mask').css({display:'block',background:'rgba(0,0,0,'+0.8 * distance / asideWidth+')'});
            }else if( event.type == 'touchmove' &&  direction == 'right'&& distance < asideWidth ){LorR = 'right';}

            if(event.type == 'touchend' ){

                console.log(num);
                if(LorR == 'left'){
                    $('#page,#mask').animate({
                        left:'-70vw'
                    },100);
                    $('#menu').animate({
                        left:'30vw'
                    },100);
                }else if(LorR == 'right'){
                    $('#page,#mask').animate({
                        left:'0'
                    },100);
                    $('#mask').animate({background:'rgba(0,0,0,0)'},100).css({display:'none'});
                }

            }



        }
    });
    $('#mask').click(function(){
        $('#page,#mask').animate({
            left:'0'
        },100);
        $('#mask').animate({background:'rgba(0,0,0,0)'},100).css({display:'none'});
   });

});