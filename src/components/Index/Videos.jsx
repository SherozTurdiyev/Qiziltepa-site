import React from "react";
import Title from "./Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Videos = () => {
  return (
    <div className="mb-[50px]">
      <Title title={"Voqealar"} />
      <div className="container flex justify-between items-center mt-2">
        <Swiper
          spaceBetween={33}
          // slidesPerView={2.5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            300:{
              width: 300,
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024:{
              slidesPerView:2.5
            }
          }}
        >
          <SwiperSlide>
            <div className="relative w-full">
              <img className="w-full h-[287px]" src="./videos.png" alt="" />
              <p className="absolute bottom-6 left-4 text-white font-semibold text-[25px] ">
                Qiziltepa istirohat bog’i
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full">
              <img className="w-full h-[287px]" src="./videos.png" alt="" />
              <p className="absolute bottom-6 left-4 text-white font-semibold text-[25px] ">
                Qiziltepa istirohat bog’i
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full">
              <img className="w-full h-[287px]" src="./videos.png" alt="" />
              <p className="absolute bottom-6 left-4 text-white font-semibold text-[25px] ">
                Qiziltepa istirohat bog’i
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full">
              <img className="w-full h-[287px]" src="./videos.png" alt="" />
              <p className="absolute bottom-6 left-4 text-white font-semibold text-[25px] ">
                Qiziltepa istirohat bog’i
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full">
              <img className="w-full h-[287px]" src="./videos.png" alt="" />
              <p className="absolute bottom-6 left-4 text-white font-semibold text-[25px] ">
                Qiziltepa istirohat bog’i
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full">
              <img className="w-full h-[287px]" src="./videos.png" alt="" />
              <p className="absolute bottom-6 left-4 text-white font-semibold text-[25px] ">
                Qiziltepa istirohat bog’i
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative w-full">
              <img className="w-full h-[287px]" src="./videos.png" alt="" />
              <p className="absolute bottom-6 left-4 text-white font-semibold text-[25px] ">
                Qiziltepa istirohat bog’i
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Videos;
