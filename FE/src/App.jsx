import CarauselLandingPage from "./components/carauselLandingPage";
import PagesLayoutAbu from "./layout/pagesLayoutABu";
import PagesLayoutPutih from "./layout/pagesLayoutPutih";

function App() {
     return (
          <>
               <PagesLayoutPutih>
                    <div className="flex overflow-x-auto space-x-4 pb-[14px]">
                         <div className="min-w-[100%] bg-gray-700 p-4 shadow-md rounded-[20px] h-[634px]">
                              <div className="bloc mt-[187px] mb-[187px] ms-[85px]">
                                   <p
                                        className="font-bold text-white text-[48px] mb-[20px]"
                                        style={{
                                             lineHeight: "55px",
                                        }}>
                                        Selamat Datang <br></br>di Sewa Pesta
                                        Kita
                                   </p>
                                   <p className="text-white text-[20px] mb-[38px]">
                                        Kami melayani berbagai layanan sewa
                                        barang dan jasa <br></br>di bidang
                                        penyediaan alat event
                                   </p>
                                   <div className="flex gap-[23px]">
                                        <button className="bg-white opacity-60 text-black px-[17px] py-[14px] rounded-[36px] mt-4">
                                             Lihat Semua
                                        </button>
                                        <button className="bg-white opacity-60 text-black px-[17px] py-[14px] rounded-[36px] mt-4">
                                             Lihat Semua
                                        </button>
                                   </div>
                              </div>
                         </div>
                         <div className="min-w-[100%] bg-gray-700 p-4 shadow-md rounded-[20px] h-[634px]">
                              Kartu 2
                         </div>
                         <div className="min-w-[100%] bg-gray-700 p-4 shadow-md rounded-[20px] h-[634px]">
                              Kartu 3
                         </div>
                    </div>
               </PagesLayoutPutih>

               <br />

               <PagesLayoutAbu>
                    <div className="flex justify-start">
                         <div className="bloc">
                              <p className="text-[38px] font-bold">
                                   Katalog Product
                              </p>
                              <div className="garis-gj bg-[#1e1e1e] rounded-lg h-[4px] w-[180px]"></div>
                         </div>
                    </div>
                    <div className="flex justify-end">
                         <p
                              style={{
                                   fontSize: "20px",
                                   textDecoration: "underline",
                              }}>{`More >>`}</p>
                    </div>

                    <div className="flex overflow-x-auto space-x-6 py-4">
                         <CarauselLandingPage />
                    </div>
               </PagesLayoutAbu>
          </>
     );
}

export default App;
