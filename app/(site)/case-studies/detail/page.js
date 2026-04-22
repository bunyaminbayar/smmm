import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Vaka İncelemesi — Örnek Proje",
  description:
    "Detaylı vaka incelemesi: müşteri ihtiyacı, uyguladığımız çözüm ve elde edilen sonuçlar.",
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">Vaka İncelemesi — Örnek Proje</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          Aşağıda örnek bir vaka çalışmasının özeti yer alıyor: sorun, uygulanan çözüm adımları ve ölçülebilir sonuçlar.
        </p>

        <div className="grid gap-10 lg:grid-cols-12 items-start mt-12">
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-line bg-white p-7">
              <div className="heading6">Müşteri ve Sorun</div>
              <p className="body3 text-secondary mt-4">
                Orta ölçekli bir KOBİ müşterinin düzensiz fatura ve bordro akışı nedeniyle likidite
                sıkıntısı ve vergi uyumsuzluk riski vardı. Gecikmiş beyanlar nedeniyle cezai risk oluşmuştur.
              </p>

              <div className="heading6 mt-6">Uygulanan Çözüm</div>
              <ul className="mt-4 space-y-3">
                {[
                  "Belge sürecinin standardize edilmesi ve dijital arşiv düzeni",
                  "Eksik SGK ve vergi kayıtlarının raporlanıp düzeltme planı hazırlanması",
                  "Aylık finansal raporlama ve nakit akışı tahmini oluşturulması",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="text-blue text-2xl flex-shrink-0 mt-0.5"
                      aria-hidden
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                    </svg>
                    <span className="body3 text-secondary">{t}</span>
                  </li>
                ))}
              </ul>

              <div className="heading6 mt-6">Elde Edilen Sonuçlar</div>
              <p className="body3 text-secondary mt-3">
                Uyum sağlandı, gecikmeler düzeltildi ve aylık raporlamayla yönetim kararları için net veri
                sağlandı. Müşteri, düzenli raporlarla ödeme planlarını yöneterek nakit akışını iyileştirdi.
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-line bg-white p-6">
              <h4 className="heading6">Benzer bir vaka mı var?</h4>
              <p className="body3 text-secondary mt-3">
                Durumunuzu birlikte değerlendirebiliriz. Ön analiz ücretsizdir; ardından gerekli adımları
                planlayıp uygulamaya geçeriz.
              </p>
              <div className="mt-5">
                <Link className="button-main bg-blue text-white rounded-full" href="/iletisim">
                  Ön analiz talep edin
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-2xl bg-surface">
                <img
                  alt=""
                  loading="lazy"
                  width={5000}
                  height={5000}
                  className="w-full h-[260px] object-cover"
                  style={{ color: "transparent" }}
                  src="/images/hizmetler/agree.jpg"
                />
              </div>

              <div className="mt-6 rounded-2xl border border-line bg-white p-6">
                <div className="heading6">İletişim</div>
                <p className="body3 text-secondary mt-2">{siteConfig.phoneDisplay} · {siteConfig.email}</p>
                <a
                  className="caption2 text-blue hover:underline mt-3 inline-block"
                  href={siteConfig.maps.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ofisimiz: {siteConfig.address.short}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

