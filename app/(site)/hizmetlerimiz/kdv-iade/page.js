import { siteConfig } from "@/lib/site-config";
import ServiceDetailPage from "@/components/site/ServiceDetailPage";

export const metadata = {
  title: "KDV İade Süreç Yönetimi (İzmir)",
  description:
    "İzmir Çiğli’de KDV iade süreç yönetimi: iade doğuran işlemler, liste/evrak hazırlığı ve mahsup/nakden iade süreç takibi için SMMM desteği.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/hizmetlerimiz/kdv-iade`,
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="KDV iade süreç yönetimi"
      lead="İzmir’de iade doğuran işlemlerinizde KDV iade sürecini mevzuat çerçevesinde planlıyor, gerekli listeleri hazırlayıp süreç takibini yapıyoruz. İzmir Çiğli’de dosyanızı birlikte değerlendirerek net bir yol haritası çıkarıyoruz."
      imageSrc="/images/hizmetler/destek.jpg"
      bullets={[
        "İzmir’de faaliyet modelinize göre iade türünün ve yol haritasının belirlenmesi",
        "İadeye esas listelerin hazırlanması ve kontrolü",
        "Mahsuben / nakden iade seçeneklerine göre süreç planlama",
        "Eksik/uyumsuz kayıtların tespiti ve tamamlanması için takip",
      ]}
      extraBullets={[
        "İhracat ve ihraç kayıtlı işlemler",
        "Tevkifat/iade doğuran işlemler",
        "Risk analizi raporu aksiyonları",
        "İzmir’de dosya kontrol randevusu",
      ]}
    />
  );
}

