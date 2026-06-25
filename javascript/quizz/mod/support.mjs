const API = {
    fetch(delay,simulateError = false){
        return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                if (simulateError){
                    return reject(new Error(`Error from delay${delay}`));
                }
                return resolve(`Data from delay${delay}`);
            },delay);
        });
    }
};