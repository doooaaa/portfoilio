//태극기 휘날리며
$(function () {
    createLi();
});

//스틸컷 자동 생성 함수
function createLi() {
    var li;
    for (var i = 1; i < 19; i++) {
        li = '<li class="stillImg"><a href="#"><img src="imges/taegukgi/tkk_still_thumb_' + i + '.jpg" alt="택시운전사 스틸"></a></li>';
        if (i % 3 === 1) {
            $('.stillLine1').append(li);
        } else if (i % 3 === 2) {
            $('.stillLine2').append(li);
        } else {
            $('.stillLine3').append(li);
        }
    }

} //f.createLi
