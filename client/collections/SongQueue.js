// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(e) {
      this.dequeueFirst();
      if (this.at(0) !== undefined) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(e) {
      this.remove(e);
    });
  },

  playFirst: function() {
    this.at(0).play();
  },

  dequeueFirst: function() {
    this.remove(this.first());
  }

});