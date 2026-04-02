import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import HomeFaq from "./HomeFaq";

const SERVICES = [
  {
    href: "/service/service-detail/muhasebe-ve-finansal-raporlama",
    icon: "icon-coin-chair",
    num: "1",
    title: "Muhasebe ve finansal raporlama",
    desc: "İzmir’deki işletmeniz için defter tutma, aylık/yıllık kapanışlar ve yönetim raporları ile şeffaf mali tablo.",
  },
  {
    href: "/service/service-detail/vergi-danismanligi-ve-beyanname",
    icon: "icon-hand-tick",
    num: "2",
    title: "Vergi danışmanlığı ve beyanname",
    desc: "KDV, muhtasar, kurumlar/ gelir vergisi uyumu ve süreli beyan süreçlerinde yanınızdayız.",
  },
  {
    href: "/service/service-detail/sgk-ve-is-hukuku-destegi",
    icon: "icon-hand-house",
    num: "3",
    title: "SGK ve iş hukuku desteği",
    desc: "Prim bildirimleri, teşvikler ve işçi/işveren yükümlülüklerinde güncel mevzuata uyum.",
  },
  {
    href: "/service/service-detail/sirket-kurulusu-ve-tasfiye",
    icon: "icon-gear-warning",
    num: "4",
    title: "Şirket kuruluşu ve tür değişikliği",
    desc: "Şahıs, limited ve anonim şirket kuruluşu; devir, birleşme ve bölünme süreçlerinde rehberlik.",
  },
  {
    href: "/service/service-detail/denetim-ve-ic-kontrol",
    icon: "icon-text-search",
    num: "5",
    title: "Denetim ve iç kontrol",
    desc: "Finansal tablolarınızın güvenilirliği ve risklerin erken tespiti için kontrol odaklı çalışma.",
  },
  {
    href: "/service/service-detail/egitim-ve-mevzuat-guncellemeleri",
    icon: "icon-education",
    num: "6",
    title: "Eğitim ve mevzuat güncellemeleri",
    desc: "Ekibinize yönelik vergi ve SGK bilgilendirmeleri; değişen düzenlemeleri sade dille aktarıyoruz.",
  },
];

const CASES = [
  {
    img: "/images/hizmetler/muhasebe.png",
    title: "Güvenilir danışmanlık",
    desc: "İzmir ve çevresinde şeffaf iletişim ve ölçülebilir süreçlerle mali uyum hedefliyoruz.",
  },
  {
    img: "/images/hizmetler/isletme.jpg",
    title: "Yerel odak",
    desc: "Çiğli ofisimizde yüz yüze görüşme; bölge ekonomisine ve KOBİ gerçeklerine hakim ekip.",
  },
  {
    img: "/images/hizmetler/hesaplama.jpg",
    title: "Güncel mevzuat",
    desc: "Sık değişen vergi ve SGK düzenlemelerini işletmenize özel yorumlayıp uygulanabilir hale getiriyoruz.",
  },
  {
    img: "/images/hizmetler/smmm-takip.jpg",
    title: "Uzun soluklu iş ortaklığı",
    desc: "Tek seferlik işlem değil, yıl boyu planlama ve dönemsel kontrollerle yanınızdayız.",
  },
];

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
          <h3 className="heading3 text-center">Hizmetlerimiz</h3>
          <p className="body3 text-secondary text-center max-w-3xl mx-auto md:mt-4 mt-3">
            İzmir’de faaliyet gösteren işletmeler için muhasebe, vergi ve SGK alanlarında başlıca
            desteklerimiz. Detaylı bilgi için her başlığa tıklayabilirsiniz.
          </p>
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
            src="/images/hizmetler/smmm-takip.jpg"
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
                      src="/images/hizmetler/muhasebe.png"
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
                      src="/images/hizmetler/hesaplama.jpg"
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
                      src="/images/hizmetler/isletme.jpg"
                    />
                  </div>
                  <div className="img sm:w-12 w-10 sm:h-12 h-10 rounded-full overflow-hidden bg-line p-0.5 z-[0] -ml-3">
                    <span className="w-full h-full flex items-center justify-center bg-white rounded-full text-button">
                      5M
                    </span>
                  </div>
                </div>
                <div className="text-button text-secondary">
                  İzmir ve çevresinde
                  <br />
                  yerel işletmelere odaklı hizmet
                </div>
              </div>
              <div className="text lg:mt-14 mt-5">
                <h3 className="heading3">Çiğli’de yüz yüze, İzmir genelinde danışmanlık</h3>
                <div className="body3 text-secondary lg:mt-6 mt-4">
                  Ofisimiz İzmir Çiğli’de; randevu ile bire bir görüşebilir, muhasebe ve vergi süreçlerinizi birlikte
                  planlayabilirsiniz. Uzaktan dosya paylaşımı ve düzenli raporlama ile de yanınızdayız.
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
                    src="/images/hizmetler/destek.jpg"
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
            <h3 className="heading3">Neden İzmir’de bizi tercih etmelisiniz?</h3>
            <div className="right flex flex-col items-center gap-2 mt-3">
              <div className="body3 max-w-2xl">
                Büyük şehir merkezli genel çözümler yerine, bölgenizin iş ölçeğine uygun mali müşavirlik yaklaşımı.
              </div>
              <Link className="flex items-center gap-2 hover:text-blue duration-300" href="/case-studies/case-studies-one">
                <div className="text-button">Örnek çalışmalarımız</div>
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
                      <div className="text-button text-white">Devamını oku </div>
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
              <h3 className="heading3">İşletmenizin mali disiplini</h3>
              <div className="body2 text-secondary">
                Nakit akışı, vergi riskleri ve SGK yükümlülükleri tek çatı altında ele alınır; İzmir’deki işinize göre
                öncelikleri birlikte belirleriz.
              </div>
              <div className="list-service">
                {[
                  "Aylık mali tablo ve vergi öncesi kontrol listeleri",
                  "Yasal defter ve belge düzeni denetimi",
                  "Yıl sonu kapanış ve beyanname hazırlığı koordinasyonu",
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
                    src="/images/hizmetler/destek.jpg"
                  />
                </div>
                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <i className="icon-list text-2xl bg-orange p-4 rounded-2xl"> </i>
                  <div className="text">
                    <div className="heading7">İzmir</div>
                    <div className="heading7 text-secondary">Yerel hizmet</div>
                  </div>
                </div>
                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-yellow text-3xl">
                    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                  </svg>
                  <div className="text">
                    <div className="heading7">SMMM</div>
                    <div className="heading7 text-secondary">Mesleki standart</div>
                  </div>
                </div>
                <div className="feature-item py-4 px-6 rounded-2xl bg-white inline-flex items-center gap-4 box-shadow">
                  <i className="icon-user text-2xl bg-orange py-4 px-5 rounded-2xl"> </i>
                  <div className="text">
                    <div className="heading7">Çiğli</div>
                    <div className="heading7 text-secondary">Ofis randevusu</div>
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
                  <option value="Muhasebe / defter">Muhasebe / defter</option>
                  <option value="Vergi ve beyanname">Vergi ve beyanname</option>
                  <option value="SGK / işçi işveren">SGK / işçi işveren</option>
                  <option value="Şirket kuruluşu">Şirket kuruluşu</option>
                  <option value="Diğer">Diğer</option>
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
    </>
  );
}
