/*현재상영작*/
//변수
var pno = 0; //페이지 변수
const totcnt = 3; //총 페이지
var prot = 0; //광스크롤막기(0허용 1막기)
$(function () {

    $('html, body').animate({
        scrollTop: '0'
    }, 100);

    $(document).on('mousewheel DOMMouseScroll', function (e) {
        e.preventDefault();

        if (prot === 1) return false;
        prot = 1;

        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;

        if (delta < 0) {
            pno++;
            if (pno === totcnt) pno = totcnt - 1;
        } else {
            pno--;
            if (pno === -1) pno = 0;
        }
        var pagepos = $('.page').eq(pno).offset().top;

        $('html, body').stop().animate({
            scrollTop: pagepos + 'px'
        }, 800, 'easeInOutQuint');

        $('.b-menu li').eq(pno).addClass('on').siblings().removeClass('on');
        prot = 0;

        $('.b-menu li').click(function (e) {
            e.preventDefault();
            pno = $(this).index();
            var pagepos = $('.page').eq(pno).offset().top;
            $('html, body').stop().animate({
                scrollTop: pagepos + 'px'
            }, 800, 'easeInOutQuint');
            $(this).addClass('on').siblings().removeClass('on');
        });
    });


    //블릿 클릭시
    $('.b-menu li').click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });



    //포스터 활성화시 동영상 연하게
    $('.box-txt').hover(function () {
        $('.page-wrap iframe').animate({
            opacity: '0.4'
        }, 700);
    }, function () {
        $('.page-wrap iframe').animate({
            opacity: 1
        }, 700);
    }); //hover



});
