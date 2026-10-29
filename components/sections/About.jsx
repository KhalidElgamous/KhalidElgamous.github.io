import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import MetricBox from "../ui/MetricBox";

const About = ({ about }) => (
  <Section
    id="about"
    className="flex flex-col justify-center gap-8 bg-surface lg:flex-row lg:items-center lg:gap-16 xl:gap-20"
  >
    <div className="lg:flex-1">
      <SectionHeading tag={about.tag} heading={about.heading} />
      <p className="mb-8 text-[15px] leading-[1.8] text-muted xl:mb-10 xl:text-[17px]">
        {about.text}
      </p>
    </div>

    <div className="lg:flex-1">
      <div className="grid grid-cols-2 gap-6 xl:gap-[30px]">
        {about.metrics.map((metric) => (
          <MetricBox key={metric.label} value={metric.value} label={metric.label} />
        ))}
      </div>
    </div>
  </Section>
);

export default About;
