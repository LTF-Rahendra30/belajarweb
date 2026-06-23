function ambilDataSync() {
  console.log("1. Start download data (Sync)...");
  // Simulasi proses macet / memblokir waktu selama 3 detik
  const waktuMulai = Date.now();
  while (Date.now() - waktuMulai < 2000) {} 
  console.log("2. Done, Successed Download! (Sync)");
}

ambilDataSync();
// Output:
// 1. Start download data (Sync)...
// 2. Done, Successed Download! (Sync), printed after 2 second
