async function ambilData() {
  console.log("Memulai..."); 
  // Menunggu data dari API tanpa menghentikan seluruh program
  const respon = await fetch('https://api.contoh.com/data');
  const data = await respon.json();
  console.log("Selesai!", data);
}