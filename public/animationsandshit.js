// var $animations = $(".animation-element");
// var $window = $(window);

// function if_inView() {
// 	var window_height = $window.height();
// 	var window_top = $window.scrollTop();
// 	var window_bottom = (window_top + window_height);

// 	$.each($animations, function() {
// 		var $element = $(this);
// 		var element_height = $element.outerHeight();
// 		var element_top = $element.offset().top;
// 		var element_bottom = (element_top + element_height);

// 		if ((element_bottom >= window_top) && (element_top <= window_bottom)) {
// 			$element.addClass("in-view");
// 		} else {
// 			$element.removeClass("in-view");
// 		}
// 	});
// }

// // $window.on("scroll resize", if_inView);
// $window.trigger("scroll");

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