"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { detectLocale, languages } from "../lib/i18n";

// "/" has no content of its own: it sends the visitor to the language they prefer.
// GitHub Pages cannot redirect on the server, so this happens in the browser.
// The links stay visible as a fallback (JavaScript off, or while redirecting).
const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/${detectLocale()}`);
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-[5%] text-center">
      <div className="flex flex-wrap justify-center gap-4">
        {languages.map(({ code, name }) => (
          <Link
            key={code}
            href={`/${code}`}
            lang={code}
            className="rounded-xl border border-line bg-white/[0.03] px-6 py-3 text-[15px] font-semibold text-fg transition-colors duration-300 hover:border-accent"
          >
            {name}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
