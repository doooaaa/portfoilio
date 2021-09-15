//웰컴 투 동막골
$(function () {
    createLi();
});

//스틸컷 자동 생성 함수
function createLi() {
    var li;
    for (var i = 1; i < 16; i++) {
        li = '<li class="stillImg"><a href="#"><img src="imges/welcomeToDongmakgol/wctdmg_still_thumb_' + i + '.jpg" alt="웰컴 투 동막골 스틸"></a></li>';
        if (i % 3 === 1) {
            $('.stillLine1').append(li);
        } else if (i % 3 === 2) {
            $('.stillLine2').append(li);
        } else {
            $('.stillLine3').append(li);
        }
    }

} //f.createLi
