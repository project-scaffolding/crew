/* global define */
define(function (require) {
    'use strict';

    var AboutController, IndexView;

    IndexView = require('app/views/about/index-view');

    AboutController = function (sandbox) {

        return {

            init: function () {
                this.el = $('body');
                this.indexView = new IndexView();

                this.currentView = this.indexView;

                sandbox.subscribe('about-controller', 'about-controller#index', this.index.bind(this));
                sandbox.subscribe('about-controller', 'about-controller#remove', this.removeView.bind(this));
            },

            destroy: function () {
                sandbox.remove('about-controller#index');
            },

            index: function () {
                this.currentView = this.indexView;
                this.el.append(this.indexView.render().el);
                this.indexView.delegateEvents();
            },

            removeView: function () {
                this.currentView.undelegateEvents();
                this.currentView.remove();
            }
            
        };
    };
    
    return AboutController;
});