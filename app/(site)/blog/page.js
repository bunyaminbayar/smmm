import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const BLOG_ITEMS = [
  {
    href: "/blog/blog-detail-one/investment-opportunities-explore-options",
    img: "/images/hizmetler/hesaplama.jpg",
    tag: "vergi",
    title: "İzmir’de KOBİ’ler için vergi avantajlarına genel bakış",
  },
  {
    href: "/blog/blog-detail-one/credit-card-management-use-wisely",
    img: "/images/hizmetler/isletme.jpg",
    tag: "sgk",
    title: "SGK prim bildirimlerinde sık yapılan hatalar",
  },
  {
    href: "/blog/blog-detail-one/savings-strategies-strong-foundation",
    img: "/images/hizmetler/destek.jpg",
    tag: "muhasebe",
    title: "E-fatura ve e-defter süreçlerinde dikkat edilecek noktalar",
  },
];

export const metadata = {
  title: "Güncel Yazılar",
  description: "Vergi, SGK ve muhasebe gündeminden seçilmiş konular — Yakında yeni içeriklerle güncellenecek.",
};

export default function Page() {
  return (
    <section className="list-blog three-col lg:mt-[100px] sm:mt-16 mt-10">
      <div className="container">
        <h3 className="heading3 text-center">Güncel yazılar</h3>
        <p className="body3 text-secondary text-center max-w-2xl mx-auto md:mt-4 mt-3">
          Vergi ve SGK gündeminden seçilmiş konular — yakında yeni içeriklerle güncellenecek.
        </p>
        <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
          {BLOG_ITEMS.map((b) => (
            <div key={b.href} className="blog-item">
              <Link
                className="blog-item-main h-full block bg-white border border-line overflow-hidden rounded-2xl hover-box-shadow duration-500"
                href={b.href}
              >
                <div className="bg-img w-full overflow-hidden">
                  <img
                    alt={b.title}
                    loading="lazy"
                    width={5000}
                    height={5000}
                    className="w-full h-full block"
                    style={{ color: "transparent" }}
                    src={b.img}
                  />
                </div>
                <div className="infor sm:p-6 p-4">
                  <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize">{b.tag}</div>
                  <div className="heading6 mt-2">{b.title}</div>
                  <div className="date flex items-center gap-4 mt-2">
                    <div className="author caption2 text-secondary">
                      <span className="text-on-surface">{siteConfig.shortName} </span>
                    </div>
                    <div className="item-date flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z" />
                      </svg>
                      <span className="ml-1 caption2">Yakında</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
