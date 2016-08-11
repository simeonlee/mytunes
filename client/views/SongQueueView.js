// var commentsView = new CommentsView({ collection: comments });

// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    // this.render();

    this.collection.on('add', function() {
      this.render();
    }, this);

    this.collection.on('remove', function() {
      if (this.collection.length > 0) {
        this.render();
      } else {
        this.$el.empty();
      }
    }, this);
  },

  render: function() {
    console.log('SongQueueView is rendering.');
    this.$el.empty();
    this.$el.html('<br/><th>Song Queue</th>');
    this.collection.forEach(this.renderSong, this);

  },

  renderSong: function(song) {
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render());
  }

});
