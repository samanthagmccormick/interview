/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        jqueryui: {
            exports:"$" ,
            deps: ['jquery']
        }
    },
    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        localstorage: "../bower_components/backbone.localStorage/backbone.localStorage",
        jqueryui: "../bower_components/jquery-ui/jquery-ui",
        publisher: "../bower_components/publisher/src/publisher"
    }
});

require([
    'backbone',
    'routes/app'
], function (Backbone, Router) {
    Router = new Router();
    Backbone.history.start();
});
