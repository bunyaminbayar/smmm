import { siteConfig } from "@/lib/site-config";
import ServiceDetailPage from "@/components/site/ServiceDetailPage";

export const metadata = {
  title: "Muhasebe ve Mali İşler Yönetimi (İzmir)",
  description:
    "İzmir Çiğli’de muhasebe ve mali işler yönetimi: defter tutma, belge düzeni, dönem sonu kapanış ve vergi uyumu süreçlerinde SMMM desteği.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/hizmetlerimiz/muhasebe-mali-isler-yonetimi`,
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Muhasebe ve mali işler yönetimi"
      lead="İzmir’de işletmenizin muhasebe süreçlerini düzenli, mevzuata uygun ve raporlanabilir şekilde yönetiyoruz. İzmir Çiğli’deki ofisimizle yüz yüze görüşme ve düzenli takip yaklaşımını birleştiriyoruz."
      imageSrc="/images/hizmetler/muhasebe.png"
      bullets={[
        "İzmir’de işletmenize uygun evrak akışı ve belge düzeninin kurulması",
        "Muhasebe kayıtlarının düzenli işlenmesi ve dönemsel kontrol",
        "Vergi uyumu için ön kontrol listeleri ve zaman planı",
        "Dönem sonu işlemleri, kapanış ve raporlamaya hazırlık",
      ]}
      extraBullets={[
        "Cari hesap mutabakatları",
        "Tek düzen hesap planı kontrolü",
        "E-fatura/e-defter süreç düzeni",
        "Banka ve kasa mutabakatları",
      ]}
    />
  );
}

