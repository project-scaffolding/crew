/*global define*/
define([
    'marionette',
    'templates'
], function (Marionette, JST) {
    'use strict';

    Marionette.Renderer.render = function (template, data) {
        var path = JST['app/scripts/apps/' + template];
        if (path) {
            return path(data);
        } else {
            throw 'Template #{template} not found!';
        }

    };
});