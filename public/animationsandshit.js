

$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();

var pictureSlide = function() {
	$('.asianW').delay(2000).animate({
		opacity: 1,
		left: 0}, 
		'slow');
	
	$('#asianwoman').find('img').delay(2000).animate({
		opacity: 1,
		right: 0},
		'slow');
};

if(windowScrollTop > 200) {
	$('.asianW').css();
	pictureSlide();
}