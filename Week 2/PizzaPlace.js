// Step 1: Inside your JS file, create two variables: pizzaPlace and numberOfToppings.
// Step 2: Have the variables reference the name of your Pizza Place and the number of toppings your Pizza Place offers.
let pizzaPlace = "Khadijah's Famous Pizza";

let numberOfToppings = 11;

// Step 3: Print the variables and their types.
console.log(pizzaPlace, "is a", (typeof pizzaPlace), "data type.");

console.log(numberOfToppings, "is a", (typeof numberOfToppings), "data type.");

// Step 4: Print a template literal that uses both variables to construct a short sentence about your Pizza Place.
console.log(`At ${pizzaPlace} you can have up to ${numberOfToppings} different toppings on your pizza for no extra charge!`);

// Step 5: Construct an if statement that prints "Quality, not quantity." if you offer less than 10 toppings, or "A whole lot of pizza." if you offer 10 or more toppings.
if (numberOfToppings > 10) {
console.log("A whole lot of pizza.");
} else {
  console.log("Quality, not quantity.");
}
