import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BahiTech — Smart Tech Solutions",
  description:
    "Smart tech solutions for modern businesses in Saudi Arabia. Custom apps, websites, and NFC review tags.",
};

/** Pass-through — html/body with locale + dir live in app/[locale]/layout.tsx */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
