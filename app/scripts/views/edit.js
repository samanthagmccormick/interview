/*global define, jQuery*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/note'
], function ($, _, Backbone, JST, NoteModel) {
    'use strict';

    var ModalView = Backbone.View.extend({
        template: JST['app/scripts/templates/note.ejs'],
        
        
        events: {
            "click #save"   : "save",
            "change input"  : "validate",
            /* When you click the modal's close button, destroy the data entered */
            "click .modal_close"  : "destroy"
        },
        
        
        initialize: function (options) {
            this.render();
        },
        
        
        render: function () {
            var self = this;
            
            this.$el.html(this.template({
                note: self.model
            }));
            
            this.$title = jQuery('#title');
            this.$body  = jQuery('#body');
            this.$save  = jQuery('#save');
            
            this.$el.dialog({
                dialogClass: "no-close"
            });
            
            return this;
        },
        
        
        /**
         *  Assert that note data meets requirements for saving
         */
        validate: function () {
            if (!_.isEmpty(this.$title.val())) {
                this.$save.attr('disabled', false);
                return true;
            } else {
                this.$save.attr('disabled', true);
                return false;
            }
        },
        
        
        /**
         *  Save the model, add it to collection
         */
        save: function (e) {
            e.preventDefault();
            e.stopPropagation();
            var self = this;
            
            this.$title = jQuery('#title');
            this.$body  = jQuery('#body');
            this.$save  = jQuery('#save');
            
            if (this.validate()) {
                this.model.set('title', this.$title.val());
                this.model.set('body', this.$body.val());
                /* Added lowercase title and body attributes, for sorting */
                this.model.set('titleLC', this.$title.val().toLowerCase());
                this.model.set('bodyLC', this.$body.val().toLowerCase());
                this.model.save();
                
                this.collection.add(this.model);
                this.collection.save();
                
                this.destroy();
            }
            return false;
        },
        
        
        /**
         *  Remove the view from the DOM and unbind all events
         */
        destroy: function () {
            // Removes the modal view from the DOM temporarily
            this.undelegateEvents();

            this.$el.removeData().unbind();
            this.remove();
            /* Remove the Backbone view from the DOM */
            Backbone.View.prototype.remove.call(this);
        }
    });

    return ModalView;
});
