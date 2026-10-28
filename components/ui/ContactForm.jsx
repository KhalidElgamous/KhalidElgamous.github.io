import Icon from "./Icon";

const ContactForm = ({ action, gridFields, subjectField, messageField, submit }) => (
  <form className="contact-form" action={action}>
    <div className="form-grid">
      {gridFields.map((field) => (
        <input
          key={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          required
        />
      ))}
    </div>

    <input
      type={subjectField.type}
      name={subjectField.name}
      placeholder={subjectField.placeholder}
      style={{ marginBottom: "2.5rem" }}
      required
    />

    <textarea
      name={messageField.name}
      placeholder={messageField.placeholder}
      required
    ></textarea>

    <div style={{ textAlign: "center" }}>
      <button type="submit" className="btn-premium">
        {submit.label} <Icon name={submit.icon} />
      </button>
    </div>
  </form>
);

export default ContactForm;
