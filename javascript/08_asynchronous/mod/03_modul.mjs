export function makeCoffe(name){
    return new Promise((resolve,reject) => {
        const estimationTime = 2000;
        let isSuccess = false;

        const inSecond = Math.ceil(estimationTime / 1000);
        console.log(`Plase wait, The barista is making your coffee in ${inSecond} second`);

        setTimeout(() => {
            const number = Math.random();
            if (number > 0.3) {
                isSuccess = true;
            }

            if (!isSuccess){
                reject("Sorry, Fail make coffe");
                return;
            }

            console.log("The barista has finished making coffee.");
            resolve(name);
        },estimationTime);
    });
}

export function sendCoffe(name){
    return new Promise((resolve,reject)=> {
        const estimationTime = 2000;
        let isSuccess = false;

        console.log("The waiter is bringing your coffee");
    
        setTimeout(() =>{
            const number = Math.random();

            if (number > 0.3) {
            isSuccess = true;
            }

            if (!isSuccess){
                reject(new Error("Fail to send coffe"));
                return;
            }

            console.log("The Waiter has arrived");
            resolve(name);
        },estimationTime);
    });
}