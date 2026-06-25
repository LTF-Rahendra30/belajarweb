import {describe,it} from "node:test";
import assert from "node:assert";
import { add } from "./02_calculator.mjs";

describe('Calculator', () => {
  it('should add correctly', () => {
    // Arrange
    const operandA = 1;
    const operandB = 1;

    // Action
    const actualValue = add(operandA, operandB);

    // Assert
    const expectedValue = 2;
    assert.equal(actualValue, expectedValue);
  });

  it('should throw an error if string passed on numA parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = '5';
      const operandB = 4;

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });

  it('should throw an error if string passed on numB parameter', () => {
    const potentialErrorToBeThrew = () => {
      // Arrange
      const operandA = 10;
      const operandB = '8';

      // Action
      add(operandA, operandB);
    };

    // Assert
    assert.throws(potentialErrorToBeThrew, Error);
  });
});

/* 
Output:
▶ Calculator
  ✔ should add correctly (0.7406ms)
  ✔ should throw an error if string passed on numA parameter(0.4914ms)
  ✔ should throw an error if string passed on numB parameter(1.1428ms)
✔ Calculator (3.7118ms)
ℹ tests 3
ℹ suites 1
ℹ pass 3
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 10.8029
*/