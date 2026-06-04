import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { NFCSpotlight } from "@/components/NFCSpotlight";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <main className="bg-primary">
      <Hero />
      <About />
      <Services />
      <Projects />
      <NFCSpotlight />
      <Contact />
      <Footer />
    </main>
  );
}
