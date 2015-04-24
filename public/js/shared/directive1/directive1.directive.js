'use strict';

define(function(require) {
	var angular = require('bower_components/angular/angular');
	var template = require('text!./directive1.template.html');

	angular
		.module('shared.directive1', [])
		.directive('directive1', Directive1);

	function Directive1() {
		return {
			restrict: 'E',
			template: template,
			replace: true
		}
	}
});