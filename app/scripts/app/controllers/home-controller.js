/* global define */
define(function () {
    'use strict';

    var HomeController = function (sandbox) {

        return {

            init: function () {
                sandbox.subscribe('homeController', 'homeController#index', this.index.bind(this));
            },

            destroy: function () {

            },

            index: function () {
                console.log('homeController#index');
            }
            
        };
    };
    
    return HomeController;
});