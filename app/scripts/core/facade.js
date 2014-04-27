/* global define */
define([
    'core/mediator',
    'config/permissions'
], function (mediator, permissions) {
    'use strict';

    var Facade = function () {};

    Facade.prototype.subscribe = function(subscriber, channel, callback) {

        // Note: Handling permissions/security is optional here
        // The permissions check can be removed 
        // to just use the mediator directly.

        if (permissions.validate(subscriber, channel)) {
            mediator.subscribe(channel, callback);
        }
    };

    Facade.prototype.publish = function() {
        mediator.publish.apply(mediator, arguments);
    };
    
    return Facade;
});