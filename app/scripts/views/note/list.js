/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var NoteListView = Backbone.View.extend({
        template: JST['app/scripts/templates/note/list.ejs']
    });

    return NoteListView;
});
