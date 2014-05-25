/*global define*/
define([
    'application',
    'marionette'
], function (App, Marionette) {
    'use strict';

    var Views;

    Views = App.module('Views');
    
    Views.Layout = Marionette.Layout;

    return Views;

});