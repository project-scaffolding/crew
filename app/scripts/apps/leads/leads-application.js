/*global define*/
define([
    'application',
    'marionette',
    'apps/leads/list/list-controller'
], function (App, Marionette, ListController) {
    'use strict';

    var LeadsApp, API;

    LeadsApp = App.module('LeadsApp');
    
    LeadsApp.Router = Marionette.AppRouter.extend({
        appRoutes: {
            'leads': 'listLeads'
        }
    });

    API = {
        listLeads: function () {
            ListController.listLeads();
        }
    };

    App.addInitializer(function () {
        return new LeadsApp.Router({
            controller: API
        });
    });

    return LeadsApp;

});