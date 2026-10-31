// Server side only: loads the content file for a language.
// (Kept apart from i18n.js so the JSON is not bundled into client components.)
import en from "../data/portfolio_en.json";
import fr from "../data/portfolio_fr.json";
import { defaultLocale } from "./i18n";

const dictionaries = { en, fr };

export const getData = (lang) => dictionaries[lang] ?? dictionaries[defaultLocale];
