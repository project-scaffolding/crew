/* global define */
define(function (require) {
    'use strict';

    var HomeController, IndexView;

    IndexView = require('app/views/home/index-view');

    HomeController = function (sandbox) {

        return {

            init: function () {
                this.el = $('body');
                this.indexView = new IndexView();

                this.currentView = this.indexView;

                sandbox.subscribe('home-controller', 'home-controller#index', this.index.bind(this));
                sandbox.subscribe('home-controller', 'home-controller#remove', this.removeView.bind(this));
            },

            destroy: function () {
                sandbox.remove('home-controller#index');
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
    
    return HomeController;
});