var SearchView = Backbone.View.extend({

  // initialize:

  events: {
    'submit': function() {
      this.model.submit(query);
    }
  }

});