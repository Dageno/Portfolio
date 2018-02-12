$('.barra').each(function(){
            $(this).find('.barra-progress').animate({
                width:$(this).attr('data-percent')
            },6000);
});