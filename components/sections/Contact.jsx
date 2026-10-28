import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../ui/ContactForm";

const Contact = ({ contact }) => (
  <section className="contact" id="contact">
    <div className="contact-wrapper">
      <SectionHeading tag={contact.tag} heading={contact.heading} align="center" />
      <ContactForm {...contact.form} />
    </div>
  </section>
);

export default Contact;
