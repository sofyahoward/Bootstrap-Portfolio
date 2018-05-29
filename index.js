function checkWidth(init)
{
    /*If browser resized, check width again */
    if ($(window).width() < 639) {
        $('#navigation').addClass('mx-auto');
        $("#desktopWrappedCard").hide();
        $('#cardAboutMe').show();
    }
    else {
        if (!init) {
            $('#navigation').removeClass('mx-auto');
            $("#desktopWrappedCard").show();
            $('#cardAboutMe').hide();
        }
    }
}

$(document).ready(function() {
    checkWidth(true);

    $(window).resize(function() {
        checkWidth(false);
    });
});


