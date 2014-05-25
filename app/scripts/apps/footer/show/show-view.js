/*global define*/
define([
    'application'
], function (App) {
    'use strict';

    var FooterView;

    FooterView = App.Views.ItemView.extend({
        template: 'footer/show/templates/show-template.ejs',
        modelEvents: {
            'change': 'render'
        }
    });

    return {
        FooterView: FooterView
    };
});