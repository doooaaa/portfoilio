/*영화 이벤트*/
//변수

var link = ['https://event.lottecinema.co.kr/NLCHS/Event/EventTemplateInfo?eventId=201010016921221', 'https://www.megabox.co.kr/event/detail?eventNo=10157', 'https://www.megabox.co.kr/event/detail?eventNo=10003', 'http://www.cgv.co.kr/culture-event/event/detailViewUnited.aspx?seq=32964&page=4', 'https://www.megabox.co.kr/event/detail?eventNo=10032', 'http://www.cgv.co.kr/culture-event/event/detailViewUnited.aspx?seq=32962&page=12', 'http://www.cgv.co.kr/culture-event/event/detailViewUnited.aspx?seq=32683&page=25', 'http://www.cgv.co.kr/culture-event/event/detailViewUnited.aspx?seq=32832&page=15', 'http://www.cgv.co.kr/culture-event/event/detailViewUnited.aspx?seq=32651&page=31'];
var title = ['롯데시네마) &lang;랑종&rang; 전국담력자랑 리뷰 콘테스트','메가박스) &lang;싱크홀&rang; 앵콜! 선착순 빵원티켓','cgv) &lang;랑종&rang;개봉기념 포스터 증정 이벤트','cgv) &lang;싱크홀&rang; 2차 선착순 무료 혜택 !','cgv) &lang;랑종&rang;앵콜! 선착순 빵원티켓', 'cgv) &lang;싱크홀&rang; 무대인사','cgv) &lang;랑종&rang; 리뷰 콘테스트','cgv) &lang;싱크홀&rang; 스피드 쿠폰 최대 1만원 할인!','cgv) &lang;랑종&rang; CGV필름마크'];



$(function () {
	for (i=0; i<title.length; i++) {
		$('.event-wrap').append('<div class = "con"><a href="' + link[i] + '" target="_blank"><img src="imges/event/event'+(i+1)+'.jpg"><span>' + title[i] + '</span></a></div>');
	   
	} //for문




});
