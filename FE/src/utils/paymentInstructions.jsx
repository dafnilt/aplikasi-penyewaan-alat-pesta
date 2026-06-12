export const paymentInstructions = [
  {
    id: 1,
    title: "Instruksi Pembayara (ATM)",
    steps: [
      "Kunjungi ATM terdekat.",
      "Masukkan kartu ATM dan PIN Anda.",
      "Pilih menu Transaksi Lainnya.",
      "Pilih menu Transfer.",
      "Pilih Transfer ke Rekening BRI.",
      "Masukkan nomor rekening tujuan sesuai dengan yang tersedia di atas.",
      "Masukkan nominal sesuai Total Setelah Pengiriman pada Ringkasan Pesanan.",
      "Periksa kembali data transfer.",
      "Konfirmasi transaksi.",
      "Ambil struk sebagai bukti pembayaran.",
    ],
  },
  {
    id: 2,
    title: "Instruksi Pembayaran (Mobile Banking)",
    steps: [
      "Salin (copy) nomor rekening BRI yang tersedia di atas.",
      "Masuk ke aplikasi mobile banking Anda.",
      "Pilih menu  Transfer.",
      "Pilih bank tujuan BRI.",
      "Tempel (paste) nomor rekening yang telah disalin.",
      "Masukkan nominal sesuai Total Setelah Pengiriman yang tertera pada Ringkasan Pesanan.",
      "Selesaikan proses pembayaran Anda.",
      "Transaksi selesai. Simpan bukti pembayaran Anda.",
    ],
  },
  {
    id: 3,
    title: "Instruksi Upload Bukti Pembayaran",
    steps: [
      "Pastikan Anda sudah melakukan pembayaran ke rekening BRI yang tertera dan menyimpan bukti pembayaran.",
      "Pastikan sudah tersedia aplikasi WhatsApp di perangkat Anda.",
      "Tekan tombol Upload Bukti Pembayaran. Anda akan diarakan ke aplikasi WhatsApp.",
      "Jangan hapus pesan yang otomatis tersedia di pesan.",
      "Masukkan foto bukti pembayaran Anda.",
      "Kirim pesan.",
    ],
  },
];
