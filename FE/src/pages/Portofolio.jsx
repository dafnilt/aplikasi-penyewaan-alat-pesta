import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { allPortofolio } from "../data";

function Portofolio() {
  return (
    <Layout>
      <div className="mx-2 md:mx-8">
        <h1 className="text-3xl font-bold mx-auto w-fit text-center mt-12">
          Portofolio Kami
        </h1>
        <div className="mx-auto mb-8 w-[150px] border-b-4 border-black"></div>

        <div className="max-w-screen-2xl mx-auto flex flex-wrap">
          {allPortofolio.map((item, i) => (
            <div key={i} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
              <Link to={`/portofolio/${item.id}`}>
                <div
                  className="relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  style={{ aspectRatio: "590 / 333" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end">
                    <div className="bg-gradient-to-t from-black to-transparent p-4">
                      <h2 className="font-bold text-base md:text-[1.5vw] xl:text-xl mb-2 md:mb-0 xl:mb-2 text-white">
                        {item.title}
                      </h2>
                      <p className="text-white text-sm md:text-[1vw] xl:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Portofolio;
