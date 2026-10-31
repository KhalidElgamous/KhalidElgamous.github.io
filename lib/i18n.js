// Languages available on the site. The first one is the default.
// To add a language, see "Adding a language" in the README.
export const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "fr", label: "FR", name: "Français" },
];

export const locales = languages.map((language) => language.code);
export const defaultLocale = locales[0];
export const STORAGE_KEY = "lang";

export const isLocale = (value) => locales.includes(value);

// Browser only. Order: the language the visitor chose before, then the browser language, then the default.
export const detectLocale = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) return saved;
  } catch {
    // storage can be blocked (private mode); just carry on
  }
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];
  
  for (const tag of preferred) {
    const code = tag?.slice(0, 2).toLowerCase();
    if (isLocale(code)) return code;
  }

  return defaultLocale;
};
