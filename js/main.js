// ******MODELS***** */
// var Song = Backbone.Model.extend({
//   initialize: function () {
//     console.log("A new song has been created");
//   },
// });

// var song = new Song();

// Model Attributes
// var Song = Backbone.Model.extend();
// var song = new Song();
// //setting and attribute using set method
// song.set("title", "Blue in Green");
// song.set({
//   artist: "Miles Davis",
//   publishYear: 2023,
// });

// validating an attribute

// var Song = Backbone.Model.extend({
//   validate: function (attrs) {
//     if (!attrs.title) return "Title is required";
//   },
// });

// var song = new Song();

// Models Inheritance

// var Animal = Backbone.Model.extend({
//   walk: function () {
//     console.log("Animal walking....");
//   },
// });

// //creating a new model type that inherits from animal

// var Dog = Animal.extend({
//   //overriding the base method of the animal that is walk
//   walk: function () {
//     //to call the walk method of the base class we dont have super or base method as java we have to do as below
//     Animal.proptotype.walk.apply(this);
//     console.log("Dog is walking...");
//   },
// });

// var dog = new Dog();
// dog.walk();

// ***ASSESSMENT***+ */
// var Vehicle = Backbone.Model.extend({
//   idAttribute: "registrationNumber",
//   start: function () {
//     console.log("vehicle started...");
//   },
// });

// var vehicle = new Vehicle({ registrationNumber: 1 });

// var Car = Vehicle.extend({
//   start: function () {
//     console.log(
//       `car with registration number ${registrationNumber} has started`
//     );
//   },
//   validate: function (attrs) {
//     if (!attrs.registrationNumber) return "car does not exists";
//   },
// });

// var car = new Car({
//   registrationNumber: "XLI887",
//   color: "Blue",
// });
// car.set("registrationNumber", "XLI887");

// *******COLLECTIONS******/

// creating a collection

// var Song = Backbone.Model.extend();

// var Songs = Backbone.Collection.extend({
//   model: Song,
// });

// creating a collection in two ways
// 1)pass the initial array of models when  creating a collection

// var songs = new Songs([
//   new Song({ title: "Song 1" }),
//   new Song({ title: "Song 2" }),
//   new Song({ title: "Song 3" }),
// ]);

// //2)calling add method
// songs.add(new Song({ title: "Song 4" }));

// working with collections

// var songs = new Songs();
// songs.add(new Song({ title: "SOng 1", genre: "Jazz", downloads: 110 }), {
//   at: 0,
// });
// songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));

// var jazzSongs = songs.filter({ genre: "Jazz" });

// var firstJazzSong = songs.find({ genre: "Jazz" });

// console.log("Jazzsongs:", jazzSongs);
// console.log("first jazz song", firstJazzSong);

// var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });
// console.log("Filtered Songs", filteredSongs);

// var topDownloads = songs.filter(function (song) {
//   return song.get("downloads") > 100;
// });
// console.log("Top downloads", topDownloads);

// songs.each(function (song) {
//   console.log(song);
// });

//******VIEWS*******/
//CREATING A VIEWS

// var Song = Backbone.Model.extend();
// var SongView = Backbone.View.extend({
//   //we can also specify to which tag we want the message to be embedded using below statements
//   tagName: "span",
//   className: "song",
//   id: "1234",
//   attributes: {
//     "data-genre": "Jazz",
//   },
//   //   render: function () {
//   //     this.$el.html("Hello World");
//   //     return this;
//   //   },
//   render: function () {
//     this.$el.html(this.model.get("title"));
//     return this;
//   },
// });

//creating an instance of the view
//one way of creating an instance
// var songView = new SongView({ el: "#container" });
// songView.render();

//we can create an instance and then pass the elemnet using jquery selector
// var songView = new SongView();
//we can render the method as below  or we can apply the render method using chaining concept
// songView.render();
// $("#container").html(songView.render().$el);

//PASSING DATA(MODEL) TO VIEWS

