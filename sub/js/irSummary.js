/*요약재무정보*/

$(function () {
	$('.ir-section').first().addClass('on').children('table').slideDown();
    
    $('.ir-section').click(function (e) {
        
		e.preventDefault();
		$(this).toggleClass('on');
		$(this).find('table').slideToggle(800);
	}); //click
}); //jQ
