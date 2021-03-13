$(window).on('load', function() {
	$("#section--page--header--nav .nav a").click(function(e) {
		e.preventDefault();
		var aid = $(this).attr("href");
		$('html,body').animate({scrollTop: $(aid).offset().top}, 'slow');
	});
	
	$("#section--page--header--main .nav a").click(function(e) {
		e.preventDefault();
		var aid = $(this).attr("href");
		$('html,body').animate({scrollTop: $(aid).offset().top}, 'slow');
	});

	$("#section--page--header--banner a").click(function(e) {
		e.preventDefault();
		var aid = $(this).attr("href");
		$('html,body').animate({scrollTop: $(aid).offset().top}, 'slow');
	});
	
	$("#section--page--footer ul li a").click(function(e) {
		e.preventDefault();
		var aid = $(this).attr("href");
		$('html,body').animate({scrollTop: $(aid).offset().top}, 'slow');
	});

	$.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();
		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();
		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	function runCounter() {
		$('.counter').each(function(e) {
			var value = $(this).attr('data-value');
			$(this).numScroll({
				number: value,
				'time': 5000,
				'delay': 0
			});
		});
	}

	oldVisibility = '';
	newVisibility = '';

	if ($('#section--page--main--stats').isInViewport()) {
		oldVisibility = 'visible';
		newVisibility = oldVisibility;
		runCounter();
	} else {
		oldVisibility = 'hidden';
		newVisibility = oldVisibility;
	}

	$(window).on('resize scroll', function() {
		if ($('#section--page--main--stats').isInViewport()) {
			newVisibility = 'visible';
		} else {
			newVisibility = 'hidden';
		}

		if (newVisibility != oldVisibility) {
			if (oldVisibility == 'hidden' && newVisibility == 'visible') {
				runCounter();
			}
			oldVisibility = newVisibility;
		}
	});
	
	function sameWorksHeight() {
		$('#section--page--main--works .content__col').removeAttr('style');
		
		var wcOldHeight = 0;
		var wcNewHeight = 0;
		$('#section--page--main--works .content__col').each(function() {
			wcNewHeight = $(this).outerHeight();
			if (wcNewHeight > wcOldHeight) {
				wcOldHeight = wcNewHeight;
			}
			
			if (wcOldHeight > 1) {
				$('#section--page--main--works .content__col').css('height', wcOldHeight + 'px');
			}
		});
	}
	
	sameWorksHeight();
	$(window).resize(function() {
		sameWorksHeight();
	});
	
	function showNav() {
		var bannerOffsetTop = $('#section--page--header--banner').offset().top;
		var pageOffsetTop = $(window).scrollTop();
		if (pageOffsetTop > bannerOffsetTop) {
			$('#section--page--header--nav').removeClass('d-none');
		} else {
			$('#section--page--header--nav').addClass('d-none');
		}
	}
	
	showNav();
	
	$(window).scroll(function() {
		showNav();
	});
});