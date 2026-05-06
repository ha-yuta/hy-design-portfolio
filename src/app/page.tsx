import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import CTA from "@/components/sections/CTA";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HYデザイン",
  url: "https://hy-webservice.com",
  inLanguage: "ja-JP",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Hero />
      <Features />
      <Services />
      <Pricing />
      <CTA />
    </>
  );
}
