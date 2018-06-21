// let object1 = {}
// let object2 = new Object()
//
// let person = {
//   firstname: "vinni",
//   lastname: "hoke",
//   age: 28,
//   favorites: ["cookies", "pizza"],
//   desc: {
//     haircolor: "brown",
//     eyecolor: "brown"
//   }
// }
//
// //This is called dot notation
// object1.food = "pizza";
// console.log(object1);
//
// //This is called bracket notation
// object1['color'] = 'blue';
// console.log(object1.age);
//
// //There are a few different loops you can access specifically for objects.
//
// //For in loop - A general purpose loop for objects
// for(let key in person){ //The word key here is a 'let variable'. It can be any value. In an array you have many values, but in objects you always need a key to access them.
//   console.log('key', key)
// }
//
// //For of loop - More for accessing arrays
// for(let [key, value] of Object.entries(person)){
//   console.log(key, value)
// }
//
// //Clone, or copy, the properties of the old object, and add them to a new object.
//
// let newObj = Object.create(object1);
//   newObj.flower = 'rose';
//   newObj.color = 'yellow';
//   console.log(newObj, "New Object");
//   console.log(object1, "Old Object");
//

let recipe = {
  flour: '1 cup',
  salt: '1 tbsp',
  eggs: 3,
  vailla: true,
  rum: 'hella'
};

console.log(recipe);
let clone = Object.create(recipe);
console.log(Object.getPrototypeOf(clone), 'This is the prototype');

let vehicle = {
  wheels: 2,
  windows: null,
  enginesize: '4 cylinder',
  doors: 4
}

let motorcycle = Object.create(vehicle);
motorcycle.wheels = 2;

let stringExample = new String("Whatup fam");
let arrayExample = new Array(["cheese", 222, [2]]);
let objectExample = new Object({cheeseIsGood: true});
let booleanExample = new Boolean(true);
let numberExample = new Number(94);

console.log(stringExample, arrayExample, objectExample, booleanExample, numberExample);

function Spaceship(rockets, fluxCapacitor, pilot, blasters, shield, landingGear) { //Function definition; but this is a constructor function.
  this.rockets = rockets;
  this.fluxCapacitor = fluxCapacitor;
  this.pilot = pilot;
  this.blasters = blasters;
  this.shield = shield;
  this.landingGear = landingGear;
}; //A Prototype function will return an 'Object' with all of these properties inside of it.

let firefly = new Spaceship(4, false, "Mel Gibson", Infinity, false, 'Broken');

console.log(firefly);

// Something we can use for the final.

function todo(task, dueDate, status, done, timeElapsed, dueTime, priority, tags, labels){
  this.name = task;
  this.name = dueDate;
  this.name = status;
  this.name = done;
  this.name = timeElapsed;
  this.name = dueTime;
  this.name = dueDate;
  this.name = priority;
  this.name = tags;
  this.name = labels;
}

let cart = [];

function Product(name, price, description){ //Anytime you make a constructor function make it a capital.
  this.name = name;
  this.price = price;
  this.description = description;
};

let soapBtn = document.forms.orderForm.soap;
soapBtn.addEventListener('click', e => {
  e.preventDefault();
  let soap = new Product('soap', 2.99, "Makes ya clean!");
  cart.push(soap);
  localStorage.setItem('soap', JSON.stringify(soap)); //Methods are always attached to an object, and take the object in as an argument. This takes two arguments, the first is what we'd like to call it, and the second is what we are storing. JSON.stringify takes the object, and makes it a String, which can be stored in localStorage.
});

function getSoap(){
  let storedItem = localStorage.getItem('soap');
  console.log(JSON.parse(storedItem));
}

getSoap();
