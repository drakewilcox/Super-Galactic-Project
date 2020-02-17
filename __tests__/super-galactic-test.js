import { Calculator } from './../src/super-galactic.js';

describe ('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
    calculator.addAge(30);
    calculator.addSex('male');
  });
  test('should return the inputted age of the user', () => {
    expect(calculator.age).toEqual(30);
  });
  test('should return the age of user as age on Mercury', () => {
    calculator.mercury();
    expect(calculator.mercuryAge).toEqual(125);
  });
  test('should return the age of user as age on Venus', () => {
    calculator.venus();
    expect(calculator.venusAge).toEqual(48);
  });
  test('should return the age of the user as age on Mars', () => {
    calculator.mars();
    expect(calculator.marsAge).toEqual(15);
  });
  test('should return the age of the user as age on Jupiter', () => {
    calculator.jupiter();
    expect(calculator.jupiterAge).toEqual(2);
  });
  test('should return the inputted sex of the user', () => {
    expect(calculator.sex).toEqual('male');
  });
  test('should return the life expetency of user based on input of male', () => {
    calculator.exp();
    expect(calculator.lifeExp).toEqual(76);
  });
  test('should return the life expetency of user based on input of female', () => {
      calculator.addSex('female');
      calculator.exp();
      expect(calculator.lifeExp).toEqual(81);
  });
  test('should return the amount of years that user has to live based on life expetency', () => {
    calculator.exp();
    expect(calculator.lifeLeft()).toEqual(46);
  });
  test('should return the amount of years user has left to live on each planet', () => {
    calculator.exp();
    calculator.lifeLeft();
    calculator.planetLifeLeft();
    expect(calculator.planetLifeLeft.mercury).toEqual(191);
    expect(calculator.planetLifeLeft.venus).toEqual(74);
    expect(calculator.planetLifeLeft.mars).toEqual(24);
    expect(calculator.planetLifeLeft.jupiter).toEqual(3);
  });
  test('should return life over expectancy', () =>{
    calculator.addAge(90);
    calculator.exp();
    calculator.lifeLeft();
    expect(calculator.lifeOverExp).toEqual(14);
  });
  test('should return the amount of years user has lived over the life expectancy on each planet', () => {
    calculator.exp();
    calculator.addAge(90);
    calculator.lifeLeft();
    calculator.planetLifeLeftOver();
    expect(calculator.planetLifeLeftOver.mercury).toEqual(58);
    expect(calculator.planetLifeLeftOver.venus).toEqual(22);
    expect(calculator.planetLifeLeftOver.mars).toEqual(7);
    expect(calculator.planetLifeLeftOver.jupiter).toEqual(1)
  });
});