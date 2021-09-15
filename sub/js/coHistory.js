/*회사연혁*/

$(window).scroll(function(){
  var curTop=  $(this).scrollTop();  
    if(curTop>300){
        $('.h2000').children('.his-des').slideDown();
    }
    if(curTop>600){
           $('.h1990').children('.his-des').slideDown();
    }
    console.log(curTop);
});

