import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ Agrega Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carrousel() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // ✅ Añádelo aquí también
      loop={true}
          navigation
          effect="cards"
          speed={500} // Ajusta la velocidad a 500ms
      autoplay={{
        delay: 3000, // Usa 3000ms (3s) en lugar de 300ms para que se note
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className="w-full h-84 mt-14 rounded-xl shadow-lg"
    >
      <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white text-2xl font-bold">
        <img src="https://via.placeholder.com/300x200.png?text=Slide+1" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-green-500 text-white text-2xl font-bold">
        Slide 2
      </SwiperSlide>
    </Swiper>
  );
}
