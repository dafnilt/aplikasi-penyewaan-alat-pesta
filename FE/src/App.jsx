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
  const catalogResponsive = {
    xl: {
      breakpoint: { max: 10000, min: 1280 },
      items: 6,
      partialVisibilityGutter: 5,
    },
    lg: {
      breakpoint: { max: 1279, min: 768 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    md: {
      breakpoint: { max: 767, min: 640 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    sm: {
      breakpoint: { max: 639, min: 435 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    xs: {
      breakpoint: { max: 434, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const portoResponsive = {
    lg: {
      breakpoint: { max: 10000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    md: {
      breakpoint: { max: 1023, min: 640 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    sm: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };

  const portoItems = [
    {
      img: porto1,
      title: "Wedding Venue",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae nisl porta, eget molestie dui ornare. Suspendisse quis ipsum non orci condimentum",
    },
    {
      img: porto2,
      title: "Sound System",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae nisl porta, eget molestie",
    },
    {
      img: porto3,
      title: "DJ Tools",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae nisl porta, eget molestie dui ornare. Suspendisse quis ipsum non orci condimentum",
    },
    {
      img: porto4,
      title: "Birthday Party",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae nisl porta, eget molestie dui ornare.",
    },
    {
      img: porto5,
      title: "Concert Venue",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae nisl porta, eget",
    },
    {
      img: porto6,
      title: "Premium Mic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit lacus vitae nisl porta, eget",
    },
  ];

  return (
    <Layout>
      {/* Banner */}
      <div
        className="my-h-screen lg:h-auto xl:h-[634px] lg:aspect-video xl:aspect-auto max-w-screen-xl mx-auto relative mb-8 xl:mb-0 xl:mt-4 xl:rounded-xl overflow-hidden"
        style={{
          background: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/50 lg:bg-transparent lg:bg-gradient-to-r from-black to-transparent absolute inset-0" />
        <div className="absolute inset-0 flex flex-col justify-center px-3 sm:px-10 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Selamat Datang <br /> Di Sewa Pesta Kita !
          </h1>
          <p className="sm:text-lg w-auto sm:w-[460px]">
            Kami melayani berbagai layanan sewa barang dan jasa di bidang
            penyediaan alat Event
          </p>
          <div className="text-black mt-4 flex gap-3 text-sm sm:text-base">
            <a className="banner-link" href="/about-us">
              Tentang Kami
            </a>
            <a className="banner-link" href="/contact">
              Kontak
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-3 mb-8 relative h-2 hidden xl:block">
        <div className="absolute top-0 left-0 bg-[#d9d9d9] w-full h-2 rounded-full" />
        <div className="absolute top-0 left-0 bg-[#1e1e1e] w-1/6 h-2 rounded-full" />
      </div>

      {/* Katalog Produk */}
      <div className="bg-[#F6F6F6] py-8 px-2">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-max px-2">
            <h1 className="text-2xl font-bold mb-1">Katalog Produk</h1>
            <div className="bg-black w-[65%] h-[2px] rounded-full" />
          </div>
          <div className="flex justify-end mb-4 px-2">
            <a
              href="#"
              className="underline underline-offset-2 hover:no-underline"
            >
              More &gt;&gt;
            </a>
          </div>
          <div className="px-1">
            <Carousel
              responsive={catalogResponsive}
              swipeable={true}
              draggable={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              removeArrowOnDeviceType={["sm", "xs"]}
              partialVisible={true}
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
                  <div className="text">Kursi</div>
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
                  <div className="text">Microphone</div>
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
                  <div className="text">Speaker Portable</div>
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
                  <div className="text">Kursi Canopi</div>
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
                  <div className="text">Air Cooler</div>
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
                  <div className="text">Meja Bundar</div>
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
                  <div className="text">Meja Bundar</div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      {/* Portofolio */}
      <div className="py-8 px-2">
        <div className="w-max xl:mx-auto px-2">
          <h1 className="text-2xl font-bold mb-1">Portofolio Kami</h1>
          <div className="bg-black w-[65%] xl:mx-auto h-[2px] rounded-full" />
        </div>
        <div className="flex justify-end mb-4 px-2">
          <a
            href="#"
            className="underline underline-offset-2 hover:no-underline"
          >
            More &gt;&gt;
          </a>
        </div>
        <div className="px-1">
          <Carousel
            responsive={portoResponsive}
            swipeable={true}
            draggable={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            removeArrowOnDeviceType={["sm"]}
            partialVisible={true}
            containerClass="xl:hidden"
          >
            {portoItems.map((item, index) => (
              <div
                key={index}
                style={{
                  background: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="porto-item"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-3">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </Carousel>
          <div className="xl-porto-container">
            {portoItems.map((item, index) => (
              <div
                key={index}
                style={{
                  background: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="porto-item"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 p-3">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Maps */}
      <div className="max-w-screen-xl my-8 mx-4 xl:mx-auto">
        <div className="w-max mb-4">
          <h1 className="text-2xl font-bold mb-1">Alamat Kami</h1>
          <div className="bg-black w-[65%] h-[2px] rounded-full" />
        </div>
        <div
          style={{
            background: `url(${mapImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="shadow-lg aspect-[4/3] md:aspect-[16/7] rounded-lg"
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
