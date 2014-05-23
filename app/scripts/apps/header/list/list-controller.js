/*global define*/
define([
    'application',
    'apps/header/list/list-view'
], function (App) {
    'use strict';

    var List = App.module('HeaderApp.List');

    List.Controller = {
        listHeader: function () {
            this.headerView = this.getFooterView();
            App.headerRegion.show(this.headerView);
        },

        getFooterView: function () {
            return new List.Headers();
        }
    };

    return List;
});