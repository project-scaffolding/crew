/*global define*/
define([
    'application',
    'base/entities/model',
    'base/entities/collection'
], function (App, Model, Collection) {
    'use strict';

    var Entities, API;

    Entities = App.module('Entities');

    Entities.User = Model;

    Entities.UsersCollection = Collection.extend({
        model: Entities.User,
        url: 'api/users'
    });

    API = {
        setCurrentUser: function (currentUser) {
            var user;
            user = new Entities.User(currentUser);
            return user;
        },

        getUsersEntities: function (cb) {
            var users;
            users = new Entities.UsersCollection();
            users.fetch({
                success: function () {
                    cb(users);
                }
            });
            return users;
        }
    };

    App.reqres.setHandler('set:current:user', function (currentUser) {
        return API.setCurrentUser(currentUser);
    });

    App.reqres.setHandler('users:entities', function (cb) {
        return API.getUsersEntities(cb);
    });

    
});