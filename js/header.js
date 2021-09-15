/*header.js*/
$(document).ready(function () {

    //메뉴 호버
    $('.gnb, .sub-wrap').hover(function () {
        $('header').css({
            'background-color': '#fff'
        });
        $('.sub-menu').stop().slideDown(300);
    }, function () {
        $('.sub-menu').stop().slideUp(300);
        $('header').css({
            'background-color': 'rgba(255, 255, 255, 0.7)'
        });
    });

    //메뉴-검색 준비중알럿
	$('.eng-site, .search-menu').click(function(){
		alert('준비중입니다.');
	});

});
