export class Calculator {
  contructor() {
    this.age = "";
    this.mercuryAge = "";
    this.venusAge = "";
    this.marsAge = "";
    this.jupiterAge = "";
    this.sex = "";
    this.lifeExp = 0;
    this.lifeLeft = ""
    this.planetLifeLeft = [];
    this.lifeOverExp = ""
    
  }
  addAge(age) {
    this.age = age;
  }
  addSex(sex) {
    this.sex = sex;
  }
  mercury() {
    this.mercuryAge = Math.floor(this.age / .24);
  }
  venus() {
   this.venusAge = Math.floor(this.age / .62);
  }

  mars() {
    this.marsAge = Math.floor(this.age / 1.88);
  }
  jupiter() {
    this.jupiterAge = Math.floor(this.age / 11.86);
  }
  exp() {
    if (this.sex === 'male') {
      this.lifeExp = 76;
    } else if (this.sex === 'female') {
      this.lifeExp = 81;
    }
  }
  lifeLeft() {
    if (this.age > this.lifeExp) {
      this.lifeOverExp = this.age - this.lifeExp;
      console.log(this.liveOverExp);
    } else {
      this.lifeLeft = this.lifeExp - this.age; 
      console.log(this.lifeLeft);
    }
    return this.lifeLeft
  }
  planetLifeLeft() {
    const planetLifeLeft = {mercury: "", venus: "", mars: "", jupiter: ""}
    planetLifeLeft.mercury = Math.floor(this.lifeLeft / .24);
    planetLifeLeft.venus = Math.floor(this.lifeLeft / .62);
    planetLifeLeft.mars = Math.floor(this.lifeLeft / 1.88);
    planetLifeLeft.jupiter = Math.floor(this.lifeLeft / 11.86);

    this.planetLifeLeft = planetLifeLeft;
  }
}