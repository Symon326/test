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
  
  class UberPriceCalculator {
    constructor(distance, time) {
      this.distance = distance;
      this.time = time;
    }
  
    calculate() {
      const baseprice = 80;
      const pricePerkm =14.50;
      const pricePerMinute = 0.75;
  
      const distanceCost = this.distance * pricePerkm;
      const timeCost = this.time * pricePerMinute;
  
      const totalPrice = baseprice + distanceCost + timeCost;
  
      return totalPrice;
    }
  }
  
  const person1 = new Person('Antony Symon',24,'Male');
  person1.displayDetails();
  
  const distance = 15;
  const time = 30;
  
  const priceCalculator = new UberPriceCalculator(distance, time);
  const totalPrice = priceCalculator.calculate();
  console.log(`Total Uber price: ${totalPrice.toFixed(2)} Rs`);
  