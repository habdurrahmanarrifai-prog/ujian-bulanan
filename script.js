
// Mengambil elemen form dari HTML
const formPinjam = document.getElementById("form-pinjam");

// Mengambil elemen pesan konfirmasi
const pesanKonfirmasi = document.getElementById(
    "pesan-konfirmasi"
);

// Menjalankan fungsi ketika form dikirim
formPinjam.addEventListener("submit", function(event) {

    // Mencegah halaman melakukan reload
    event.preventDefault();

    // Mengambil nama yang diisi pengunjung
    const nama = document.getElementById("nama").value;

    // Menampilkan pesan konfirmasi
    pesanKonfirmasi.textContent =
        "Terima kasih, " + nama +
        "! Pendaftaran minat kamu berhasil disimulasikan. " +
        "Tim PinjamYuk akan menghubungi kamu.";

    // Mengosongkan kembali form
    formPinjam.reset();

});
