/*index.js*/


//스크롤 
$(window).scroll(function () {


    //변수
    const gap = 800;
    var lankUpP = $('.lank').offset().top - gap;
    var curP = $(this).scrollTop();
    var lankC = 0;
    //쇼박스랭킹 - .lank 포스터 박스 슬라이드
    if (curP > lankUpP) {
        if (lankC === 1) return false;
        lankC = 1;
        $('.lank-box1').animate({
            top: 0
        }, 200);
        $('.lank-box2').delay(200).animate({
            top: 0
        }, 200);

        $('.lank-box3').delay(400).animate({
            top: 0
        }, 200);
    } //if


    //변수
    var spC = 0;
    var spUpP = $('.special').offset().top;
    //쇼박스 특집 - 주황박스 슬라이드
    if (curP > (spUpP - 500)) {
        if (spC === 1) return false;
        spC = 1;
        $('.spc-inner-txt').animate({
            left: 0
        }, 500);
    } //if

}); //scroll



$(document).ready(function () {
    //새로고침시 top:0
    $('html, body').animate({
        scrollTop: 0
    }, 1000);


    //메인 - 슬라이드 초기설정
    $('.img-line').css({
        left: '-100%'
    }).prepend($('.slider-box').last());

    //메인 - 슬라이드 자동실행 함수
    var autoSd = setInterval(function () {
        slide();
    }, 3000);


    //메인 호버시 슬라이드 멈춤 
    $('#main-slider').stop().hover(function () {
        clearInterval(autoSd);
    }, function () {
        autoSd = setInterval(function () {
            slide();
        }, 2000)
    });



    //메인 - 슬라이드 좌우 화살표로 페이지 넘기기
    var btnC = 0;
    $('.main-btn').stop().click(function (e) {
        e.preventDefault();
        if (btnC === 1) return false;

        clearInterval(autoSd);
        btnC = 1;
        var btnidx = $(this).index();

        if (btnidx === 2) { //오른쪽 페이지 넘기기
            slide();
            btnC = 0;
        } else { //왼쪽 페이지 넘기기
            $('.img-line').stop().animate({
                left: 0
            }, 1500, function () {
                $(this).prepend($('.slider-box').last()).css({
                    left: '-100%'
                });
                btnC = 0;
            }); //애니메이트
        } //else문
        autoSd; //자동슬라이드 재실행
    }); //click;


    //메인 슬라이드 - 버튼 호버시 .box-txt 유지 
    $('.main-btn, .slider-box').mouseenter(function () {
        $('.box-txt').css({
            width: '100%'
        });
        clearInterval(autoSd);
    }).mouseout(function () {
        $('.box-txt').css({
            width: '60%'
        });
        autoSd;
    });




    //기사속 쇼박스 - .tag누르면좌우 이동 애니메이션
    $('.tag a').click(function (e) {
        e.preventDefault();
        var tagIdx = $(this).parent().index();
        $(this).parent().addClass('on').siblings().removeClass('on');
        $(this).parent().animate({
            left: '-50px'
        }, 300, 'easeOutElastic').siblings().animate({
            left: 0
        }, 300);
    }); //click



    //기사속 쇼박스 - .tage누르면 view(옆)에 해당이미지 나오기
    $('.tag').click(function () {
        var atcC = $(this).index();
        $('.atc-view li').eq(atcC).addClass('on').siblings().removeClass('on');
    });



    //쇼박스영상 - 슬라이드  초기설정
    $('.ytb-wrap').css('left', '-100%');
    $('.ytb-box').eq(1).css({
        opacity: 1
    });

    //쇼박스영상 - 블릿변경함수
    $('.pager li a').click(function (e) {
        e.preventDefault();

        $(this).parent().addClass('on').siblings().removeClass('on');

        var ytbix = $(this).parent().index();
        if (ytbix === 0) {
            $('.ytb-wrap').stop().animate({
                left: 0
            }, 800);
            $('.ytb-box').eq(ytbix).stop().animate({
                opacity: 1
            }).siblings().stop().animate({
                opacity: '0.6'
            });
        } else if (ytbix === 1) {
            $('.ytb-wrap').stop().animate({
                left: '-100%'
            }, 800);
            $('.ytb-box').eq(ytbix).stop().animate({
                opacity: 1
            }).siblings().stop().animate({
                opacity: '0.6'
            });
        } else if (ytbix === 2) {
            $('.ytb-wrap').stop().animate({
                left: '-200%'
            }, 800);
            $('.ytb-box').eq(ytbix).stop().animate({
                opacity: 1
            }).siblings().stop().animate({
                opacity: '0.6'
            });
        }

    });



    //쇼박스특집 - 설경구이미지를 호버시 색 입히기
    $('.spc-people').on('mouseenter mouseleave', function () {
        $('.spc-people img').toggleClass('on');
    });


    //쇼박스특집 -  바로가기 버튼 좌우이동
    $('.spc-con-txt a').mousemove(function () {
        $('.spc-inner-txt a').stop().animate({
            left: '50px'
        }, 300, function () {
            $(this).animate({
                left: 0
            }, 300);
        });
    });


}); //jQ






//메인 - 슬라이드 함수
function slide() {
    $('.img-line').animate({
        left: '-200%'
    }, 2000, function () {
        $(this).append($('.slider-box').first()).css({
            left: '-100%'
        });
    });
}
