import Icon from "../ui/Icon";

// The resume button points at an existing PDF served from /public (path set in data/portfolio.json).
const Hero = ({ hero, resume }) => (
  <section className="hero" id="home">
    <div className="hero-content">
      <h3>{hero.eyebrow}</h3>
      <h1>{hero.name}</h1>
      <p>{hero.summary}</p>

      <div className="hero-actions">
        <a href={hero.primaryAction.href} className="btn-premium">
          {hero.primaryAction.label} <Icon name={hero.primaryAction.icon} />
        </a>
        <a href={resume.file} download={resume.downloadName} className="btn-secondary">
          <Icon name={resume.icon} /> {resume.label}
        </a>
      </div>
    </div>

    <div className="hero-display">
      <div className="profile-card-wrapper">
        <Icon name={hero.displayIcon} />
      </div>
    </div>
  </section>
);

export default Hero;
