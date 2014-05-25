/*global define*/
define([
    'application',
    'marionette',
    'underscore'
], function (App, Marionette, _) {
    'use strict';

    var Views;

    Views = App.module('Views');
    
    _.extend(Marionette.View.prototype, {

        templateHelpers: function () {
            return {
                currentUser: App.request('get:current:user').attributes
            };
        }
        
    });

    return Views;

});