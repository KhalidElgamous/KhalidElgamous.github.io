// Decorative background orbs. Positions come from the "orbs" array in data/portfolio.json.
const GlowOrbs = ({ orbs }) => (
  <>
    {orbs.map((position, index) => (
      <div key={index} className="glow-orb" style={position}></div>
    ))}
  </>
);

export default GlowOrbs;
