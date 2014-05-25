/*global define*/
define([
    'application',
    'backbone'
], function (App, Backbone) {
    'use strict';

    var Entities;

    Entities = App.module('Entities');

    Entities.Model = Backbone.Model;

    return Entities.Model;
    
});