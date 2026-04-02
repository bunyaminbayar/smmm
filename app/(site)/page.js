import HomeBrandSlider from "@/components/site/HomeBrandSlider";
import HomeHeroSlider from "@/components/site/HomeHeroSlider";
import HomeSections from "@/components/site/HomeSections";

export default function HomePage() {
  return (
    <main className="content">
      <HomeHeroSlider />
      <HomeSections />
      <HomeBrandSlider />
    </main>
  );
}
