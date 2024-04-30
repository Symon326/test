const resume = {
    name: "Antony Symon",
    age: 23,
    Education: "B.Sc, MCA",
    Native: "Paramakudi",
    DoB: "16-01-2000",
    skills: ["c++", "c#", "Html"],
  };
  
  //for in
  for (const key in resume) {
    console.log(`${key}: ${resume[key]}`);
  };

console.log("====")
console.log("");
const keys = Object.keys(resume);

//for
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = resume[key];
  console.log(`${key}: ${value}`);
};

//for of
for (const [key, value] of Object.entries(resume)) {
    console.log(`${key}: ${value}`);
  };

  //for each
  Object.keys(resume).forEach(function(key) {
    console.log(key + ": " + resume[key]);
  });
  
  