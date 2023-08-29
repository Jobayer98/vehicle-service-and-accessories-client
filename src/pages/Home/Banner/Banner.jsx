import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import BannerImage from "./BannerImage";

const Banner = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerImage
            img={img5}
            title={" Affordable Price For Car Servicing"}
            info={
              "There are many variations of passages of available, but the majority have suffered alteration in some form"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage
            img={img2}
            title={" Affordable Price For Car Servicing"}
            info={
              "There are many variations of passages of available, but the majority have suffered alteration in some form"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage
            img={img3}
            title={" Affordable Price For Car Servicing"}
            info={
              "There are many variations of passages of available, but the majority have suffered alteration in some form"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerImage
            img={img1}
            title={" Affordable Price For Car Servicing"}
            info={
              "There are many variations of passages of available, but the majority have suffered alteration in some form"
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
