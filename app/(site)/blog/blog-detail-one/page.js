import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const POSTS = [
  {
    href: "/blog/blog-detail-one/investment-opportunities-explore-options",
    img: "/images/hizmetler/hesaplama.jpg",
    tag: "vergi",
    title: "İzmir’de KOBİ’ler için vergi avantajlarına genel bakış",
    excerpt:
      "KOBİ’lerin kullanabileceği vergi indirimleri, teşvikler ve uyum süreçleri hakkında pratik bir rehber.",
  },
  {
    href: "/blog/blog-detail-one/credit-card-management-use-wisely",
    img: "/images/hizmetler/isletme.jpg",
    tag: "sgk",
    title: "SGK prim bildirimlerinde sık yapılan hatalar",
    excerpt: "Bordro ve prim bildirimlerinde dikkat edilmesi gereken yaygın hatalar ve çözüm önerileri.",
  },
  {
    href: "/blog/blog-detail-one/savings-strategies-strong-foundation",
    img: "/images/hizmetler/destek.jpg",
    tag: "muhasebe",
    title: "E-fatura ve e-defter süreçlerinde dikkat edilecek noktalar",
    excerpt: "E-fatura ve e-defter uygulamaları sırasında karşılaşılan sık konular ve pratik tavsiyeler.",
  },
];

export const metadata = {
  title: "Yazılar — Güncel Muhasebe ve Vergi Konuları",
  description: "İzmir KOBİ’leri için vergi, SGK ve muhasebe rehberleri — güncel pratik bilgiler.",
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">Güncel Yazılar</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          Vergi, SGK ve muhasebe ile ilgili kısa rehberler ve sık sorulan konular. Aşağıdaki yazılardan birini
          seçerek detayları okuyabilirsiniz.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {POSTS.map((p) => (
            <article key={p.href} className="rounded-2xl border border-line bg-white overflow-hidden">
              <Link href={p.href} className="block h-full">
                <div className="bg-img w-full overflow-hidden">
                  <img alt={p.title} src={p.img} loading="lazy" className="w-full h-44 object-cover" />
                </div>
                <div className="p-6">
                  <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize">{p.tag}</div>
                  <h3 className="heading6 mt-3">{p.title}</h3>
                  <p className="body3 text-secondary mt-3">{p.excerpt}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/blog/blog-list-one" className="button-main bg-white text-on-surface rounded-full border border-line">
            Tüm yazılar
          </Link>
        </div>
      </div>
    </main>
  );
}

