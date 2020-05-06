$(document).ready(function() {

    $('.link-icon > li > i').click(function(){
        // console.log('click');
        var menu_icona = $(this).next('.dropdown');
        console.log(menu_icona);

    if (menu_icona.is(':visible')) {
        menu_icona.hide();

    }else {
        $('.dropdown').hide();
        menu_icona.show();
    }

    });





})
