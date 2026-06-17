import { sumNuber } from "./06_modularitation_browser.js";

const resultElement = document.getElementById('result');

const result = sumNuber(10,90);
resultElement.textContent = `Result of 10 + 90 is: ${result}`;