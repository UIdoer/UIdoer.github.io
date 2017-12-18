$(function(){
    var page = $('#page'),
        menu = $('#menu'),
        me   = $('#me');
    // $(window).click(function(){
    //     console.log(page);
    //     $('#page').animate({
    //         left:'70vw'
    //     },500);
    //     $('#me').animate({
    //         left:'0'
    //     },500);
    // });
    var winW = $(window).width();
    var asideWidth = winW * 0.7;
    $(window).resize(function(){
        winW = $(window).width();
        asideWidth = winW * 0.7;
    });
    // $(window).dblclick(function(){
    //     console.log(page);
    //     $('#page').animate({
    //         left:'-70vw'
    //     },500);
    //     $('#menu').animate({
    //         left:'30vw'
    //     },500);
    // });


    // var swiptw = $(".page").width() - $(".borrowlistcon .block").eq(0).width();
    var pageLeft = parseFloat( $('#page').css('left') );
    var menuLeft = parseFloat( $('#menu').css('left') );
    var meLeft   = parseFloat( $('#me').css('left') );
    var LorR = null;
    var num = 0 ;
    $('#page,#menu,#me').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
                console.log(event.type);
            if(phase == 'move' &&  direction == 'left'&& distance < asideWidth ){
                LorR = 'left';
                num = 1;
                $('#page,#mask').css({
                    left:pageLeft - distance
                });
                $('#menu').css({
                    left:menuLeft - distance * ( 2 - distance / asideWidth )
                });
                $('#me').css({
                    left:meLeft - distance
                });
                $('#mask').css({display:'block',background:'rgba(0,0,0,'+0.8 * distance / asideWidth+')'});
            }else if(phase == 'move' &&  direction == 'right'&& distance < asideWidth ){
                LorR = 'right';
                num = -1;
                $('#page,#mask').css({
                    left:pageLeft + distance
                });
                $('#menu').css({
                    left:menuLeft + distance
                });
                $('#me').css({
                    left:meLeft + distance *  ( 2 - distance / asideWidth )
                });
                $('#mask').css({display:'block',background:'rgba(0,0,0,'+0.8 * distance / asideWidth+')'});
            }
            if(event.type == 'touchend' ){
                if(LorR == 'left'){
                    if(num<=0){num+=1}
                }else if(LorR == 'right'){
                    if(num>=0){num-=1}
                }
                console.log(num);
                if(LorR == 'left' && num == 1){
                    $('#page,#mask').animate({
                        left:'-70vw'
                    },100);
                    $('#menu').animate({
                        left:'30vw'
                    },100);
                }else if(LorR == 'right' && num == -1){
                    $('#page,#mask').animate({
                        left:'70vw'
                    },100);
                    $('#me').animate({
                        left:'0'
                    },100);
                }else if(LorR == 'right' && num == 0){
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