import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Vizyon & Misyonumuz",
  description:
    "İzmir Çiğli’de SMMM hizmetleri: şeffaflık, gizlilik ve mevzuata uyum odağında vizyon ve misyonumuz.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/about/about-two`,
  },
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">Vizyon & Misyonumuz</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          İzmir Çiğli’de faaliyet gösteren ofisimizde, İzmir’deki işletmelere sürdürülebilir mali yönetim anlayışıyla
          hizmet vermeyi hedefliyoruz.
        </p>

        <div className="grid gap-6 lg:grid-cols-2 mt-12">
          <div className="rounded-2xl border border-line bg-white p-7">
            <div className="heading6">Vizyonumuz</div>
            <p className="body3 text-secondary mt-4">
              İzmir’de KOBİ ve girişimcilerin mevzuata uyum, raporlama ve karar alma süreçlerinde güvenilir bir iş
              ortağı olmak; dijitalleşen muhasebe dünyasında anlaşılır, ölçülebilir ve erişilebilir bir hizmet standardı
              sunmak.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-white p-7">
            <div className="heading6">Misyonumuz</div>
            <p className="body3 text-secondary mt-4">
              İzmir’deki işletmelerin muhasebe, vergi ve SGK süreçlerini düzenli takip ederek riskleri azaltmak; doğru
              bilgi akışı ve zamanında kontrol ile mali disiplin kurmalarına destek olmak.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-white p-7 mt-6">
          <div className="heading6">Çalışma ilkelerimiz</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-4">
            {[
              { t: "Şeffaflık", d: "İzmir’deki işletmenize net ve anlaşılır bilgilendirme." },
              { t: "Gizlilik", d: "Ticari verilerinizi güvenle koruma." },
              { t: "Zamanında takip", d: "Beyan ve bildirimlerde düzenli kontrol." },
              { t: "Sürekli iletişim", d: "İzmir/Çiğli’de randevu + uzaktan destek." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl bg-surface p-5">
                <div className="heading7">{x.t}</div>
                <div className="body3 text-secondary mt-2">{x.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 flex-wrap">
          <Link className="button-main bg-blue text-white rounded-full" href="/hizmetlerimiz">
            Hizmetlerimizi görün
          </Link>
          <Link className="button-main bg-white text-on-surface rounded-full border border-line" href="/contact/contact-one">
            İletişime geçin
          </Link>
        </div>
      </div>
    </main>
  );
}

