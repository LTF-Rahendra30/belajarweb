// Simple Async-Await
import { doSomething } from "./mod/04_moduls.mjs";

async function promiseWithAsyncAwait() {
    try{
        console.log("Start");
        
        const result = await doSomething();
        console.log(result);
        
        console.log("End");
    } catch (error){
        console.log(error.massage);
    }
}

promiseWithAsyncAwait();
/* Output:
Start.
You did it.
End.
*/