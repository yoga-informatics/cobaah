<?php
session_start();
include 'koneksi.php';

if (isset($_GET['id'])) {
    $id_arsip_sk = $_GET['id'];

    // Prepare and execute deletion query
    $stmt = $koneksi->prepare("DELETE FROM tb_arsip_sk WHERE id_arsip_sk = ?");
    $stmt->bind_param("i", $id_arsip_sk);

    if ($stmt->execute()) {
        header("Location: arsip_sk.php?status=success");
    } else {
        header("Location: arsip_sk.php?status=error");
    }

    $stmt->close();
} else {
    header("Location: arsip_sk.php?status=error");
}

$koneksi->close();
?>
