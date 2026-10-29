import Icon from "../ui/Icon";

const Footer = ({ copyright, backToTop }) => (
  <footer className="flex flex-col items-center gap-4 border-t border-line bg-main px-[5%] py-8 text-center text-[12px] text-muted md:flex-row md:justify-between md:px-[10%] md:text-left xl:py-10 xl:text-[14px]">
    <div>
      <p>{copyright}</p>
    </div>
    <div>
      <a href={backToTop.href} className="font-semibold text-accent">
        <Icon name={backToTop.icon} /> {backToTop.label}
      </a>
    </div>
  </footer>
);

export default Footer;
