var SearchView = Backbone.View.extend({

  // initialize:
  initialize: function() {
    console.log('searchview initializing');
    this.render();
    this.submit();
  },

  events: {
    'click .btn.btn-default': 'submit'
  },

  template: `<div class="input-group">
      <input type="text" id="input" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-default" type="button">Go!</button>
      </span>
    </div>`,

  submit: function() {
    var input = this.$('#input').val();
    console.log(input);
    this.model.submit(input);
  },

  render: function() {
    return this.$el.html(this.template);
  }

});