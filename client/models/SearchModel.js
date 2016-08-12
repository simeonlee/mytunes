var SearchModel = Backbone.Model.extend({

  submit: function(query) {
    this.trigger('submit', query);
  }
});