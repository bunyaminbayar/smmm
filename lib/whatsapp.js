import { siteConfig } from "./site-config";

export function getWhatsAppChatUrl() {
  const text = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappDigits}?text=${text}`;
}
