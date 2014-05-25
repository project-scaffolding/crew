/*global define*/
define([
    'application',
    'apps/header/list/list-controller'
], function (App, ListController) {
    'use strict';

    var HeaderApp;

    HeaderApp = App.module('HeaderApp');
    HeaderApp.startWithParent = false;
    HeaderApp.on('start', function () {
        ListController.listHeader();
    });

    return HeaderApp;

});