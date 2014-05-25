/*global define*/
define([
    'application',
    'apps/footer/show/show-view'
], function (App, View) {
    'use strict';

    var Controller;

    Controller = {
        showFooter: function () {
            var currentUser = App.request('get:current:user');
            this.footerView = this.getFooterView(currentUser);
            App.footerRegion.show(this.footerView);
        },

        getFooterView: function (currentUser) {
            return new View.FooterView({
                model: currentUser
            });
        }
    };

    return Controller;
});