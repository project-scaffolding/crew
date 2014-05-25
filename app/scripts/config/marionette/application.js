/*global define*/
define([
    'marionette',
    'backbone',
    'underscore'
], function (Marionette, Backbone, _) {
    'use strict';

    _.extend(Marionette.Application.prototype, {

        navigate: function (route, options) {
            options = options || {};
            if (route.charAt(0) === '/') {
                route = '#' + route;
            }
            Backbone.history.navigate(route, options);
        },

        getCurrentRoute: function () {
            return Backbone.history.fragment;
        }

    });
    
});