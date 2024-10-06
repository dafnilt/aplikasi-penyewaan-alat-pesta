import { Navigate, useParams } from "react-router-dom";
import Layout from "../layout/Layout";
import Carousel from "react-multi-carousel";

import { allProduct } from "../dataProduk";

import chevronBackIcon from "../assets/icon/chevron-back.svg";
import eyeIcon from "../assets/icon/eye.svg";
import openBoxIcon from "../assets/icon/open-box.svg";
import starIcon from "../assets/icon/star.svg";
import starColorIcon from "../assets/icon/star-color.svg";
import whatsappIcon from "../assets/icon/whatsapp.svg";
import whatsappColorIcon from "../assets/icon/whatsapp-color.svg";
import { useEffect, useState } from "react";

function Product() {
  const productResponsive = {
    lg: {
      breakpoint: { max: 10000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 8,
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

  const { productId } = useParams();

  const product = allProduct.find((item) => item.id == productId);

  const [fee, setFee] = useState([]);

  const handleSetVariant = (variantName, option) => {
    if (option.fee) {
      setFee(option.fee);
    }
  };

  useEffect(() => {
    if (!product.fee) {
      setFee(product.variant[0].option[0].fee);
    } else {
      setFee(product.fee);
    }
  }, [product]);

  const whatsappNumber = "6288210335073";

  const waPesanUrl = `https://wa.me/${whatsappNumber}?text=Saya%20ingin%20memesan%20produk%20${encodeURIComponent(product?.title)}`;
  const waTanyaUrl = `https://wa.me/${whatsappNumber}?text=Saya%20ingin%20bertanya%20tentang%20produk%20${encodeURIComponent(product?.title)}`;

  return (
    <Layout>
      {product ? (
        <>
          <div className="max-w-screen-lg mx-auto pt-10">
            <a
              href="/catalog"
              className="flex items-center gap-2 hover:underline w-max mb-4 mx-3 sm:mx-10"
            >
              <div className="bg-black/50 rounded-full">
                <img
                  src={chevronBackIcon}
                  alt="Chevron Back Icon"
                  className="w-6 aspect-square p-1 pl-[2px]"
                />
              </div>
              Back
            </a>
          </div>
          <div className="px-3 sm:px-10 lg:flex lg:gap-20 max-w-screen-lg mx-auto">
            <div className="lg:w-1/3">
              <div
                style={{
                  backgroundImage: `url(${product.images[0]})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="hidden lg:block aspect-square rounded-lg mb-2"
              ></div>
              <div>
                <Carousel
                  responsive={productResponsive}
                  swipeable={true}
                  draggable={true}
                  autoPlay={false}
                  autoPlaySpeed={5000}
                  removeArrowOnDeviceType={["sm"]}
                  partialVisible={true}
                  containerClass="mb-4"
                  itemClass="aspect-square lg:aspect-[4/3] pr-2"
                >
                  {product.images.map((image, i) => (
                    <div
                      key={i}
                      style={{
                        background: `url(${product.images[i]})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                      className="product-item"
                    ></div>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="lg:w-2/3 px-3 lg:px-0 lg:flex lg:flex-col lg:justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                <p className="mb-2">{product.desc}</p>
                <div className="text-xs font-thin flex items-center gap-3 mb-4 text-[#c8c8c8]">
                  <div className="flex items-center gap-1">
                    <img src={eyeIcon} alt="Seen Icon" className="w-3" />
                    {product.timesSeen}
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      src={openBoxIcon}
                      alt="Open Box Icon"
                      className="w-3"
                    />
                    {product.timesRented}
                  </div>
                </div>
                <div className="star-container flex items-end gap-1 mb-4">
                  <img src={starColorIcon} alt="Star Icon" />
                  <img src={starColorIcon} alt="Star Icon" />
                  <img src={starColorIcon} alt="Star Icon" />
                  <img src={starColorIcon} alt="Star Icon" />
                  <img src={starIcon} alt="Star Icon" />
                  <p className="text-xs leading-none font-thin text-[#c8c8c8]">
                    0.4 / 100 Reviews
                  </p>
                </div>
              </div>
              <div>
                {product.variant && (
                  <div className="mb-3">
                    {product.variant.map((variantItem, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <p>{variantItem.name} :</p>
                        <div className="flex gap-1">
                          {variantItem.option.map((option, i) => (
                            <button
                              key={i}
                              className={`px-3 py-2 rounded-full border hover:bg-black/5`}
                              onClick={() =>
                                handleSetVariant(variantItem.name, option)
                              }
                            >
                              {option.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="flex justify-end mb-4">
                  <p className="text-xs">Rp</p>
                  <p className="text-xl font-bold">
                    {Intl.NumberFormat(["id"]).format(fee)}
                  </p>
                  <p className="text-sm self-end">
                    /{product.feeMeasurement || "pcs"}
                  </p>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <a
                    href={waTanyaUrl}
                    className="w-max bg-[#ebebeb] rounded-full flex items-center gap-2 px-4 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={whatsappIcon}
                      alt="Whatsapp Icon"
                      className="w-6"
                    />
                    Tanya ?
                  </a>
                  <a
                    href={waPesanUrl}
                    className="w-max bg-black text-white rounded-full flex items-center gap-2 px-4 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={whatsappColorIcon}
                      alt="Whatsapp Icon"
                      className="w-6"
                    />
                    Pesan
                  </a>
                </div>
              </div>
            </div>
          </div>
          {product.specs ? (
            <div className="px-3 sm:px-10 pt-8 pb-3 mb-10 max-w-screen-lg mx-auto">
              <h2 className="text-xl font-bold mb-4 ">Spesifikasi :</h2>
              {product.specs.map((spec, i) => (
                <div key={i} className="grid grid-cols-2 border-b py-2">
                  <div>{spec.name} :</div>
                  <div>{spec.keterangan}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-10" />
          )}
        </>
      ) : (
        <Navigate to="/catalog" />
      )}
    </Layout>
  );
}

export default Product;
