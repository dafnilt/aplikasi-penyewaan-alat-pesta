import { useParams, Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { allPortofolio } from "../data";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";

function PortfolioDetail() {
  const { id } = useParams();
  const portfolio = allPortofolio.find((p) => p.id === id);

  if (!portfolio) {
    return <p>Portfolio not found</p>;
  }

  return (
    <Layout>
      <div className="mx-2 md:mx-8">
        <div className="max-w-screen-2xl mx-auto p-4">
          <Link
            to="/portofolio"
            className="absolute mt-12 text-[#00000080] text-opacity-50 mb-4 items-center flex text-xl"
          >
            <FaCircleChevronLeft className="mr-1" /> Back
          </Link>
          <div>
            <h1 className="text-3xl text-[#2F4C23] font-bold mx-auto w-fit text-center mt-12">
              Portofolio Kami
            </h1>
            <div className="mx-auto mb-16 w-[150px] border-b-4 border-[#2F4C23]"></div>
          </div>

          <div className="flex justify-between flex-wrap max-h-[418px] mb-8">
            <div className="md:w-[48%]">
              <h1 className="text-3xl font-bold mb-4">{portfolio.title}</h1>
              <p className="text-gray-700 w-full mb-4 ">{portfolio.desc}</p>
            </div>
            <img
              src={portfolio.img}
              alt={portfolio.title}
              className="w-full md:w-[48%] max-h-[418px] object-cover rounded-xl"
            />
          </div>

          <h2 className="text-2xl font-bold mb-4">Dokumentasi:</h2>

          <div className="h-[786px] rounded-xl overflow-hidden">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              autoPlay={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white opacity-20 hover:opacity-100 text-black p-0 rounded-full z-10"
                    aria-label={label}
                  >
                    <FaCircleChevronLeft className="w-8 h-8" />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-0 opacity-20 hover:opacity-100 text-black rounded-full"
                    aria-label={label}
                  >
                    <FaCircleChevronRight className="w-8 h-8" />
                  </button>
                )
              }
              className="carousel h-[786px] overflow-visible"
            >
              {portfolio.dokumentasi.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${portfolio.title} Image`}
                    className="h-[766px] w-full object-cover rounded-xl"
                  />
                  <h1 className="text-opacity-0 text-white">-</h1>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PortfolioDetail;
