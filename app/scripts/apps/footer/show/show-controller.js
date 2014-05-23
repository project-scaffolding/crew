/*global define*/
define([
    'application',
    'apps/footer/show/show-view'
], function (App) {
    'use strict';

    var Show = App.module('FooterApp.Show');

    Show.Controller = {
        showFooter: function () {
            this.footerView = this.getFooterView();
            App.footerRegion.show(this.footerView);
        },

        getFooterView: function () {
            var view = new Show.View();
            return view;
        }
    };

    return Show;
});