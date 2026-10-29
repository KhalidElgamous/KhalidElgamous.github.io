import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";

const Portfolio = ({ portfolio }) => (
  <Section id="portfolio" className="bg-surface">
    <SectionHeading tag={portfolio.tag} heading={portfolio.heading} />

    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 xl:gap-[35px]">
      {portfolio.projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </Section>
);

export default Portfolio;
