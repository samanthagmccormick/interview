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
        
        noteModel: new NoteModel(),
        
        initialize: function(){
            var self = this;
            
            if(_.isNumber(this.noteId)){
                noteModel.id = this.noteId;
                
                noteModel.fetch({
                    complete: function(){
                        self.render();
                    }
                });
            }else{
                this.render();
            }
        },
        
        render: function(){
            this.template({
                note: this.noteModel
            });
        }
    });

    return NoteView;
});
