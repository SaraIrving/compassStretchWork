/*We need to complete a function called chooseRecipe(), 
which will receive three parameters:
 - An array of ingredients in stock at Bakery A 
 - An array of ingredients in stock at Bakery B 
 - An array of recipe objects. 
 Each recipe has a name property(string) and
  an ingredient property(array)


We are limiting our search to two ingredient recipes.
We want to find a recipe that utilizes 
one ingredient from Bakery A and one from Bakery B.

Our chooseRecipe() function should return the name of the correct recipe.

There will always be a single correct answer, 
and you will NOT need to consider special cases. 
For example, you do NOT need to worry about cases 
where one bakery has BOTH the ingredients for a recipe.

This one is a doozy! We might want to start by 
creating a helper function called ingredientCheck()
that will take in one bakery at a time, 
along with the recipes.ingredients array to check 
if the given bakery possesses any of the ingredients
from that recipe.
*/

/* Strategy:
-use a for of loop to isolate the receipe objects
-within that: call a function that does: loop through the ingredients of each bakery
  to see if they equal to either of the ingredients in the receipe 
  object
  - the set a condition that there must be an ingredient match
    from bakery A and bakery B (compare the output of the two
      ingredient finding functions)
    -if there is then choose that receipe 
*/


const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (recipeOption of recipes){
    if (findIngredient(bakeryA, recipeOption.ingredients) && findIngredient(bakeryB, recipeOption.ingredients)) {
      return recipeOption.name; 
    }
  }

}


const findIngredient = function(bakery, ingredientArray) {
  for (let i = 0; i < bakery.length; i++) {
    if (bakery[i] === ingredientArray[0] || bakery[i] === ingredientArray[1]) {
    return true;
    }
  }
}








//TESTS:
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


/*
Expected Output:
Persian Cheesecake
Nima's Famous Dijon Raisins
*/


