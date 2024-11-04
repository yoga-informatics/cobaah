-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Sep 2024 pada 02.42
-- Versi server: 10.4.25-MariaDB
-- Versi PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `abc`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `file_surat`
--

CREATE TABLE `file_surat` (
  `id_file` int(11) NOT NULL,
  `surat_id` int(11) NOT NULL,
  `nama_file` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `file_surat_k`
--

CREATE TABLE `file_surat_k` (
  `id_file_sk` int(11) NOT NULL,
  `sk_id` int(11) NOT NULL,
  `nama_file` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_ajukan`
--

CREATE TABLE `tb_ajukan` (
  `id_ajukan` int(11) NOT NULL,
  `pg_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_arsip_sk`
--

CREATE TABLE `tb_arsip_sk` (
  `id_arsip_sk` int(11) NOT NULL,
  `sk_id` int(11) NOT NULL,
  `tgl_arsip_sk` date NOT NULL,
  `lokasi_arsip_sk` varchar(50) NOT NULL,
  `no_sk` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_arsip_surat`
--

CREATE TABLE `tb_arsip_surat` (
  `id_arsip` int(11) NOT NULL,
  `sm_id` int(11) NOT NULL,
  `sk_id` int(11) NOT NULL,
  `tgl_arsip` date NOT NULL,
  `lokasi_arsip` varchar(50) NOT NULL,
  `no_sm` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_disposisi`
--

CREATE TABLE `tb_disposisi` (
  `id_disposisi` int(11) NOT NULL,
  `sm_id` int(11) NOT NULL,
  `tujuan_disposisi` varchar(50) NOT NULL,
  `catatan` text NOT NULL,
  `status_dispo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_kategori`
--

CREATE TABLE `tb_kategori` (
  `id_kategori` int(11) NOT NULL,
  `nama_kategori_s` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_kategori`
--

INSERT INTO `tb_kategori` (`id_kategori`, `nama_kategori_s`) VALUES
(1, 'Surat Resmi'),
(2, 'Surat Pribadi'),
(3, 'Surat Bisnis'),
(5, 'Surat Izin atau Permohonan'),
(6, 'Surat Resmi Pemerintah'),
(7, 'Surat Berita'),
(8, 'Surat Perjanjian'),
(10, 'Surat Pengaduan atau Keluhan'),
(11, 'Surat Tugas atau Perintah'),
(12, 'Surat Pemberitahuan Perubahan Informasi'),
(13, 'Surat Undangan');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_pengguna`
--

CREATE TABLE `tb_pengguna` (
  `id_pg` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(80) NOT NULL,
  `nama_lengkap` varchar(50) NOT NULL,
  `jabatan` varchar(50) NOT NULL,
  `izin_akses` varchar(50) NOT NULL,
  `foto` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tb_pengguna`
--

INSERT INTO `tb_pengguna` (`id_pg`, `username`, `password`, `nama_lengkap`, `jabatan`, `izin_akses`, `foto`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3', 'Admin', 'ADMIN', 'Admin', 'man.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_sk`
--

CREATE TABLE `tb_sk` (
  `id_sk` int(11) NOT NULL,
  `nomor_agenda` varchar(50) NOT NULL,
  `kode` varchar(50) NOT NULL,
  `nomor_sk` varchar(50) NOT NULL,
  `tgl_keluar` date NOT NULL,
  `tgl_sk` date NOT NULL,
  `penerima_sk` varchar(50) NOT NULL,
  `perihal_sk` varchar(50) NOT NULL,
  `lampiran_sk` varchar(50) NOT NULL,
  `status` int(11) NOT NULL,
  `tindakan` text NOT NULL,
  `berkas_kesalahan` text NOT NULL,
  `dari_disposisi` varchar(80) NOT NULL,
  `status_arsip` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tb_sm`
--

CREATE TABLE `tb_sm` (
  `id_sm` int(11) NOT NULL,
  `nomor_agenda` varchar(50) NOT NULL,
  `kode_sm` varchar(50) NOT NULL,
  `nomor_sm` varchar(80) NOT NULL,
  `tgl_surat` date DEFAULT NULL,
  `tgl_sm` date NOT NULL,
  `kategori` int(11) NOT NULL,
  `pengirim` varchar(80) NOT NULL,
  `perihal_surat` varchar(50) NOT NULL,
  `lampiran` varchar(50) NOT NULL,
  `disposisi` varchar(80) NOT NULL,
  `status` int(11) NOT NULL,
  `status_baca` int(11) NOT NULL,
  `tindakan` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `file_surat`
--
ALTER TABLE `file_surat`
  ADD PRIMARY KEY (`id_file`);

--
-- Indeks untuk tabel `file_surat_k`
--
ALTER TABLE `file_surat_k`
  ADD PRIMARY KEY (`id_file_sk`);

--
-- Indeks untuk tabel `tb_ajukan`
--
ALTER TABLE `tb_ajukan`
  ADD PRIMARY KEY (`id_ajukan`);

--
-- Indeks untuk tabel `tb_arsip_sk`
--
ALTER TABLE `tb_arsip_sk`
  ADD PRIMARY KEY (`id_arsip_sk`);

--
-- Indeks untuk tabel `tb_arsip_surat`
--
ALTER TABLE `tb_arsip_surat`
  ADD PRIMARY KEY (`id_arsip`);

--
-- Indeks untuk tabel `tb_disposisi`
--
ALTER TABLE `tb_disposisi`
  ADD PRIMARY KEY (`id_disposisi`);

--
-- Indeks untuk tabel `tb_kategori`
--
ALTER TABLE `tb_kategori`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indeks untuk tabel `tb_pengguna`
--
ALTER TABLE `tb_pengguna`
  ADD PRIMARY KEY (`id_pg`);

--
-- Indeks untuk tabel `tb_sk`
--
ALTER TABLE `tb_sk`
  ADD PRIMARY KEY (`id_sk`);

--
-- Indeks untuk tabel `tb_sm`
--
ALTER TABLE `tb_sm`
  ADD PRIMARY KEY (`id_sm`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `file_surat`
--
ALTER TABLE `file_surat`
  MODIFY `id_file` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `file_surat_k`
--
ALTER TABLE `file_surat_k`
  MODIFY `id_file_sk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT untuk tabel `tb_ajukan`
--
ALTER TABLE `tb_ajukan`
  MODIFY `id_ajukan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT untuk tabel `tb_arsip_surat`
--
ALTER TABLE `tb_arsip_surat`
  MODIFY `id_arsip` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT untuk tabel `tb_disposisi`
--
ALTER TABLE `tb_disposisi`
  MODIFY `id_disposisi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `tb_kategori`
--
ALTER TABLE `tb_kategori`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `tb_pengguna`
--
ALTER TABLE `tb_pengguna`
  MODIFY `id_pg` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `tb_sk`
--
ALTER TABLE `tb_sk`
  MODIFY `id_sk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `tb_sm`
--
ALTER TABLE `tb_sm`
  MODIFY `id_sm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
