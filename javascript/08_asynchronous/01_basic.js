
// Sync
function ambilDataSync() {
  console.log("1. Start download data (Sync)...");
  // Simulasi proses macet / memblokir waktu selama 3 detik
  const waktuMulai = Date.now();
  while (Date.now() - waktuMulai < 2000) {} 
  console.log("2. Done, Successed Download! (Sync)");
}

console.log("=== PROSES SYNC ===");
ambilDataSync();
// Output:
// 1. Start download data (Sync)...
// 2. Done, Successed Download! (Sync), printed after 2 second


// Async

function downloadSimulation(){
    return new Promise(resolve => setTimeout(() => resolve("2. Done, Successed Download! (Async)"),3000));
}

async function addDataAsync() {
    console.log("1.Start Download (Async)");
    const result = await downloadSimulation();
    console.log(result);
    
}
console.log("=== PROSES ASYNC ===");
addDataAsync();
