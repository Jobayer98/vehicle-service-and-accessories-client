import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TestiCard from "./TestiCard";

const Testimonial = () => {
  return (
    <div className="my-32">
      <div className="flex flex-col gap-3 justify-center items-center mb-8">
        <h3 className="text-2xl font-bold text-orange-600">Testimonials</h3>
        <h2 className="text-4xl font-bold">Clients Feedbacks</h2>
      </div>
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper max-w-screen-lg mx-auto"
        >
          <SwiperSlide>
            <TestiCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestiCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestiCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestiCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="block lg:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper max-w-screen-lg mx-auto"
        >
          <SwiperSlide>
            <TestiCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestiCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestiCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestiCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
