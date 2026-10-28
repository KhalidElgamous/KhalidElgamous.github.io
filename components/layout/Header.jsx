const Header = ({ brand, nav }) => (
  <header className="header">
    <a href="#" className="logo">
      <span>{brand}</span>
    </a>
    <nav className="navbar">
      {nav.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          className={index === 0 ? "active" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  </header>
);

export default Header;
