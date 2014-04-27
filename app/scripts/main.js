'use strict';

require.config({
	deps: [
        '../bower_components/mediator-js/lib/mediator',
        'application'
    ],
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/lodash/dist/lodash',
        backbone: '../bower_components/backbone/backbone'
    },
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});