//미성년

$(function(){
    createLi;

        var imgnext = 
      /*  var imgnextsrc=imgnext.replace('thumb_','');*/
        var imgprev = $(this).prev().find('img').attr('src');
     /*   var imgprevsrc=imgprev.replace('thumb_','');*/
//        console.log(imgprev);
    
    
    
    
        //모달 좌우 이동
/*
        $('#white a').click(function (e) {
            e.preventDefault();

            var btnD = $(this).index();
            if (btnD === 1) {
                console.log(imgnextsrc);
                if (imgnextsrc) {
                     $('#main').show().html('<img src="' + imgnextsrc + '">');
                } else return false;

            } else {
                if (imgprevsrc) {
                       $('#main').show().html('<img src="' + imgprevsrc + '">');
                    console.log(imgprevsrc);
                } else return false;
            }
        });
*/


 
    
    
    
});//jQ

//스틸컷 자동 생성 함수
function createLi() {
    var li;
    for (var i = 1; i < 22; i++) {
        li = '<li class="stillImg"><a href="#"><img src="imges/anotherChild/msn_still_thumb_' + i + '.jpg" alt="미성년 스틸"></a></li>';
        if (i % 3 === 1) {
            $('.stillLine1').append(li);
        } else if (i % 3 === 2) {
            $('.stillLine2').append(li);
        } else {
            $('.stillLine3').append(li);
        }
    }

} //f.createLi
