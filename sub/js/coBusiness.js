/*사업소개*/

$(function () {
    $('.bsn-tag>div').click(function () {
        $(this).siblings('.des').slideDown(500);
        $(this).parent().siblings().find('.des').slideUp(500);
        var idx = $(this).parent().index() + 1;
        $(this).siblings('.des').css({
            background: 'url(imges/coBusiness/business' + idx + '.jpg) no-repeat center/cover'
        });
        console.log(idx);
    }); //click

}); //jq
