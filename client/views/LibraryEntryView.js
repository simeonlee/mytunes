// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),

  events: {
    'click': 'enqueue'
  },

  initialize: function() {
    this.listenTo(this.model, 'change:playCount', this.render);
    // this.model.on('change:playCount', this.render, this);
  },

  enqueue: function() {
    this.model.enqueue();
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
