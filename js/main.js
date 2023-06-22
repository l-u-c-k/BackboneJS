******MODELS***** */
var Song = Backbone.Model.extend({
  initialize: function () {
    console.log("A new song has been created");
  },
});

var song = new Song();

Model Attributes
var Song = Backbone.Model.extend();
var song = new Song();
//setting and attribute using set method
song.set("title", "Blue in Green");
song.set({
  artist: "Miles Davis",
  publishYear: 2023,
});

validating an attribute

var Song = Backbone.Model.extend({
  validate: function (attrs) {
    if (!attrs.title) return "Title is required";
  },
});

var song = new Song();

Models Inheritance

var Animal = Backbone.Model.extend({
  walk: function () {
    console.log("Animal walking....");
  },
});

//creating a new model type that inherits from animal

var Dog = Animal.extend({
  //overriding the base method of the animal that is walk
  walk: function () {
    //to call the walk method of the base class we dont have super or base method as java we have to do as below
    Animal.proptotype.walk.apply(this);
    console.log("Dog is walking...");
  },
});

var dog = new Dog();
dog.walk();

***ASSESSMENT***+ */
var Vehicle = Backbone.Model.extend({
  idAttribute: "registrationNumber",
  start: function () {
    console.log("vehicle started...");
  },
});

var vehicle = new Vehicle({ registrationNumber: 1 });

var Car = Vehicle.extend({
  start: function () {
    console.log(
      `car with registration number ${registrationNumber} has started`
    );
  },
  validate: function (attrs) {
    if (!attrs.registrationNumber) return "car does not exists";
  },
});

var car = new Car({
  registrationNumber: "XLI887",
  color: "Blue",
});
car.set("registrationNumber", "XLI887");

*******COLLECTIONS******/

creating a collection

var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
  model: Song,
});

creating a collection in two ways
1)pass the initial array of models when  creating a collection

var songs = new Songs([
  new Song({ title: "Song 1" }),
  new Song({ title: "Song 2" }),
  new Song({ title: "Song 3" }),
]);

//2)calling add method
songs.add(new Song({ title: "Song 4" }));

working with collections

var songs = new Songs();
songs.add(new Song({ title: "SOng 1", genre: "Jazz", downloads: 110 }), {
  at: 0,
});
songs.push(new Song({ title: "Song 2", genre: "Jazz", downloads: 90 }));

var jazzSongs = songs.filter({ genre: "Jazz" });

var firstJazzSong = songs.find({ genre: "Jazz" });

console.log("Jazzsongs:", jazzSongs);
console.log("first jazz song", firstJazzSong);

var filteredSongs = songs.where({ genre: "Jazz", title: "Song 2" });
console.log("Filtered Songs", filteredSongs);

var topDownloads = songs.filter(function (song) {
  return song.get("downloads") > 100;
});
console.log("Top downloads", topDownloads);

songs.each(function (song) {
  console.log(song);
});
