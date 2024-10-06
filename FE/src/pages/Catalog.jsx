import Layout from "../layout/Layout";
import filterIcon from "../assets/icon/filter.svg";
import chevronDownIcon from "../assets/icon/chevron-down.svg";
import { allProduct } from "../data";

function Catalog() {
  const catalogProduct = [
    ...allProduct,
    ...allProduct,
    ...allProduct,
    ...allProduct,
  ];

  return (
    <Layout>
      <div className="py-10">
        <div className="w-max sm:mx-auto mb-4 px-3 md:px-10">
          <h1 className="text-2xl font-bold mb-1">Katalog Produk</h1>
          <div className="bg-[#59903E] w-[65%] sm:mx-auto h-[2px] rounded-full" />
        </div>
        <div className="mb-4 px-3 md:px-10 flex items-center justify-between max-w-screen-xl mx-auto">
          <div className="flex gap-3 items-center px-3">
            <img
              src={filterIcon}
              alt="Filter Icon"
              className="w-8 aspect-square"
            />
            Filter
          </div>
          <div className="flex gap-3 items-center border border-black rounded-full px-4 py-2">
            Categories
            <img src={chevronDownIcon} alt="Arrow Down Icon" className="w-4" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 px-3 md:px-10 mb-3 max-w-screen-xl mx-auto">
          {catalogProduct.map((item, index) => (
            <a href={`/catalog/${item.id}`} key={index}>
              <div
                style={{
                  background: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="bg-black/10 aspect-square rounded-lg"
              />
              <div>
                <h1 className="text-lg font-bold mb-2">{item.title}</h1>
                <p className="text-sm mb-2">{item.desc}</p>
                <div>
                  <p className="font-semibold mb-1">
                    Rp{Intl.NumberFormat(["id"]).format(item.fee)}
                  </p>
                  <p className="text-xs text-end">Disewa {item.timesRented}x</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Catalog;
