import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SERVICES, getServiceHref } from "@/lib/services";

export const metadata = {
  title: "Hizmetlerimiz",
  description:
    "İzmir Çiğli’de SMMM hizmetleri: muhasebe, vergi, bordrolama, finansal raporlama, iç kontrol ve KDV iade süreç yönetimi.",
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/hizmetlerimiz`,
  },
};

export default function Page() {
  return (
    <main className="content">
      <div className="container py-24 md:py-32">
        <h1 className="heading2">Hizmetlerimiz</h1>
        <p className="body2 text-secondary mt-4 max-w-3xl">
          İzmir Çiğli’de faaliyet gösteren SMMM ofisimiz, İzmir ve çevresindeki işletmelere mevzuata uyum, düzenli
          raporlama ve sürdürülebilir mali süreç yönetimi sunar. Aşağıdan hizmet başlıklarına tıklayarak detaylara
          ulaşabilirsiniz.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={getServiceHref(s.slug)}
              className="group rounded-2xl border border-line bg-white p-7 hover-box-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <i className={`${s.icon} text-blue text-5xl`} />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="text-xl text-secondary group-hover:text-blue duration-300"
                  aria-hidden
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                </svg>
              </div>
              <div className="heading6 mt-5 group-hover:text-blue duration-300">{s.title}</div>
              <div className="body3 text-secondary mt-2">{s.summary}</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

