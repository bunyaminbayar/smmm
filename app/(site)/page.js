import HomeHeroSlider from "@/components/site/HomeHeroSlider";
import HomeSections from "@/components/site/HomeSections";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  alternates: {
    canonical: `${siteConfig.url.replace(/\/$/, "")}/`,
  },
};

export default function HomePage() {
  return (
    <main className="content">
      <HomeHeroSlider />
      <HomeSections />
    </main>
  );
}
