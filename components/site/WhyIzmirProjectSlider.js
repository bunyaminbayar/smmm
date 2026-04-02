"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import WhyIzmirCard from "./WhyIzmirCard";

export default function WhyIzmirProjectSlider({ cases, href }) {
  return (
    <div className="list-project md:mt-10 mt-7">
      <Swiper
        className="relative h-full"
        modules={[Pagination]}
        spaceBetween={10}
        loop={cases.length > 1}
        pagination={{ clickable: true }}
        slidesPerView={1.15}
        breakpoints={{
          480: { slidesPerView: 1.35 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2.5 },
          1280: { slidesPerView: 3 },
        }}
      >
        {cases.map((c) => (
          <SwiperSlide key={c.title}>
            <WhyIzmirCard title={c.title} subtitle={c.subtitle} img={c.img} href={href} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
