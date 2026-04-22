import Link from "next/link";

export const metadata = {
  title: "Yazılar — İpuçları ve Rehberler",
  description: "Muhasebe, vergi ve SGK ile ilgili pratik rehberler ve güncel bilgilendirmeler.",
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">Yazılar ve Rehberler</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          Muhasebe ve vergi konularında kısa rehberler ve güncel bilgi notları. Ana yazılar sayfasına
          yönlendirme için aşağıdaki bağlantıya tıklayabilirsiniz.
        </p>
        <div className="mt-6">
          <Link href="/blog/blog-detail-one" className="button-main bg-blue text-white rounded-full">
            Yazılar listesi
          </Link>
        </div>
      </div>
    </main>
  );
}

