import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../ui/ContactForm";

const Contact = ({ contact }) => (
  <Section id="contact">
    <div className="mx-auto max-w-[680px] rounded-[32px] border border-line bg-card p-7 backdrop-blur-[10px] md:p-12 xl:max-w-[850px] xl:p-[60px]">
      <SectionHeading tag={contact.tag} heading={contact.heading} align="center" />
      <ContactForm {...contact.form} />
    </div>
  </Section>
);

export default Contact;
