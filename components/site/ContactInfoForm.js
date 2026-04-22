"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/site-config";

function buildMailto({ name, email, subject, message }) {
  const lines = [
    `Ad Soyad: ${name || "-"}`,
    `E-posta: ${email || "-"}`,
    "",
    "Mesaj:",
    message || "-",
  ];

  const body = encodeURIComponent(lines.join("\n"));
  const subj = encodeURIComponent(subject || "Web sitesi iletişim formu");
  return `mailto:${siteConfig.email}?subject=${subj}&body=${body}`;
}

export default function ContactInfoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Muhasebe / Vergi danışmanlığı");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(
    () => buildMailto({ name, email, subject, message }),
    [name, email, subject, message],
  );

  return (
    <form
      className="rounded-2xl border border-line bg-white p-7"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailtoHref;
      }}
    >
      <div className="heading6">İletişim & Bilgi Formu</div>

      <div className="grid gap-4 mt-6">
        <input
          className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full"
          type="text"
          placeholder="Adı Soyadı *"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <input
          className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full"
          type="email"
          placeholder="E-Mail *"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <select
          className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          name="subject"
          aria-label="Talep"
        >
          <option value="Muhasebe / Vergi danışmanlığı">Muhasebe / Vergi danışmanlığı</option>
          <option value="Bordrolama / SGK">Bordrolama / SGK</option>
          <option value="Finansal raporlama">Finansal raporlama</option>
          <option value="KDV iade">KDV iade</option>
          <option value="Diğer">Diğer</option>
        </select>
        <textarea
          className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full min-h-[140px]"
          placeholder="Mesajınız *"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
        />
      </div>

      <div className="mt-6 flex items-center gap-3 flex-wrap">
        <button type="submit" className="button-main bg-black hover:bg-blue text-white rounded-full">
          Gönder
        </button>
        <a className="caption2 text-secondary hover:underline" href={`mailto:${siteConfig.email}`}>
          Doğrudan e-posta: {siteConfig.email}
        </a>
      </div>
    </form>
  );
}

