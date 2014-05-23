/*global define*/
define([
    'application',
    'apps/footer/show/show-controller'
], function (App) {
    'use strict';

    var FooterApp;

    FooterApp = App.module('FooterApp');
    FooterApp.startWithParent = false;
    FooterApp.on('start', function () {
        FooterApp.Show.Controller.showFooter();
    });

    return FooterApp;

});