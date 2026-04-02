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
                  <div className="list-social flex items-center gap-2.5 style-one">
                    <a
                      className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/"
                    >
                      <i className="icon-facebook text-sm" />
                    </a>
                    <a
                      className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/"
                    >
                      <i className="icon-in text-sm" />
                    </a>
                    <a
                      className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.twitter.com/"
                    >
                      <i className="icon-twitter text-xs" />
                    </a>
                    <a
                      className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.instagram.com/"
                    >
                      <i className="icon-insta text-xs" />
                    </a>
                    <a
                      className="item rounded-full w-7 h-7 border-2 border-grey flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.youtube.com/"
                    >
                      <i className="icon-youtube text-xs" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="footer-navigate flex items-center justify-center gap-20">
                  <div className="footer-nav-item">
                    <div className="item-heading text-button-sm text-white">Quick Links</div>
                    <ul className="list-nav mt-1">
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/about/about-one"
                        >
                          About us
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/service/service-one"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/case-studies/case-studies-one"
                        >
                          Case Studies
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/contact-two"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-nav-item max-sm:hidden">
                    <div className="item-heading text-button-sm text-white">Pages</div>
                    <ul className="list-nav mt-1">
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/pages/faqs"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/pages/pricing"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/pages/partners"
                        >
                          Partners
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/contact-two"
                        >
                          Support Center
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
                          Blog List 1
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/blog/blog-list-two"
                        >
                          Blog List 2
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/blog/blog-grid"
                        >
                          Blog Grid
                        </Link>
                      </li>
                      <li className="mt-3">
                        <Link
                          className="caption1 has-line-before line-white text-surface hover-underline"
                          href="/blog/blog-detail-one"
                        >
                          Blog Detail
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
                  <form className="send-block mt-5 flex items-center h-[46px] rounded-lg overflow-hidden">
                    <input
                      className="caption1 text-secondary h-full w-full pr-4 pl-3"
                      type="email"
                      placeholder="E-posta adresiniz"
                      required
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center w-[46px] h-[46px] bg-blue flex-shrink-0"
                      aria-label="Gönder"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="text-white"
                      >
                        <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z" />
                      </svg>
                    </button>
                  </form>
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
              <div className="nav-link flex flex-wrap items-center gap-2.5">
                <a className="text-surface caption1 hover-underline" href="#!">
                  Terms Of Services
                </a>
                <span className="text-surface caption1">|</span>
                <a className="text-surface caption1 hover-underline" href="#!">
                  Privacy Policy
                </a>
                <span className="text-surface caption1">|</span>
                <a className="text-surface caption1 hover-underline" href="#!">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
