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
        $(this).toggleClass('close');
        if(!$('.link').hasClass('show')){
            var tmp_nav = $('<div>').addClass('tmp-nav').bind('click',function(event){
                event.stopPropagation();
                $('.menu-btn').before($('.link').removeClass('show'));
                $('.tmp-nav').remove();
            }).appendTo('body');
            $('.link').addClass('show').appendTo('body');
        }else{
                $('.menu-btn').before($('.link').removeClass('show'));
                $('.tmp-nav').remove();
        }
    });

});
