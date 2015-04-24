'use strict';

define(function(require) {
	var angular = require('bower_components/angular/angular');
	require('shared/directive1/directive1.directive');
	require('shared/directive2/directive2.directive');

	angular
		.module('Page2App', [
			'shared.directive1',
			'shared.directive2'
		])
		.controller('Page2Ctrl', Page2Ctrl);

	angular
		.element(document)
		.ready(function() {
			angular.bootstrap(document, ['Page2App'])
		});

	function Page2Ctrl() {
		var vm = this;
	}
});