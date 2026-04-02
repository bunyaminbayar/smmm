import WhyIzmirProjectSlider from "./WhyIzmirProjectSlider";
import WhyIzmirSectionHeading from "./WhyIzmirSectionHeading";
import { WHY_IZMIR_CASES } from "./why-izmir-cases";

const DEFAULT_CASE_LINK = "/case-studies/case-studies-one";

export default function HomeWhyIzmirSection({
  cases = WHY_IZMIR_CASES,
  caseLinkHref = DEFAULT_CASE_LINK,
  headingProps,
}) {
  return (
    <section className="our-project-block lg:mt-[100px] sm:mt-16 mt-10">
      <WhyIzmirSectionHeading {...(headingProps || {})} variant="simple" />
      <WhyIzmirProjectSlider cases={cases} href={caseLinkHref} />
    </section>
  );
}
