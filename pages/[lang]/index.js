
import { locales } from "../../lib/i18n";
import { getData } from "../../lib/dictionaries";

import GlowOrbs from "../../components/layout/GlowOrbs";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Hero from "../../components/sections/Hero";
import About from "../../components/sections/About";
import Services from "../../components/sections/Services";
import Portfolio from "../../components/sections/Portfolio";
import Contact from "../../components/sections/Contact";

// One static page per language: /en and /fr (works with `output: "export"` on GitHub Pages).
export const dynamicParams = false;
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { meta } = getData(lang);
  return { title: meta.title, description: meta.description };
}

const Page = ({ lang = "en" }) => {
  // const { lang } = await params;
  const data = getData(lang);

  return (
    <>
      <GlowOrbs orbs={data.orbs} />
      <Header
        brand={data.site.brand}
        nav={data.nav}
        lang={lang}
        languageLabel={data.site.languageLabel}
        menuLabels={data.site.menu}
      />

      <Hero hero={data.hero} resume={data.resume} />
      <About about={data.about} />
      <Services services={data.services} />
      <Portfolio portfolio={data.portfolio} />
      <Contact contact={data.contact} />

      <Footer copyright={data.footer.copyright} backToTop={data.footer.backToTop} />
    </>
  );
};

export default Page;
