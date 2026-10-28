import Icon from "../ui/Icon";

const Footer = ({ copyright, backToTop }) => (
  <footer className="footer">
    <div>
      <p>{copyright}</p>
    </div>
    <div>
      <a href={backToTop.href} style={{ color: "var(--accent)", fontWeight: "600" }}>
        <Icon name={backToTop.icon} /> {backToTop.label}
      </a>
    </div>
  </footer>
);

export default Footer;
