import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

const Services = ({ services }) => (
  <section className="services" id="services">
    <SectionHeading tag={services.tag} heading={services.heading} />

    <div className="services-grid">
      {services.items.map((item) => (
        <ServiceCard key={item.title} {...item} />
      ))}
    </div>
  </section>
);

export default Services;
