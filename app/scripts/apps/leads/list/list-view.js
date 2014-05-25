/*global define*/
define([
    'application'
], function (App) {
    'use strict';

    var Leads;

    Leads = App.Views.ItemView.extend({
        template: 'leads/list/templates/leads.ejs'
    });

    return {
        Leads: Leads
    };
});