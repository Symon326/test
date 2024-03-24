let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

let string1 = JSON.stringify(obj1);
let string2 = JSON.stringify(obj2);

if (string1 === string2) {
  console.log("The two objects have the same properties");
} else {
  console.log("The two objects are different.");
}
