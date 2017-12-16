$(function(){
    // alert('引入成功！');

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

    //屏幕宽度非常小的时候，点击菜单按钮，让按钮来回切换。
    //同时切换菜单的显示与隐藏

    $('.menu-btn').click(function(){
        if(!$('.link').hasClass('show')){
            $(this).addClass('close').removeClass('open');
            var tmp_nav = $('<div>').addClass('tmp-nav').bind('click',function(event){
                event.stopPropagation();
                $('.menu-btn').before($('.link').removeClass('show'));
                $('.tmp-nav').remove();
                $('.close').removeClass('close').addClass('open')
            }).appendTo('body');
            $('.link').addClass('show').appendTo('body');
        }else{
                $(this).addClass('open').removeClass('close');
                $('.menu-btn').before($('.link').removeClass('show'));
                $('.tmp-nav').remove();
        }
    });

    //如果窗口大于或等于992，那么将菜单放至menu-btn之前
    //同时移除tmp-nav，也将menu-btn的close这个类移除
    $(window).resize(function(){
        if( $(this).width()>= 992 ){
            $('.menu-btn').before($('.link').removeClass('show'));
            $('.tmp-nav').remove();
            $('.close').removeClass('close')
        }
    });

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


});
