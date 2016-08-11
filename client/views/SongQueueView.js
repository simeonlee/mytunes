// var commentsView = new CommentsView({ collection: comments });

// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    // var html = [
    //   '<div>',
    //   '</div>'
    // ].join('');
    this.$el.empty();
    this.collection.forEach(this.renderSong, this);

    // return this.$el.html();
    // return this.$el;


  },
  renderSong: function(song) {
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render());
  }

});
