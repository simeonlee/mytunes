// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td><%= playCount %></td><td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      console.log('dequeuing in SongQueueEntryView');
      this.model.dequeue();
    }
  },

  initialize: function() {
    this.model.on('change:playCount', this.render, this);
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes)); 
  }
});
