/*global define*/
define([
    'application',
    'marionette',
    'apps/users/list/list-controller'
], function (App, Marionette, ListController) {
    'use strict';

    var UsersApp, API;

    UsersApp = App.module('UsersApp');
    
    UsersApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'users': 'listUsers'
        }
    });

    API = {
        listUsers: function () {
            ListController.listUsers();
        }
    };

    App.addInitializer(function () {
        var router;
        router = new UsersApp.Router({
            controller: API
        });
        return router;
    });


    return UsersApp;

});