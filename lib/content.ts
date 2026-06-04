import {
  company,
  stats,
  services,
  projects,
  nfcProduct,
  sections,
  t,
  tArray,
  getWhatsAppLink,
  type Locale,
} from "@/data/content";

export function useContentData(locale: Locale) {
  return {
    company,
    stats,
    services,
    projects,
    nfcProduct,
    sections,
    t: (s: Parameters<typeof t>[0]) => t(s, locale),
    tArray: (s: Parameters<typeof tArray>[0]) => tArray(s, locale),
    whatsappLink: getWhatsAppLink(company.whatsapp),
    nfcCtaLink: getWhatsAppLink(company.whatsapp),
  };
}
