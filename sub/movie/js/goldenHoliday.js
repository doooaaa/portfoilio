$(function(){
    createLi();
});

function createLi() {
	var li;
		for (var i = 1; i < 27; i++){
		li = '<li class="stillImg"><a href="#"><img src="imges/goldenHoliday/still_th_' + i + '.png" alt="국제수사 스틸"></a></li>';
		if(i%3===1){
			$('.stillLine1').append(li);
		} else if(i%3===2) {
			$('.stillLine2').append(li);
		} else {
			$('.stillLine3').append(li);
		}
	}
	
} //f.createLi
