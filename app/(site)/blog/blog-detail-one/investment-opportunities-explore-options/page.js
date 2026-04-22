import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "İzmir’de KOBİ’ler için vergi avantajlarına genel bakış",
  description: "KOBİ’lerin kullanabileceği vergi indirimleri, teşvikler ve uyum süreçleri hakkında pratik bir rehber.",
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">İzmir’de KOBİ’ler için vergi avantajlarına genel bakış</h1>
        <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize mt-4">vergi</div>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          KOBİ’ler için sunulan çeşitli vergi teşvikleri, yatırım indirimleri ve uyum yükümlülükleri hakkında pratik bir bakış.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <section className="rounded-2xl border border-line bg-white p-7 mb-6">
              <div className="heading6">Hangi teşvikler mevcut?</div>
              <p className="body3 text-secondary mt-3">
                Bölgesel ve sektörel teşvikler, yatırım indirimi ve belirli giderlerin gelirden düşülmesi gibi imkânlar vardır. Öncelikle işletmenizin faaliyet konusu ve yatırımın niteliği değerlendirilmelidir.
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-white p-7 mb-6">
              <div className="heading6">Uygulamada dikkat edilecekler</div>
              <p className="body3 text-secondary mt-3">
                Teşviklerden yararlanmak için belge düzeni, yatırımın fiziki takibi ve doğru muhasebe kaydı şarttır. Eksik belge ve yanlış sınıflandırma teşvik iptaline yol açabilir.
              </p>
            </section>

            <div className="mt-6 rounded-2xl border border-line bg-white p-6">
              <h4 className="heading6">Nasıl başlanır?</h4>
              <p className="body3 text-secondary mt-3">
                Ön analizle hangi teşviklere uygun olduğunuz belirlenir; ardından vergi uyum süreçleri düzenlenip başvurular yapılır. Biz bu süreci planlıyor ve takip ediyoruz.
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
