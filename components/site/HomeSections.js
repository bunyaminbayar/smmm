import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import HomeFaq from "./HomeFaq";

const SERVICES = [
  {
    href: "/service/service-detail/cryptocurrency-trading",
    icon: "icon-coin-chair",
    num: "1",
    title: "Cryptocurrency Trading",
    desc: "Experience the excitement and potential of the cryptocurrency market with our expert trading services.",
  },
  {
    href: "/service/service-detail/portfolio-management",
    icon: "icon-hand-tick",
    num: "2",
    title: "Portfolio Management",
    desc: "We analyze market trends, manage risks, and optimize your portfolio to maximize returns and achieve your financial goals.",
  },
  {
    href: "/service/service-detail/investment-advice",
    icon: "icon-hand-house",
    num: "3",
    title: "Investment Advice",
    desc: "Our team of experienced advisors will guide you in making informed investment, whether you're a beginner trader.",
  },
  {
    href: "/service/service-detail/risk-management",
    icon: "icon-gear-warning",
    num: "4",
    title: "Risk Management",
    desc: "We employ industry-leading tools and techniques to protect your investments and minimize potential losses.",
  },
  {
    href: "/service/service-detail/research-and-analysis",
    icon: "icon-text-search",
    num: "5",
    title: "Research and Analysis",
    desc: "We provide timely reports, market updates, and data-driven insights to help you make informed trading decisions.",
  },
  {
    href: "/service/service-detail/education-and-resources",
    icon: "icon-education",
    num: "6",
    title: "Education and Resources",
    desc: "Expand your knowledge and skills in cryptocurrency trading through our educational resources.",
  },
];

const CASES = [
  {
    img: "/images/component/benefit1.png",
    title: "Trusted Advisor",
    desc: "We are committed to providing reliable and high-quality financial advisory in our services.",
  },
  {
    img: "/images/component/benefit2.png",
    title: "Team Augmentation",
    desc: "With an experienced and skilled team, we bring the necessary expertise to enhance work productivity.",
  },
  {
    img: "/images/component/benefit3.png",
    title: "Innovation",
    desc: "We constantly seek advanced solutions to address challenges and deliver the highest value to our customers.",
  },
  {
    img: "/images/component/benefit4.png",
    title: "Experience",
    desc: "With over 21 years of serving industrial customers and over 3000 projects, we have the experience to solve almost.",
  },
];

const BLOG_ITEMS = [
  {
    href: "/blog/blog-detail-one/investment-opportunities-explore-options",
    img: "/images/blog/item1.png",
    tag: "featured",
    title: "Investment Opportunities Explore Options",
  },
  {
    href: "/blog/blog-detail-one/credit-card-management-use-wisely",
    img: "/images/blog/item2.png",
    tag: "experience",
    title: "Credit Card Management Use Wisely",
  },
  {
    href: "/blog/blog-detail-one/savings-strategies-strong-foundation",
    img: "/images/blog/item3.png",
    tag: "interview",
    title: "Savings Strategies Strong Foundation",
  },
];

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-xs mt-1">
      <path d="M144.49,136.49l-80,80a12,12,0,0,1-17-17L119,128,47.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,144.49,136.49Zm80-17-80-80a12,12,0,1,0-17,17L199,128l-71.52,71.51a12,12,0,0,0,17,17l80-80A12,12,0,0,0,224.49,119.51Z" />
    </svg>
  );
}

