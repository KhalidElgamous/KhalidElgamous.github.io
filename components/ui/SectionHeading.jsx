import { cn } from "../../lib/cn";

// Section tag ("01 // Background") + heading with one highlighted part.
// Use align="center" for centered sections such as Contact.
const SectionHeading = ({ tag, heading, align = "left" }) => {
  const centered = align === "center";

  return (
    <>
      <span
        className={cn(
          "mb-[15px] block text-[12px] font-bold uppercase tracking-[2.5px] text-accent",
          centered && "text-center"
        )}
      >
        {tag}
      </span>
      <h2
        className={cn(
          "bg-[image:var(--gradient-text)] bg-clip-text text-[32px] font-extrabold tracking-[-0.5px] text-transparent xl:text-[40px]",
          centered ? "mb-8 text-center xl:mb-10" : "mb-12 xl:mb-[60px]"
        )}
      >
        {heading.lead}{" "}
        <span className="bg-[image:var(--gradient-accent)] bg-clip-text text-transparent">
          {heading.highlight}
        </span>
      </h2>
    </>
  );
};

export default SectionHeading;
