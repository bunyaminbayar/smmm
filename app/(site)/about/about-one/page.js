import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Hakkımızda",
  description:
    "İzmir Çiğli’de faaliyet gösteren SMMM Nurettin Bayar: muhasebe, vergi uyumu, raporlama ve danışmanlık hizmetleri.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/about/about-one`,
  },
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">Hakkımızda</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          {siteConfig.name} olarak İzmir Çiğli’de faaliyet gösteriyoruz. İzmir ve çevresindeki işletmelere muhasebe,
          vergi uyumu ve danışmanlık hizmetlerini; şeffaf, düzenli ve ulaşılabilir bir çalışma modeliyle sunuyoruz.
        </p>

        <div className="grid gap-10 lg:grid-cols-12 items-start mt-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-line bg-white p-7">
              <div className="heading6">İzmir’de mali süreçlerinizi birlikte yönetiyoruz</div>
              <p className="body3 text-secondary mt-4">
                Mali müşavirlik, yalnızca evrak toplamak ve beyanname vermek değildir. İzmir’deki işletmeler için asıl
                değer; doğru bilgi akışı, zamanında kontrol ve sürdürülebilir bir mali disiplin kurmaktır. Biz de bu
                yaklaşım ile, işletmenizin günlük iş akışına uygun bir düzen kurup düzenli raporlama yapmayı hedefleriz.
              </p>
              <p className="body3 text-secondary mt-4">
                Ofisimiz İzmir Çiğli’de. Randevu ile yüz yüze görüşebilir; dosyanızı, hedeflerinizi ve risk alanlarını
                birlikte değerlendirebiliriz.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7 mt-6">
              <div className="heading6">İlkelerimiz</div>
              <div className="grid gap-4 sm:grid-cols-2 mt-4">
                {[
                  {
                    title: "Şeffaflık",
                    desc: "İzmir’deki işletmenize net, anlaşılır bilgi; sürpriz maliyet yok.",
                    icon: "icon-text-search",
                  },
                  {
                    title: "Gizlilik",
                    desc: "Ticari verilerinizi ve evrak akışınızı güvenle yönetiriz.",
                    icon: "icon-gear-warning",
                  },
                  {
                    title: "Zamanında takip",
                    desc: "Beyan ve bildirim takviminde gecikme riskini azaltırız.",
                    icon: "icon-hand-tick",
                  },
                  {
                    title: "Ulaşılabilirlik",
                    desc: "İzmir/Çiğli’de randevu; ayrıca uzaktan düzenli iletişim.",
                    icon: "icon-hand-house",
                  },
                ].map((v) => (
                  <div key={v.title} className="rounded-2xl bg-surface p-5">
                    <div className="flex items-center gap-3">
                      <i className={`${v.icon} text-blue text-4xl`} />
                      <div className="heading7">{v.title}</div>
                    </div>
                    <div className="body3 text-secondary mt-2">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7 mt-6">
              <div className="heading6">Neler sağlıyoruz?</div>
              <ul className="mt-4 space-y-3">
                {[
                  "İzmir’de işletmenize uygun muhasebe düzeni ve belge akışı",
                  "Vergi ve SGK süreçlerinde mevzuata uyum ve düzenli kontrol",
                  "Finansal raporlama ile karar alma süreçlerine destek",
                  "Yıl boyu planlama: dönem sonu sürprizlerini azaltan yaklaşım",
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
            </div>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <Link className="button-main bg-blue text-white rounded-full" href="/contact/contact-one">
                İzmir’de randevu oluşturun
              </Link>
              <Link className="button-main bg-white text-on-surface rounded-full border border-line" href="/hizmetlerimiz">
                Hizmetlerimizi inceleyin
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-2xl bg-surface">
                <img
                  alt=""
                  loading="lazy"
                  width={5000}
                  height={5000}
                  className="w-full h-[320px] sm:h-[380px] lg:h-[520px] object-cover"
                  style={{ color: "transparent" }}
                  src="/images/hizmetler/agree.jpg"
                />
              </div>
              <div className="mt-6 rounded-2xl border border-line bg-white p-6">
                <div className="heading6">İzmir · Çiğli</div>
                <p className="body3 text-secondary mt-2">
                  {siteConfig.address.full}
                </p>
                <a
                  className="caption2 text-blue hover:underline mt-3 inline-block"
                  href={siteConfig.maps.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Haritalar’da konum
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

