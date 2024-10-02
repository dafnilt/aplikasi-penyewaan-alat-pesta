// Catalog Produk
import catalog1 from "./assets/catalog/catalog-1.jpeg";
import catalog2 from "./assets/catalog/catalog-2.jpeg";
import catalog3 from "./assets/catalog/catalog-3.jpeg";
import catalog4 from "./assets/catalog/catalog-4.jpeg";
import catalog5 from "./assets/catalog/catalog-5.jpeg";
import catalog6 from "./assets/catalog/catalog-6.jpeg";

// Portofolio
// PT Bauer Petojo
import bauer1 from "./assets/portofolio/bauer-petojo/img-1.jpeg";
import bauer2 from "./assets/portofolio/bauer-petojo/img-2.jpeg";
import bauer3 from "./assets/portofolio/bauer-petojo/img-3.jpeg";

// Hambalang
import hambalang1 from "./assets/portofolio/hambalang/img-1.jpeg";
import hambalang2 from "./assets/portofolio/hambalang/img-2.jpeg";
import hambalang3 from "./assets/portofolio/hambalang/img-3.jpeg";
import hambalang4 from "./assets/portofolio/hambalang/img-4.jpeg";

// Grand Kowloon
import kowloon1 from "./assets/portofolio/grand-kowloon/img-1.jpeg";
import kowloon2 from "./assets/portofolio/grand-kowloon/img-2.jpeg";
import kowloon3 from "./assets/portofolio/grand-kowloon/img-3.jpeg";

// CIBIS NINE
import cibis1 from "./assets/portofolio/cibis-nine/img-1.jpeg";
import cibis2 from "./assets/portofolio/cibis-nine/img-2.jpeg";

// Peruri
import peruri1 from "./assets/portofolio/peruri/img-1.jpeg";
import peruri2 from "./assets/portofolio/peruri/img-2.jpeg";
import peruri3 from "./assets/portofolio/peruri/img-3.jpeg";

// Krida Bakti
import kridaBakti1 from "./assets/portofolio/krida-bakti/img-1.jpeg";
import kridaBakti2 from "./assets/portofolio/krida-bakti/img-2.jpeg";
import kridaBakti3 from "./assets/portofolio/krida-bakti/img-3.jpeg";
import kridaBakti4 from "./assets/portofolio/krida-bakti/img-4.jpeg";

// Asrama Haji
import asramaHaji1 from "./assets/portofolio/asrama-haji/img-1.jpeg";
import asramaHaji2 from "./assets/portofolio/asrama-haji/img-2.jpeg";
import asramaHaji3 from "./assets/portofolio/asrama-haji/img-3.jpeg";

// CFX Tower
import cfxTower1 from "./assets/portofolio/cfx-tower/img-1.jpeg";
import cfxTower2 from "./assets/portofolio/cfx-tower/img-2.jpeg";
import cfxTower3 from "./assets/portofolio/cfx-tower/img-3.jpeg";
import cfxTower4 from "./assets/portofolio/cfx-tower/img-4.jpeg";

// Golf Island PIK
import golfIsland1 from "./assets/portofolio/golf-island-pik/img-1.jpeg";
import golfIsland2 from "./assets/portofolio/golf-island-pik/img-2.jpeg";

// ICE BSD
import iceBSD1 from "./assets/portofolio/ice-bsd/img-1.jpeg";

// Kantor Walikota
import kantorWalkot1 from "./assets/portofolio/kantor-walkot/img-1.jpeg";
import kantorWalkot2 from "./assets/portofolio/kantor-walkot/img-2.jpeg";
import kantorWalkot3 from "./assets/portofolio/kantor-walkot/img-3.jpeg";

// Kementrian Keuangan
import kemenkeu1 from "./assets/portofolio/kemenkeu/img-1.jpeg";
import kemenkeu2 from "./assets/portofolio/kemenkeu/img-2.jpeg";
import kemenkeu3 from "./assets/portofolio/kemenkeu/img-3.jpeg";

// Keraton Cirebon
import keratonCirebon1 from "./assets/portofolio/keraton-cirebon/img-1.jpeg";
import keratonCirebon2 from "./assets/portofolio/keraton-cirebon/img-2.jpeg";
import keratonCirebon3 from "./assets/portofolio/keraton-cirebon/img-3.jpeg";

// Hotel Santika Mega
import santikaMega1 from "./assets/portofolio/santika-mega/img-1.jpeg";
import santikaMega2 from "./assets/portofolio/santika-mega/img-2.jpeg";
import santikaMega3 from "./assets/portofolio/santika-mega/img-3.jpeg";

// Sheraton Grand
import sheratonGrand1 from "./assets/portofolio/sheraton-grand/img-1.jpeg";

