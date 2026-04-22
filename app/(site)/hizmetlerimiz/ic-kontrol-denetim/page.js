import { siteConfig } from "@/lib/site-config";
import ServiceDetailPage from "@/components/site/ServiceDetailPage";

export const metadata = {
  title: "İç Kontrol ve Denetim Sistemi (İzmir)",
  description:
    "İzmir Çiğli’de iç kontrol ve denetim sistemi: süreç risklerini azaltma, belge-akış düzeni ve kontrol mekanizmaları için SMMM yaklaşımı.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/hizmetlerimiz/ic-kontrol-denetim`,
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="İç kontrol ve denetim sistemi"
      lead="İzmir’de işletmenizin süreçlerini daha güvenli ve izlenebilir hale getirmek için iç kontrol bakışıyla değerlendirme yapıyoruz. İzmir Çiğli’de yapılan görüşmelerle ihtiyaçlarınıza göre kontrol noktalarını netleştiriyoruz."
      imageSrc="/images/hizmetler/agree.jpg"
      bullets={[
        "İzmir’de işletmenize uygun süreç haritalama ve kontrol noktaları belirleme",
        "Belge akışı ve yetkilendirme düzeninin gözden geçirilmesi",
        "Hatalı kayıt/suistimal risklerinin azaltılması için öneriler",
        "Dönemsel kontrol listeleri ile sürdürülebilir takip",
      ]}
      extraBullets={[
        "Stok/alış-satış akış kontrolü",
        "Yetki matrisi ve onay süreçleri",
        "Kasa/banka kontrolleri",
        "İzmir’de yerinde süreç analizi (randevu ile)",
      ]}
    />
  );
}

