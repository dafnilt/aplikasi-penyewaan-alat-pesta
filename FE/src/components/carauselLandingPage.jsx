import { useState } from "react";
import glock from "../assets/pppp.png";

const CarauselLandingPage = () => {
     const [currentIndex, setCurrentIndex] = useState(0);
     const cards = [
          {
               image: { glock },
               title: "Card 1",
          },
          {
               image: "https://source.unsplash.com/random/2",
               title: "Card 2",
          },
          {
               image: "https://source.unsplash.com/random/3",
               title: "Card 3",
          },
          {
               image: "https://source.unsplash.com/random/4",
               title: "Card 4",
          },
          {
               image: "https://source.unsplash.com/random/5",
               title: "Card 5",
          },
          {
               image: "https://source.unsplash.com/random/6",
               title: "Card 6",
          },
     ];

     const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
     };

     const handlePrev = () => {
          setCurrentIndex(
               (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
          );
     };

     const visibleCards = (startIndex, numVisible) => {
          const endIndex = startIndex + numVisible;
          // Jika endIndex melebihi panjang array, kita loop kembali dari awal
          if (endIndex <= cards.length) {
               return cards.slice(startIndex, endIndex);
          } else {
               return [
                    ...cards.slice(startIndex, cards.length),
                    ...cards.slice(0, endIndex % cards.length),
               ];
          }
     };

     return (
          <div className="w-[100%] mx-auto overflow-hidden">
               <div className="relative">
                    <div className="flex space-x-4 gap-[24px] justify-center">
                         <div className="h-[320px] flex items-center justify-center">
                              <button
                                   className="w-6 h-6 rounded-full bg-gray-300"
                                   onClick={handlePrev}>
                                   &lt;
                              </button>
                         </div>

                         {visibleCards(currentIndex, 6).map((card, index) => (
                              <div
                                   className="flex-none w-[245px] h-[320px] p-4 bg-white rounded-lg shadow-md relative" // Tambahkan `relative`
                                   key={index}
                                   style={{
                                        boxShadow:
                                             "0px 4px 4px rgba(1, 0, 0, 0.50)",
                                   }}>
                                   <img
                                        className="rounded-lg"
                                        src={glock}
                                        alt=""
                                        style={{
                                             height: "320px",
                                             width: "245px",
                                        }}
                                   />
                                   <div
                                        className="flex justify-center items-center" // Tambahkan `items-center`
                                        style={{
                                             position: "absolute",
                                             top: "50%", // Set top ke 50%
                                             left: "50%", // Set left ke 50%
                                             transform: "translate(-50%, -50%)", // Pindahkan ke tengah
                                             zIndex: 1,
                                        }}>
                                        <button className="py-[18px] px-[72px] bg-red-500 rounded-full">
                                             {card.title}
                                        </button>
                                   </div>
                              </div>
                         ))}

                         <div className="h-[320px] flex items-center justify-center">
                              <button
                                   className="w-6 h-6 rounded-full bg-gray-300"
                                   onClick={handleNext}>
                                   &gt;
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CarauselLandingPage;
