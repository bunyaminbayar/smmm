"use client";

import { useRef } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    variant: "slider-first",
    image: "/images/image_21.png",
    lines: [
      ["Simplify and Secure", "Simplify and Secure"],
      ["Your Payments with", "Your Payments with"],
      ["Our Solution", "Our Solution"],
    ],
    highlightLine: 2,
    description: (
      <>
        Our platform offers secure and reliable investment
        <br />
        opportunities in the rapidly growing world of cryptocurrency.
      </>
    ),
    ctaHref: "/service/service-one",
  },
  {
    variant: "slider-second",
    image: "/images/image_8.png",
    lines: [
      ["Empower Your", "Empower Your"],
      ["Business with", "Business with"],
      ["Seamless Payments", "Seamless Payments"],
    ],
    highlightLine: 2,
    description: (
      <>
        Our platform offers secure and reliable investment
        <br />
        opportunities in the rapidly growing world of cryptocurrency.
      </>
    ),
    ctaHref: "/service/service-one",
  },
  {
    variant: "slider-third",
    image: "/images/image_23.png",
    lines: [
      ["Powerful Payment", "Powerful Payment"],
      ["Solutions for", "Solutions for"],
      ["Seamless Transactions", "Seamless Transactions"],
    ],
    highlightLine: 2,
    description: (
      <>
        Trust us to help you navigate the complex landscape and
        <br />
        achieve your financial goals with peace of mind.
      </>
    ),
    ctaHref: "/service/service-one",
  },
];

export default function HomeHeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="slider-block style-one">
      <button
        ref={prevRef}
        type="button"
        className="prev-arrow flex items-center justify-center"
        aria-label="Önceki slayt"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="text-white heading6"
        >
          <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z" />
        </svg>
      </button>
      <div className="slider-main">
        <Swiper
          className="h-full relative"
          modules={[Navigation, Pagination]}
          pagination={{ clickable: true, el: ".hero-swiper-pagination" }}
          navigation={{}}
          onBeforeInit={(swiper) => {
            const nav = swiper.params.navigation;
            if (nav && typeof nav !== "boolean") {
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }}
          loop
        >
          {slides.map((s) => (
            <SwiperSlide key={s.variant}>
              <div className={`slider-item ${s.variant}`}>
                <div className="bg-img">
                  <img
                    alt=""
                    width={4000}
                    height={3000}
                    className="w-full h-full object-cover"
                    src={s.image}
                    fetchPriority="high"
                  />
                </div>
                <div className="container">
                  <div className="text-content flex-columns-between">
                    <div className="heading2">
                      {s.lines.map((pair, i) => (
                        <div key={pair[0]} className="relative overflow-hidden">
                          <span
                            className={`block relative overflow-hidden${i === s.highlightLine ? " text-blue" : ""}`}
                          >
                            {pair[0]}
                          </span>
                          <span
                            className={`block absolute top-0 left-0 w-full h-full${i === s.highlightLine ? " text-blue" : ""}`}
                          >
                            {pair[1]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="body2 mt-3 text-secondary">{s.description}</div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link className="button-main bg-blue text-white" href={s.ctaHref}>
                        Discovery now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hero-swiper-pagination swiper-pagination" />
      </div>
      <button
        ref={nextRef}
        type="button"
        className="next-arrow flex items-center justify-center"
        aria-label="Sonraki slayt"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="text-white heading6"
        >
          <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" />
        </svg>
      </button>
    </div>
  );
}
