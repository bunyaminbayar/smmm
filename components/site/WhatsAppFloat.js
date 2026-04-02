import Image from "next/image";

import { getWhatsAppChatUrl } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const href = getWhatsAppChatUrl();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float fixed z-[999] flex items-center justify-center rounded-full shadow-lg ring-2 ring-white/60 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      style={{
        bottom: "max(2rem, env(safe-area-inset-bottom, 0px))",
        right: "max(2rem, env(safe-area-inset-right, 0px))",
      }}
      aria-label="WhatsApp ile yazın"
    >
      <span className="whatsapp-float-pulse block overflow-hidden rounded-full">
        <Image
          src="/images/nurettin-bayar-whatsapp.png"
          alt=""
          width={44}
          height={44}
          className="h-16 w-16 object-cover md:h-12 md:w-12"
          priority={false}
          aria-hidden
        />
      </span>
    </a>
  );
}
