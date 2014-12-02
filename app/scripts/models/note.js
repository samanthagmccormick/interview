/*global define*/

define([
    'underscore',
    'backbone',
    'localstorage'
], function (_, Backbone) {
    'use strict';

    var NoteModel = Backbone.Model.extend({
        defaults: {
            id: null,
            title: '',
            body: ''
        },
        
        localStorage:new Backbone.LocalStorage('notes'),
    });

    return NoteModel;
});
