
var mainEntreeMenu = {
    pizza : 6.29,
    hamburbger: 8.25,
    lassana: 9.78,
    chicken_alfredo: 11.78,
    tour_of_italy: 14.87,
    shirmp_scami: 10.99,
    fettuccine: 13.99,
    seafood_alfredo: 18.79,
  }
  
  var sidesMenu = {
    fries: 2.99,
    macaroni_and_cheese: 4.29,
    cheese_fries: 5.99,
    potatos: 2.99,
    apples: 2.39,
    oranges: 1.99,
    salad: 0.99,
  }
  
  function greeting() {
    // for(var key in mainEntree) {
    //   var value = mainEntree.key
    //   alert(value)
    // }
    alert("Welcome to Jordy'S dinner! Please take a look at our following menu options. ")
    alert('Entree Menu')
    alert(mainEntreeMenu)
    alert('Sides')
    alert(sidesMenu)
  } //we still need to call the greeting function in the main function
  
  function clientOrder() {
    greeting()
    var entreeSelection = prompt('Please select an entree from the entree menu')
    
    alert(`good choice! The ${entreeSelection} has been a very popular item this week...`)
    
    var firtSide = prompt('Let move on. Please tell me your first selection for your side!')
  
    alert(`I tried the ${firtSide} earlier today and it was delicious!'`)
  
    var secondSide = prompt('Okay now what would you like for your second side?')
  
    alert(`Great choice! I will now go ahead and place your order`)
  }
  clientOrder()

  const isEqual = (obj1, obj2) => {
       const obj1Keys = Object.keys[obj1]
       const obj2Keys = Object.keys[obj2]

       if (obj1Keys.length !== obj1Keys.length) {
           return 'Im sorry can you repeat that one more time'
       } 
       for (let objKey of obj1Keys) {
           if(obj1[objKey] !== obj2[objKey]) {
            return `${ob}`
           }
       }
  }
  
  // var person = prompt('Enter entre')
  // var sides = prompt('enter 1st sides')