<?php
session_start();
include 'koneksi.php';

// Enable error reporting for debugging (Disable in production)
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>E-Office</title>
    <link rel="stylesheet" href="arsip.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="header">
        <div class="logo">
            <img src="../image/logo.png" alt="Logo" />
            <div class="logo-text">
                <h1>E-OFFICE</h1>
                <p>KODIKLAT TNI AD</p>
            </div>
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
    <main class="container">
        <h1>Arsip Surat Keluar</h1>
        
        <?php
        // Display status messages
        if (isset($_GET['status'])) {
            if ($_GET['status'] == 'success') {
                echo '<div class="alert alert-success" role="alert">Data berhasil dihapus.</div>';
            } elseif ($_GET['status'] == 'error') {
                echo '<div class="alert alert-danger" role="alert">Terjadi kesalahan saat menghapus data.</div>';
            }
        }
        ?>

        <table class="table table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Tanggal Arsip</th>
                    <th>Lokasi Arsip</th>
                    <th>Nomor Surat</th>
                    <th>Actions</th> <!-- Added Actions Column -->
                </tr>
            </thead>
            <tbody>
                <?php
                // Fetch archived data
                $sql = "SELECT * FROM tb_arsip_sk";
                $result = $koneksi->query($sql);

                if ($result->num_rows > 0) {
                    $no = 1; // Initialize the row number
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>
                            <td>{$no}</td> 
                            <td>{$row['tgl_arsip_sk']}</td>
                            <td>{$row['lokasi_arsip_sk']}</td>
                            <td>{$row['no_sk']}</td>
                            <td>
                                <a href='hapus_arsip_sk.php?id={$row['id_arsip_sk']}' class='btn-arsip' onclick='return confirm(\"Yakin ingin menghapus data?\")'>Hapus</a>
                            </td>
                        </tr>";
                        $no++; // Increment the row number
                    }
                } else {
                    echo "<tr><td colspan='5'>No records found</td></tr>";
                }
                ?>
            </tbody>
        </table>
    </main>

    <footer>
        <p>&copy; 2024 E-Office. All rights reserved.</p>
    </footer>
</body>
</html>
