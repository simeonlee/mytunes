// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.get('library').on('click', function(song) {
      this.model.get('library').trigger('enqueue', song);
    }, this);
    // Access library (see line 6)
    // When we physically click on the song entry view, we will trigger this under the hood: .trigger('click', song);
    // We will need to set up a listener with this: .on('click', function(song) {}) where song refers to the song that is clicked
    // Within that, we want to transform the click --> enqueue in the model with the song as an argument: .trigger('enqueue', song)
  },

  render: function() {

    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
