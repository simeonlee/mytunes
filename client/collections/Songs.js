// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(){
    this.getSongs();
  },

  getSongs: function() {
    var context = this;
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: 'https://api.parse.com/1/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        context.handleSongs(data);
      },
      error: function (data, b, c) {
        console.log(data, b, c);
      }
    });
  },

  handleSongs: function(data) {
    this.reset();
    data.results.forEach(function(song) {
      this.add(song);
    }.bind(this));
    console.log(this);
  }

});