// Section tag ("01 // Background") + heading with one highlighted part.
// Use align="center" for centered sections such as Contact.
const SectionHeading = ({ tag, heading, align = "left" }) => {
  const centered = align === "center";

  return (
    <>
      <span
        className="section-tag"
        style={centered ? { textAlign: "center", display: "block" } : undefined}
      >
        {tag}
      </span>
      <h2
        className="heading"
        style={centered ? { textAlign: "center", marginBottom: "4rem" } : undefined}
      >
        {heading.lead} <span>{heading.highlight}</span>
      </h2>
    </>
  );
};

export default SectionHeading;
