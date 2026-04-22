import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "E-fatura ve e-defter süreçlerinde dikkat edilecek noktalar",
  description: "Elektronik defter ve e-fatura uygulamaları sırasında dikkat edilmesi gereken uygulama ve arşivleme noktaları.",
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">E-fatura ve e-defter süreçlerinde dikkat edilecek noktalar</h1>
        <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize mt-4">muhasebe</div>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          Elektronik defter ve e-fatura uygulamaları, doğru entegrasyon ve belge akışı gerektirir. Süreçlerin düzenlenmesi, arşivleme ve uyum kontrolleri önemlidir.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <section className="rounded-2xl border border-line bg-white p-7 mb-6">
              <div className="heading6">Sistem entegrasyonu ve formatlar</div>
              <p className="body3 text-secondary mt-3">
                Muhasebe programınız ile e-fatura sağlayıcınız arasında doğru veri akışı kurulmalı, XML formatları ve tarih/saat uyumu kontrol edilmelidir.
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-white p-7 mb-6">
              <div className="heading6">Düzenli kontrol ve yedekleme</div>
              <p className="body3 text-secondary mt-3">
                Elektronik belgelerin düzenli kontrolü, yetkilendirme ve güvenli yedekleme politikası işletilmelidir; aksi takdirde kanuni uyumsuzluk riski doğar.
              </p>
            </section>

            <div className="mt-6 rounded-2xl border border-line bg-white p-6">
              <h4 className="heading6">Destek almak ister misiniz?</h4>
              <p className="body3 text-secondary mt-3">
                Süreçlerinizi birlikte gözden geçirelim; entegrasyon, arşivleme ve yetkilendirme adımlarını planlayalım.
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
