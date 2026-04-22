import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Başarı Hikayeleri",
  description:
    "Müşterilerimizle birlikte elde ettiğimiz sonuçlar: vergi optimizasyonu, daha iyi raporlama ve uyum süreçleri.",
};

export default function Page() {
  const highlights = [
    {
      title: "%30 daha hızlı KDV iadesi",
      desc: "Dokümantasyon düzeni ve başvuru takipleri ile iade süreçleri hızlandı.",
    },
    {
      title: "Tam uyumlu bordro sistemi",
      desc: "SGK ve iş kanunu uyumlu bordrolama ile idari riskler azaltıldı.",
    },
    {
      title: "Düzenli finansal raporlama",
      desc: "Aylık raporlama ile yönetim kararları için doğru veri sağlandı.",
    },
  ];

  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">Başarı Hikayeleri</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          Gerçek müşterilerle yürüttüğümüz projelerden kısa özetler ve elde edilen somut faydalar.
        </p>

        <div className="grid gap-6 sm:grid-cols-3 mt-8">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl bg-surface p-6">
              <div className="heading7">{h.title}</div>
              <div className="body3 text-secondary mt-2">{h.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-white p-6">
          <h4 className="heading6">Gerçek sonuç, ölçülebilir fayda</h4>
          <p className="body3 text-secondary mt-3">
            Her vaka, ön analiz ile başlar. Öncelikle riskleri ve iyileştirme fırsatlarını belirler,
            sonra uygulama ve izleme adımlarını devreye alırız. Aşağıdaki detaylı vaka incelemesini
            örnek bir iş akışı olarak inceleyebilirsiniz.
          </p>
          <div className="mt-6">
            <Link className="button-main bg-blue text-white rounded-full" href="/case-studies/detail">
              Detaylı vaka incelemesi
            </Link>
            <Link className="button-main bg-white text-on-surface rounded-full border border-line ml-4" href="/iletisim">
              Projenizi konuşalım
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

