/*global define*/
define([
    'backbone',
    'application',
    'apps/header/header-application',
    'apps/footer/footer-application'
], function (Backbone, App, HeaderApp, FooterApp) {
    'use strict';

    App.on('initialize:before', function (options) {
        this.currentUser = App.request('set:current:user', options.currentUser);
    });

    App.rootRoute = 'users';

    App.reqres.setHandler('get:current:user', function () {
        return App.currentUser;
    });

    App.addRegions({
        headerRegion: '#header-region',
        mainRegion: '#main-region',
        footerRegion: '#footer-region'
    });

    App.addInitializer(function () {
        HeaderApp.start();
        FooterApp.start();
    });
    
    App.on('initialize:after', function () {
        Backbone.history.start();
        if (App.getCurrentRoute() === '') {
            App.navigate(App.rootRoute, {trigger: true});
        }
    });

    App.start({
        currentUser: {
            'first_name': 'Andrii',
            'last_name': 'Serputko',
            'full_name': 'Andrii Serputko'
        }
    });
});