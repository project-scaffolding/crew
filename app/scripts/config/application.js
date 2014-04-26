/*global define*/
define([
    'config/environments/development',
    'config/environments/test',
    'config/environments/production',
], function (development, test, production) {
    'use strict';

    // Application Config

    var config = {

        version: '0.0.1',

        debug: false,

        locale: 'en',

        environment: 'development' // development, test, production

    };

    var environment;

    if (config.environment === 'development') {
        environment = development;
    }

    if (config.environment === 'test') {
        environment = test;
    }

    if (config.environment === 'production') {
        environment = production;
    }

    for (var property in environment) {
        config[property] = environment[property];
    }

    return config;

});