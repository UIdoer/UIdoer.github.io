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
    var pageLeft = parseFloat( $('#page').css('left') );
    var menuLeft = parseFloat( $('#menu').css('left') );
    var LorR = null;
    //menu 收起
    function hiddenMenu(){
         $('#page,#mask').animate({
            left:'0'
        },100);
        $('#mask').animate({background:'rgba(0,0,0,0)'},100).css({display:'none'});
    }
    //menu 展开
    function showMenu(){
        $('#page,#mask').animate({
            left:'-70vw'
        },100);
        $('#menu').animate({
            left:'30vw'
        },100);
    }
    $('#page,#menu').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
                console.log(event.type);
            if( event.type == 'touchmove' &&  direction == 'left'&& distance < asideWidth ){
                LorR = 'left';
                $('#page,#mask').css({
                    left:pageLeft - distance
                });
                $('#menu').css({
                    left:menuLeft - distance /2
                });
                $('#mask').css({display:'block',background:'rgba(0,0,0,'+0.8 * distance / asideWidth+')'});
            }else if( event.type == 'touchmove' &&  direction == 'right'&& distance < asideWidth ){LorR = 'right';}

            if(event.type == 'touchend' ){

                if(LorR == 'left'){
                    showMenu()
                }else if(LorR == 'right'){
                   hiddenMenu()
                }

            }



        }
    });
     $('#mask').swipe({
        swipeStatus:function(event, phase, direction, distance, duration, fingerCount){
            console.log(event.type);
        if( event.type == 'touchend'  ){
                hiddenMenu()
        }
    }});


});