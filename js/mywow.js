$(function(){
    $('#page').scroll(function(event) {
        var pageScrollTop = $(this).scrollTop()
        $('.wow').addClass('fadeInDown').text(pageScrollTop);
        $('.wow').each(function(i,n){
            console.log(n);
        });
    });;
});