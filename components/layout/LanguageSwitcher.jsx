"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { languages, STORAGE_KEY } from "../../lib/i18n";

// EN | FR pills. Each language is its own page (/en, /fr), so these are real links.
const LanguageSwitcher = ({ current, label }) => {
  const router = useRouter();

  const handleClick = (event, code) => {
    event.preventDefault();

    // Remember the choice for the next visit.
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // storage can be blocked; the switch still works
    }

    // Keep the visitor on the same section (#contact, #about, ...).
    if (code !== current) router.push(`/${code}${window.location.hash}/`);
  };

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-line bg-white/[0.03] p-[3px]"
    >
      {languages.map(({ code, label: short, name }) => {
        const active = code === current;

        return (
          <Link
            key={code}
            href={`/${code}`}
            hrefLang={code}
            lang={code}
            title={name}
            aria-label={name}
            aria-current={active ? "true" : undefined}
            onClick={(event) => handleClick(event, code)}
            className={`rounded-full px-2.5 py-1 text-[12px] font-bold tracking-[1px] transition-colors duration-300 ${
              active
                ? "bg-[rgba(0,242,254,0.15)] text-accent"
                : "text-muted hover:text-fg"
            }`}
          >
            {short}
          </Link>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
