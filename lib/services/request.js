var snooze = require('snooze');
var request = require('request');

snooze.module('snooze-request').service('$request', function() {
	return {
		$get: function() {
			return request;
		}
	};
});
