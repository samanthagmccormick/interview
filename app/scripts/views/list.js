/*global define, jQuery */

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/note',
    'models/note',
    'views/edit',
    'jqueryui'
], function (jQuery, _, Backbone, JST, NoteCollection, NoteModel, EditView, ui) {
    'use strict';

    var NoteListView = Backbone.View.extend({
        template: JST['app/scripts/templates/list.ejs'],
        modalTemplate: JST['app/scripts/templates/note.ejs'],
        
        collection: new NoteCollection(),
        
        editView: null,
        
        $modalEl: null,
        
        events: {
            "click #create" : "create",
            "click a.note"  : "edit"
        },
        
        create: function () {
            var self = this;
            
            this.editView = new EditView({
                el: self.$modalEl,
                collection: self.collection,
                model: new NoteModel()
            });
        },
        
        edit: function (event) {
            var self = this,
                noteId = jQuery(event.target).data('note-id'),
                note = this.collection.get(noteId);
            
            this.editView = new EditView({
                el: self.$modalEl,
                collection: self.collection,
                model: note
            });
            
        },
        
        initialize: function (options) {
            var self = this;
            
            this.$modalEl = jQuery(options.modalEl);
            
            this.collection.fetch({
                complete: function () {
                    self.render();
                }
            });
            
            this.collection.on('all', function () {
                self.render();
            });
        },
        
        render: function () {
            var self = this;
            
            this.$el.html(this.template({
                notes: self.collection
            }));
        }
    });

    return NoteListView;
});
