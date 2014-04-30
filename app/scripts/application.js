'use strict';
require([
	'backbone',
	'core/app',
	'app/router'
], function (Backbone, App, Router) {

    App.register('Router', Router);
    App.start('Router');
    Backbone.history.start();

});