import { siteConfig } from "@/lib/site-config";
import ServiceDetailPage from "@/components/site/ServiceDetailPage";

export const metadata = {
  title: "Bordrolama ve SGK İşlemleri (İzmir)",
  description:
    "İzmir Çiğli’de bordrolama ve SGK işlemleri: işe giriş/çıkış, teşvikler, prim bildirimleri ve personel süreçlerinde SMMM desteği.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/hizmetlerimiz/bordrolama-sgk`,
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Bordrolama ve SGK işlemleri"
      lead="İzmir’de işveren yükümlülükleri, bordro ve SGK bildirim süreçlerini düzenli takip ediyoruz. İzmir Çiğli’deki ofisimizden hem yüz yüze hem de uzaktan süreç yönetimi sağlıyoruz."
      imageSrc="/images/hizmetler/isletme.jpg"
      bullets={[
        "İzmir’de personel işe giriş/işten ayrılış evraklarının hazırlanması ve bildirimi",
        "Ücret, kesinti, vergi ve maliyet hesapları ile bordro hazırlığı",
        "SGK prim bildirimleri ve teşvik uygunluk kontrolü",
        "Yıllık izin, özlük dosyası ve süreç takibi için düzen oluşturma",
      ]}
      extraBullets={[
        "İşveren maliyeti analizleri",
        "Teşvik ve indirim kontrol listeleri",
        "Resmi yazışma/evrak hazırlığı",
        "Dönemsel kontrol toplantıları (İzmir/Çiğli)",
      ]}
    />
  );
}

