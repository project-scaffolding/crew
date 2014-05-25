/*global define*/
define([
    'application',
    'base/entities/model',
    'base/entities/collection'
], function (App, Model, Collection) {
    'use strict';

    var Entities, API;

    Entities = App.module('Entities');

    Entities.Header = Model;

    Entities.HeaderCollection = Collection.extend({
        model: Entities.Header
    });

    API = {
        getHeaders: function () {
            var headers;
            headers = new Entities.HeaderCollection([
                { name: 'Users', url: 'users' },
                { name: 'Leads', url: 'leads' },
                { name: 'Appointments', url: 'appointments' }
            ]);
            return headers;
        }
    };

    App.reqres.setHandler('header:entities', function () {
        return API.getHeaders();
    });

    
});