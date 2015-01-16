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
            "click a.note"  : "edit",
            /* Added CLEAR LIST event */
            "click .remove" : "remove",
            "click #clear"  : "clearList", 
            "click #sortTitle" : "sortTitle",
            "click #sortBody"  : "sortBody"
        },
        
        create: function () {
            var self = this;
            
            /* Create the empty edit view object for this note */
            this.editView = new EditView({
                /* el is the DOM object created in the browser */
                el: self.$modalEl,
                collection: self.collection,
                /* Create a new note model */
                model: new NoteModel()
            });
        },
        
        edit: function (event) {
            var self = this,
                 /* Temporary var to get and store the note's ID */
                noteId = jQuery(event.target).data('note-id'),
                /* Now get the note with this note ID, from the collection */
                note = this.collection.get(noteId);
            
            /* Recreate the edit view */
            this.editView = new EditView({
                el: self.$modalEl,
                collection: self.collection,
                /* Show the note that you found above */
                model: note
            });
            
        },

        /* Added this - to REMOVE ONE NOTE */
        remove: function(event) {
            /* Temporary var for the note's ID */
            var noteId = jQuery(event.target).data('note-id'),
                /* Now get the model with this note ID */
                note = this.collection.get(noteId);

            console.log(note);

            // Remove this note from collection
            this.collection.remove(note);

        },

        /* Added this - to CLEAR THE WHOLE LIST */
        clearList: function() {
            /* Use reset to clear the collection. Passing no parameter just returns an empty collection */
            this.collection.reset();
        },

        // /* Added this - to SORT BY TITLE */
        // sortTitle: function() {
        //     console.log(this.collection);
        //     _.sortBy(this.collection, 'title');
        // },

        // /* Added this - to SORT BY BODY */
        // sortBody: function() {

        // },
        
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