export default function HomeSections() {
  return (
    <>
      <section className="service-block lg:mt-[100px] sm:mt-16 mt-10">
        <div className="container">
          <h3 className="heading3 text-center">Our Services</h3>
          <div className="list-service grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6 gap-y-10">
            {SERVICES.map((s) => (
              <div
                key={s.href}
                className="service-item p-8 bg-white rounded-lg border border-line hover-box-shadow"
              >
                <Link className="service-item-main h-full" href={s.href}>
                  <div className="heading flex items-center justify-between">
                    <i className={`${s.icon} text-blue md:text-6xl text-5xl`} />
                    <div className="number heading3 text-placehover">{s.num}</div>
                  </div>
                  <div className="heading6 hover:text-blue duration-300 mt-6">{s.title}</div>
                  <div className="text-secondary mt-2">{s.desc}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="payment-gateway-one style-first lg:mt-[100px] sm:mt-16 mt-10 bg-surface relative">
        <div className="bg-img lg:absolute top-0 left-0 lg:w-1/2 w-full h-full flex-shrink-0">
          <img
            alt=""
            loading="lazy"
            width={5000}
            height={5000}
            className="w-full h-full object-cover"
            style={{ color: "transparent" }}
            src="/images/image_9.png"
          />
        </div>
        <div className="container w-full lg:py-[150px] pt-14 py-16">
          <div className="w-full flex items-center lg:justify-end">
            <div className="payment-infor lg:w-1/2 xl:pl-20 lg:pl-10">
              <div className="heading flex items-center gap-4 max-lg:flex-wrap">
                <div className="flex items-center">
                  <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[3]">
                    <img
                      alt=""
                      loading="lazy"
                      width={300}
                      height={300}
                      className="full h-full rounded-full"
                      style={{ color: "transparent" }}
                      srcSet="/images/image_29.png 1x, /images/image.png 2x"
                      src="/images/image.png"
                    />
                  </div>
                  <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[2] -ml-3">
                    <img
                      alt=""
                      loading="lazy"
                      width={300}
                      height={300}
                      className="full h-full rounded-full"
                      style={{ color: "transparent" }}
                      srcSet="/images/image_27.png 1x, /images/image_1.png 2x"
                      src="/images/image_1.png"
                    />
                  </div>
                  <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[1] -ml-3">
                    <img
                      alt=""
                      loading="lazy"
                      width={300}
                      height={300}
                      className="full h-full rounded-full"
                      style={{ color: "transparent" }}
                      srcSet="/images/image_28.png 1x, /images/image_2.png 2x"
                      src="/images/image_2.png"
                    />
                  </div>
                  <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[0] -ml-3">
                    <span className="w-full h-full flex items-center justify-center bg-white rounded-full text-button">
                      5M
                    </span>
                  </div>
                </div>
                <div className="text-button text-secondary">
                  Trusted by 50M+ People
                  <br />
                  around the globe
                </div>
              </div>
              <div className="text lg:mt-14 mt-5">
                <h3 className="heading3">Payment Gateway Services</h3>
                <div className="body3 text-secondary lg:mt-6 mt-4">
                  We provide reliable and secure payment gateway services for businesses of all sizes. With our
                  cutting-edge technology and 24/7 customer support, you can easily accept payments from customers all
                  over the world.
                </div>
              </div>
              <div className="button-block flex items-center max-sm:flex-wrap sm:gap-6 gap-3 lg:mt-12 mt-8 w-fit">
                <Link
                  className="button-main box-shadow hover:bg-black text-white bg-blue whitespace-nowrap rounded-full"
                  href="/contact-two"
                >
                  İletişim
                </Link>
                <div className="relative">
                  <Link
                    className="button-main box-shadow hover:bg-black hover:text-white text-on-surface bg-white flex items-center gap-2 rounded-full relative z-[1]"
                    href={
                      siteConfig.phoneTel
                        ? `tel:${siteConfig.phoneTel}`
                        : `mailto:${siteConfig.email}`
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="text-xl"
                    >
                      <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z" />
                    </svg>
                    <span className="whitespace-nowrap">
                      {siteConfig.phoneDisplay || siteConfig.email}
                    </span>
                  </Link>
                  <img
                    alt=""
                    loading="lazy"
                    width={4000}
                    height={4000}
                    className="absolute -right-12 w-[100px] h-auto top-1/2 -translate-y-1/2 max-lg:hidden"
                    style={{ color: "transparent" }}
                    src="/images/image_6.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-study-block style-one lg:pt-[100px] sm:pt-16 pt-10">
        <div className="container">
          <div className="heading text-center">
            <h3 className="heading3">Case Studies</h3>
            <div className="right flex flex-col items-center gap-2 mt-3">
              <div className="body3">Exploring In-Depth and Inspiring Case Studies of Success Stories</div>
              <Link className="flex items-center gap-2 hover:text-blue duration-300" href="/case-studies/case-studies-one">
                <div className="text-button">View Our Case Studies</div>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="list-case-study md:mt-10 mt-6">
          <div className="list grid lg:grid-cols-4 sm:grid-cols-2">
            {CASES.map((c) => (
              <div key={c.title} className="w-full">
                <div className="case-study-item">
                  <div className="bg-img">
                    <img
                      alt=""
                      loading="lazy"
                      width={5000}
                      height={5000}
                      className="w-full h-full block"
                      style={{ color: "transparent" }}
                      src={c.img}
                    />
                  </div>
                  <div className="text flex flex-col justify-between gap-3">
                    <div className="heading5">
                      <Link className="text-white" href="/case-studies/case-studies-one">
                        {c.title}
                      </Link>
                    </div>
                    <div className="body2 text-white">{c.desc}</div>
                    <Link className="flex items-center gap-1" href="/case-studies/case-studies-one">
                      <div className="text-button text-white">Read More </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 256 256"
                        className="text-xs text-white mt-1"
                      >
                        <path d="M144.49,136.49l-80,80a12,12,0,0,1-17-17L119,128,47.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,144.49,136.49Zm80-17-80-80a12,12,0,1,0-17,17L199,128l-71.52,71.51a12,12,0,0,0,17,17l80-80A12,12,0,0,0,224.49,119.51Z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="payment-gateway-one style-second lg:mt-[100px] sm:mt-16 mt-10">
        <div className="container">
          <div className="content flex items-center gap-8 max-xl:flex-col">
            <div className="w-full xl:w-5/12 flex flex-col gap-y-6">
              <h3 className="heading3">Payment Gateway Services</h3>
              <div className="body2 text-secondary">
                We provide reliable and secure payment gateway services for businesses of all sizes. With our
                cutting-edge technology and 24/7 customer support, you can easily accept payments from customers all
                over the world.
              </div>
              <div className="list-service">
                {[
                  "Debt evaluation and ability to repay",
                  "Calculation of credit limit",
                  "Consolidation of personal financial data",
                ].map((t, i) => (
                  <div key={t} className={`service-item flex items-center${i > 0 ? " mt-3" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-blue text-2xl flex-shrink-0">
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                    </svg>
                    <div className="text-button ml-3">{t}</div>
                  </div>
                ))}
              </div>
              <div className="button-block">
                <Link className="button-main hover:bg-blue text-white bg-black rounded-full" href="/contact-two">
                  İletişim
                </Link>
              </div>
            </div>
            <div className="w-11/12 xl:w-7/12">
              <div className="right pl-0 xl:pl-10">
                <div className="bg-img">
                  <img
                    alt=""
                    loading="lazy"
                    width={5000}
                    height={5000}
                    className="w-full"
                    style={{ color: "transparent" }}
                    src="/images/image_22.png"
                  />
                </div>
                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <i className="icon-list text-2xl bg-orange p-4 rounded-2xl"> </i>
                  <div className="text">
                    <div className="heading7">2K+</div>
                    <div className="heading7 text-secondary">Projects</div>
                  </div>
                </div>
                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-yellow text-3xl">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                  <div className="text">
                    <div className="heading7">4.8</div>
                    <div className="heading7 text-secondary">Satisfaction</div>
                  </div>
                </div>
                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <i className="icon-user text-2xl bg-orange py-4 px-5 rounded-2xl"> </i>
                  <div className="text">
                    <div className="heading7">5 Years</div>
                    <div className="heading7 text-secondary">Product Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeFaq />

      <div className="form-request-block lg:mt-[100px] sm:mt-16 mt-10">
        <div className="container">
          <div className="heading flex max-xl:flex-col xl:items-center gap-4 justify-between">
            <div className="heading3">Sizi arayalım</div>
            <div className="body3 text-secondary">
              İletişim bilgilerinizi bırakın; en kısa sürede size dönüş yapalım.
            </div>
          </div>
          <form className="form md:mt-10 mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 pb-14 border-b border-line">
            <div className="grid lg:grid-cols-3 gap-6 w-full">
              <div className="w-full">
                <input
                  className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full"
                  type="text"
                  placeholder="Ad Soyad*"
                  required
                  name="firstName"
                />
              </div>
              <div className="w-full">
                <input
                  className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full"
                  type="email"
                  placeholder="E-posta"
                  required
                  name="email"
                />
              </div>
              <div className="w-full select-arrow-none relative">
                <select className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full" name="category">
                  <option value="Financial Planning">Financial Planning</option>
                  <option value="Business Planning">Business Planning</option>
                  <option value="Development Planning">Development Planning</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="absolute top-1/2 -translate-y-1/2 right-5 pointer-events-none">
                  <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                </svg>
              </div>
            </div>
            <button type="submit" className="button-main flex-shrink-0 bg-black hover:bg-blue text-white rounded-full">
              Gönder
            </button>
          </form>
        </div>
      </div>

      <section className="list-blog three-col lg:mt-[100px] sm:mt-16 mt-10">
        <div className="container">
          <h3 className="heading3 text-center">Latest News</h3>
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
                        by <span className="text-on-surface">Avitex </span>
                      </div>
                      <div className="item-date flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z" />
                        </svg>
                        <span className="ml-1 caption2">2 days ago</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
