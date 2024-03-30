let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

const forComparing = (obj) => JSON.stringify(obj, Object.keys(obj).sort());

if (forComparing(obj1) === forComparing(obj2)) {
    console.log("The objects have the same properties.");
} else {
    console.log("The objects do not have the same properties.");
}