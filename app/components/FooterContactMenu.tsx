"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const contacts = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com/_juan.sev_", icon: "/images/contact-icons/instagram.svg" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/5588981145738", icon: "/images/contact-icons/whatsapp.svg" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/juansev/", icon: "/images/contact-icons/linkedin.svg" },
  { id: "email", label: "E-mail", href: "mailto:juan.developer@icloud.com", icon: "/images/contact-icons/gmail.svg" },
];

export function FooterContactMenu() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  return <div className="footer-contact-menu"><button className="footer-contact-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>{language === "pt" ? "Entre em contato" : "Get in touch"}</button>{open && <><button className="footer-menu-close" aria-label="Fechar menu de contato" onClick={() => setOpen(false)} /><div className="footer-contact-radial">{contacts.map((contact, index) => { const angle = index / contacts.length * Math.PI * 2 - Math.PI / 2; const style = { left: Math.cos(angle) * 52 - 21, top: Math.sin(angle) * 52 - 21 }; return <a key={contact.id} style={style} className={`footer-contact-option ${contact.id}`} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined} aria-label={contact.label} title={contact.label}><img src={contact.icon} alt="" /></a>; })}</div></>}</div>;
}
