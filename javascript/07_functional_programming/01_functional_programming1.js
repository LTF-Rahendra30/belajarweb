
// Original Data
const name =  ['Harry', 'Ron', 'Jeff', 'Thomas'];

// This is immuntable and does not damage the original data
const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]