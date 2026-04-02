"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Sadece İzmir’deki müşterilerle mi çalışıyorsunuz?",
    a: "Ofisimiz İzmir Çiğli’de; önceliğimiz İzmir ve yakın çevredeki işletmeler. Uzaktan dosya ve e-posta ile de süreç yürütebiliriz; detaylar için iletişime geçmeniz yeterli.",
  },
  {
    q: "Muhasebe defterimi tutmak zorunda mıyım?",
    a: "İşletme türünüze ve mevzuata göre ticari defter veya işletme hesabı tutma yükümlülüğünüz olabilir. İlk görüşmede durumunuzu değerlendirip size uygun defter türünü ve süreçleri netleştiririz.",
  },
  {
    q: "Vergi beyannamelerini kim hazırlıyor?",
    a: "Beyannamelerin usule uygun hazırlanması ve zamanında verilmesi için sizden gerekli evrakı toplar, kontrolleri yapar ve onayınıza sunarız. Elektronik ortamda verilmesi gereken beyannamelerde süreçleri birlikte yönetiriz.",
  },
  {
    q: "SGK prim bildirimlerinde destek veriyor musunuz?",
    a: "Evet. Aylık prim hizmet belgesi, bildirim süreleri ve teşviklerden yararlanma konularında bilgilendirme ve kontrol desteği sağlıyoruz.",
  },
  {
    q: "Randevu ile mi gelmem gerekiyor?",
    a: "Yoğunluğa göre randevu öneriyoruz; böylece dosyanız için yeterli süre ayırırız. Telefon veya e-posta ile uygun gün/saat belirleyebilirsiniz.",
  },
];

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xl">
      <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xl">
      <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z" />
    </svg>
  );
}

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="faqs-block style-one lg:mt-[100px] sm:mt-16 mt-10">
      <div className="flex max-xl:flex-wrap main">
        <div className="w-full xl:w-1/2">
          <div className="bg-img w-full">
            <img
              alt=""
              loading="lazy"
              width={5000}
              height={5000}
              className="w-full"
              style={{ color: "transparent" }}
              src="/images/hizmetler/smmm-takip.jpg"
            />
          </div>
          <div className="desc bg-blue flex items-center justify-center">
            <div className="content flex gap-8">
              <i className="icon-hand-team text-white flex-shrink-0" />
              <h4 className="heading4 text-white">
                Sorularınız için Çiğli’de çayımız demli; İzmir’deki işletmenize net ve uygulanabilir cevaplar
                vermeyi hedefliyoruz.
              </h4>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 bg-surface">
          <div className="content-main">
            <div className="heading3">Sık sorulan sorular</div>
            <div className="list-question">
              {FAQ_ITEMS.map((item, i) => {
                const open = openIndex === i;
                return (
                  <button
                    key={item.q}
                    type="button"
                    className={`question-item hover-box-shadow pointer mt-5 px-7 rounded-lg border border-line cursor-pointer w-full text-left bg-transparent ${open ? "open" : ""}`.trim()}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    <div className="question-item-main flex items-center justify-between py-4 heading7 gap-4">
                      {item.q}
                      {open ? <MinusIcon /> : <PlusIcon />}
                    </div>
                    <div className="content-question">
                      <div className="border-line w-full" />
                      <div className="body3 text-secondary pb-4">{item.a}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
