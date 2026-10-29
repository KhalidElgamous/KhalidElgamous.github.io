"use client";

import { useState } from "react";

// Fixed glass header. Below the md breakpoint the links collapse into a menu button.
const Header = ({ brand, nav }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[1000] flex w-full items-center justify-between border-b border-line bg-[rgba(11,15,23,0.7)] px-[5%] py-5 backdrop-blur-[15px] md:px-[10%] xl:py-[25px]">
      <a
        href="#"
        className="text-[18px] font-extrabold tracking-[-0.5px] text-fg xl:text-[22px]"
      >
        <span className="text-accent">{brand}</span>
      </a>

      <button
        type="button"
        className="flex flex-col gap-[5px] p-2 md:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="main-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={`block h-0.5 w-6 bg-fg transition-transform duration-300 ${
            open ? "translate-y-[7px] rotate-45" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-fg transition-opacity duration-300 ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 w-6 bg-fg transition-transform duration-300 ${
            open ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        ></span>
      </button>

      <nav
        id="main-nav"
        className={`${
          open ? "flex" : "hidden"
        } absolute top-full left-0 w-full flex-col border-b border-line bg-[rgba(11,15,23,0.95)] px-[5%] py-3 md:static md:flex md:w-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 xl:gap-10`}
      >
        {nav.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`py-3 text-[16px] font-medium transition-colors duration-300 hover:text-fg hover:[text-shadow:0_0_10px_rgba(255,255,255,0.3)] md:py-0 md:text-[14px] xl:text-[15px] ${
              index === 0
                ? "text-fg [text-shadow:0_0_10px_rgba(255,255,255,0.3)]"
                : "text-muted"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
