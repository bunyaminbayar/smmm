import Link from "next/link";

/** `our-project-block` içindeki `.item` ile aynı yapı (görsel + `.text` + `.arrow`) */
export default function WhyIzmirCard({ title, subtitle, img, href }) {
  return (
    <div className="item">
      <div className="bg-img overflow-hidden">
        <img
          alt=""
          loading="lazy"
          width={5000}
          height={5000}
          decoding="async"
          className="h-full w-full"
          style={{ color: "transparent" }}
          src={img}
        />
      </div>
      <Link className="text" href={href}>
        <div className="heading5 text-white">{title}</div>
        <div className="body3 mt-1 text-white">{subtitle}</div>
      </Link>
      <Link
        className="arrow flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white hover:text-white"
        href={href}
        aria-label={`${title} — devam`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="text-3xl"
          aria-hidden
        >
          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
        </svg>
      </Link>
    </div>
  );
}
