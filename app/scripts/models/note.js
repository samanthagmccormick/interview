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
        }
    });

    return NoteModel;
});
