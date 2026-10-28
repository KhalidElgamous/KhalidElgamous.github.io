const ProjectCard = ({ title, description, image, imageAlt, tags }) => (
  <div className="project-card">
    <div className="project-img-host">
      <img src={image} alt={imageAlt} />
    </div>
    <div className="project-meta">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="tech-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
