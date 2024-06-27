
$(document).ready(function() {
    $(".menu-items .item a").click(function (e) { 
        e.preventDefault();
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
        var itemId = $(this).parent().attr('id');
    
        var target = $('.container > .row #' + itemId);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - $('.container > .row').offset().top + $('html, body').scrollTop()
            }, 100); 
        }
    });
    
    $("#back-top").click(function (e) {
        e.preventDefault();

        var top = $('html, body').offset().top;

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        console.log(top)
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('#back-top').removeClass('disabled');
        } else {
            $('#back-top').addClass('disabled');
        }
    });
});