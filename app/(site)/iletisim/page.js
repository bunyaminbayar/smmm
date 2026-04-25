// ...existing code...
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Page() {
  return (
    <main className="content">
      <div className="breadcrumb-block w-full lg:h-[400px] sm:h-[360px] h-[320px] relative">
        <div className="bg-img w-full h-full absolute top-0 left-0 z-[-1]">
          <img
            alt="banner"
            loading="lazy"
            width="4000"
            height="3000"
            decoding="async"
            data-nimg="1"
            className="w-full h-full object-cover object-center"
            src="images/case-studies.webp"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="container relative h-full flex items-center">
          <div className="heading-nav flex items-center gap-1 absolute top-8 left-4 py-1.5 px-4 rounded-full bg-line">
            <Link className="hover:underline caption1 text-white" href="/">Anasayfa</Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-white">
              <path d="M141.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L124.69,128,50.34,53.66A8,8,0,0,1,61.66,42.34l80,80A8,8,0,0,1,141.66,133.66Zm80-11.32-80-80a8,8,0,0,0-11.32,11.32L204.69,128l-74.35,74.34a8,8,0,0,0,11.32,11.32l80-80A8,8,0,0,0,221.66,122.34Z"></path>
            </svg>
            <div className="caption1 text-white">İletişim</div>
          </div>
          <div className="text-nav xl:w-1/2 md:w-3/5">
            <div className="heading3 text-white">İletişim</div>
            <div className="sub-heading mt-4 text-white font-normal">Hızlı destek için İletişim sayfamızı inceleyin.</div>
          </div>
        </div>
      </div>

      <div className="form-contact style-one lg:py-[100px] sm:py-16 py-10">
        <div className="container flex max-xl:flex-col xl:items-center justify-between gap-y-8">
          <div className="w-full xl:w-1/2">
            <div>
              <div className="text-button-uppercase text-blue">İletişim</div>
              <div className="heading5 mt-3">Bizimle iletişime geçin</div>
              <div className="body3 mt-2">24 saat içinde size dönüş yapacağız, veya her gün bizi arayabilirsiniz</div>

              <div className="list-more-infor mt-8">
                <div className="item flex items-center gap-3 mt-5">
                  <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-white text-2xl">
                      <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
                    </svg>
                  </div>
                  <div className="line-y"> </div>
                  <div className="body2">
                    <a href="tel:+905357994664">+90 535 799 46 64</a>
                  </div>
                </div>

                <div className="item flex items-center gap-3 mt-5">
                  <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-white text-2xl">
                      <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"></path>
                    </svg>
                  </div>
                  <div className="line-y"> </div>
                  <div className="body2">info@smmmbayar.com</div>
                </div>

                <div className="item flex items-center gap-3 mt-5">
                  <div className="flex items-center justify-center w-8 h-8 bg-black rounded-full flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 256 256" className="text-white text-2xl">
                      <path d="M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"></path>
                    </svg>
                  </div>
                  <div className="line-y"> </div>
                  <div className="body2">8914. Sokak, Balatçık Mahallesi, Çiğli, İzmir 35620, Türkiye</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-5/12 bg-white sm:p-10 p-8 rounded-2xl box-shadow">
            <form className="form-block flex flex-col justify-between gap-5" action="https://formspree.io/f/xojypqpl" method="POST">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="w-full max-sm:col-span-2"><input className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg" placeholder="İsim" required type="text" name="name" /></div>
                <div className="w-full max-sm:col-span-2"><input className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg" placeholder="Konu" required type="text" name="subject" /></div>
                <div className="col-span-2"><input className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg" placeholder="E-posta" required type="text" name="email" /></div>
                <div className="col-span-2">
                  <select className="w-full bg-surface text-secondary caption1 pl-3 py-3 rounded-lg" name="konu">
                    <option value="Financial Planning">Finansal Planlama</option>
                    <option value="Business Planning">İş Planlama</option>
                    <option value="Development Planning">Gelişim Planlama</option>
                  </select>
                  <i className="ph ph-caret-down"></i>
                </div>
                <div className="col-span-2 w-full"><textarea className="w-full bg-surface text-secondary caption1 px-4 py-3 rounded-lg" name="message" rows="4" placeholder="Mesajınız" required></textarea></div>
              </div>

              <div className="button-block"><button className="button-main hover:border-blue bg-blue text-white text-button rounded-full" type="submit">Gönder</button></div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
// ...existing code...