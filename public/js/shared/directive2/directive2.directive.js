'use strict';

define(function(require) {
	var angular = require('angular');
	var template = require('text!./directive2.template.html');

	angular
		.module('shared.directive2', [])
		.directive('directive2', Directive2);

	function Directive2() {
		return {
			restrict: 'E',
			template: template,
			replace: true
		}
	}
});