//create an instance of song
// var song = new Song({ title: "Blue in green" });
// //pass the property called model to the below instance
// var songView = new SongView({ el: "#container", model: song });
// songView.render();
//and now give this model to the render method of the view as in the above line 144

//***PASSING A COLLECTION TO A VIEW */

// var Song = Backbone.Model.extend();
// var Songs = Backbone.Collection.extend({
//   model: Song,
// });
// var SongView = Backbone.View.extend({
//   tagName: "li",
//   render: function () {
//     this.$el.html(this.model.get("title"));
//     return this;
//   },
// });
// var SongsView = Backbone.View.extend({
//   render: function () {
//     var self = this;
//     this.model.each(function (song) {
//       var songView = new SongView({ model: song });
//       self.$el.append(songView.render().$el);
//     });
//   },
// });

// var songs = new Songs([
//   new Song({ title: "Blue in Green" }),
//   new Song({ title: "So What" }),
//   new Song({ title: "All Blues" }),
// ]);

// var songsView = new SongsView({ el: "#songs", model: songs });
// songsView.render();

//**Handling DOM EVENTS */
// var Song = Backbone.Model.extend();
// var Songs = Backbone.Collection.extend({
//   model: Song,
// });
// var SongView = Backbone.View.extend({
//   //registering events
//   events: {
//     //here first click is applied to every button it is generic
//     //but this way is not at all good so the best practice is to give the classnamae
//     click: "onClick",
//     //this click is applied to a specific button so if we click on this button the above click will also be applied,it is specific
//     //to avoid the above click event we can apply stop propogation so that it will stop all the handlers before executing this specific handler
//     "click .bookmark": "onClickBookmark",
//   },
//   onClick: function () {
//     console.log("Listen Clicked");
//   },
//   onClickBookmark: function (e) {
//     e.stopPropagation();
//     console.log("Bookmark listen");
//   },

//   render: function () {
//     this.$el.html(
//       this.model.get("title") +
//         "<button>Listen</button> <button class='bookmark'>BookMark</button>"
//     );
//     return this;
//   },
// });

// var song = new Song({ title: "Blue in Green" });
// var songView = new SongView({ el: "#container", model: song });
// songView.render();

//***HANDLING MODEL EVENTS*******/

// var Song = Backbone.Model.extend({
//   defaults: {
//     listeners: 0,
//   },
// });

// var SongView = Backbone.View.extend({
//   //to update the state when anyone listening to the song we need to do as below
//   //here we are using on method to change the event to register an handler
//   initialize: function () {
//     this.model.on("change", this.render, this);
//   },
//   render: function () {
//     this.$el.html(
//       this.model.get("title") + "- Listeners:" + this.model.get("listeners")
//     );
//     return this;
//   },
// });

// var song = new Song({ title: "Blue in Green" });
// var songView = new SongView({ el: "#container", model: song });
// songView.render();

//*****HANDLING COLLECTION EVENTS******/

// var Song = Backbone.Model.extend();
// var Songs = Backbone.Collection.extend({
//   model: Song,
// });
// //renders one song as an li element
// var SongView = Backbone.View.extend({
//   tagName: "li",
//   render: function () {
//     this.$el.html(this.model.get("title"));
//     //this is used for removing an li item
//     this.$el.attr("id", this.model.id);
//     return this;
//   },
// });

//it basically iterates the collection and raps each model with a song view

// var SongsView = Backbone.View.extend({
//   tagName: "ul",
//   initialize: function () {
//     this.model.on("add", this.onSongAdded, this);
//     //registering an handler for remove event
//     this.model.on("remove", this.onSongRemoved, this);
//   },
//   //whenver we add a song to the collection this method is called
//   onSongAdded: function (song) {
//     // console.log("Song Added");
//     //instead of login message we want to append a song to the list of songs
//     var songView = new SongView({ model: song });
//     this.$el.append(songView.render().$el);
//   },
//   //to test this go to the console and check as songs.remove(songs.at(0));
//   //the song is removed but the page is not refreshed and still displays the first song
//   //so to remove that from the view do as below
//   //so to do for that we need to give an id for each li item so add the id attribute

