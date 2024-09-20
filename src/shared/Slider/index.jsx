import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card } from "../../entities/Card";
import Parfume from "../../assets/parfume.png";

export const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Card
          img={Parfume}
          name="Ароматическая свеча"
          title="“Медовое утро”"
          price="2000"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          img={Parfume}
          name="Ароматическая свеча"
          title="“Медовое утро”"
          price="2000"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          img={Parfume}
          name="Ароматическая свеча"
          title="“Медовое утро”"
          price="2000"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          img={Parfume}
          name="Ароматическая свеча"
          title="“Медовое утро”"
          price="2000"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          img={Parfume}
          name="Ароматическая свеча"
          title="“Медовое утро”"
          price="2000"
        />
      </SwiperSlide>
    </Swiper>
  );
};
