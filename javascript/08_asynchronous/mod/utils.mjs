function promiseExecutor(resolve,reject){
    setTimeout(()=> {
        console.log("Do something before Promise has done");

        // Result of Async Procces
        const number = Math.random();

        // value fulfilled
        if (number>0.5){
            resolve("You did it")
        }

        else{
            reject("Sorry, something went wrong")
        }
    },2000);
}

export function doSomething(){
    return new Promise(promiseExecutor);
}