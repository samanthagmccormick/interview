/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NoteView = Backbone.View.extend({
        template: JST['app/scripts/templates/note.ejs']
    });

    return NoteView;
});
