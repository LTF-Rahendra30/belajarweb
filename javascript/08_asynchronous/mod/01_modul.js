// Simulaton make Coffe 

export function  makeCoffe(){
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Plase wait, The barista is making your coffee in ${inSecond} second`);

    setTimeout(() => {
        console.log("The barista has finished making coffee.");
    },estimationTime);
}