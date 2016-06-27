
$(window).scroll(function(){
  var windowWidth = $(this).width();
  var windowHeight = $(this).height();
  var windowScrollTop = $(this).scrollTop();

var pictureSlide = function() {
	$('.asianW').delay(1000).animate({
		opacity: 1,
		left: 12}, 
		'slow');
	
	$('.asianwoman').delay(1000).animate({
		opacity: 1,
		right: 20},
		'slow');

	$('.latinaW').delay(2600).animate({
	opacity: 1,
	right: 12}, 
	'slow');
	
	$('.latinawoman').delay(2600).animate({
		opacity: 1,
		left: 20},
		'slow');

	$('.workshop').animate({
		opacity: 1,
		right: 12}, 
		'slow');

	$('.wwFG').animate({
		opacity: 1,
		left: 20}, 
		'slow');

	$('.laughing').delay(1600).animate({
		opacity: 1,
		right: 12}, 
		'slow');

	$('.lwFG').delay(1600).animate({
		opacity: 1,
		left: 20}, 
		'slow');

	$('.group').delay(2600).animate({
		opacity: 1,
		left: 12}, 
		'slow');

	$('.groupFG').delay(2600).animate({
		opacity: 1,
		right: 20}, 
		'slow');
};

if(windowScrollTop >= 300) {
	$('.asianW', '.asianwoman');
};

if(windowScrollTop >= 900) {
	$('.latinaW', '.latinawoman');
	pictureSlide();
	};
if(windowScrollTop >= 300) {
	$('.workshop', '.wwFG');
	pictureSlide();
	};
if(windowScrollTop >= 1000) {
	$('.laughing', '.lwFG');
	pictureSlide();
	};	
if(windowScrollTop >= 1200) {
	$('.group', '.lwFG');
	pictureSlide();
	};	

});








