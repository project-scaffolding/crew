'use strict';
require.config({
	deps: [
        'boot'
    ],
    paths: {
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/lodash/dist/lodash',
        'backbone': '../bower_components/backbone/backbone',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'marionette': '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette'
    },
    shim: {
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        },
        'marionette': {
            'deps': ['backbone'],
            'exports': 'Marionette'
        }
    }
});