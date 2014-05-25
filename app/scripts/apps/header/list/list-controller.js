/*global define*/
define([
    'application',
    'apps/header/list/list-view'
], function (App, View) {
    'use strict';

    var Controller;

    Controller = {
        listHeader: function () {
            var links = App.request('header:entities');

            this.headerView = this.getFooterView(links);
            App.headerRegion.show(this.headerView);
        },

        getFooterView: function (links) {
            return new View.Headers({
                collection: links
            });
        }
    };

    return Controller;
});