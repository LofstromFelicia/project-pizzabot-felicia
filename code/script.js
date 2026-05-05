const startOrder = () => {
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
  const age = prompt("Is this food for a child, an adult or a family? Please enter your age (or type '99' for Family Size):")

  let size = ""
  let price = 0

  if (age >= 18 && age < 90) {
    size = "One adult sized"
    price = 150
  } else if (age < 18) {
    size = "One child sized"
    price = 100
  } else if (age >= 90) {
    size = "One giant family sized"
    price = 350
  }

  const confirmation = prompt(`
  ${size} ${foodSubtype} will be prepared for you. 
  That will be ${price} kr.
  Are you sure you want to order this?
  1 - Yes
  2 - No
  `)

  // Step 5 - Order confirmation
  if (confirmation === "1") {
    alert(`Thank you for your order, ${userName}! Your meal will be prepared. See you soon!`)
  } else {
    alert("No problem, come back another time if you get hungry!")
  }
}