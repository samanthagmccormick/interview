/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    // This is the default note model
    var NoteModel = Backbone.Model.extend({
        defaults: {
            id: null,
            title: '',
            /* Added lowercase for sorting purposes */
            titleLC: '',
            body: '',
            bodyLC: ''
        },
        
        // This happens when you click the button to save the new note
        save: function () {
            // If this is not a number, set the ID to a random number, then get that ID and return it.
            if (!_.isNumber(this.get('id'))) {
                this.set('id', Math.round(Math.random() * 1e10));
            }
            
            return this;
        }
    });

    return NoteModel;
});
