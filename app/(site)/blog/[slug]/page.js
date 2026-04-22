import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import BLOG_ITEMS from "../blog-items.json";

// Normalize items and derive slug from href
const ITEMS = BLOG_ITEMS.map((it) => ({
  ...it,
  slug: it.href.replace(/^\/blog\//, "").replace(/^\//, ""),
}));

const ITEMS_BY_SLUG = ITEMS.reduce((acc, it) => {
  acc[it.slug] = it;
  return acc;
}, {});

export default async function Page({ params }) {
  const { slug } = params;
  const key = Array.isArray(slug) ? slug[slug.length - 1] : slug;
  const article = ITEMS_BY_SLUG[key];

  const SLUG_ORDER = ITEMS.map((i) => i.slug);
  const idx = SLUG_ORDER.indexOf(key);
  const prev = idx > 0 ? SLUG_ORDER[idx - 1] : null;
  const next = idx >= 0 && idx < SLUG_ORDER.length - 1 ? SLUG_ORDER[idx + 1] : null;
  const pageUrl = `${siteConfig.url.replace(/\/$/, "")}/blog/${key}`;

  if (!article) {
    const title = (key || "Yazı").replace(/-/g, " ");
    return (
      <main className="content">
        <div className="container py-24 md:py-32">
          <h1 className="heading2">{title}</h1>
          <p className="body2 text-secondary mt-4">Bu yazı henüz eklenmedi.</p>
          <div className="mt-6">
            <Link href="/blog" className="button-main bg-white text-on-surface rounded-full border border-line">
              Yazılar listesi
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="content">
      <div className="container py-12 md:py-20">
        <div className="overflow-hidden rounded-2xl bg-surface">
          <img
            alt={article.title}
            src={article.img || "/images/hizmetler/agree.jpg"}
            loading="lazy"
            className="w-full h-[320px] sm:h-[380px] lg:h-[520px] object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center mt-8">
          <div className="caption2 py-1 px-3 bg-surface rounded-full inline-block capitalize">{article.tag}</div>
          <h1 className="heading2 mt-4">{article.title}</h1>
          <div className="meta flex items-center justify-center gap-4 mt-4 caption2 text-secondary">
            <span>{siteConfig.shortName}</span>
            <span>·</span>
            <span>Yakında</span>
          </div>

          <p className="body2 text-secondary mt-6">{article.intro}</p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <a
              className="caption2 text-blue hover:underline"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              className="caption2 text-blue hover:underline"
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(article.title)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {article.content.map((sec) => (
              <section key={sec.heading} className="rounded-2xl border border-line bg-white p-7 mb-6">
                <div className="heading6">{sec.heading}</div>
                <p className="body3 text-secondary mt-3">{sec.body}</p>
              </section>
            ))}

            <div className="mt-6 rounded-2xl border border-line bg-white p-6">
              <h4 className="heading6">Daha fazlası için</h4>
              <p className="body3 text-secondary mt-3">Konuyla ilgili detaylı destek almak isterseniz bizimle iletişime geçin. Ön analiz ve yönlendirme ile başlayalım.</p>
              <div className="mt-4">
                <Link href="/iletisim" className="button-main bg-blue text-white rounded-full">İletişime geçin</Link>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              {prev ? (
                <Link href={`/blog/${prev}`} className="text-secondary hover:text-blue">
                  ← {ITEMS_BY_SLUG[prev].title}
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link href={`/blog/${next}`} className="text-secondary hover:text-blue">
                  {ITEMS_BY_SLUG[next].title} →
                </Link>
              ) : (
                <div />
              )}
            </div>

            <div className="mt-10 rounded-2xl border border-line bg-white p-6">
              <h4 className="heading6">Yorum bırakın</h4>
              <form className="mt-4 space-y-3">
                <input className="w-full p-3 border border-line rounded" placeholder="Adınız" />
                <input className="w-full p-3 border border-line rounded" placeholder="E-posta" />
                <textarea className="w-full p-3 border border-line rounded" rows={4} placeholder="Yorumunuz" />
                <button type="button" className="button-main bg-blue text-white rounded-full">Gönder</button>
              </form>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl border border-line bg-white p-6">
                <div className="heading6">Yazar</div>
                <p className="body3 text-secondary mt-2">{siteConfig.shortName}</p>
                <div className="mt-4">
                  <a href={`tel:${siteConfig.phoneTel}`} className="caption2 text-blue hover:underline">{siteConfig.phoneDisplay}</a>
                </div>
              </div>

              <div className="rounded-2xl border border-line bg-white p-6">
                <div className="heading6">İlgili yazılar</div>
                <ul className="mt-3 space-y-3">
                  {ITEMS.map((it) => (
                    <li key={it.slug}>
                      <Link href={`/blog/${it.slug}`} className="text-secondary hover:text-blue">{it.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
