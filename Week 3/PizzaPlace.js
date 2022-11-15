let pizzaToppings = [
  "Pickles",
  "Green Peppers",
  "Onions",
  "Olives",
  "Hot Peppers",
  "Beef",
  "Chicken"
];
function greetCustomer() {
  console.log("Welcome to Khadijah's Poppin Pizza. Here, we offer a variety of toppings. They include:");
  for (let topping of pizzaToppings) {
    console.log(topping);
  }
}
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings}. Coming up!`)
  return [size, crust, toppings];

};
function preparePizza([size, crust, ...toppings]) {
  console.log("Cooking Up Some Pizza!")
  let pizza = {
    size: size,
    crust: crust,
    toppings: toppings
  };
  return pizza;
};
function servePizza(pizza) {
  console.log(`Order up! One ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}!`);
  return pizza;
};

greetCustomer();
servePizza(preparePizza(getPizzaOrder("Medium", "thin crust", "chicken", "hot peppers", "olives")));
