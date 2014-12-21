/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var NoteModel = Backbone.Model.extend({
        defaults: {
            id: null,
            title: '',
            body: ''
        },
        
        save: function () {
            if (!_.isNumber(this.get('id'))) {
                this.set('id', Math.round(Math.random() * 1e10));
            }
            
            return this;
        }
    });

    return NoteModel;
});
