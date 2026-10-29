import { cn } from "../../lib/cn";

// Thin wrapper around the Font Awesome <i> tag. Pass the icon name from the JSON, e.g. "fa-arrow-right".
// Add Tailwind classes through className (size, colour, ...).
const Icon = ({ name, className }) => (
  <i className={cn("fas", name, className)} aria-hidden="true"></i>
);

export default Icon;
