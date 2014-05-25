/*global define*/
define([
    'application',
    'apps/footer/show/show-controller'
], function (App, ShowController) {
    'use strict';

    var FooterApp;

    FooterApp = App.module('FooterApp');
    FooterApp.startWithParent = false;
    FooterApp.on('start', function () {
        ShowController.showFooter();
    });

    return FooterApp;

});