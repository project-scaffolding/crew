/* global define */
define(function (require) {
    'use strict';

    var _, Backbone, Router, App, Facade, routes;

    _ = require('underscore');
    App = require('core/app');
    Facade = require('core/facade');
    Backbone = require('backbone');
    routes = require('config/routes');

    App.register('home-controller', require('app/controllers/home-controller'));
    App.register('about-controller', require('app/controllers/about-controller'));

    return function (sandbox) {

        var _routes = {};
        _.each(routes, function (action, route) {
            _routes[route] = function () {
                var args = Array.prototype.slice.call(arguments, 1);
                args.unshift(action);

                if (router.currentController) {
                    sandbox.publish.apply(router, [router.currentController.replace(/\#\w*/, '') + '#remove']);
                }
                router.currentController = action;
                sandbox.publish.apply(router, args);
            };
        });

        Router = Backbone.Router.extend({

            currentController: null,

            routes: _routes,

            init: function () {
                this.currentPage = null;

                App.start('home-controller');
                App.start('about-controller');
            },

            destroy: function () {
                App.stop('home-controller');
                App.stop('about-controller');
            }

        });
        
        var router = new Router();

        return router;

    };

});