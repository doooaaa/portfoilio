/*공시정보*/

$(function () {
    $('#ir-info-modal').css({
        marginLeft: '-100%'
    });
    $('.ir-info-btn').click(function (e) {
        e.preventDefault();
        $('.ir-info').css({
            overflow: 'visible'
        });
        $('.ir-info-wrap, .page-name, header, footer').animate({
            opacity: 0
        }, 800);
        $('#ir-info-modal').delay(500).animate({
            marginLeft: 0
        }, 500);
        $('.ir-info-modal-btn').show(800);
    }); //click



    $('.ir-info-modal-btn').click(function (e) {
        e.preventDefault();
        $('.ir-info').css({
            overflow: 'hidden'
        });
        $('#ir-info-modal').animate({
            marginLeft: '-100%'
        }, 500, function () {
            $('body, html').animate({
                scrollTop: 0
            }, 500);
        });
        $('.ir-info-modal-btn').hide(500);
        $('.ir-info-wrap, .page-name, header, footer').delay(500).animate({
            opacity: 1
        }, 500);
    }); //click

});
