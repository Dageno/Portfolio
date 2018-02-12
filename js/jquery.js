jQuery(document).ready(function(){
    jQuery('.barra').each(function(){
        jQuery(this).find('.barra-progress').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });
});
