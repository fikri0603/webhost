// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Simulasi data jadwal konsultasi (biasanya akan diambil dari database)
  let jadwalKonsultasi = [
    { tanggal: "2024-07-10", jam: "14:00" },
    { tanggal: "2024-07-15", jam: "16:30" },
    { tanggal: "2024-07-20", jam: "10:00" },
  ];

  let jadwalContainer = document.getElementById("jadwal-konsultasi");

  // Mengisi div jadwal-konsultasi dengan data jadwal
  jadwalKonsultasi.forEach(function (jadwal) {
    let jadwalElem = document.createElement("p");
    jadwalElem.textContent = `Tanggal: ${jadwal.tanggal}, Jam: ${jadwal.jam}`;
    jadwalContainer.appendChild(jadwalElem);
  });
});
