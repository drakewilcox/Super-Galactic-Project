import { Calculator } from './src/super-galactic.js';

describe ('Calculator', () => {
  let calculator;
  const age = 30;
  const sex = "male";
  beforeEach(() => {
    calculator = new Calculator(age, sex);
  });
  test('should return the inputted age of the user', () =>{
    expect(calculator.age()).toEqual(30);
  })

})