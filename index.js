const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  Recipe.create({
    title: "Baked Chicken Wings",
    level: "Amateur Chef",
    ingredients: ["Chicken Wings","Black Pepper", "Season Salt", "Garlic Powder", "Lipton Onion Soup" ],
    cuisine: "Soul Food",
    dishType: "Dish",
    image: "https://hips.hearstapps.com/del.h-cdn.co/assets/17/22/1496171764-baked-chicken-wingsl3.jpg",
    duration: 70,
    creator:"Antquanique",
  })
  .then(newRecipe => {console.log("Here is your new Recipe"), newRecipe.title} )
  .catch(err => {console.log("An error happened: The recipe was not added to the db"), err});


Recipe.insertMany(data)
  .then(newRecipes => {console.log(newRecipes.title), newRecipes})
  .catch(err => {console.log("An error happened: The recipes were not added to the db", err), err})

  
Recipe.updateOne({title: "Rigatoni alla Genovese"}, {duration: 100})
  .then(recipeUpdate => {console.log("the Recipe duration was updated to 100"), recipeUpdate})
  .catch(err => {console.log("An error happened: The recipe was not updated", err), err})


Recipe.deleteOne({title:"Carrot Cake"})
  .then(deleteRecipe => {console.log("The recipe was deleted"), deleteRecipe})
  .catch(err => {console.log("The recipe was not deleted", err), err})


  mongoose.connection.close()