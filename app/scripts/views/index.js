/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var IndexView = Backbone.View.extend({
        template: JST['app/scripts/templates/index.ejs'],
        
        initialize: function(){
            this.render();
        },
        
        render: function(){
            this.$el.html(this.template());
        }
    });

    return IndexView;
});
