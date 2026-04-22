import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Vaka İncelemeleri",
  description:
    "İşletmeler için uyguladığımız çözümler ve elde edilen sonuçlar — vergi, muhasebe ve finansal iyileştirme örnekleri.",
};

export default function Page() {
  const projects = [
    {
      title: "KOBİ için Mali Düzenleme ve Raporlama",
      desc:
        "Düzensiz belge akışı ve gecikmiş beyanların yol açtığı mali risklerin azaltılması; aylık finansal raporlama ile karar desteği sağlandı.",
      img: "/images/hizmetler/agree.jpg",
      href: "/case-studies/detail",
    },
    {
      title: "İstihdam ve SGK Uyum Projesi",
      desc:
        "Personel bordrolama ve SGK bildirimlerinde uyum sağlandı; geriye dönük prim düzeltmeleri ve idari riskler temizlendi.",
      img: "/images/hizmetler/agree.jpg",
      href: "/case-studies/detail",
    },
    {
      title: "KDV İade Sürecinin Hızlandırılması",
      desc:
        "KDV iadesi süreçleri için eksik belgeler tamamlandı, başvuru takibi yapıldı ve tahsilat süresi kısaltıldı.",
      img: "/images/hizmetler/agree.jpg",
      href: "/case-studies/detail",
    },
  ];

  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">Vaka İncelemeleri</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          {siteConfig.name} olarak uyguladığımız projelerden seçmeler. Her vaka, müşterinin
          özgün ihtiyaçlarına göre planlanmış; amaç mali disiplin sağlamak, yasal uyumu
          güçlendirmek ve nakit akışını iyileştirmektir.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border border-line bg-white overflow-hidden">
              <div className="overflow-hidden">
                <img
                  alt=""
                  src={p.img}
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="heading6">{p.title}</h3>
                <p className="body3 text-secondary mt-3">{p.desc}</p>
                <div className="mt-5">
                  <Link href={p.href} className="caption2 text-blue hover:underline">
                    Detayları inceleyin →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-white p-6">
          <h4 className="heading6">Size nasıl yardımcı olabiliriz?</h4>
          <p className="body3 text-secondary mt-3">
            Projenizin benzer bir vaka olup olmadığını konuşalım. {siteConfig.name} olarak
            önceliğimiz sürdürülebilir çözümler ve düzenli raporlamadır.
          </p>
          <div className="mt-6">
            <Link className="button-main bg-blue text-white rounded-full" href="/iletisim">
              Bizimle iletişime geçin
            </Link>
            <Link className="button-main bg-white text-on-surface rounded-full border border-line ml-4" href="/hizmetlerimiz">
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

