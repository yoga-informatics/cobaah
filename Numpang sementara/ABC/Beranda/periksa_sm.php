<?php
session_start();
// Include database connection
include 'koneksi.php';
if ($_SESSION['akses'] !== 'Pimpinan') {
    echo '<script language="javascript" type="text/javascript">
    alert("Anda Tidak Berhak Mengakses Halaman Ini!");</script>';
    echo "<meta http-equiv='refresh' content='0; url=index.php'>";
    exit;
}

// Check if the user is authorized
if (!isset($_SESSION['akses']) || $_SESSION['akses'] !== 'Pimpinan') {
    header('Location: login.php'); // Redirect to login page if not authorized
    exit();
}

// Fetch data from the database using prepared statements
$query = "SELECT tb_sm.id_sm, tb_sm.tgl_surat, tb_sm.nomor_agenda, tb_sm.nomor_sm, tb_sm.tgl_sm, tb_kategori.nama_kategori_s, tb_sm.pengirim
          FROM tb_sm
          JOIN tb_kategori ON tb_sm.kategori = tb_kategori.id_kategori
          ORDER BY tb_sm.tgl_sm DESC";
$stmt = mysqli_prepare($koneksi, $query);
if (!$stmt) {
    die('Query preparation failed: ' . mysqli_error($koneksi));
}
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>E-Office - Periksa Surat Masuk</title>
    <link rel="stylesheet" href="d.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .action-buttons button {
            margin-right: 5px;
        }
    </style>
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
                <li><a href="periksa_sm.php">Periksa Surat Masuk</a></li>
                <li><a href="Keluar.php">Keluar</a></li>
            </ul>
        </nav>
        <div class="search-profile">
            <div class="admin-profile">
                <i class="fas fa-user-circle"></i>
                <span><?php echo htmlspecialchars($_SESSION['nama']); ?></span>
            </div>
        </div>
    </div>
    
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Data Surat Masuk</h1>
    </div>
    
    <!-- Table Section -->
    <div class="table-responsive p-3">
        <table class="table align-items-center table-flush" id="dataTable">
            <thead class="thead-light">
                <tr class="text-center">
                    <th>No.</th>
                    <th>Tgl. Surat Masuk</th>
                    <th>No. Agenda</th>
                    <th>No. Surat Masuk</th>
                    <th>Tgl. Surat</th>
                    <th>Kategori Surat</th>
                    <th>Pengirim</th>
                    <th>Berkas</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $no = 1;
                while ($row = mysqli_fetch_assoc($result)) {
                    $idsm = htmlspecialchars($row['id_sm']);
                    $berkas_pdf = '';
                    
                    // Fetch file path
                    $dataf = "SELECT nama_file FROM file_surat WHERE surat_id='$idsm'";
                    $resultFile = mysqli_query($koneksi, $dataf);
                    if ($resultFile && mysqli_num_rows($resultFile) > 0) {
                        $rowf = mysqli_fetch_assoc($resultFile);
                        $berkas_pdf = $rowf['nama_file'];
                    }
                    
                    $filePath = 'suratmasuk/' . $berkas_pdf;
                    
                    echo "<tr class='text-center'>";
                    echo "<td>" . htmlspecialchars($no++) . "</td>";
                    echo "<td>" . htmlspecialchars($row['tgl_sm']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['nomor_agenda']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['nomor_sm']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['tgl_surat']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['nama_kategori_s']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['pengirim']) . "</td>";
                    echo "<td><a href='#' data-bs-toggle='modal' data-bs-target='#fileModal$idsm' class='btn btn-info'><i class='fas fa-file-pdf'></i> Lihat Berkas</a></td>";
                    echo "<td class='action-buttons'>
                            <button class='btn btn-success btn-sm' onclick='printLetter(\"Acc\", \"" . htmlspecialchars($row['tgl_sm']) . "\", \"" . htmlspecialchars($row['nomor_agenda']) . "\", \"" . htmlspecialchars($row['nomor_sm']) . "\", \"" . htmlspecialchars($row['tgl_surat']) . "\", \"" . htmlspecialchars($row['nama_kategori_s']) . "\", \"" . htmlspecialchars($row['pengirim']) . "\")'>Acc</button>
                            <button class='btn btn-warning btn-sm' onclick='printLetter(\"Tinjau\", \"" . htmlspecialchars($row['tgl_sm']) . "\", \"" . htmlspecialchars($row['nomor_agenda']) . "\", \"" . htmlspecialchars($row['nomor_sm']) . "\", \"" . htmlspecialchars($row['tgl_surat']) . "\", \"" . htmlspecialchars($row['nama_kategori_s']) . "\", \"" . htmlspecialchars($row['pengirim']) . "\")'>Tinjau</button>
                            <button class='btn btn-danger btn-sm' onclick='printLetter(\"Perbaiki\", \"" . htmlspecialchars($row['tgl_sm']) . "\", \"" . htmlspecialchars($row['nomor_agenda']) . "\", \"" . htmlspecialchars($row['nomor_sm']) . "\", \"" . htmlspecialchars($row['tgl_surat']) . "\", \"" . htmlspecialchars($row['nama_kategori_s']) . "\", \"" . htmlspecialchars($row['pengirim']) . "\")'>Perbaiki</button>
                          </td>";
                    echo "</tr>";
                }
                ?>
            </tbody>
        </table>
    </div>

    <!-- Modal untuk Perbaiki -->
    <div class="modal fade" id="perbaikiModal" tabindex="-1" aria-labelledby="perbaikiModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="perbaikiModalLabel">Masukkan Catatan Perbaikan</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <textarea id="catatanPerbaikan" class="form-control" rows="4" placeholder="Masukkan catatan perbaikan di sini..."></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                    <button type="button" class="btn btn-primary" id="submitCatatan">Simpan</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modals for PDF Files -->
    <?php
    mysqli_data_seek($result, 0); // Reset result pointer
    while ($row = mysqli_fetch_assoc($result)) {
        $idsm = htmlspecialchars($row['id_sm']);
        
        // Fetch file path
        $dataf = "SELECT nama_file FROM file_surat WHERE surat_id='$idsm'";
        $resultFile = mysqli_query($koneksi, $dataf);
        $filePath = '';
        if ($resultFile && mysqli_num_rows($resultFile) > 0) {
            $rowf = mysqli_fetch_assoc($resultFile);
            $filePath = 'suratmasuk/' . $rowf['nama_file'];
        }
    ?>
    <div class="modal fade" id="fileModal<?php echo $idsm; ?>" tabindex="-1" aria-labelledby="fileModalLabel<?php echo $idsm; ?>" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="fileModalLabel<?php echo $idsm; ?>">Lihat File Pdf nya</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <?php if ($filePath): ?>
                    <embed src="<?php echo htmlspecialchars($filePath); ?>" width="100%" height="600px" />
                    <?php else: ?>
                    <p>File tidak ditemukan.</p>
                    <?php endif; ?>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                </div>
            </div>
        </div>
    </div>
    <?php } ?>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
    <script>
        let suratData = {}; // Object untuk menyimpan data surat sementara

        function printLetter(status, tgl_sm, nomor_agenda, nomor_sm, tgl_surat, kategori, pengirim) {
            suratData = { status, tgl_sm, nomor_agenda, nomor_sm, tgl_surat, kategori, pengirim };

            if (status === 'Perbaiki') {
                // Tampilkan modal perbaiki
                var modal = new bootstrap.Modal(document.getElementById('perbaikiModal'));
                modal.show();
            } else {
                // Langsung print untuk status selain 'Perbaiki'
                printSurat('', suratData);
            }
        }

        document.getElementById('submitCatatan').addEventListener('click', function() {
            const catatan = document.getElementById('catatanPerbaikan').value.trim();
            printSurat(catatan || 'Tidak ada catatan perbaikan.', suratData);

            // Tutup modal setelah catatan disimpan
            var modal = bootstrap.Modal.getInstance(document.getElementById('perbaikiModal'));
            modal.hide();
        });

        function printSurat(catatan, data) {
            const { status, tgl_sm, nomor_agenda, nomor_sm, tgl_surat, kategori, pengirim } = data;

            const printWindow = window.open('', '', 'width=800,height=600');
            printWindow.document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">');
            printWindow.document.write('<style>');
            printWindow.document.write('table { width: 100%; border-collapse: collapse; margin: 40px 0; }');
            printWindow.document.write('th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }');
            printWindow.document.write('th { background-color: #f2f2f2; }');
            printWindow.document.write('img.logo { position: absolute; top: 20px; right: 20px; width: 100px; }');
            printWindow.document.write('h1 { text-align: center; margin-top: 60px; }');
            printWindow.document.write('</style>');
            printWindow.document.write('</head><body>');

            printWindow.document.write('<img src="../image/logo.png" alt="Logo" class="logo">');
            printWindow.document.write('<h1 class="text-center">STATUS DISPOSISI SURAT</h1>');
            printWindow.document.write('<table class="table">');
            printWindow.document.write('<tr><th>Tanggal Surat Masuk</th><td>' + tgl_sm + '</td></tr>');
            printWindow.document.write('<tr><th>Nomor Agenda</th><td>' + nomor_agenda + '</td></tr>');
            printWindow.document.write('<tr><th>Nomor Surat Masuk</th><td>' + nomor_sm + '</td></tr>');
            printWindow.document.write('<tr><th>Tanggal Surat</th><td>' + tgl_surat + '</td></tr>');
            printWindow.document.write('<tr><th>Kategori Surat</th><td>' + kategori + '</td></tr>');
            printWindow.document.write('<tr><th>Pengirim</th><td>' + pengirim + '</td></tr>');
            printWindow.document.write('<tr><th>Status</th><td>' + status + '</td></tr>');

            if (status === 'Perbaiki') {
                printWindow.document.write('<tr><th>Catatan Perbaikan</th><td>' + catatan + '</td></tr>');
            }

            printWindow.document.write('</table>');
            printWindow.document.write('</body></html>');
            printWindow.document.close();
            printWindow.print();
        }
    </script>
</body>
</html>
