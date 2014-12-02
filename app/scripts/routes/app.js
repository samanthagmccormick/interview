/*global define*/

define([
    'jquery',
    'backbone',
    'views/application',
    'views/note/list',
    'views/note/detail',
    'views/index'
], function ($, Backbone, AppView, NoteListView, NoteDetailView, IndexView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            'note/:id': 'showNote',
            'create': 'newNote',
            'list': 'showNotes',
            '': 'index'
        },
        
        index: function(){
            this.setup();
            new IndexView({
                el: '#content'
            });
        },
        
        showNotes: function(){
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
