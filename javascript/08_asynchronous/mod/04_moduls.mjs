function promiseExcecutor(resolve,reject){
    setTimeout(()=>{
        resolve("Ypu did it");
    },2000);
}

export function doSomething(){
    return new Promise(promiseExcecutor);
}