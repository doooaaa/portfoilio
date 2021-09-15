/*상영예정작*/
//영화제목변수
var title = ['비상선언', '야차', '이상한 나라의 수학자'];
var des = ['칸영화제를 뚫었다!<br>사상 초유의 재난상황에 직면해 무조건적인 착륙을 선포한 비행기를 두고 벌어지는 리얼리티 항공 재난 영화', '해외로케로 화제를 모은 올해 관심작!<br>스파이들의 최대 접전지 중국 선양에서 야차로 불리는 인물과 그곳으로 특별 감찰을 나선 검사가 만나며 벌어지는 첩보액션<br>', '신분을 숨긴 채 자사고 경비원으로 살아가는 탈북한 천재 수학자 학성과 수포자 고등학생 지우가 만나 벌어지는 이야기'];
var keyword = ['#감독: 한재림&nbsp;#송강호&nbsp;#전도연&nbsp;#이병헌&nbsp;#김남길&nbsp;#임시완&nbsp;#김소진', '#감독: 나현&nbsp;#설경구&nbsp;#박해수&nbsp;#이엘&nbsp;#양동근&nbsp;#송재림', '#감독: 박동훈&nbsp;#최민식&nbsp;#김동휘&nbsp;박해준&nbsp;#박병은&nbsp;#조윤서'];



$(function () {
    //모달 초기설정
    $('body').append('<div id = "black"></div><div id="main"></div>');


    $('.con a').click(function (e) {
        e.preventDefault();
        var imgsrc = $(this).attr('href');
        var idx = $(this).parent().index();
        $('#black').show();
        $('#main').show().html('<div class="modal-img"><img src="' + imgsrc + '"></div><div class="modal-txt"><h4>'+title[idx]+'</h4><p>' + des[idx] + '</p><p>'+keyword[idx]+'</p></div>');
        console.log(idx);
    });

    
    $('#black').click(function () {
        $(this).hide();
        $('#main').hide();
    });

});
