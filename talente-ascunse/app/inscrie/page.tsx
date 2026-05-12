"use client";

import { useLang } from "@/lib/LanguageContext";
import { t, tr, trArr } from "@/lib/translations";

export default function InscrierePage() {
  const { lang } = useLang();

  const steps = trArr(t.submit.howToSteps, lang);

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

        {/* Cum înscrii lucrările */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#e0f5e0] text-[#1a9410] flex items-center justify-center text-sm font-bold">2</span>
            {tr(t.submit.howToTitle, lang)}
          </h2>
          <ol className="flex flex-col gap-4">
            {/* Pasul 1: Formular */}
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#1a9410] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <span className="text-gray-700 text-sm">
                {lang === "ro" ? "Descarcă și completează " : "Download and fill in the "}
                <a
                  href="/documente/Formular_Inscriere_Lucrari.docx"
                  download
                  className="text-[#1a9410] font-semibold hover:underline"
                >
                  {tr(t.submit.formLabel, lang)}
                </a>
              </span>
            </li>
            {/* Pasul 2: GDPR */}
            <li className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-[#1a9410] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <span className="text-gray-700 text-sm">
                {lang === "ro" ? "Descarcă, completează și semnează " : "Download, fill in and sign the "}
                <a
                  href="/documente/Acord_GDPR_TalenteAscunse.docx"
                  download
                  className="text-[#1a9410] font-semibold hover:underline"
                >
                  {tr(t.submit.gdprLabel, lang)}
                </a>
              </span>
            </li>
            {/* Pasii 3-5 */}
            {steps.slice(2).map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1a9410] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 3}</span>
                <span className="text-gray-700 text-sm">{step}</span>
              </li>
            ))}
          </ol>
        </section>

      </div>
    </div>
  );
}
