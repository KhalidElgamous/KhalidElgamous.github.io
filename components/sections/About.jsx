import SectionHeading from "../ui/SectionHeading";
import MetricBox from "../ui/MetricBox";

const About = ({ about }) => (
  <section className="about" id="about">
    <div className="about-content">
      <SectionHeading tag={about.tag} heading={about.heading} />
      <p>{about.text}</p>
    </div>

    <div className="about-content">
      <div className="metrics-grid">
        {about.metrics.map((metric) => (
          <MetricBox key={metric.label} value={metric.value} label={metric.label} />
        ))}
      </div>
    </div>
  </section>
);

export default About;
