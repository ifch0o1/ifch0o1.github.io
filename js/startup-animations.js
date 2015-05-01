// 'use strict';

$(document).ready(function() {
	var icons = {
		portfolio: 'images/icons/port.png',
		knowledge: 'images/icons/know.png',
		doc: 'images/icons/doc.png',
		project: 'images/icons/proj.png',
		idea: 'images/icons/idea.png'
	};
	
	var w = $(this).width(),
	    h = $(this).height();

	function sideAnimation($img, $wrapper, orientation, offset, options) {
		if (orientation !== 'left' && orientation !== 'right') {
			throw new Error('Expect orientation argument as string \'left\' or \'right\'');
		}
		if (!($img instanceof $) || !($wrapper instanceof $)) {
			throw new TypeError('Expect $img and $wrapper arguments as jQuery objects');
		}
		$img.css({
			position: 'absolute',
			left: (orientation === 'left') ? -50 - $img.width() : 'auto',
			right: (orientation === 'right') ? -50 - $img.width() : 'auto'
		});
		$wrapper.css('position', 'relative').append($img);
		$img.animate({
			left: (orientation === 'left') ? offset : 'auto',
			right: (orientation === 'right') ? offset : 'auto'
		}, options);
	}

	// The below commented function will be used later.

	// function isScrolledIntoView(elem) {
	//     var $elem = $(elem);
	//     var $window = $(window);

	//     var docViewTop = $window.scrollTop();
	//     var docViewBottom = docViewTop + $window.height();

	//     var elemTop = $elem.offset().top;
	//     var elemBottom = elemTop + $elem.height();

	//     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	// }

	$('<img src="' + icons.portfolio + '">').load(function() {
		var $that = $(this);
		$that.css('top', '25%');

		setTimeout(function() {
			sideAnimation($that, $('#header'), 'right', '23%', {
				duration: 800,
				easing: 'easeOutCubic'
			});
		}, 1200);
	});
});