/*global define*/

define([
    'underscore',
    'backbone',
    'models/note',
    'localstorage'
], function (_, Backbone, NoteModel) {
    'use strict';

    var NoteCollection = Backbone.Collection.extend({
        model: NoteModel,
        
        localStorage: new Backbone.LocalStorage("notes"),
        
        initialize: function(){
            this.on('change', function(){
                this.fetch();
            }, this);
        }
        
    });

    return NoteCollection;
});
