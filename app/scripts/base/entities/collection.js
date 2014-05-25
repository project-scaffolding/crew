/*global define*/
define([
    'application',
    'backbone'
], function (App, Backbone) {
    'use strict';

    var Entities;

    Entities = App.module('Entities');

    Entities.Collection = Backbone.Collection;

    return Entities.Collection;
    
});