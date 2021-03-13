$(window).on('load', function() {
	$('#section--page--main--gallery').css('opacity', 1);
	
	$('.gallery__slider').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: false
	});
});