//JS OOPS
class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
  }
  class Uber extends Person {
    constructor(name, age, gender, distance, time) {
      super(name, age, gender);
      this.distance = distance;
      this.time = time;
    }
    calculateUberPrice() {
      const baseprice =80;
      const priceperkm = 14;
      const priceperminute = 0.79;
  
      const distanceCost = this.distance * priceperkm;
      const timeCost = this.time * priceperminute;
  
      const totalPrice = baseprice + distanceCost + timeCost;
  
      return totalPrice;
    }
  }

  const uber = new Uber('Antony Symon', 24, 'Male', 12, 21);
  uber.displayDetails();
  
  const totalPrice = uber.calculateUberPrice();
  console.log(`Total Uber price: ${totalPrice.toFixed(2)} Rs`);  
  