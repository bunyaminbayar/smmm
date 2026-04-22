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
    image: "/images/hizmetler/slider1.jpg",
    lines: [
      ["İzmir’de Güvenilir", "İzmir’de Güvenilir"],
      ["Mali Müşavirlik ve", "Mali Müşavirlik ve"],
      ["Muhasebe Çözümleri", "Muhasebe Çözümleri"],
    ],
    highlightLine: 2,
    description: (
      <>
        Çiğli’deki ofisimizden İzmir ve çevresindeki işletmelere vergi uyumu,
        <br />
        muhasebe kayıtları ve danışmanlık sunuyoruz; yüz yüze görüşmeye önem veriyoruz.
      </>
    ),
    ctaHref: "/hizmetlerimiz/muhasebe-mali-isler-yonetimi",
    ctaLabel: "Hizmetlerimiz",
  },
  {
    variant: "slider-second",
    image: "/images/hizmetler/hesaplama.jpg",
    lines: [
      ["Vergi, SGK ve", "Vergi, SGK ve"],
      ["Mevzuatta", "Mevzuatta"],
      ["Yanınızdayız", "Yanınızdayız"],
    ],
    highlightLine: 2,
    description: (
      <>
        Değişen mevzuata uyum, beyanname süreçleri ve işletmenizin mali disiplini
        <br />
        için bölgenizde erişilebilir bir SMMM desteği sağlıyoruz.
      </>
    ),
    ctaHref: "/iletisim",
    ctaLabel: "Bize Ulaşın",
  },
  {
    variant: "slider-third",
    image: "/images/hizmetler/isletme.jpg",
    lines: [
      ["Yerel İşletmelere", "Yerel İşletmelere"],
      ["Özel Çözümler", "Özel Çözümler"],
      ["İzmir Odaklı", "İzmir Odaklı"],
    ],
    highlightLine: 2,
    description: (
      <>
        İstanbul merkezli büyük ölçekli firmalar yerine,
        <br />
        İzmir’de faaliyet gösteren KOBİ ve serbest meslek sahiplerine odaklanıyoruz.
      </>
    ),
    ctaHref: "/hizmetlerimiz/muhasebe-mali-isler-yonetimi",
    ctaLabel: "Hakkımızda",
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
                    className="w-full h-full object-cover slider-image"
                    src={s.image}
                    fetchPriority="high"
                  />
                </div>
                <div className="container">
                  <div className="text-content flex-columns-between pl-10">
                    <div className="heading2">
                      {s.lines.map((pair, i) => (
                        <div key={pair[0]} className="relative overflow-hidden">
                          <span
                            className={`block relative overflow-hidden${i === s.highlightLine ? " text-blue" : ""}`}
                          >
                            {pair[0]}
                          </span>
                          <span
                            className={`block absolute top-0 left-0 w-full h-full text-white ${i === s.highlightLine ? " text-blue" : ""}`}
                          >
                            {pair[1]}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="body2 mt-3 text-secondary text-white">{s.description}</div>
                    <div className="button-block md:mt-10 mt-6">
                      <Link className="button-main bg-blue text-white" href={s.ctaHref}>
                        {s.ctaLabel}
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
