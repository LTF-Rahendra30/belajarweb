// Simple Example

// const promise1 = new Promise((resolve)=>
//     setTimeout(()=> resolve(1),1000)
// );
// const promise2 = new Promise((resolve,reject) => 
//     setTimeout(() => reject(new Error("Upss!")),2000)
// );

// const promise3 = new Promise((resolve) => setTimeout(() => resolve(3),3000));

// Promise.all([promise1,promise2,promise3])
//     .then((values) =>{
//         console.log("Succes");
//         console.log(values);
//     })
//     .catch((error)=>{
//         console.log("Failed");
//         console.log(error.message);
//     });
/* Output:
Failed
Ups!
*/

// Because Promise.all() will rejection connditiion if one of them fails

// ======== With Promise.allSettled() ==========

const promise4 = new Promise((resolve)=>
    setTimeout(()=> resolve(1),1000)
);
const promise5 = new Promise((resolve,reject) => 
    setTimeout(() => reject(new Error("Upss!")),2000)
);

const promise6 = new Promise((resolve) => setTimeout(() => resolve(3),3000));

Promise.allSettled([promise4,promise5,promise6])
    .then((values) =>{
        console.log("Succes");
        console.log(values);
    })
    .catch((error)=>{
        console.log("Failed");
        console.log(error.message);
    });

/* Succes
[
  { status: 'fulfilled', value: 1 },
  {
    status: 'rejected',
    reason: Error: Upss!
        at Timeout._onTimeout (C:\xxxx\xxx\xxxx\Dokumen\belajarweb\javascript\08_asynchronous\09_concurrency_promise.js:34:29)
        at listOnTimeout (node:internal/timers:605:17)
        at process.processTimers (node:internal/timers:541:7)
  },
  { status: 'fulfilled', value: 3 }
] */