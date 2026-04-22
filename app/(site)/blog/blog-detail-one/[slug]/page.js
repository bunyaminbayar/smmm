import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const ARTICLES = {
  "investment-opportunities-explore-options": {
    title: "İzmir’de KOBİ’ler için vergi avantajlarına genel bakış",
    tag: "vergi",
    intro:
      "KOBİ’ler için sunulan çeşitli vergi teşvikleri, yatırım indirimleri ve uyum yükümlülükleri hakkında pratik bir bakış.",
    content: [
      {
        heading: "Hangi teşvikler mevcut?",
        body:
          "Bölgesel ve sektörel teşvikler, yatırım indirimi ve belirli giderlerin gelirden düşülmesi gibi imkânlar vardır. Öncelikle işletmenizin faaliyet konusu ve yatırımın niteliği değerlendirilmelidir.",
      },
      {
        heading: "Uygulamada dikkat edilecekler",
        body:
          "Teşviklerden yararlanmak için belge düzeni, yatırımın fiziki takibi ve doğru muhasebe kaydı şarttır. Eksik belge ve yanlış sınıflandırma teşvik iptaline yol açabilir.",
      },
      {
        heading: "Nasıl başlanır?",
        body:
          "Ön analizle hangi teşviklere uygun olduğunuz belirlenir; ardından vergi uyum süreçleri düzenlenip başvurular yapılır. Biz bu süreci planlıyor ve takip ediyoruz.",
      },
    ],
  },
  "credit-card-management-use-wisely": {
    title: "SGK prim bildirimlerinde sık yapılan hatalar",
    tag: "sgk",
    intro:
      "Bordro ve SGK bildirimlerinde görülen hatalar hem idari para cezası hem de geriye dönük yükümlülük doğurabilir. Yaygın yanlışlar ve düzeltme adımları aşağıda.",
    content: [
      {
        heading: "Yanlış prime esas kazanç bildirimi",
        body: "Personel maaşındaki hakların doğru sınıflandırılması önemlidir. Yanlış sınıflandırma prim ve vergi hesaplarını etkiler.",
      },
      {
        heading: "Eksik istihdam kayıtları",
        body: "Geçmişe dönük tespit edilen eksik kayıtlar için SGK ile uzlaşma ve düzeltme süreçleri takip edilmeli; cezai yaptırımların azaltılması için hızlı hareket edilmelidir.",
      },
    ],
  },
  "savings-strategies-strong-foundation": {
    title: "E-fatura ve e-defter süreçlerinde dikkat edilecek noktalar",
    tag: "muhasebe",
    intro:
      "Elektronik defter ve e-fatura uygulamaları, doğru entegrasyon ve belge akışı gerektirir. Süreçlerin düzenlenmesi, arşivleme ve uyum kontrolleri önemlidir.",
    content: [
      {
        heading: "Sistem entegrasyonu ve formatlar",
        body: "Muhasebe programınız ile e-fatura sağlayıcınız arasında doğru veri akışı kurulmalı, XML formatları ve tarih/saat uyumu kontrol edilmelidir.",
      },
      {
        heading: "Düzenli kontrol ve yedekleme",
        body: "Elektronik belgelerin düzenli kontrolü, yetkilendirme ve güvenli yedekleme politikası işletilmelidir; aksi takdirde kanuni uyumsuzluk riski doğar.",
      },
    ],
  },
};

export default async function Page({ params }) {
  const { slug } = params;
  const key = Array.isArray(slug) ? slug[slug.length - 1] : slug;
  const article = ARTICLES[key];

  if (!article) {
    const title = (key || "Yazı").replace(/-/g, " ");
    return (
      <main className="content">
        <div className="container py-24 md:py-32">
          <h1 className="heading2">{title}</h1>
          <p className="body2 text-secondary mt-4">Bu yazı henüz eklenmedi.</p>
          <div className="mt-6">
            <Link href="/blog/blog-detail-one" className="button-main bg-white text-on-surface rounded-full border border-line">
              Yazılar listesi
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">{article.title}</h1>
        <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize mt-4">{article.tag}</div>
        <p className="body2 text-secondary mt-4 max-w-3xl">{article.intro}</p>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {article.content.map((sec) => (
              <section key={sec.heading} className="rounded-2xl border border-line bg-white p-7 mb-6">
                <div className="heading6">{sec.heading}</div>
                <p className="body3 text-secondary mt-3">{sec.body}</p>
              </section>
            ))}

            <div className="mt-6 rounded-2xl border border-line bg-white p-6">
              <h4 className="heading6">Daha fazlası için</h4>
              <p className="body3 text-secondary mt-3">
                Konuyla ilgili detaylı destek almak isterseniz bizimle iletişime geçin. Ön analiz ve yönlendirme
                ile başlayalım.
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

