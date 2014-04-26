/* global define */
define([
    'mediator',
    'config/permissions'
], function (Mediator, permissions) {
    'use strict';

    var Facade = function () {
        this.mediator = new Mediator ();
    };

    Facade.prototype.subscribe = function(subscriber, channel, callback) {

        // Note: Handling permissions/security is optional here
        // The permissions check can be removed 
        // to just use the mediator directly.

        if (permissions.validate(subscriber, channel)) {
            this.mediator.subscribe(channel, callback);
        }
    };

    Facade.prototype.publish = function(channel){
        this.mediator.publish(channel);
    };
    
    return Facade;
});