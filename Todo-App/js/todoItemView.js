var TodoItemView = Backbone.View.extend({
  tagName: "li",

  initialize: function (options) {
    if (!(options && options.model)) throw new Error("model is not specified.");
  },

  render: function () {
    // this.$el.html(this.model.get("description"));
    //if we give any javascript code in the text field it should not executed it should be treated as just a string so for treating as a simple text  we need to use escape method
    //we need to use escape() method
    this.$el.html(this.model.escape("description"));

    return this;
  },
});
