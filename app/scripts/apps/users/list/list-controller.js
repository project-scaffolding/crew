/*global define*/
define([
    'application',
    'apps/users/list/list-view'
], function (App, View) {
    'use strict';

    var Controller;

    Controller = {
        listUsers: function () {
            App.request('users:entities', function (users) {
                this.layout = this.getLayoutView(users);
                this.layout.on('show', function () {
                    this.showPanel(users);
                    this.showUsers(users);
                }, this);
                App.mainRegion.show(this.layout);
            }.bind(this));
        },

        showPanel: function (users) {
            var panelView;
            panelView = new this.getPanelView(users);
            this.layout.panelRegion.show(panelView);
        },

        showUsers: function (users) {
            var usersView;
            usersView = new this.getUsersView(users);
            this.layout.usersRegion.show(usersView);
        },

        getUsersView: function (users) {
            return new View.Users({
                collection: users
            });
        },

        getPanelView: function (users) {
            return new View.Panel({
                collection: users
            });
        },

        getLayoutView: function () {
            return new View.Layout();
        }
    };

    return Controller;
});