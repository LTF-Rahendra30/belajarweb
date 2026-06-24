export function makeCoffe(name,callbck){
    const estimationTime = 5000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Plase wait, The barista is making your coffee in ${inSecond} second`);

    setTimeout(()=> {
        const number = Math.random();
        if (number >0.3){
            isSuccess = true;
        }

        if (!isSuccess){
            callbck(new Error("Fail to make a coffe"),null);
            return;
        }
        
        console.log("The barista has finished making coffee.");
        callbck(null,name);
    },estimationTime);
}

export function sendCoffe(callback){
    const estimationTime = 2000;
    let isSuccess = false;
    console.log("The waiter is bringing your coffee");
    
    setTimeout(()=> {
        const number = Math.random();
        if (number > 0.3) {
            isSuccess = true;
        }
        
        if(!isSuccess){
            callbck(new Error("Fail to send coffe"),null);
            return;

        }
        console.log("The Waiter has arrived");
        callback(null,name);
    },estimationTime);
}