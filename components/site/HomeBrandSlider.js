"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const brands = [
  { src: "/images/image_7.png", srcSet: "/images/image_30.png 1x, /images/image_7.png 2x" },
  { src: "/images/image_16.png", srcSet: "/images/image_32.png 1x, /images/image_16.png 2x" },
  { src: "/images/image_4.png", srcSet: "/images/image_25.png 1x, /images/image_4.png 2x" },
  { src: "/images/image_5.png", srcSet: "/images/image_31.png 1x, /images/image_5.png 2x" },
  { src: "/images/image_19.png", srcSet: "/images/image_34.png 1x, /images/image_19.png 2x" },
  { src: "/images/image_15.png", srcSet: "/images/image_26.png 1x, /images/image_15.png 2x" },
];

export default function HomeBrandSlider() {
  return (
    <div className="brand-block py-9 bg-blue lg:mt-[100px] sm:mt-16 mt-10">
      <div className="container">
        <div className="list-brand">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={24}
          loop
          autoplay={{ delay: 2500, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {brands.map((b) => (
              <SwiperSlide key={b.src}>
                <div className="brand-item relative flex items-center justify-center h-[34px]">
                  <img
                    alt=""
                    width={300}
                    height={300}
                    className="h-full w-auto duration-500 relative object-cover"
                    src={b.src}
                    srcSet={b.srcSet}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
