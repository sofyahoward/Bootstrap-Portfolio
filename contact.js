function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 639) {
        $('#navigation').addClass('mx-auto');
        $('#contactForm').addClass('mx-auto');
    }
    else {
        if (!init) {
            $('#navigation').removeClass('mx-auto');
            $('#contactForm').removeClass('mx-auto');
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});
