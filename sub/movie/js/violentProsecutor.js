//검사외전

$(function () {
    createLi();
});

function createLi() {
    var li;
    for (var i = 1; i < 22; i++) {
        li = '<li class="stillImg"><a href="#"><img src="imges/violentProsecutor/gswj_still_thumb_' + i + '.jpg" alt="검사외전 스틸"></a></li>';
        if (i % 3 === 1) {
            $('.stillLine1').append(li);
        } else if (i % 3 === 2) {
            $('.stillLine2').append(li);
        } else {
            $('.stillLine3').append(li);
        }
    }

} //f.createLi
