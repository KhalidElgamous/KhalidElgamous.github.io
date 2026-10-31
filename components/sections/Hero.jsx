import Section from "../ui/Section";
import Button from "../ui/Button";
import Icon from "../ui/Icon";

// On GitHub Pages the site lives under /<repo-name>, so plain <a href> paths need that prefix.
// NEXT_PUBLIC_BASE_PATH is the same value as basePath in next.config (empty when not set).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// The resume button points at an existing PDF served from /public (path set in data/portfolio.json).
const Hero = ({ hero, resume }) => (
  <Section
    id="home"
    className="z-[1] flex flex-col-reverse items-center justify-center gap-10 text-center md:flex-row md:justify-between md:gap-6 md:text-left xl:gap-[60px]"
  >
    <div className="w-full md:flex-[1.2]">
      <h3 className="mb-2.5 text-[14px] font-semibold uppercase tracking-[2px] text-accent xl:text-[18px]">
        {hero.eyebrow}
      </h3>
      <h1 className="mb-4 bg-[image:linear-gradient(to_right,#fff,#9ca3af)] bg-clip-text text-[40px] font-extrabold leading-[1.25] tracking-[-1.5px] text-transparent md:text-[51px] xl:mb-5 xl:text-[64px]">
        {hero.name}
      </h1>
      <p className="mb-8 text-[16px] leading-[1.7] text-muted xl:mb-10 xl:text-[18px]">
        {hero.summary}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start xl:gap-5">
        <Button href={hero.primaryAction.href}>
          {hero.primaryAction.label} <Icon name={hero.primaryAction.icon} />
        </Button>
        <Button
          href={`${basePath}${resume.file}`}
          download={resume.downloadName}
          variant="secondary"
        >
          <Icon name={resume.icon} /> {resume.label}
        </Button>
      </div>
    </div>

    <div className="relative flex justify-center md:flex-[0.8]">
      <div className="flex h-[320px] w-[260px] items-center justify-center overflow-hidden md:h-[352px] md:w-[288px] xl:h-[440px] xl:w-[360px]">
        <object
          type="image/svg+xml"
          data="/bigdata.svg"
          width="100%"
          height="100%"
          aria-label="Big Data Logo"
        >
          Your browser does not support SVGs.
        </object>
      </div>
    </div>
  </Section>
);

export default Hero;
