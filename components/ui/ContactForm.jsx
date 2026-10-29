import Button from "./Button";
import Icon from "./Icon";

const field =
  "w-full rounded-[14px] border border-line bg-black/20 p-3.5 text-[14px] text-fg outline-none transition-colors duration-300 placeholder:text-muted focus:border-accent xl:p-[18px] xl:text-[15px]";

const ContactForm = ({ action, gridFields, subjectField, messageField, submit }) => (
  <form action={action}>
    <div className="mb-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:mb-[25px] xl:gap-[25px]">
      {gridFields.map((f) => (
        <input
          key={f.name}
          type={f.type}
          name={f.name}
          placeholder={f.placeholder}
          className={field}
          required
        />
      ))}
    </div>

    <input
      type={subjectField.type}
      name={subjectField.name}
      placeholder={subjectField.placeholder}
      className={`${field} mb-5 xl:mb-[25px]`}
      required
    />

    <textarea
      name={messageField.name}
      placeholder={messageField.placeholder}
      className={`${field} mb-7 block h-36 resize-none xl:mb-[35px] xl:h-[180px]`}
      required
    ></textarea>

    <div className="text-center">
      <Button type="submit">
        {submit.label} <Icon name={submit.icon} />
      </Button>
    </div>
  </form>
);

export default ContactForm;
