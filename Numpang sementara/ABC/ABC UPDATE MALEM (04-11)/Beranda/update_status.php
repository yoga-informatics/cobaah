<?php
session_start();
include 'koneksi.php'; // Include your database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $status = $_POST['status'];
    $idsm = $_POST['idsm'];

    // Update the status of the letter
    $updateQuery = "UPDATE tb_sm SET status = 3 WHERE id_sm = '$idsm'";
    if (mysqli_query($koneksi, $updateQuery)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => mysqli_error($koneksi)]);
    }
}
?>
