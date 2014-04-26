'use strict';

require.config({
	deps: ['application'],
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: '../bower_components/lodash/dist/lodash',
        mediator: '../bower_components/mediator-js/lib/mediator',
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