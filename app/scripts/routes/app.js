/*global define*/

define([
    'jquery',
    'backbone',
    'views/application',
    'views/note/list',
    'views/note/detail'
], function ($, Backbone, AppView, NoteListView, NoteDetailView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            '/note/:id': 'showNote',
            '/create': 'newNote',
            '': 'index'
        },
        
        index: function(){
            this.setup();
            new NoteListView({
                el: '#content'
            });
        },
        
        showNote: function(id){
            this.setup();
            new NoteDetailView({
                el: '#content',
                noteId: id
            });
        },
        
        newNote: function(){
            this.setup();
            new NoteDetailView({
                el: '#content'
            });
        },
        
        setup: function(){
            new AppView({
                el: '#container'
            });
        }
    });

    return AppRouter;
});
