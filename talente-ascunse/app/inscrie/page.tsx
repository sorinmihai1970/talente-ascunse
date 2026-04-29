"use client";

import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import { t, tr, trArr } from "@/lib/translations";

export default function InscrierePage() {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);

  const template = lang === "ro" ? t.submit.template.ro : t.submit.template.en;

  const handleCopy = () => {
    navigator.clipboard.writeText(template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{tr(t.submit.title, lang)}</h1>
          <p className="text-gray-500 mt-2">{tr(t.submit.subtitle, lang)}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
        {/* Eligibilitate */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#e0f5e0] text-[#1a9410] flex items-center justify-center text-sm font-bold">1</span>
            {tr(t.submit.eligibilityTitle, lang)}
          </h2>
          <ul className="flex flex-col gap-3">
            {trArr(t.submit.criteria, lang).map((criterion, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#1a9410] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">{criterion}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Sablon email */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#e0f5e0] text-[#1a9410] flex items-center justify-center text-sm font-bold">2</span>
            {tr(t.submit.templateTitle, lang)}
          </h2>
          <p className="text-gray-500 text-sm mb-4 ml-10">{tr(t.submit.templateSubtitle, lang)}</p>

          <div className="relative">
            <pre className="bg-gray-50 rounded-xl p-5 text-sm text-gray-700 whitespace-pre-wrap font-mono border border-gray-200 leading-relaxed">
              {template}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-3 right-3 px-3 py-1.5 text-xs font-medium rounded-lg bg-white border border-gray-200 hover:border-[#1a9410] hover:text-[#1a9410] transition-colors shadow-sm"
            >
              {copied
                ? lang === "ro" ? "✓ Copiat!" : "✓ Copied!"
                : lang === "ro" ? "Copiază" : "Copy"}
            </button>
          </div>
        </section>

        {/* Trimite la */}
        <section className="bg-[#e0f5e0] rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#1a9410] text-white flex items-center justify-center text-sm font-bold">3</span>
            {tr(t.submit.sendTo, lang)}
          </h2>
          <a
            href="mailto:excedo2022@gmail.com"
            className="text-[#1a9410] font-bold text-xl hover:underline"
          >
            excedo2022@gmail.com
          </a>
          <p className="text-gray-600 text-sm mt-3 leading-relaxed">
            {tr(t.submit.note, lang)}
          </p>
        </section>
      </div>
    </div>
  );
}
