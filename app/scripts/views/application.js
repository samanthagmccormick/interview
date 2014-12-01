/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates'
], function ($, _, Backbone, JST) {
    'use strict';

    var ApplicationView = Backbone.View.extend({
        template: JST['app/scripts/templates/application.ejs'],
        
        initialize: function(){
            this.render();
        },
        
        render: function(){
            this.$el.html(this.template());
        }
    });

    return ApplicationView;
});
