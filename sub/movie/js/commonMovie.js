$(function () {
    //기본세팅
    createLi();
    $('.stillLine1 li:hidden').slice(0, 1).show();
    $('.stillLine2 li:hidden').slice(0, 1).show();
    $('.stillLine3 li:hidden').slice(0, 1).show();
    $('body').append('<div id = "white"><a></div><div id="main"></div>');



    //버튼 클릭시 박스생성 / 다 펼쳐졌으면 버튼 사라지기
    $('.more').click(function (e) {
        e.preventDefault();
        $('.stillLine1 li:hidden').slice(0, 1).slideDown(600);
        $('.stillLine2 li:hidden').slice(0, 1).slideDown(600);
        $('.stillLine3 li:hidden').slice(0, 1).slideDown(600);
        var boxCount = $('.stillLine li:hidden').length
        if (boxCount == 0) {
            $('.more').fadeOut(500);
        }
    });


    //스틸컷 모달
    $('.stillImg').click(function (e) {
        e.preventDefault();
        var thumbsrc = $(this).find('img').attr('src');
        var imgsrc = thumbsrc.replace('thumb_', '');

        $('#white').show(100).html('<a href="#" class="modal-left"><img src="imges/arrwL.png" alt="왼쪽으로넘기기"></a><a href = "#" class="modal-right"><img src="imges/arrwR.png" alt="오른쪽으로넘기기"></a><a href="#" class="modal-close">닫기</a>');

        $('#main').show().html('<img src="' + imgsrc + '">');


        //모달 닫기
        $('#white .modal-close').click(function () {
            e.preventDefault();
            $('#white').fadeOut(500);
            $('#main').fadeOut(500);
        });//close
    });




});//jQ
