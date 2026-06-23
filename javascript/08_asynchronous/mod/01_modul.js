// Simulaton make Coffe 

export function  makeCoffe(callback){
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Plase wait, The barista is making your coffee in ${inSecond} second`);

    setTimeout(() => {
        console.log("The barista has finished making coffee.");
        
        callback();
    },estimationTime);
    
}

export function sendCoffe(callback){
    const estimationTime = 2000;
    console.log("The waiter is bringing your coffee");

    setTimeout(()=> {
        console.log("The Waiter has arrived");
        callback();
    },estimationTime);
}