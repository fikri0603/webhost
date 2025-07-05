<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $tanggal = $_POST['tanggal'];

    // Simpan data ke file .txt
    $file = fopen("janji_konsultasi.txt", "a");
    fwrite($file, "Nama: $nama, Tanggal: $tanggal\n");
    fclose($file);

    // Redirect kembali ke halaman utama setelah berhasil
    header("Location: index.html");
    exit();
}
?>