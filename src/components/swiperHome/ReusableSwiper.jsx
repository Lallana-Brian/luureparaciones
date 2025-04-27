import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { slidesData } from "../../assets/data/dataStore";

const ReusableSwiper = () => {
  return (
    <>
      {/* Contenedor del Swiper */}
      <div className="w-full h-[50vh] py-10 md:py-0  sm:h-screen mt-0 overflow-hidden relative">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1200}
          className="w-full h-full"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Imagen que ocupará el 100% en pantallas grandes */}
                <img
                  src={slide.imgSrc}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ReusableSwiper;

//     <>
//       {/* Contenedor del Swiper */}
//       <div className="w-full h-[45vh] sm:h-[100vh] sm:top-0 md:h-[90vh] mt-14 overflow-hidden flex items-center justify-center bg-body">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           speed={1200}
//         >
//           {slidesData.map((slide, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex items-center justify-center w-full h-full">
//                 <div className="w-full h-full mx-4 sm:mx-24">
//                   <img
//                     src={slide.imgSrc}
//                     alt={slide.alt}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-0 left-0 w-full h-5/6 bg-gradient-to-b from-black/100 via-black/60 to-transparent z-10" />
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default ReusableSwiper;
