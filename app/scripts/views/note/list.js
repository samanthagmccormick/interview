/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/note',
    'localstorage'
], function ($, _, Backbone, JST, NoteCollection) {
    'use strict';

    var NoteListView = Backbone.View.extend({
        template: JST['app/scripts/templates/note/list.ejs'],
        
        noteCollection: new NoteCollection(),
        
        $el: null,
        
        initialize: function(){
            var self = this;
            
            this.$el = jQuery(this.el);
            
            this.noteCollection.fetch({
                complete: function(){
                    self.render();
                }
            });
        },
        
        render: function(){
            var self = this;
            this.$el.html(this.template({
                notes: self.noteCollection
            }));
        }
    });

    return NoteListView;
});
