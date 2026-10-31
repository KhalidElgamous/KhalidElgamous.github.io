"use client";

import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

// Fixed glass header. Below the lg breakpoint the links collapse into a menu button.
const Header = ({ brand, nav, lang, languageLabel, menuLabels }) => {
  const [open, setOpen] = useState(false);

  // Each language is a separate pre-built page; keep <html lang> in step with it.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <header className="fixed top-0 left-0 z-[1000] flex w-full items-center justify-between border-b border-line bg-[rgba(11,15,23,0.7)] px-[5%] py-5 backdrop-blur-[15px] md:px-[10%] xl:py-[25px]">
      <a
        href="#"
        className="text-[18px] font-extrabold tracking-[-0.5px] text-fg xl:text-[22px]"
      >
        <span className="text-accent">{brand}</span>
      </a>

      <div className="flex items-center gap-4 lg:gap-8 xl:gap-10">
        <nav
          id="main-nav"
          className={`${
            open ? "flex" : "hidden"
          } absolute top-full left-0 w-full flex-col border-b border-line bg-[rgba(11,15,23,0.95)] px-[5%] py-3 md:px-[10%] lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 xl:gap-10`}
        >
          {nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-[16px] font-medium transition-colors duration-300 hover:text-fg hover:[text-shadow:0_0_10px_rgba(255,255,255,0.3)] lg:py-0 lg:text-[14px] xl:text-[15px] ${
                index === 0
                  ? "text-fg [text-shadow:0_0_10px_rgba(255,255,255,0.3)]"
                  : "text-muted"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <LanguageSwitcher current={lang} label={languageLabel} />

        <button
          type="button"
          className="flex flex-col gap-[5px] p-2 lg:hidden"
          aria-label={open ? menuLabels.close : menuLabels.open}
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
      </div>
    </header>
  );
};

export default Header;
