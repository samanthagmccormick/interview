/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'models/note'
], function ($, _, Backbone, JST, NoteModel) {
    'use strict';

    var NoteView = Backbone.View.extend({
        template: JST['app/scripts/templates/note.ejs'],
        
        $el: null,
        
        $title: null,
        $body: null,
        $save: null,
        
        noteModel: null,
        
        events: {
            "keyup #body,#title" : "validate",
            "click #save" : "saveNote"
        },
        
        initialize: function(){
            var self = this;
            
            if(!_.isEmpty(this.options.noteId)){
                this.noteModel = new NoteModel({
                    id: this.options.noteId
                });
                
                this.noteModel.fetch({
                    complete: function(){
                        self.render();
                    }
                });
            }else{
                this.noteModel = new NoteModel();
                this.render();
            }
        },
        
        render: function(){
            this.$el.html(this.template({
                note: this.noteModel
            }));
            
            this.$title = jQuery('#title');
            this.$body = jQuery('#body');
            this.$save = jQuery('#save');
            
            this.validate();
        },
        
        validate: function(){
            if(!_.isEmpty(this.$title.val())){
                this.$save.attr('disabled', false);
                return true;
            }else{
                this.$save.attr('disabled', true);
                return false;
            }
        },
        
        saveNote: function(e){
            e.preventDefault;
            e.stopPropagation;
            
            if(this.validate()){
                this.noteModel.set('title', this.$title.val());
                this.noteModel.set('body', this.$body.val());
                this.noteModel
                    .save()
                    .done(function(){ 
                        Backbone.history.navigate("list", true);
                    });
            }else{
                return false;
            }
        }
    });

    return NoteView;
});
