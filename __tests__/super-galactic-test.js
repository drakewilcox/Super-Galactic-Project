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
  test('should return the mount of years that user has to live based on life expetency', () => {
    calculator.exp();
    expect(calculator.lifeLeft()).toEqual(51);
  })

});