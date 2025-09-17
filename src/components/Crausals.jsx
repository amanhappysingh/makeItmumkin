import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function NgoPromoCarousel({ images = [] }) {
  return (
    <div className="max-w-full mx-auto pb-16 overflow-hidden ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        speed={4000}
        spaceBetween={30}
        allowTouchMove={false}
        className="h-[500px] w-full rounded-xl"
      >
        {(images.length > 0 ? images : [
          "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=2940&q=80",
          "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?auto=format&fit=crop&w=2762&q=80",
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2762&q=80",
        ]).map((img, index) => (
          <SwiperSlide   key={index}>
            <img
              src={img}
              alt={`slide-${index + 1}`}
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
