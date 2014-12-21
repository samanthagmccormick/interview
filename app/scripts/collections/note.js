/*global define, localStorage*/

define([
    'underscore',
    'backbone',
    'models/note'
], function (_, Backbone, NoteModel) {
    'use strict';

    var NoteCollection = Backbone.Collection.extend({
        model: NoteModel,
        
        fetch: function (options) {
            var notes = localStorage.getItem('notes');
            
            if (_.isNull(notes)) {
                notes = "[]";
                localStorage.setItem('notes', notes);
            }
            this.reset(JSON.parse(notes));
            
            if (options.success) {
                options.success();
            }
            
            if (options.complete) {
                options.complete();
            }
        },
        
        save: function (options) {
            localStorage.setItem('notes', JSON.stringify(this.models));
            
            if (_.isObject(options)) {
                if (_.isFunction(options.success)) {
                    options.success();
                }
                if (_.isFunction(options.complete)) {
                    options.complete();
                }
            }
        }
    });

    return NoteCollection;
});
