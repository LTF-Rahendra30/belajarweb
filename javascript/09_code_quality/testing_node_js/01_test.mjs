import {test} from "node:test";
import assert from "node:assert";
import { add } from "./02_calculator.mjs";

test("should add correctly", ()=>{
    // Arrage
    const operandA = 1;
    const operandB = 1;

    const actualValue = add(operandA,operandB);

    const expectedvalue = 2;
    assert.equal(actualValue,expectedvalue)
});

// Ouput: 
/* ✔ should add correctly (0.8373ms)

ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 9.0444 */

// =========== Try String as a Parameters function ==========

test("Should throw an error if string passed on numA parameter", () => {
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

// Output:
/* 
✖ failing tests:

test at 01_test.mjs:30:1
✖ Should throw an error if string passed on numA parameter

{
    generatedMessage: false,
    code: 'ERR_ASSERTION',
    actual: undefined,
    expected: [Function],
    operator: 'throws',
    diff: 'simple'
  }
*/