import phoneIcon from "../assets/icon/phone.svg";
import mailIcon from "../assets/icon/mail.svg";

function Footer() {
  return (
    <div className="bg-black text-white px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
      <div className="min-w-max">
        <div className="w-max mb-4">
          <h1 className="text-xl font-bold mb-1">Kontak</h1>
          <div className="bg-white w-[65%] h-[2px] rounded-full" />
        </div>
        <a href="#" className="flex gap-2 items-center mb-3">
          <img src={phoneIcon} alt="Phone Icon" className="h-4" />
          10825252677
        </a>
        <a href="#" className="flex gap-2 items-center mb-4">
          <img src={mailIcon} alt="Phone Icon" className="h-4" />
          Sewapestakita@gmail.com
        </a>
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-white text-black text-xs flex justify-center items-center rounded-full">
            Logo
          </div>
          <div className="w-10 h-10 bg-white text-black text-xs flex justify-center items-center rounded-full">
            Logo
          </div>
          <div className="w-10 h-10 bg-white text-black text-xs flex justify-center items-center rounded-full">
            Logo
          </div>
          <div className="w-10 h-10 bg-white text-black text-xs flex justify-center items-center rounded-full">
            Logo
          </div>
        </div>
      </div>
      <div>
        <div className="w-max mb-4">
          <h1 className="text-xl font-bold mb-1">Perusahaan</h1>
          <div className="bg-white w-[65%] h-[2px] rounded-full" />
        </div>
        <div className="flex flex-col gap-1">
          <a href="#">Profil Perusahaan</a>
          <a href="#">Portofolio</a>
          <a href="#">Hubungi Kami</a>
          <a href="#">Karir</a>
        </div>
      </div>
      <div>
        <div className="w-max mb-4">
          <h1 className="text-xl font-bold mb-1">Produk</h1>
          <div className="bg-white w-[65%] h-[2px] rounded-full" />
        </div>
        <div className="flex flex-col gap-1">
          <a href="#">Alat Wedding</a>
          <a href="#">Alat Pesta</a>
          <a href="#">Alat Acara Resmi</a>
          <a href="#">Alat Konser</a>
        </div>
      </div>
      <div>
        <div className="w-max mb-4">
          <h1 className="text-xl font-bold mb-1">Jasa</h1>
          <div className="bg-white w-[65%] h-[2px] rounded-full" />
        </div>
        <div className="flex flex-col gap-1">
          <a href="#">Jasa Pasang</a>
          <a href="#">Jasa Antar</a>
          <a href="#">Jasa Pinjam</a>
        </div>
      </div>
      <div className="sm:col-span-2 flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label htmlFor="nama">Nama</label>
          <input
            type="text"
            name="nama"
            id="nama"
            placeholder="Nama"
            className="px-3 py-2 rounded-lg bg-[#D9D9D9] text-black"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Example@gmail.com"
            className="px-3 py-2 rounded-lg bg-[#D9D9D9] text-black"
          />
        </div>
        <div className="flex flex-col gap-1 relative">
          <label htmlFor="masukan">Masukan</label>
          <textarea
            name="masukan"
            id="masukan"
            rows="5"
            placeholder="Isi masukan anda disini"
            className="px-3 py-2 rounded-lg bg-[#D9D9D9] text-black"
          />
          <a
            href="#"
            className="absolute right-3 bottom-2 text-black underline underline-offset-2"
          >
            Submit
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
