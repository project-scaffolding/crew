/* global define */
define(function () {
    'use strict';

    var AboutController = function (sandbox) {

        return {

            init: function () {
                sandbox.subscribe('aboutController', 'aboutController#index', this.index.bind(this));
            },

            destroy: function () {

            },

            index: function () {
                console.log('aboutController#index');
            }
            
        };
    };
    
    return AboutController;
});