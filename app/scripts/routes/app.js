/*global define*/

define([
    'jquery',
    'jqueryui',
    'backbone',
    'views/application',
    'views/list',
    'views/index'
], function ($, jQueryUI, Backbone, AppView, NoteListView, IndexView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'note/:id': 'showNote',
            'create': 'newNote',
            'list': 'showNotes',
            '': 'index'
        },
        
        index: function () {
            this.setup();
            var view = new IndexView({
                el: '#content'
            });
        },
        
        showNotes: function () {
            this.setup();
            var view = new NoteListView({
                el: '#content',
                modalEl: '#modal'
            });
        },
        
        setup: function () {
            var view = new AppView({
                el: '#container'
            });
        }
    });

    return AppRouter;
});
