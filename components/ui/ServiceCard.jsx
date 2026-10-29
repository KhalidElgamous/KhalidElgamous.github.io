import Icon from "./Icon";

const ServiceCard = ({ icon, title, description }) => (
  <div className="rounded-3xl border border-line bg-card px-6 py-8 backdrop-blur-[10px] transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:border-[rgba(0,242,254,0.3)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_40px_rgba(0,242,254,0.05)] xl:px-[35px] xl:py-[45px]">
    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(0,242,254,0.15)] bg-[rgba(0,242,254,0.06)] xl:mb-[30px] xl:h-[60px] xl:w-[60px]">
      <Icon name={icon} className="text-[21px] text-accent xl:text-[26px]" />
    </div>
    <h3 className="mb-3 text-[18px] font-bold tracking-[-0.3px] xl:mb-[15px] xl:text-[22px]">
      {title}
    </h3>
    <p className="text-[14px] leading-[1.6] text-muted xl:text-[15px]">{description}</p>
  </div>
);

export default ServiceCard;
