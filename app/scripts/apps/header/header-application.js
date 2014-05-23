/*global define*/
define([
    'application',
    'apps/header/list/list-controller'
], function (App) {
    'use strict';

    var HeaderApp;

    HeaderApp = App.module('HeaderApp');
    HeaderApp.startWithParent = false;
    HeaderApp.on('start', function () {
        HeaderApp.List.Controller.listHeader();
    });

    return HeaderApp;

});