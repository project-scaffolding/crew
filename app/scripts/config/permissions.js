/*global define*/
define(function () {
    'use strict';

    // Permissions

    // A permissions structure can support checking
    // against subscriptions prior to allowing them 
    // to clear. This enforces a flexible security 
    // layer for your application.

    var permissions = {

        'home-controller#index': {
            'home-controller': true
        },

        'about-controller#index': {
            'about-controller': true
        }

    };

    permissions.validate = function(subscriber, channel){
        var test = permissions[channel] && permissions[channel][subscriber];
        return test === undefined ? true : test;
    };

    return permissions;

});