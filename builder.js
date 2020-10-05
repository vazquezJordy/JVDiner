

var mainEntreeMenu = {
  pizza : 6.29,
  hamburbger: 8.25,
  lassana: 9.78,
};

var sidesMenu = {
  fries: 2.99,
  potatos: 2.99,
  apples: 2.39,
};

function greeting() {
 
  alert("Welcome to Jordy'S dinner! Please take a look at our following menu options. ")
  alert('Entree Menu')
  alert(mainEntreeMenu)
  alert('Sides')
  alert(sidesMenu)
};

function clientOrder() {
  var total = 0;
  greeting()
  var entreeSelection = prompt('Please select an entree from the entree menu');
  
  alert(`good choice! The ${entreeSelection} has been a very popular item this week...`);

  if (entreeSelection === 'pizza') {
     total += mainEntreeMenu.pizza
     let pizza = mainEntreeMenu.pizza
     alert(
      `and the price for this item is $${pizza}`
     )
  } else if (entreeSelection == 'hamburbger' || 'burger') {
     total += mainEntreeMenu.hamburbger
     let hamburbger = mainEntreeMenu.hamburbger
     alert(
      `and the price for this item is $${hamburbger}`
     )
  } else if (entreeSelection += 'lassana') {
     total += mainEntreeMenu.lassana
     let lassana = mainEntreeMenu.lassana
     alert(
      `and the price for this item is $${lassana}`
     ) 
  }

  
  var firtSide = prompt('Let move on. Please tell me your first selection for your side!');

  if (firtSide === 'fries') {
    total += sidesMenu.fries
    let fries = sidesMenu.fries 
    alert(`fries are $${fries} also`)
  } else if (firtSide === 'potatos') {
    total += sidesMenu.potatos
    let potatos = sidesMenu.potatos 
    alert(`the potatos are $${potatos} also`)
  }else if (firtSide === 'apples') {
    total += sidesMenu.apples
    let apples = sidesMenu.apples 
    alert(`apples are $${apples} also`)
  }
  

  alert(`I tried the ${firtSide} earlier today and they were delicious!'`);

  var secondSide = prompt('Okay now what would you like for your second side?');

  if (secondSide === 'fries') {
    total += sidesMenu.fries
    let fries = sidesMenu.fries 
    alert(`fries are $${fries}.`)
  } else if (secondSide === 'potatos') {
    total += sidesMenu.potatos
    let potatos = sidesMenu.potatos 
    alert(`the potatos are $${potatos}.`)
  }else if (secondSide === 'apples') {
    total += sidesMenu.apples
    let apples = sidesMenu.apples 
    alert(`apples are $${apples}.`)
  }

  alert(`Great choice! I will now go ahead and place your order`);
  alert(`Thank you for dinning with us, we hope to see you soon! Your total bill today is $${(total.toFixed(2))}`)
  
}
// function price(entreeSelection) {
//   if (entreeSelection === 'pizza') {
//     alert("$.99")
//   }
// };
clientOrder()
