/*global define*/
define([
    'application',
    'apps/leads/list/list-view'
], function (App, View) {
    'use strict';

    var Controller;

    Controller = {
        listLeads: function () {
            this.leadsView = this.getLeadsView();
            App.mainRegion.show(this.leadsView);
        },

        getLeadsView: function () {
            return new View.Leads();
        }
    };

    return Controller;
});