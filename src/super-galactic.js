export class Calculator {
  contructor() {
    this.age = 0;
    this.mercuryAge = 0;
    this.venusAge = 0;
    this.marsAge = 0;
    this.jupiterAge = 0;
    this.sex = "";
    this.lifeExp = 0;
    this.lifeLeft = 0
    this.planetLifeLeft = [];
    this.lifeOverExp = 0
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
    } else {
      this.lifeLeft = this.lifeExp - this.age; 
    }
    return this.lifeLeft
  }
  planetLifeLeft() {
    let planetLifeLeft = {}
    planetLifeLeft.mercury = Math.floor(this.lifeLeft / .24);
    planetLifeLeft.venus = Math.floor(this.lifeLeft / .62);
    planetLifeLeft.mars = Math.floor(this.lifeLeft / 1.88);
    planetLifeLeft.jupiter = Math.floor(this.lifeLeft / 11.86);

    this.planetLifeLeft = planetLifeLeft;
  }
}