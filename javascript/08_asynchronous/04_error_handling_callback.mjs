import { makeCoffe,sendCoffe } from "./mod/02_modul.mjs";

const  order = "Expresso Coffe";
console.log(`I ordered ${order} in the cafe`);

makeCoffe(order,(makeCoffeError,makeCoffeData) => {
    if (makeCoffeError){
        console.error(makeCoffeError);
        return;
    }

    sendCoffe(makeCoffeData, (sendCoffeError,sendCoffeData)=>{
        if(sendCoffeError){
            console.error(makeCoffeError);
            return;
        }
        console.log(`Barista give you ${sendCoffeData}`)
        console.log(`I got ${sendCoffeData} and finished it`)
    })
})