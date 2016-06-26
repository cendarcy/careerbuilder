<<<<<<< HEAD
=======


>>>>>>> 632e5a976e6b638fc368eb4fb680bb77f8d35938
$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();

var pictureSlide = function() {
	$('.asianW').animate({
		opacity: 1,
		left: 12}, 
		'slow');
	
	$('.asianwoman').animate({
		opacity: 1,
		right: 20},
		'slow');

	$('.latinaW').delay(2000).animate({
	opacity: 1,
	right: 12}, 
	'slow');
	
	$('.latinawoman').delay(2000).animate({
		opacity: 1,
		left: 20},
		'slow');
};

if(windowScrollTop >= 200) {
	$('.asianW', '.asianwoman');
};
if(windowScrollTop >= 900) {
	$('.latinaW', '.latinawoman');
	pictureSlide();
	};
});








