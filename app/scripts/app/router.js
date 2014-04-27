/* global define */
define(function (require) {
    'use strict';

    var Backbone, Router, Core, Facade;

    Core = require('core/app');
    Facade = require('core/facade');
    Backbone = require('backbone');

    Core.register('home-controller', require('app/controllers/home-controller'));
    Core.register('about-controller', require('app/controllers/about-controller'));

    Router = Backbone.Router.extend({

        initialize: function () {
            this.facade = new Facade();
            Core.start('home-controller');
            Core.start('about-controller');
        },

        destroy: function () {
            Core.stop('home-controller');
            Core.stop('about-controller');
        },

        routes: {
            '': 'home',
            'home': 'home',
            'about': 'about',
            '*action': 'home'
        },

        home: function () {
            this.facade.publish('homeController#index');
        },

        about: function () {
            this.facade.publish('aboutController#index');
        }
    });
    
    return Router;
});