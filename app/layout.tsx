import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "BahiTech Solutions | Smart Tech for Saudi Businesses",
  description:
    "Custom apps, booking platforms, business websites, and NFC review tools built for Saudi businesses.",
  icons: { icon: "/favicon.svg" },
};

/** Pass-through — html/body with locale + dir live in app/[locale]/layout.tsx */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
