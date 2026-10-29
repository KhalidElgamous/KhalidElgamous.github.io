import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

const Services = ({ services }) => (
  <Section id="services">
    <SectionHeading tag={services.tag} heading={services.heading} />

    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-[35px]">
      {services.items.map((item) => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </div>
  </Section>
);

export default Services;
