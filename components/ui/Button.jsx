import { cn } from "../../lib/cn";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 text-center disabled:pointer-events-none disabled:opacity-60 rounded-xl px-6 py-3 text-[15px] xl:px-8 xl:py-3.5";

const variants = {
  primary:
    "bg-[image:var(--gradient-accent)] font-bold text-black shadow-[0_8px_30px_rgba(0,242,254,0.2)] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(0,242,254,0.4)]",
  secondary:
    "border border-line bg-white/[0.03] font-semibold text-fg transition-all duration-300 hover:border-accent hover:bg-white/[0.08]",
};

// Renders an <a> when href is given, otherwise a <button>.
// Extra props (download, type, onClick, ...) are passed through.
const Button = ({ href, variant = "primary", className, children, ...props }) => {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
