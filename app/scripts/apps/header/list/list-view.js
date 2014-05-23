/*global define*/
define([
    'marionette',
    'application'
], function (Marionette, App) {
    'use strict';

    var List = App.module('HeaderApp.List');

    List.Header = Marionette.ItemView.extend({
        template: 'header/list/templates/_header.ejs',
        tagName: 'li'
    });

    List.Headers = Marionette.CompositeView.extend({
        template: 'header/list/templates/headers.ejs',
        itemView: List.Header,
		itemViewContainer: 'ul'
    });

    return List;
});