// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt("Please enter your name:")

alert(`Hi ${userName}! Nice to meet you. Let's get started with your order.`)

// Step 2 - Food choice
const foodChoice = prompt(`
  What would you like to order?
  Please enter the number of your choice:
  1 - Pizza
  2 - Pasta
  3 - Salad
  `)

let selectedFood = ""

if (foodChoice === "1") {
  selectedFood = "Pizza"
} else if (foodChoice === "2") {
  selectedFood = "Pasta"
} else if (foodChoice === "3") {
  selectedFood = "Salad"
} else {
  alert("Invalid choice, please restart and choose a number between 1 and 3.")
}

alert(`You chose ${selectedFood}!`)

// Step 3 - Subtype choice
let foodSubtype = ""

if (selectedFood === "Pizza") {
  foodSubtype = prompt(`
    Select a Pizza type:
    1 - Vesuvio
    2 - Pepperoni 
    3 - Hawaiian
    `)
  if (foodSubtype === "1") foodSubtype = "Vesuvio"
  else if (foodSubtype === "2") foodSubtype = "Pepperoni"
  else if (foodSubtype === "3") foodSubtype = "Hawaiian"
  else {
    alert("Invalid choice! We'll give you our signature Pepperoni by default.")
    foodSubtype = "Pepperoni"
  }

} else if (selectedFood === "Pasta") {
  foodSubtype = prompt(`
    Select a Pasta type:
    1 - Carbonara
    2 - Bolognese
    3 - Veggie
    `)
  if (foodSubtype === "1") foodSubtype = "Carbonara"
  else if (foodSubtype === "2") foodSubtype = "Bolognese"
  else if (foodSubtype === "3") foodSubtype = "Veggie"
  else {
    alert("Invalid choice! We'll give you our signature Carbonara by default.")
    foodSubtype = "Carbonara"
  }

} else if (selectedFood === "Salad") {
  foodSubtype = prompt(`
    Select a Salad type: 
    1 - Caesar
    2 - Chef
    3 - Tuna
    `)
  if (foodSubtype === "1") foodSubtype = "Caeser"
  else if (foodSubtype === "2") foodSubtype = "Chef"
  else if (foodSubtype === "3") foodSubtype = "Tuna"
  else {
    alert("Invalid choice! We'll give you our signature Chef sallad by default.")
    foodSubtype = "Chef"
  }
}

alert(`Excellent choice, you ordered the ${foodSubtype}!`)

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
