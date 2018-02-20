$(document).ready(function () {

    let firstScroll = false;
    let barScroll = false;

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
    
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
    
        return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    $(window).on('scroll', function() {
        if (isScrolledIntoView('.skillbars') && !barScroll) {
            $('.barra').each(function () {
                $(this).find('.barra-progress').animate({
                    width: $(this).attr('data-percent')
                }, 5000);
            });
            barScroll = true;
            
        }else if (isScrolledIntoView('.about') && !firstScroll) {
            $('.foto').delay(1000).show("medium");
            $('.textabout').delay(2000).fadeIn("slow");
            $('.iconos').each(function () {
                $(this).delay(3000).fadeIn("slow");
            });
            firstScroll = true;
        }
        
      });
   
});