//   onSongRemoved: function (song) {
//     // console.log("Song removed");
//     // this.$el.find("li#" + song.id).remove();
//     //or
//     this.$("li#" + song.id).remove();
//   },
//   render: function () {
//     var self = this;
//     this.model.each(function (song) {
//       var songView = new SongView({ model: song });
//       self.$el.append(songView.render().$el);
//     });
//   },
// });

// var songs = new Songs([
//   new Song({ id: 1, title: "Blue in Green" }),
//   new Song({ id: 2, title: "So What" }),
//   new Song({ id: 3, title: "All Blues" }),
// ]);

// var songsView = new SongsView({ el: "#songs", model: songs });
// songsView.render();

//**TEMPLATING VIEWS *****/
//there are three templating solutions they are 1)underscorejs 2)MustacheJs 3)HandleBarsJs
//here we will go through underscorejs

// var Song = Backbone.Model.extend();
// var SongView = Backbone.View.extend({
//   render: function () {
//     var template = _.template($("#songTemplate").html());
//     var html = template(this.model.toJSON());
//     this.$el.html(html);
//     return this;
//   },
// });

// var song = new Song({ title: "Blue is Green", plays: 1100 });
// var songView = new SongView({ el: "#container", model: song });
// songView.render();

//***EVENTS****/

//binding and triggering custom events

// var person = {
//   name: "Lakshmi",

//   walk: function () {
//     //trigger method is used for triggering the event
//     //we can also pass the arguments for event as a second parameter of trigger method
//     this.trigger("walking", {
//       speed: 1,
//       startTime: "00:00",
//     });
//   },
// };
// _.extend(person, Backbone.Events);
// //registering the event
// //ie subscribing events
// person.on("walking", function (e) {
//   console.log("Person is walking");
//   //consoling the attributes
//   console.log("Event attr:", e);
// });

// //unsubscribing an event by giving the name of the event that we want to unsubscribe
// //if we do not provide the name of the event it will unsubscibe all the events object

// person.off("walking");

// person.walk();

//***EVENT AGGREGATORS*****/

var Venue = Backbone.Model.extend();
var Venues = Backbone.Collection.extend({
  model: Venue,
});

var VenueView = Backbone.View.extend({
  tagName: "li",
  initialize: function (options) {
    this.bus = options.bus;
  },
  events: {
    click: "onCLick",
  },
  onClick: function () {
    this.bus.trigger("venueSelected", this.model);
  },
  render: function () {
    this.$el.html(this.model.get("name"));
    return this;
  },
});

var VenuesView = Backbone.View.extend({
  tagName: "ul",
  id: "venues",
  initialize: function (options) {
    this.bus = options.bus;
  },
  render: function () {
    var self = this;
    this.model.each(function (venue) {
      var view = new VenueView({ model: venue, bus: self.bus });
      self.$el.append(view.render().$el);
    });
    return this;
  },
});

var MapView = Backbone.View.extend({
  el: "#map-container",
  initialize: function (options) {
    this.bus = options.bus;

    //subscribe the venueSelected event
    this.bus.on("venueSelected", this.onVenueSelected, this);
  },
  onVenueSelected: function (venue) {
    this.model = venue;
    this.render();
  },
  render: function () {
    if (this.model) this.$("#venue-name").html(this.model.get("name"));
    return this;
  },
});

//event aggregator for providing communication between the above two views
var bus = _.extend({}, Backbone.Events); //this bus object has capabitlity to subscibe and publish the events
//now we need to pass this object for each of the views
//after passing this object for initialize method to modify the view

var venues = new Venues([
  new Venue({ name: "30 Mill Expresso" }),
  new Venue({ name: "Platform Expresso" }),
  new Venue({ name: "Mr Fox" }),
]);

var venuesView = new VenuesView({ model: venues, bus: bus });
$("#venues-container").html(venuesView.render().$el);

var mapView = new MapView({ bus: bus });
mapView.render();
