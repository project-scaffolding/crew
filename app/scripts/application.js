/*global define*/
define([
    'backbone',
    'marionette',
    'config/marionette/renderer'
], function (Backbone, Marionette) {
    'use strict';

    var App = new Marionette.Application();

    App.addRegions({
        headerRegion: '#header-region',
        mainRegion: '#main-region',
        footerRegion: '#footer-region'
    });

    App.addInitializer(function () {
        App.module('HeaderApp').start();
        App.module('FooterApp').start();
    });
    
    App.on('initialize:after', function () {
        Backbone.history.start();
    });

    return App;
});