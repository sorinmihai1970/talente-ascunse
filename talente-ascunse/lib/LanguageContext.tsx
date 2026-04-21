"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "./translations";

interface LangContextType {
  lang: Lang;
  toggle: () => void;
}

const LangContext = createContext<LangContextType>({ lang: "ro", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ro");
  const toggle = () => setLang((l) => (l === "ro" ? "en" : "ro"));
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
