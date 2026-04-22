import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export default function ServiceDetailPage({
  title,
  lead,
  imageSrc,
  bullets = [],
  extraBullets = [],
}) {
  return (
    <main className="content fullContainer">
      <div className="py-24 md:py-32">
              <div className="overflow-hidden rounded-2xl bg-surface mb-4">
                <img
                  alt=""
                  loading="lazy"
                  width={5000}
                  height={5000}
                  className="w-full h-[320px] sm:h-[380px] lg:h-[520px] object-cover"
                  style={{ color: "transparent" }}
                  src={imageSrc}
                />
              </div>
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7">
            <h1 className="heading2">{title}</h1>
            <p className="body2 text-secondary mt-4 max-w-2xl">{lead}</p>

            <div className="mt-8 rounded-2xl border border-line bg-white p-7">
              <div className="heading6">İzmir’de süreç nasıl ilerliyor?</div>
              <ul className="mt-4 space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="text-blue text-2xl flex-shrink-0 mt-0.5"
                      aria-hidden
                    >
                      <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
                    </svg>
                    <span className="body3 text-secondary">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {extraBullets.length ? (
              <div className="mt-6 rounded-2xl border border-line bg-white p-7">
                <div className="heading6">Sık karşılaşılan ihtiyaçlar</div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {extraBullets.map((b) => (
                    <li key={b} className="body3 text-secondary flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-blue flex-shrink-0" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <Link className="button-main bg-blue text-white rounded-full" href="/contact/contact-one">
                İzmir’de randevu oluşturun
              </Link>
              <a className="button-main bg-white text-on-surface rounded-full border border-line" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24">

              <div className="mt-6 rounded-2xl border border-line bg-white p-4">
                <div className="heading6">İzmir odaklı çalışma</div>
                <p className="body3 text-secondary mt-2">
                  Ofisimiz İzmir Çiğli’de. İzmir’deki işletmelerin dönemsel beyan ve bildirim takvimini düzenli takip
                  ederek, süreçleri sizin iş akışınıza göre planlarız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

