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

// Ouput: ✔ should add correctly (0.8373ms)