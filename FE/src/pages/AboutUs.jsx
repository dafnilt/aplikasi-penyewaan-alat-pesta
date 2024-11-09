import Layout from "../layout/Layout";
import bannerAbout from "../assets/banner-about-us.webp";
import team1 from "../assets/team/team-1.webp";
import team2 from "../assets/team/team-2.webp";
import team3 from "../assets/team/team-3.webp";
import team4 from "../assets/team/team-4.webp";
import team5 from "../assets/team/team-5.webp";

function AboutUs() {
  return (
    <Layout>
      <div className="mx-2 md:mx-8">
        <div className="py-10 max-w-screen-lg mx-auto px-6">
          <div className="w-max mb-4 px-2 sm:px-10">
            <h1 className="text-2xl text-[#2F4C23] font-bold mb-1">Tentang Kami</h1>
            <div className="bg-[#2F4C23] w-[65%] h-[2px] rounded-full" />
          </div>
          <p className="text-sm px-2 sm:px-10">
            Kami memahami bahwa setiap acara memiliki kebutuhan khusus dan jadwal yang ketat. Oleh karena itu, tim kami selalu berkomitmen untuk memberikan layanan terbaik dengan kecepatan, ketelitian, dan ketepatan waktu dalam setiap proses. Mulai dari persiapan hingga pengiriman alat pesta dan event, kami bekerja maksimal untuk memastikan semuanya tiba di lokasi dengan kondisi sempurna dan sesuai dengan permintaan Anda.
          </p>
          <br />
          <p className="text-sm px-2 sm:px-10">
            Dengan tenaga kerja yang profesional, berpengalaman, dan dilengkapi dengan peralatan berkualitas, kami memastikan setiap detail terselesaikan tepat waktu, tanpa mengurangi kualitas layanan kami. Kepercayaan Anda adalah prioritas kami, dan kami berdedikasi untuk menjaga agar setiap acara berjalan lancar, sukses, dan berkesan.
          </p>
          <br />
        </div>
        <div className="py-10">
          <div
            style={{
              background: `url(${bannerAbout})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="aspect-[4/3] sm:aspect-[16/7] max-w-screen-lg mx-auto lg:rounded-3xl overflow-hidden relative"
          >
            <div className="bg-black/70 absolute inset-0 filter backdrop-blur-[1px] flex justify-center items-center">
              <p className="text-2xl md:text-4xl text-center font-semibold text-white">
                &quot;Solusi lengkap untuk <br className="hidden md:inline" />{" "}
                kesuksesan acara anda&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="py-10 lg:flex items-center max-w-screen-lg mx-auto">
          <div className="mb-10 lg:mb-0 lg:mr-10 px-2 sm:px-10 md:px-20 lg:px-0">
            <div className="mb-10">
              <div className="w-max mb-4">
                <h1 className="text-2xl font-bold mb-1">Visi</h1>
                <div className="bg-black w-[65%] h-[2px] rounded-full" />
              </div>
              <p>
                Menjadi penyedia penyewaan alat pesta terdepan dan terpercaya, dikenal karena kualitas produk dan layanan yang memuaskan, serta berkontribusi pada momen-momen berharga dalam kehidupan pelanggan.
              </p>
            </div>
            <div>
              <div className="w-max mb-4">
                <h1 className="text-2xl font-bold mb-1">Misi</h1>
                <div className="bg-black w-[65%] h-[2px] rounded-full" />
              </div>
              <ol>
                <li>Menyediakan peralatan pesta berkualitas tinggi dengan beragam pilihan yang          memenuhi kebutuhan setiap acara.</li>
                <li>Memberikan pelayanan pelanggan yang ramah, profesional, dan responsif untuk memastikan pengalaman penyewaan yang menyenangkan.</li>
                <li>Menawarkan harga yang kompetitif tanpa mengorbankan kualitas, agar setiap orang dapat merayakan momen spesial mereka dengan nyaman.</li>
                <li>Selalu berinovasi dan mengikuti tren terbaru dalam penyewaan alat pesta untuk memberikan solusi terbaik bagi pelanggan kami.</li>
              </ol>
            </div>
          </div>
          <div className="">
            <img
              src={team1}
              alt="Team Potrait 1"
              className="max-w-80 mx-auto rounded-xl"
            />
            <p className="italic font-thin text-xs text-end p-2">Foto Owner</p>
            <p className="text-center font-bold">Haikal Zimran</p>
          </div>
        </div>
        <div className="lg:flex items-center lg:mb-20 max-w-screen-xl mx-auto">
          <div className="max-w-[500px] lg:max-w-none mx-auto lg:mx-0 lg:w-1/2">
            <div className="relative aspect-square m-2 scale-75">
              <div
                style={{
                  background: `url(${team2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute top-0 left-0 h-[calc(58.333333%-4px)] w-[calc(50%-4px)] rounded-lg"
              ></div>
              <div
                style={{
                  background: `url(${team4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute top-[calc(58.333333%+4px)] left-0 h-[calc(55.666667%-4px)] w-[calc(50%-4px)] rounded-lg"
              ></div>
              <div
                style={{
                  background: `url(${team5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute top-0 right-0 h-[calc(58.333333%-4px)] w-[calc(50%-4px)] rounded-lg"
              ></div>
              <div
                style={{
                  background: `url(${team3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="absolute top-[calc(58.333333%+4px)] right-0 h-[calc(55.666667%-4px)] w-[calc(50%-4px)] rounded-lg"
              ></div>
            </div>
          </div>
          <div className="mt-5 mb-20 lg:m-0 lg:mr-10 px-2 sm:px-10 lg:px-0 max-w-screen-md lg:max-w-none mx-auto lg:w-1/2">
            <div className="w-max mb-4">
              <h1 className="text-2xl font-bold mb-1">Team Kami</h1>
              <div className="bg-black w-[65%] h-[2px] rounded-full" />
            </div>
            <p className="mb-3">
              Kami memahami bahwa setiap acara memiliki kebutuhan khusus dan jadwal yang ketat. Oleh karena itu, tim kami selalu berkomitmen untuk memberikan layanan terbaik dengan kecepatan, ketelitian, dan ketepatan waktu dalam setiap proses. Mulai dari persiapan hingga pengiriman alat pesta dan event, kami bekerja maksimal untuk memastikan semuanya tiba di lokasi dengan kondisi sempurna dan sesuai dengan permintaan Anda.
            </p>
            <p className="mb-4">
              Dengan tenaga kerja yang profesional, berpengalaman, dan dilengkapi dengan peralatan berkualitas, kami memastikan setiap detail terselesaikan tepat waktu, tanpa mengurangi kualitas layanan kami. Kepercayaan Anda adalah prioritas kami, dan kami berdedikasi untuk menjaga agar setiap acara berjalan lancar, sukses, dan berkesan.
            </p>
            <div className="font-bold flex flex-nowrap items-center gap-2 sm:gap-4 sm:text-lg">
              <p>Cepat</p>
              <div className="bg-[#DDE460] w-2 sm:w-3 aspect-square rounded-full"></div>
              <p>Efisien</p>
              <div className="bg-[#DDE460] w-2 sm:w-3 aspect-square rounded-full"></div>
              <p>Sesuai Ekspektasi</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
