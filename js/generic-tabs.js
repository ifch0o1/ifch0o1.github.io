'use strict';

var genTabs = (function() {
	var $tabs = $('.generic-tab');
	var $contentHolder = $('.tab-content');
	var templates = {
		knowledge: 'templates/tab-content/knowledge.html',
		work: 'templates/tab-content/work.html',
		contact: 'templates/tab-content/contact.html'
	};

	var content = (function() {
		function load(path) {
			var currentHeight = $contentHolder.height();
			$contentHolder.css({height: currentHeight, overflow: 'hidden'});
			$contentHolder.load(path, function() {
				$contentHolder.stop();
				
				function animateHeight() {
					var loadedContentHeight = $contentHolder.css('height', 'auto').height();
					$contentHolder.height(currentHeight);
					$contentHolder.stop();
					$contentHolder.animate({height: loadedContentHeight}, 500, 'easeOutQuint');
				}
				animateHeight();

				var $images = $('img', $contentHolder);
           		$images.bind('load', function(){ 
                	animateHeight();
            	});
				
				// Enable bootstrap tooltips for loaded content.
				_enableTooltips();
			});
		}

		return {
			load: load
		}
	}());

	var controller = (function() {
		function activeTab(tab) {
			var $tab = $(tab);
			$('.generic-tab').removeClass('active');
			$tab.addClass('active');
		}

		$('.tab-knowledge').on('click', function() {
			content.load(templates.knowledge);
			activeTab($(this));
		});
		$('.tab-work').on('click', function() {
			content.load(templates.work);
			activeTab($(this));
		});
		// Motivation tab disabled
		//
		// $('.tab-motiv').on('click', function() {
		// 	content.load(templates.motivation);
		// 	activeTab($(this));
		// });
		$('.tab-contact').on('click', function() {
			content.load(templates.contact);
			activeTab($(this));
		});
	}());

	// Load default content
	$('.tab-knowledge').trigger('click');

	return {
		list: $tabs
	}
}());