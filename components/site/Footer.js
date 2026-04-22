import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer">
      <div className="style-one mt-10">
        <div className="footer-block bg-dark pt-[60px]">
          <div className="container">
            <div className="flex max-lg:flex-col max-lg:items-start gap-y-10 pb-10">
              <div className="lg:w-1/4">
                <div className="footer-company-infor flex flex-col justify-between gap-5">
                  <img
                    alt="Nurettin Bayar Mali Müşavir"
                    loading="lazy"
                    width={320}
                    height={400}
                    className="footer-logo w-[120px] mx-auto object-contain footer-logo"
                    src="/images/smm-nurettin-bayar-dikey-logo.png"
                  />
                  <div className="text caption1 text-white">{siteConfig.intro}</div>
                  <a
                    className="caption2 text-blue hover:underline"
                    href={siteConfig.maps.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Haritalar’da konum
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="footer-navigate flex items-center justify-center gap-20">
                  <div className="footer-nav-item">
                    <div className="item-heading text-button-sm text-white">Hızlı bağlantılar</div>
                    <ul className="list-nav mt-1">
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/about/about-one"
                        >
                          Hakkımızda
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/hizmetlerimiz"
                        >
                          Hizmetlerimiz
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/case-studies/case-studies-one"
                        >
                          Örnek çalışmalar
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/iletisim"
                        >
                          İletişim
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-nav-item max-sm:hidden">
                    <div className="item-heading text-button-sm text-white">Hizmetler</div>
                    <ul className="list-nav mt-1">
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/hizmetlerimiz/muhasebe-mali-isler-yonetimi"
                        >
                          Muhasebe & mali işler
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/hizmetlerimiz/vergi-danismanligi-beyanname"
                        >
                          Vergi & beyanname
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/hizmetlerimiz/bordrolama-sgk"
                        >
                          Bordrolama & SGK
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/hizmetlerimiz/kdv-iade"
                        >
                          KDV iade
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-nav-item">
                    <div className="item-heading text-button-sm text-white">Blog</div>
                    <ul className="list-nav mt-1">
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/blog/blog-list-one"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/about/about-one"
                        >
                          Hakkımızda
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/about/about-two"
                        >
                          Vizyon & Misyon
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/iletisim"
                        >
                          İletişim
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4">
                <div className="company-contact">
                  <div className="heading text-button-sm text-white">İletişim</div>
                  {siteConfig.phoneDisplay && siteConfig.phoneTel ? (
                    <div className="mt-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="text-surface"
                      >
                        <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z" />
                      </svg>
                      <a
                        className="caption1 text-white ml-2 hover:underline"
                        href={`tel:${siteConfig.phoneTel}`}
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                    </div>
                  ) : null}
                  <div className="locate mt-3 flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="text-surface flex-shrink-0 mt-0.5"
                    >
                      <path d="M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z" />
                    </svg>
                    <div className="caption1 text-surface ml-2">{siteConfig.address.full}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-8 pt-2 w-full">
              <div className="rounded-lg overflow-hidden border border-line opacity-90">
                <iframe
                  title="SMMM Nurettin Bayar konumu"
                  src={siteConfig.maps.embedUrl}
                  className="w-full h-[220px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div className="border-line" />
            <div className="footer-bottom flex max-md:flex-col max-md:gap-3 items-center justify-between pt-3 pb-3">
              <div className="left-block flex items-center">
                <div className="copy-right text-surface caption1">
                  © {year} {siteConfig.name}. Tüm hakları saklıdır.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
