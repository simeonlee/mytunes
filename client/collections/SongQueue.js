// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', this.addSong, this);
    this.on('ended', this.ended, this);
    this.on('enqueue', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
  },

  addSong: function(e) {
    if (this.length === 1) { this.playFirst(); }
  },

  enqueue: function(e) {
    this.add(e);
  },

  dequeue: function(e) {
    if (this.at(0) === e) {
      return this.ended(e);
    }
    this.remove(e);
  },

  playFirst: function() {
    this.at(0).play();
  },

  ended: function(e) {
    this.trigger('stop');
    this.remove(this.first());
    if (this.at(0) !== undefined) {
      this.playFirst();
    }
  }

});