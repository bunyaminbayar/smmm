import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import ContactInfoForm from "@/components/site/ContactInfoForm";

export const metadata = {
  title: "İletişim",
  description:
    "İzmir Çiğli’de SMMM Nurettin Bayar iletişim bilgileri: adres, telefon, WhatsApp ve bilgi formu.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/contact/contact-one`,
  },
};

export default function Page() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;

  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">İletişim</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          İzmir Çiğli’deki ofisimize randevu ile gelebilir veya telefon/WhatsApp üzerinden bize ulaşabilirsiniz.
        </p>

        <div className="grid gap-10 lg:grid-cols-12 items-start mt-12">
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-line bg-white p-7">
              <div className="heading6">Adres</div>
              <div className="body3 text-secondary mt-3">{siteConfig.address.full}</div>
              <a
                className="caption2 text-blue hover:underline mt-4 inline-block"
                href={siteConfig.maps.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Haritalar’da konum
              </a>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7 mt-6">
              <div className="heading6">Telefon</div>
              <a className="body3 text-blue hover:underline mt-3 inline-block" href={`tel:${siteConfig.phoneTel}`}>
                {siteConfig.phoneDisplay}
              </a>

              <div className="heading6 mt-6">WhatsApp</div>
              <a className="body3 text-blue hover:underline mt-3 inline-block" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="rounded-2xl border border-line bg-white p-7 mt-6">
              <div className="heading6">Çalışma Saatleri</div>
              <div className="body3 text-secondary mt-3">
                <div>
                  <strong>Hafta içi:</strong> 09:00 – 18:00
                </div>
                <div className="mt-1">
                  <strong>Cumartesi – Pazar:</strong> Kapalı
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <Link className="button-main bg-blue text-white rounded-full" href="/hizmetlerimiz">
                  Hizmetlerimiz
                </Link>
                <Link className="button-main bg-white text-on-surface rounded-full border border-line" href="/about/about-one">
                  Hakkımızda
                </Link>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-line opacity-95 mt-6">
              <iframe
                title="SMMM Nurettin Bayar konumu"
                src={siteConfig.maps.embedUrl}
                className="w-full h-[260px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactInfoForm />
          </div>
        </div>
      </div>
    </main>
  );
}

