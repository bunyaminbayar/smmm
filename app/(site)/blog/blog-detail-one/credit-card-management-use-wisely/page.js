import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "SGK prim bildirimlerinde sık yapılan hatalar",
  description: "Bordro ve prim bildirimlerinde dikkat edilmesi gereken yaygın hatalar ve çözüm önerileri.",
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">SGK prim bildirimlerinde sık yapılan hatalar</h1>
        <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize mt-4">sgk</div>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          Bordro ve SGK bildirimlerinde görülen hatalar hem idari para cezası hem de geriye dönük yükümlülük doğurabilir. Aşağıda yaygın sorunlar ve çözüm adımları yer alıyor.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <section className="rounded-2xl border border-line bg-white p-7 mb-6">
              <div className="heading6">Yanlış prime esas kazanç bildirimi</div>
              <p className="body3 text-secondary mt-3">
                Personel maaşındaki hakların doğru sınıflandırılması önemlidir. Yanlış sınıflandırma prim ve vergi hesaplarını etkiler.
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-white p-7 mb-6">
              <div className="heading6">Eksik istihdam kayıtları</div>
              <p className="body3 text-secondary mt-3">
                Geçmişe dönük tespit edilen eksik kayıtlar için SGK ile uzlaşma ve düzeltme süreçleri takip edilmeli; cezai yaptırımların azaltılması için hızlı hareket edilmelidir.
              </p>
            </section>

            <div className="mt-6 rounded-2xl border border-line bg-white p-6">
              <h4 className="heading6">Daha fazlası için</h4>
              <p className="body3 text-secondary mt-3">
                Konuyla ilgili detaylı destek almak isterseniz bizimle iletişime geçin. Ön analiz ve yönlendirme ile başlayalım.
              </p>
              <div className="mt-4">
                <Link href="/iletisim" className="button-main bg-blue text-white rounded-full">
                  İletişime geçin
                </Link>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="rounded-2xl border border-line bg-white p-6">
                <div className="heading6">Yazar</div>
                <p className="body3 text-secondary mt-2">{siteConfig.shortName}</p>
                <div className="mt-4">
                  <a href={`tel:${siteConfig.phoneTel}`} className="caption2 text-blue hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
