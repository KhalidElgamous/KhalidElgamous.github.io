const ProjectCard = ({ title, description, image, imageAlt, tags }) => (
  <div className="group overflow-hidden rounded-3xl border border-line bg-main transition-all duration-[400ms] hover:-translate-y-1 hover:border-white/[0.15]">
    <div className="relative h-44 w-full overflow-hidden xl:h-[220px]">
      <img
        src={image}
        alt={imageAlt}
        className="h-full w-full object-cover grayscale-[20%] [transition:filter_0.3s,transform_0.5s] group-hover:scale-[1.04] group-hover:grayscale-0"
      />
    </div>
    <div className="p-6 xl:p-[30px]">
      <h4 className="mb-2.5 text-[17px] font-bold tracking-[-0.2px] xl:text-[20px]">{title}</h4>
      <p className="mb-5 line-clamp-3 h-[70px] text-[14px] leading-[1.6] text-muted xl:mb-[25px]">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[20px] border border-line bg-white/[0.04] px-3 py-[5px] text-[11px] font-semibold text-fg"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
