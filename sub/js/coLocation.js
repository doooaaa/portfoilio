/*회사위치*/

$(function () {
	$('.location-icon').click(function (e) {
		e.preventDefault();
		$(this).stop().animate({
			'margin-left': '-400px'
		}, 800, function () {
			$(this).parent().siblings().delay(400).show();
		});
		$(this).closest('div').delay(1600).animate({
			backgroundColor: 'rgba(255,153,0)'
		}, 900);
	});
});