export const allProduct = [
  {
    id: "product1",
    img: catalog1,
    title: "Kursi Portabel",
    desc: "Kursi portabel ukuran 1x1 m",
    fee: 35000,
    timesRented: 300,
    timesSeen: 1280,
  },
  {
    id: "product2",
    img: catalog2,
    title: "Microphone",
    desc: "Microphone Blue berkualitas tinggi",
    fee: 200000,
    timesRented: 300,
    timesSeen: 1280,
  },
  {
    id: "product3",
    img: catalog3,
    title: "Speaker Portabel",
    desc: "Speaker portabel ukuran 50x50 cm",
    fee: 200000,
    timesRented: 300,
    timesSeen: 1280,
  },
  {
    id: "product4",
    img: catalog4,
    title: "Meja Kanopi",
    desc: "Meja kanopi ukuran 3x2 m",
    fee: 350000,
    timesRented: 300,
    timesSeen: 1280,
  },
  {
    id: "product5",
    img: catalog5,
    title: "Air Filter",
    desc: "Air Filter ukuran 30x30 cm",
    fee: 50000,
    timesRented: 300,
    timesSeen: 1280,
  },
  {
    id: "product6",
    img: catalog6,
    title: "Meja Bundar",
    desc: "Meja bundar ukuran 2x2 m",
    fee: 150000,
    timesRented: 300,
    timesSeen: 1280,
  },
];

export const allPortofolio = [
  {
    img: kantorWalkot1,
    title: "Acara di Kantor Walikota",
    desc: "Jakarta Barat tgl 19 September 2024, produk Tenda Serut Merah Putih",
    dokumentasi: [kantorWalkot1, kantorWalkot2, kantorWalkot3],
  },
  {
    img: kridaBakti1,
    title: "Event Gedung Krida Bakti",
    desc: "tgl 19 September 2024, produk Kursi Cover Strech Putih, Meja Bulat D160 Cover Putih, Sofa Single Hitam, Meja VIP Hitam",
    dokumentasi: [kridaBakti1, kridaBakti2, kridaBakti3, kridaBakti4],
  },
  {
    img: asramaHaji3,
    title: "Asrama Haji Pondok Gede",
    desc: "tgl 19 September 2024, produk Kursi Cover Strech Putih",
    dokumentasi: [asramaHaji1, asramaHaji2, asramaHaji3],
  },
  {
    img: cibis2,
    title: "Event CIBIS NINE Building",
    desc: "Jl. TB Simatupang Cilandak tgl 16 September 2024, produk Meja IBM Cover Strech Hitam",
    dokumentasi: [cibis1, cibis2],
  },
  {
    img: peruri3,
    title: "Event Gudang Peruri Karawang",
    desc: "tgl 17 September 2024, produk Meja Kursi Taman, Sofa VIP Single Putih, Meja VIP Kaca Putih",
    dokumentasi: [peruri1, peruri2, peruri3],
  },
  {
    img: iceBSD1,
    title: "Event ICE BSD Lobby Nusantara",
    desc: "tgl 16 September 2024, produk Sofa Cream Single, Sofa Cream Double, Meja Retro Bulat Putih, Meja Barstool Kaca, Kursi Cover Strech Putih",
    dokumentasi: [iceBSD1],
  },
  {
    img: keratonCirebon1,
    title: "Keraton Cirebon",
    desc: "Jawa Barat tgl 23 September 2024, produk Kursi Crossback Pita Putih, Meja Taman Xtra 180 Cm Runner Putih",
    dokumentasi: [keratonCirebon1, keratonCirebon2, keratonCirebon3],
  },
  {
    img: kemenkeu3,
    title: "Kementrian Keuangan",
    desc: "Jakarta Pusat tgl 23 September 2024, produk Kursi VIP Kayu, Sofa Single Oval Putih",
    dokumentasi: [kemenkeu1, kemenkeu2, kemenkeu3],
  },
  {
    img: cfxTower1,
    title: "Gedung CFX Tower",
    desc: "Jl Gatot Subroto tgl 24 September 2024, produk Meja Kursi Taman 120",
    dokumentasi: [cfxTower1, cfxTower2, cfxTower3, cfxTower4],
  },
  {
    img: santikaMega1,
    title: "Event Hotel Santika Mega",
    desc: "Bekasi tgl 25 September 2024, produk Kursi Cover Strech Hitam",
    dokumentasi: [santikaMega1, santikaMega2, santikaMega3],
  },
  {
    img: golfIsland1,
    title: "Event GOlF Island PIK",
    desc: "tgl 26 September 2024, produk Meja Kursi Taman 180, Kursi Barstool Putih",
    dokumentasi: [golfIsland1, golfIsland2],
  },
  {
    img: sheratonGrand1,
    title: "Hotel Sheraton Grand",
    desc: "Gandaria City tgl 26 September 2024, produk Kursi Futura Cover Strech Hitam",
    dokumentasi: [sheratonGrand1],
  },
  {
    img: kowloon1,
    title: "Grand Kowloon Resto",
    desc: "Pluit Jakarta Utara tgl 27 September 2024, produk Meja Kotak atasan Putih Skerting Maroon Runner Gold, Peralatan Catering",
    dokumentasi: [kowloon1, kowloon2, kowloon3],
  },
  {
    img: hambalang1,
    title: "Hambalang Bogor",
    desc: "tgl 26 September 2024, produk Meja Bulat D180 Tebar Putih Topping Putih Runner Maroon, Sofa VIP Kayu Oval, Podium Kayu",
    dokumentasi: [hambalang1, hambalang2, hambalang3, hambalang4],
  },
  {
    img: bauer3,
    title: "PT Bauer Petojo",
    desc: "Gambir Jakarta Pusat tgl 25 September 2024, produk Tenda Plafon Biru Putih, Flooring+karpet abu-abu, Meja atasan Putih Skerting Putih, Kursi Cover Strech Putih, Sirine, Mistyfan",
    dokumentasi: [bauer1, bauer2, bauer3],
  },
];
