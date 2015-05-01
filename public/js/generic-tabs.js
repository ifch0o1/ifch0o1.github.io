'use strict';

var genTabs = (function() {
	var tabs = $('.generic-tab');
	var contentHolder = $('.tab-content');
	var templates = {
		knowledge: 'templates/tab-content/knowledge.html',
		work: 'templates/tab-content/work.html',
		motivation: 'templates/tab-content/motivation.html',
		contact: 'templates/tab-content/contact.html'
	};

	var content = (function() {
		function load(path) {
			// contentHolder.empty();
			contentHolder.load(path, function() {
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
		$('.tab-motiv').on('click', function() {
			content.load(templates.motivation);
			activeTab($(this));
		});
		$('.tab-contact').on('click', function() {
			content.load(templates.contact);
			activeTab($(this));
		});
	}());

	// Load default content
	$('.tab-knowledge').trigger('click');

	return {
		list: tabs
	}
}());