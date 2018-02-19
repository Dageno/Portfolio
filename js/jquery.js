$(document).ready(function () {

    firstScroll = false;

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).on('scroll', function() {
        if (isScrolledIntoView('.skillbars') && !firstScroll) {
            $('.barra').each(function () {
                $(this).find('.barra-progress').animate({
                    width: $(this).attr('data-percent')
                }, 5000);
            });
            
        }else if (isScrolledIntoView('.about') && !firstScroll) {
            $('.foto').delay(1000).show("medium");
            $('.textabout').delay(2000).fadeIn("slow");
            $('.iconos').each(function () {
                $(this).delay(3000).fadeIn("slow");
            });
            
        }
      });
   
});