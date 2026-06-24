import { doSomething } from "./mod/utils.mjs";

function onFulfilled(doSomethingData){
    // Do your jobs when "fulfilled" happens…
    console.log(doSomethingData);
}

function onRejected(doSomethingError) {
  // Do your jobs when "rejected" happens…
  console.log(doSomethingError);
}

doSomething().then(onFulfilled, onRejected);
// Output after 2 second run:
// Do something before Promise has done
// Sorry, something went wrong