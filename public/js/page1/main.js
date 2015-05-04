'use strict';

define(function(require) {
	var angular = require('angular');
	require('shared/directive1/directive1.directive');

	angular
		.module('Page1App', [
			'shared.directive1',
		])
		.controller('Page1Ctrl', Page1Ctrl);

	angular
		.element(document)
		.ready(function() {
			angular.bootstrap(document, ['Page1App'])
		});

	function Page1Ctrl() {
		var vm = this;

		vm.testVar = 'foo';
	}
});