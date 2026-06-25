import { API,sampleErrorData,sampleSuccessData } from "./mod/support.mjs";

async function processData(data){
    const promises = data.map((item) => API.fetch(item.delay,item.simulateError));

    const results = await Promise.all(promises);

    return results;

}

processData(sampleErrorData).then(console.log).catch(console.log); // Throw exception: Error from delay 50
processData(sampleSuccessData).then(console.log).catch(console.log);