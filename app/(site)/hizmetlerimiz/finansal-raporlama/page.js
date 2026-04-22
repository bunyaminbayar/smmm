import { siteConfig } from "@/lib/site-config";
import ServiceDetailPage from "@/components/site/ServiceDetailPage";

export const metadata = {
  title: "Finansal Raporlama (İzmir)",
  description:
    "İzmir Çiğli’de finansal raporlama: bilanço, gelir tablosu ve yönetim raporlarıyla İzmir’deki işletmeniz için karar destek raporları.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/hizmetlerimiz/finansal-raporlama`,
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Finansal raporlama"
      lead="İzmir’de işletmenizin karar süreçleri için anlaşılır ve zamanında finansal raporlama sunuyoruz. İzmir Çiğli’de düzenli görüşmelerle raporların işletmenize uygun formatta hazırlanmasını hedefliyoruz."
      imageSrc="/images/hizmetler/smmm-takip.jpg"
      bullets={[
        "İzmir’de işletmenizin gelir-gider yapısına uygun raporlama şablonu belirleme",
        "Bilanço, gelir tablosu ve dönemsel analizlerin hazırlanması",
        "Nakit akışı ve finansman ihtiyacına yönelik öngörü çalışmaları",
        "Yönetim raporları ile hedef/gerçekleşen takibi",
      ]}
      extraBullets={[
        "Banka kredi görüşmeleri için rapor seti",
        "Şubeleşme/büyüme kararları için mali okuma",
        "Maliyet kırılımları ve kârlılık analizi",
        "İzmir’de KOBİ odaklı sade raporlama",
      ]}
    />
  );
}

