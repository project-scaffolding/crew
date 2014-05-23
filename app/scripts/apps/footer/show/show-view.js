/*global define*/
define([
    'marionette',
    'application'
], function (Marionette, App) {
    'use strict';

    var Show = App.module('FooterApp.Show');

    Show.View = Marionette.ItemView.extend({
        template: 'footer/show/templates/show-template.ejs'
    });

    return Show;
});