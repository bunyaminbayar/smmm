import { siteConfig } from "@/lib/site-config";
import ServiceDetailPage from "@/components/site/ServiceDetailPage";

export const metadata = {
  title: "Yurt Dışı Dijital Vergi Stratejileri (İzmir)",
  description:
    "Yurt dışında gelir elde eden dijital profesyoneller için agresif ama mevzuata uygun vergi stratejileri — gelir optimizasyonu, çifte vergilendirme yönetimi ve tam süreç teslimi.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/hizmetlerimiz/yurt-disi-dijital-vergi-stratejileri`,
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Yurt Dışı Dijital Vergi Stratejileri"
      lead="Yazılım geliştiriyor, freelance çalışıyor veya yurtdışına hizmet veriyorsan; vergi yükünü azaltmak strateji meselesidir. Biz bu stratejiyi kurar, uygular ve yönetiriz."
      imageSrc="/images/hizmetler/remote-tax.png"
      bullets={[
        "Gelir modelinizi detaylı analiz edip en avantajlı yapı önerisini sunuyoruz",
        "Çifte vergilendirme ve mukimlik durumlarını değerlendiriyor, vergi avantajlarını maksimuma çıkarıyoruz",
        "Yurt dışı sözleşme ve faturalama akışını vergi dostu hale getiriyoruz",
        "Güncel teşvik, muafiyet ve mevzuat fırsatlarını işletmenize uyarlarız",
      ]}
      extraBullets={[
        "Freelance ve platform gelirleri optimizasyonu",
        "Yurt dışı şirket yapıları ve uyum tavsiyeleri",
        "Vergi beyanı ve yerel uyum yönetimi",
        "Tam süreç teslimi — siz işinize odaklanın"
      ]}
    >
      <div className="proposition mt-6 p-6 bg-surface rounded-2xl border border-line">
        <h3 className="heading5">🚀 Yurt Dışına Çalışıyorsun, Ama Vergini Hâlâ Türkiye’ye Göre Yönetiyorsun…</h3>
        <p className="body3 text-secondary mt-3">Yazılım geliştiriyor, freelance iş yapıyor, blog gelirleri elde ediyor ya da yurtdışındaki firmalara hizmet veriyorsan… büyük ihtimalle kazancının bir kısmını gereksiz yere kaybediyorsun. Çünkü sistem basit değil. Ama doğru yönetildiğinde inanılmaz avantajlı.</p>
        <h4 className="heading6 mt-4">🎯 Ben Ne Yapıyorum?</h4>
        <p className="body3 text-secondary mt-2">Ben klasik bir muhasebeci değilim. Dijital çalışanlara özel vergi stratejisi kuruyorum.</p>
        <ul className="mt-3 space-y-2">
          <li>✔ Gelir modelini analiz ediyorum</li>
          <li>✔ En avantajlı vergi yapını kuruyorum</li>
          <li>✔ Güncel teşvik ve istisnalardan maksimum fayda sağlıyorum</li>
          <li>✔ Tüm süreci baştan sona yönetiyorum</li>
        </ul>
        <p className="body3 text-secondary mt-3">Sen sadece işine odaklanıyorsun. Ben arkada sistemi çalıştırıyorum.</p>
      </div>
    </ServiceDetailPage>
  );
}
