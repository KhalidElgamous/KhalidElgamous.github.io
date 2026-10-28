import data from "../data/portfolio.json";

import GlowOrbs from "../components/layout/GlowOrbs";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";

const Page = () => {
  return (
    <>
      <GlowOrbs orbs={data.orbs} />
      <Header brand={data.site.brand} nav={data.nav} />

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
