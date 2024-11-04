<?php
session_start();
include 'koneksi.php';

// Enable error reporting for debugging (Disable in production)
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

// Query to fetch data from tb_sk table
$sql = "SELECT * FROM tb_sk";
$result = $koneksi->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Laporan Surat Keluar</title>
    <link rel="stylesheet" href="d.css">
    <link rel="stylesheet" href="../css/laporan_suratmasuk.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        @media print {
            .header,
            nav,
            .search-profile,
            .pagination,
            .no-print {
                display: none; /* Hide these elements during print */
            }
            .header {
                display: block;
                text-align: center; /* Center-align content for printing */
            }
            .header .logo {
                margin-bottom: 10px; /* Space between logo and text */
            }
            .header .logo-text {
                margin-top: 10px; /* Space between logo and text */
                text-align: center; /* Center the text below the logo */
            }
            .header img {
                max-width: 150px; /* Adjust size for printing */
                margin: 0 auto; /* Center the logo */
                display: block; /* Ensure it's a block element for centering */
            }
            .container {
                margin: 0;
                padding: 0;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">
            <img src="../image/logo.png" alt="Logo" />
        </div>
        <div class="logo-text">
            <h1>E-OFFICE</h1>
            <p>KODIKLAT TNI AD</p>
        </div>
        <nav>
            <ul>
                <li><a href="index.php">Dashboard</a></li>
                <li class="dropdown">
                    <a href="" class="dropbtn">Master Data</a>
                    <div class="dropdown-content">
                    <a href="arsip_sm.php">Arsip Surat Masuk</a>
                    <a href="arsip_sk.php">Arsip Surat Keluar</a>                        
                    <a href="kategori.php">Kategori Surat</a>
                    </div>
                </li>
                <li><a href="surat_masuk.php">Surat Masuk</a></li>
                <li><a href="surat_keluar.php">Surat Keluar</a></li>
                <li><a href="pengguna.php">Pengguna</a></li>
                <li class="dropdown">
                    <a href="" class="dropbtn">Laporan</a>
                    <div class="dropdown-content">
                        <a href="laporan_masuk.php">Laporan Masuk</a>
                        <a href="laporan_keluar.php">Laporan Keluar</a>
                    </div>
                </li>
                <li><a href="login.php">Keluar</a></li>
            </ul>
        </nav>
        
            <div class="admin-profile">
                <i class="fas fa-user-circle"></i>
                <span>Admin</span>
            </div>
        </div>
    </div>

    <div class="container">
        <h3 class="m-0 font-weight-bold text-primary">Laporan Surat Keluar</h3>
        <button id="print-button" class="print-button no-print">Cetak Semua</button>
        <table class="data-table">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Kode</th>
                    <th>No. Surat Keluar</th>
                    <th>Tgl. Keluar</th>
                    <th>Tgl. Surat</th>
                    <th>Penerima</th>
                    <th>Perihal</th>
                </tr>
            </thead>
            <tbody>
                <?php
                if ($result->num_rows > 0) {
                    $no = 1;
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $no++ . "</td>";
                        echo "<td>" . $row["kode"] . "</td>";
                        echo "<td>" . $row["nomor_sk"] . "</td>";
                        echo "<td>" . $row["tgl_keluar"] . "</td>";
                        echo "<td>" . $row["tgl_sk"] . "</td>";
                        echo "<td>" . $row["penerima_sk"] . "</td>";
                        echo "<td>" . $row["perihal_sk"] . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "<tr><td colspan='7'>No records found</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

    <script>
        document.getElementById('print-button').addEventListener('click', function() {
            window.print();
        });
    </script>
</body>
</html>
