/*global define*/
define(function () {
    'use strict';

    // Application routes

    var routes = {
        '': 'home-controller#index',
        'home': 'home-controller#index',
        'about': 'about-controller#index',
        '*action': 'home-controller#index'
    };

    return routes;

});