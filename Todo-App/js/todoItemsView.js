var TodoItemsView = Backbone.View.extend({
  tagName: "ul",

  id: "todoItems",

  initialize: function (options) {
    if (!(options && options.model)) throw new Error("model is not specified.");
    //for registering the event
    this.model.on("add", this.onAddTodoItem, this);
  },
  //calling the callback function
  onAddTodoItem: function (todoItem) {
    // console.log("Added");

    //after clicking on the button the item should be added to the model and displayed on the view so for doing that we are writing the below two lines
    var view = new TodoItemView({ model: todoItem });
    this.$el.append(view.render().$el);
  },
  events: {
    "click #add": "onClickAdd",
    //for adding item to the list when user presses the enter also can be done by using as below
    "keypress #newTodoItem": "onKeyPress",
  },
  onKeyPress: function (e) {
    if (e.keyCode == 13)
      //after clicking on enter after giving the description we need to add that description to the list so we need to do as below  by calling the onClickAdd method
      this.onClickAdd();
  },
  onClickAdd: function () {
    // console.log("button clicked");
    // var todoItem = new TodoItem({ description: "New Todo Item" });
    var $textBox = this.$("#newTodoItem");
    //to add the description item only when the textbox has the value we need to give the condition as below
    if ($textBox.val()) {
      var todoItem = new TodoItem({ description: $textBox.val() });

      this.model.add(todoItem);
      //after adding to clear the textbox we need to do as below
      $textBox.val("");
    }
  },

  render: function () {
    var self = this;
    //to add the textbox and after adding change the line number 24 as 25
    this.$el.append("<input type='text' autofocus id='newTodoItem'></input>");
    this.$el.append("<button id='add'>ADD</button>");
    this.model.each(function (todoItem) {
      var view = new TodoItemView({ model: todoItem });
      self.$el.append(view.render().$el);
    });

    return this;
  },
});
