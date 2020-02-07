export class Calculator {
  contructor() {
    this.age = "";
    this.mercuryAge = "";
    this.venusAge = "";
    this.marsAge = "";
    this.jupiterAge = "";
    this.sex = "";
    this.lifeExp = "";
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
}