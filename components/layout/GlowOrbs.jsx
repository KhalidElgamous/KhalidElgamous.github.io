// Decorative background orbs. Positions come from the "orbs" array in the data/portfolio_*.json files.
// The wrapper clips them so an orb placed past the screen edge never causes sideways scrolling.
const GlowOrbs = ({ orbs }) => (
  <div
    className="pointer-events-none absolute top-0 left-0 z-0 h-screen w-full overflow-hidden"
    aria-hidden="true"
  >
    {orbs.map((position, index) => (
      <div
        key={index}
        className="absolute h-[400px] w-[400px] bg-[image:radial-gradient(circle,var(--accent-glow)_0%,transparent_70%)]"
        style={position}
      ></div>
    ))}
  </div>
);

export default GlowOrbs;
