import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="footer">
      <div className="style-one">
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
                    className="footer-logo w-auto max-w-[180px] h-auto max-h-[220px] object-contain object-left"
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
                  <div className="mt-3 flex items-center">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M26.43 16.1254C25.785 16.1254 25.275 15.6004 25.275 14.9704C25.275 14.4154 24.72 13.2604 23.79 12.2554C22.875 11.2804 21.87 10.7104 21.03 10.7104C20.385 10.7104 19.875 10.1854 19.875 9.55539C19.875 8.92539 20.4 8.40039 21.03 8.40039C22.53 8.40039 24.105 9.21039 25.485 10.6654C26.775 12.0304 27.6 13.7254 27.6 14.9554C27.6 15.6004 27.075 16.1254 26.43 16.1254Z"
                        fill="#C1D8FF"
                      />
                      <path
                        d="M31.8446 16.125C31.1996 16.125 30.6896 15.6 30.6896 14.97C30.6896 9.645 26.3546 5.325 21.0446 5.325C20.3996 5.325 19.8896 4.8 19.8896 4.17C19.8896 3.54 20.3996 3 21.0296 3C27.6296 3 32.9996 8.37 32.9996 14.97C32.9996 15.6 32.4746 16.125 31.8446 16.125Z"
                        fill="#C1D8FF"
                      />
                      <path
                        d="M17.685 21.315L12.78 26.22C12.24 25.74 11.715 25.245 11.205 24.735C9.66 23.175 8.265 21.54 7.02 19.83C5.79 18.12 4.8 16.41 4.08 14.715C3.36 13.005 3 11.37 3 9.81C3 8.79 3.18 7.815 3.54 6.915C3.9 6 4.47 5.16 5.265 4.41C6.225 3.465 7.275 3 8.385 3C8.805 3 9.225 3.09 9.6 3.27C9.99 3.45 10.335 3.72 10.605 4.11L14.085 9.015C14.355 9.39 14.55 9.735 14.685 10.065C14.82 10.38 14.895 10.695 14.895 10.98C14.895 11.34 14.79 11.7 14.58 12.045C14.385 12.39 14.1 12.75 13.74 13.11L12.6 14.295C12.435 14.46 12.36 14.655 12.36 14.895C12.36 15.015 12.375 15.12 12.405 15.24C12.45 15.36 12.495 15.45 12.525 15.54C12.795 16.035 13.26 16.68 13.92 17.46C14.595 18.24 15.315 19.035 16.095 19.83C16.635 20.355 17.16 20.865 17.685 21.315Z"
                        fill="#C1D8FF"
                      />
                      <path
                        d="M32.9554 27.4955C32.9554 27.9155 32.8804 28.3505 32.7304 28.7705C32.6854 28.8905 32.6404 29.0105 32.5804 29.1305C32.3254 29.6705 31.9954 30.1805 31.5604 30.6605C30.8254 31.4705 30.0154 32.0555 29.1004 32.4305C29.0854 32.4305 29.0704 32.4455 29.0554 32.4455C28.1704 32.8055 27.2104 33.0005 26.1754 33.0005C24.6454 33.0005 23.0104 32.6405 21.2854 31.9055C19.5604 31.1705 17.8354 30.1805 16.1254 28.9355C15.5404 28.5005 14.9554 28.0655 14.4004 27.6005L19.3054 22.6955C19.7254 23.0105 20.1004 23.2505 20.4154 23.4155C20.4904 23.4455 20.5804 23.4905 20.6854 23.5355C20.8054 23.5805 20.9254 23.5955 21.0604 23.5955C21.3154 23.5955 21.5104 23.5055 21.6754 23.3405L22.8154 22.2155C23.1904 21.8405 23.5504 21.5555 23.8954 21.3755C24.2404 21.1655 24.5854 21.0605 24.9604 21.0605C25.2454 21.0605 25.5454 21.1205 25.8754 21.2555C26.2054 21.3905 26.5504 21.5855 26.9254 21.8405L31.8904 25.3655C32.2804 25.6355 32.5504 25.9505 32.7154 26.3255C32.8654 26.7005 32.9554 27.0755 32.9554 27.4955Z"
                        fill="#2868D8"
                      />
                    </svg>
                    <div className="text ml-4">
                      <div className="caption2 text-surface">E-posta</div>
                      <a
                        className="fw-700 text-white mt-1 block hover:underline"
                        href={`mailto:${siteConfig.email}`}
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
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
