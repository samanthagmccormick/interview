/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/note'
], function ($, _, Backbone, JST, NoteCollection) {
    'use strict';

    var NoteListView = Backbone.View.extend({
        template: JST['app/scripts/templates/note/list.ejs'],
        
        noteCollection: new NoteCollection(),
        
        initialize: function(){
            var self = this;
            
            this.noteCollection.fetch({
                complete: function(){
                    self.render();
                }
            });
        },
        
        render: function(){
            var self = this;
            
            this.$el.html(this.template({
                collection: self.noteCollection
            }));
        }
    });

    return NoteListView;
});
