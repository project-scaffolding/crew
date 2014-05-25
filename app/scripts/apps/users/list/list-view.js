/*global define*/
define([
    'application'
], function (App) {
    'use strict';

    var Layout, Panel, User, Empty, Users;

    Layout = App.Views.Layout.extend({
        template: 'users/list/templates/list-layout.ejs',

        regions: {
            panelRegion: '#panel-region',
            usersRegion: '#users-region'
        }
    });

    Panel = App.Views.ItemView.extend({
        template: 'users/list/templates/panel.ejs'
    });

    User = App.Views.ItemView.extend({
        template: 'users/list/templates/user.ejs',
        tagName: 'tr'
    });

    Empty = App.Views.ItemView.extend({
        template: 'users/list/templates/empty.ejs',
        tagName: 'tr'
    });

    Users = App.Views.CompositeView.extend({
        template: 'users/list/templates/users.ejs',
        itemView: User,
        emptyView: Empty,
        itemViewContainer: 'tbody'
    });

    return {
        Layout: Layout,
        Panel: Panel,
        User: User,
        Empty: Empty,
        Users: Users
    };
});