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
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
