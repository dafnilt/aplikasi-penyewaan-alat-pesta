import Layout from "./layout/Layout";
import Carousel from "react-multi-carousel";
import banner from "./assets/banner.jpeg";
import catalog1 from "./assets/catalog/catalog-1.jpeg";
import catalog2 from "./assets/catalog/catalog-2.jpeg";
import catalog3 from "./assets/catalog/catalog-3.jpeg";
import catalog4 from "./assets/catalog/catalog-4.jpeg";
import catalog5 from "./assets/catalog/catalog-5.jpeg";
import catalog6 from "./assets/catalog/catalog-6.jpeg";
import porto1 from "./assets/portofolio/porto-1.jpeg";
import porto2 from "./assets/portofolio/porto-2.jpeg";
import porto3 from "./assets/portofolio/porto-3.jpeg";
import porto4 from "./assets/portofolio/porto-4.jpeg";
import porto5 from "./assets/portofolio/porto-5.jpeg";
import porto6 from "./assets/portofolio/porto-6.jpeg";
import locationIcon from "./assets/icon/location.svg";
import mapImage from "./assets/map.png";

function App() {
  const responsive = {
    lg: {
      breakpoint: { max: 10000, min: 768 },
      items: 6,
      partialVisibilityGutter: 30,
    },
    md: {
      breakpoint: { max: 768, min: 640 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    sm: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <Layout>
      {/* Banner */}
      <div
        className="my-h-screen relative mb-8"
        style={{
          background: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 absolute inset-0" />
        <div className="absolute inset-0 flex flex-col justify-center p-3 text-white">
          <h1 className="text-3xl font-bold mb-4">
            Selamat Datang <br /> Di Sewa Pesta Kita !
          </h1>
          <p>
            Kami melayani berbagai layanan sewa barang dan jasa di bidang
            penyediaan alat Event
          </p>
          <div className="text-black mt-4 flex gap-3 text-sm">
            <a className="banner-link" href="/about-us">
              Tentang Kami
            </a>
            <a className="banner-link" href="/contact">
              Kontak
            </a>
          </div>
        </div>
      </div>

      {/* Katalog Produk */}
      <div className="bg-[#F6F6F6] py-8 px-2">
        <div className="w-max mb-4 px-2">
          <h1 className="text-xl font-bold mb-1">Katalog Produk</h1>
          <div className="bg-black w-[65%] h-[2px] rounded-full" />
        </div>
        <div className="px-1">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            autoPlay={false}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={["md", "sm"]}
            partialVisbile={true}
          >
            <div
              style={{
                background: `url(${catalog1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="catalog-item"
            >
              <div className="h-full flex justify-center items-end pb-4">
                <div className="px-8 py-2 bg-black/70 rounded-full text-white text-center">
                  Kursi
                </div>
              </div>
            </div>
            <div
              style={{
                background: `url(${catalog2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="catalog-item"
            >
              <div className="h-full flex justify-center items-end pb-4 px-4">
                <div className="w-min text-wrap px-8 py-2 bg-black/70 rounded-full text-white text-center">
                  Microphone
                </div>
              </div>
            </div>
            <div
              style={{
                background: `url(${catalog3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="catalog-item"
            >
              <div className="h-full flex justify-center items-end pb-4">
                <div className="px-8 py-2 bg-black/70 rounded-full text-white text-center">
                  Speaker Portable
                </div>
              </div>
            </div>
            <div
              style={{
                background: `url(${catalog4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="catalog-item"
            >
              <div className="h-full flex justify-center items-end pb-4">
                <div className="px-8 py-2 bg-black/70 rounded-full text-white text-center">
                  Kursi Canopi
                </div>
              </div>
            </div>
            <div
              style={{
                background: `url(${catalog5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="catalog-item"
            >
              <div className="h-full flex justify-center items-end pb-4">
                <div className="px-8 py-2 bg-black/70 rounded-full text-white text-center">
                  Air Cooler
                </div>
              </div>
            </div>
            <div
              style={{
                background: `url(${catalog6})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="catalog-item"
            >
              <div className="h-full flex justify-center items-end pb-4">
                <div className="px-8 py-2 bg-black/70 rounded-full text-white text-center">
                  Meja Bundar
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Portofolio */}
      <div className="py-8 px-2">
        <div className="w-max mb-4 px-2">
          <h1 className="text-xl font-bold mb-1">Portofolio Kami</h1>
          <div className="bg-black w-[65%] h-[2px] rounded-full" />
        </div>
        <div className="px-1">
          <Carousel
            responsive={responsive}
            swipeable={true}
            draggable={true}
            autoPlay={false}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={["md", "sm"]}
            partialVisbile={true}
          >
            <div
              style={{
                background: `url(${porto1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="porto-item relative text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h2 className="text-lg font-semibold">Wedding Venue</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  hendrerit lacus vitae nisl porta, eget molestie dui ornare.
                  Suspendisse quis ipsum non orci condimentum
                </p>
              </div>
            </div>
            <div
              style={{
                background: `url(${porto2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="porto-item relative text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h2 className="text-lg font-semibold">Sound System</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  hendrerit lacus vitae nisl porta, eget molestie
                </p>
              </div>
            </div>
            <div
              style={{
                background: `url(${porto3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="porto-item relative text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h2 className="text-lg font-semibold">DJ Tools</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  hendrerit lacus vitae nisl porta, eget molestie dui ornare.
                  Suspendisse quis ipsum non orci condimentum
                </p>
              </div>
            </div>
            <div
              style={{
                background: `url(${porto4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="porto-item relative text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h2 className="text-lg font-semibold">Birthday Party</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  hendrerit lacus vitae nisl porta, eget molestie dui ornare.
                </p>
              </div>
            </div>
            <div
              style={{
                background: `url(${porto5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="porto-item relative text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h2 className="text-lg font-semibold">Concert Venue</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  hendrerit lacus vitae nisl porta, eget
                </p>
              </div>
            </div>
            <div
              style={{
                background: `url(${porto6})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="porto-item relative text-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h2 className="text-lg font-semibold">Premium Mic</h2>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  hendrerit lacus vitae nisl porta, eget
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Maps */}
      <div className="py-8 px-4">
        <div className="w-max mb-4">
          <h1 className="text-xl font-bold mb-1">Portofolio Kami</h1>
          <div className="bg-black w-[65%] h-[2px] rounded-full" />
        </div>
        <div
          style={{
            background: `url(${mapImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="shadow-lg aspect-[4/3] rounded-lg"
        >
          <div className="h-full flex justify-center items-end pb-3">
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full border">
              <img className="h-8" src={locationIcon} alt="Location Icon" />
              <p className="text-sm w-60">
                Jl. Haji Makmur, Rt 11, Rw 08, Bekasi, Jawa Barat
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
