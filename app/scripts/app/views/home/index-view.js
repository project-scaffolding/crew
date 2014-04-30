/* global define */
define(function (require) {
    'use strict';

    var IndexView, Backbone, JST;

    Backbone = require('backbone');
    JST = require('templates');

    IndexView = Backbone.View.extend({

        template: JST['app/scripts/app/templates/home/index-template.ejs'],

        initialize: function () {
            console.log('HomeController#IndexView');
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });
    
    return IndexView;
});