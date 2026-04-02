import Link from "next/link";

function ArrowRightIcon({ className = "text-xs mt-1" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 256 256"
      className={className}
      aria-hidden
    >
      <path d="M144.49,136.49l-80,80a12,12,0,0,1-17-17L119,128,47.51,56.49a12,12,0,0,1,17-17l80,80A12,12,0,0,1,144.49,136.49Zm80-17-80-80a12,12,0,1,0-17,17L199,128l-71.52,71.51a12,12,0,0,0,17,17l80-80A12,12,0,0,0,224.49,119.51Z" />
    </svg>
  );
}

export default function WhyIzmirSectionHeading({
  title = "Neden İzmir’de bizi tercih etmelisiniz?",
  subtitle = "Büyük şehir merkezli genel çözümler yerine, bölgenizin iş ölçeğine uygun mali müşavirlik yaklaşımı.",
  ctaHref = "/case-studies/case-studies-one",
  ctaLabel = "Örnek çalışmalarımız",
  /** `our-project-block` ile aynı: başlık + body2, ortada CTA yok */
  variant = "default",
}) {
  if (variant === "simple") {
    return (
      <div className="container">
        <h3 className="heading3 text-center">{title}</h3>
        <p className="body2 text-secondary mt-3 text-center">{subtitle}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="heading text-center">
        <h3 className="heading3">{title}</h3>
        <div className="right flex flex-col items-center gap-2 mt-3">
          <div className="body3 max-w-2xl">{subtitle}</div>
          <Link className="flex items-center gap-2 hover:text-blue duration-300" href={ctaHref}>
            <div className="text-button">{ctaLabel}</div>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
