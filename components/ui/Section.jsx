import { cn } from "../../lib/cn";

// Shared section shell: full-height block with responsive padding.
// Add layout or background classes through className.
const Section = ({ id, className, children }) => (
  <section
    id={id}
    className={cn(
      "relative min-h-screen px-[5%] pt-24 pb-12 md:px-[10%] md:pt-28 md:pb-16 xl:pt-[140px] xl:pb-20",
      className
    )}
  >
    {children}
  </section>
);

export default Section;
