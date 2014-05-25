/*global define*/
define([
    'application',
    'marionette'
], function (App, Marionette) {
    'use strict';

    var Views;

    Views = App.module('Views');
    
    Views.CollectionView = Marionette.CollectionView.extend({
        itemViewEventPrefix: 'childview'
    });

    return Views;

});