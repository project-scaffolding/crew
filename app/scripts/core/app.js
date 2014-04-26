/* global define */
define([
    'config',
    'mediator'
], function (config, Mediator) {
    'use strict';

    var moduleData = {}, debug = config.debug;

    function instanceMethos (name, method) {
        return function () {
            try {
                method.apply(this, arguments);
            } catch (ex) {
                console.error(name + '(): ' + ex.message);
            }
        };
    }

    function createInstance (moduleId, self) {
        var instance, name, method;

        instance = moduleData[moduleId].creator(new Mediator(self));

        if (!debug) {
            for (name in instance) {
                method = instance[name];
                if (typeof method === 'function') {
                    instance[name] = instanceMethos(name, method);
                }
            }
        }

        return instance;
    }

    return {
        register: function (moduleId, creator) {
            moduleData[moduleId] = {
                creator: creator,
                instance: null
            };
        },

        start: function (moduleId) {
            moduleData[moduleId].instance = createInstance(moduleId, this);
            moduleData[moduleId].instance.init();
        },

        stop: function (moduleId) {
            var data = moduleData[moduleId];
            if (data.instance) {
                data.instance.destroy();
                data.instance = null;
            }
        },

        startAll: function () {
            for (var moduleId in moduleData) {
                if (moduleData.hasOwnProperty(moduleId)) {
                    this.start(moduleId);
                }
            }
        },

        stopAll: function () {
            for (var moduleId in moduleData) {
                if (moduleData.hasOwnProperty(moduleId)) {
                    this.stop(moduleId);
                }
            }
        }
    };
});