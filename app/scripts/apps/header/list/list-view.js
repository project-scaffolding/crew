/*global define*/
define([
    'application'
], function (App) {
    'use strict';

    var Header, Headers;

    Header = App.Views.ItemView.extend({
        template: 'header/list/templates/_header.ejs',
        tagName: 'li'
    });

    Headers = App.Views.CompositeView.extend({
        template: 'header/list/templates/headers.ejs',
        itemView: Header,
		itemViewContainer: 'ul'
    });

    return {
        Header: Header,
        Headers: Headers
    };
});