import { siteConfig } from "@/lib/site-config";
import ServiceDetailPage from "@/components/site/ServiceDetailPage";

export const metadata = {
  title: "Vergi Danışmanlığı ve Beyanname (İzmir)",
  description:
    "İzmir Çiğli’de vergi danışmanlığı ve beyanname süreçleri: KDV, muhtasar, geçici, gelir/kurumlar vergisi uyumu ve risk azaltma için SMMM desteği.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/hizmetlerimiz/vergi-danismanligi-beyanname`,
  },
};

export default function Page() {
  return (
    <ServiceDetailPage
      title="Vergi danışmanlığı ve beyanname"
      lead="İzmir’de faaliyet gösteren işletmeler için vergi süreçlerini mevzuata uygun şekilde planlıyor, beyan ve bildirim takvimini düzenli takip ediyoruz. İzmir Çiğli’de ofis randevusu ile dosyanızı birlikte değerlendirebiliriz."
      imageSrc="/images/hizmetler/hesaplama.jpg"
      bullets={[
        "İzmir’de işletmenize göre beyanname takvimi ve belge ihtiyaç listesi",
        "KDV, muhtasar ve diğer beyannameler için ön kontrol ve hazırlık",
        "Mevzuat değişikliklerinin İzmir’deki işinize etkisinin sade dille aktarılması",
        "Riskli alanların tespiti ve düzeltici aksiyon planı",
      ]}
      extraBullets={[
        "E-uygulamalar (e-fatura, e-defter) uyumu",
        "Vergi incelemesi öncesi dosya kontrolü",
        "İzmir’de şube/işyeri değişikliklerinde bildirim akışı",
        "Teşvik ve istisnaların uygunluk kontrolü",
      ]}
    />
  );
}

