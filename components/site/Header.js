"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { SITE_NAV } from "./site-nav";

function ChevronDown({ className = "text-sm" }) {
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
      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
    </svg>
  );
}

function ChevronRight({ className = "text-base" }) {
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
      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobileKey, setExpandedMobileKey] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleMobileSection = (key) => {
    setExpandedMobileKey((prev) => (prev === key ? null : key));
  };

  return (
    <header id="header">
      <div className="top-nav style-one bg-dark">
        <div className="container flex items-center justify-between h-[44px]">
          <div className="left-block flex items-center">
            <div className="location flex items-center max-lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-xl"
              >
                <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
              </svg>
              <span className="ml-2 caption1 text-white max-lg:hidden">
                {siteConfig.address.short}
              </span>
            </div>
            <div className="mail lg:ml-7 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-white text-xl"
              >
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
              </svg>
              <a
                className="ml-2 caption1 text-white hover:underline"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
          <div className="right-block flex items-center gap-5">
            <div className="select-block relative">
              <select className="border-none outline-none bg-dark text-white p-2 caption2" aria-label="Language">
                <option value="English">English</option>
                <option value="France">France</option>
                <option value="Espana">Espana</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-xs text-white icon -right-2"
              >
                <path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" />
              </svg>
            </div>
            <div className="line h-6 w-px bg-grey max-sm:hidden"> </div>
            <div className="list-social flex items-center gap-2.5 style-one max-sm:hidden">
              <a
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
              >
                <i className="icon-facebook text-sm" />
              </a>
              <a
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/"
              >
                <i className="icon-in text-xs" />
              </a>
              <a
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com/"
              >
                <i className="icon-twitter text-[10px]" />
              </a>
              <a
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
              >
                <i className="icon-insta text-[10px]" />
              </a>
              <a
                className="item rounded-full w-7 h-7 border-grey border-2 flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/"
              >
                <i className="icon-youtube text-[10px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`header-menu style-one bg-white ${scrolled ? "fixed" : ""}`.trim()}
      >
        <div className="container flex items-center justify-between h-20">
          <Link className="menu-left-block flex items-center" href="/">
            <img
              alt="Nurettin Bayar Mali Müşavir"
              fetchPriority="high"
              width={480}
              height={120}
              decoding="async"
              className="h-9 w-auto max-h-10 max-sm:max-h-9 sm:h-10 object-contain object-left"
              src="/images/smm-nurettin-bayar-yatay-logo.png"
            />
          </Link>

          <div className="menu-center-block h-full max-lg:hidden">
            <ul className="menu-nav flex items-center xl:gap-2 h-full">
              {SITE_NAV.map((item) => (
                <li
                  key={item.key}
                  className={`nav-item h-full flex items-center justify-center ${item.key} ${item.key === "home" ? "home active" : ""}`.trim()}
                >
                  <span className="nav-link text-title flex items-center gap-1 pointer">
                    <span>{item.label}</span>
                    <span>
                      <ChevronDown />
                    </span>
                  </span>
                  <ul className="sub-nav">
                    {item.children.map((c) => (
                      <li
                        key={c.href}
                        className={`sub-nav-item ${c.active ? "active" : ""}`.trim()}
                      >
                        <Link className="sub-nav-link font-medium" href={c.href}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="menu-right-block flex items-center">
            <div className="icon-call">
              <i className="icon-phone-call text-4xl" />
            </div>
            <div className="text ml-3 max-sm:hidden">
              <div className="text caption1">İletişim</div>
              {siteConfig.phoneDisplay && siteConfig.phoneTel ? (
                <a className="number text-button" href={`tel:${siteConfig.phoneTel}`}>
                  {siteConfig.phoneDisplay}
                </a>
              ) : (
                <a
                  className="number text-button hover:underline"
                  href={siteConfig.maps.shortUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Harita ve yol tarifi
                </a>
              )}
            </div>
            <button
              type="button"
              className="menu-humburger hidden max-lg:block ml-4 pointer"
              aria-expanded={mobileOpen}
              aria-controls="menu-mobile-block"
              onClick={() => {
                setMobileOpen((o) => {
                  if (o) setExpandedMobileKey(null);
                  return !o;
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="text-2xl"
              >
                <path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="menu-mobile-block"
          className={mobileOpen ? "open" : ""}
          aria-hidden={!mobileOpen}
        >
          <div className="menu-mobile-main">
            <div className="container">
              <ul className="menu-nav-mobile h-full pt-1 pb-1">
                {SITE_NAV.map((item, idx) => {
                  const sectionOpen = expandedMobileKey === item.key;
                  return (
                    <li
                      key={item.key}
                      className={`nav-item-mobile h-full flex-column gap-2 ${idx === 0 ? "pt-2" : "pt-4"} pb-2 pl-3 pr-3 pointer ${item.key} ${sectionOpen ? "active" : ""}`.trim()}
                    >
                      <button
                        type="button"
                        className="nav-link-mobile flex items-center justify-between w-full bg-transparent border-none text-left cursor-pointer"
                        onClick={() => toggleMobileSection(item.key)}
                        aria-expanded={sectionOpen}
                      >
                        <span className="body2 font-semibold">{item.label} </span>
                        <ChevronRight />
                      </button>
                      <ul className={`sub-nav-mobile ${sectionOpen ? "open" : ""}`.trim()}>
                        {item.children.map((c) => (
                          <li
                            key={c.href}
                            className={`sub-nav-item pl-3 pr-3 pt-2 pb-2 ${c.active ? "active" : ""}`.trim()}
                          >
                            <Link
                              className="sub-nav-link text-base"
                              href={c.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setExpandedMobileKey(null);
                              }}
                            >
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
