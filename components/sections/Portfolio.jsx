import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

const Portfolio = ({ portfolio }) => (
  <section className="portfolio" id="portfolio">
    <SectionHeading tag={portfolio.tag} heading={portfolio.heading} />

    <div className="portfolio-grid">
      {portfolio.projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;
