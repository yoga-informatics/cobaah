<?php 
$host = "localhost";
$user = "root";
$pass = "";
$db = "kp";

$koneksi = new mysqli($host, $user, $pass, $db);

// Periksa koneksi
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}
?>
