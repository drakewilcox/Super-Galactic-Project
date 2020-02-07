import { Calculator } from './../src/super-galactic.js';

describe ('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
    calculator.addAge(30);
  });
  test('should return the inputted age of the user', () => {
    expect(calculator.age).toEqual(30);
  });
  test('should return the age of user as age on Mercury', () => {
    expect(calculator.mercuryAge).toEqual()
    
  })

});