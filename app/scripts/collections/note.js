/*global define*/

define([
    'underscore',
    'backbone',
    'models/note'
], function (_, Backbone, NoteModel) {
    'use strict';

    var NoteCollection = Backbone.Collection.extend({
        model: NoteModel
    });

    return NoteCollection;
});
