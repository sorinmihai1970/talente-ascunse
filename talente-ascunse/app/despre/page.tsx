"use client";

import Image from "next/image";
import { useLang } from "@/lib/LanguageContext";
import { t, tr } from "@/lib/translations";

const teamMembers = [
  {
    name: "Sorin",
    role: { ro: "Co-fondator, Asociația EXCEDO", en: "Co-founder, EXCEDO Association" },
  },
  {
    name: "Simona",
    role: { ro: "Co-fondatoare, Asociația EXCEDO", en: "Co-founder, EXCEDO Association" },
  },
  {
    name: "Veronica",
    role: { ro: "EXCEDO", en: "EXCEDO" },
  },
];

export default function DesprePage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1a9410] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-3">{tr(t.about.title, lang)}</h1>
          <p className="text-green-100 text-lg">
            {lang === "ro"
              ? "O inițiativă a Asociației EXCEDO pentru tinerii artiști care merită să fie descoperiți"
              : "An initiative by EXCEDO Association for young artists who deserve to be discovered"}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col gap-14">
        {/* Misiune */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tr(t.about.missionTitle, lang)}</h2>
          <p className="text-gray-600 leading-relaxed text-lg">{tr(t.about.mission, lang)}</p>
        </section>

        {/* Context */}
        <section className="bg-[#e0f5e0] rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{tr(t.about.contextTitle, lang)}</h2>
          <p className="text-gray-700 leading-relaxed">{tr(t.about.context, lang)}</p>
        </section>

        {/* Valori */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {lang === "ro" ? "Valorile noastre" : "Our values"}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title: { ro: "Autenticitate", en: "Authenticity" },
                text: {
                  ro: "Lucrări 100% originale, fără reproduceri sau personaje copyright.",
                  en: "100% original works, no reproductions or copyrighted characters.",
                },
              },
              {
                icon: "🌍",
                title: { ro: "Accesibilitate", en: "Accessibility" },
                text: {
                  ro: "Dăm voce tinerilor artiști care așteaptă să fie descoperiți.",
                  en: "We give voice to young artists waiting to be discovered.",
                },
              },
              {
                icon: "🔒",
                title: { ro: "Protecție date", en: "Data protection" },
                text: {
                  ro: "Zero cookies, zero tracking. Publicăm doar prenumele și localitatea.",
                  en: "Zero cookies, zero tracking. We publish only first name and locality.",
                },
              },
            ].map((v) => (
              <div key={v.title.ro} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{lang === "ro" ? v.title.ro : v.title.en}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {lang === "ro" ? v.text.ro : v.text.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Echipa */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tr(t.about.teamTitle, lang)}</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-3 bg-gray-50 rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-full bg-[#1a9410] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {member.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  <p className="text-gray-500 text-sm">EXCEDO</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logo EXCEDO */}
        <section className="text-center border-t border-gray-100 pt-10">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="/logo.jpeg" alt="EXCEDO" width={48} height={48} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold text-gray-900">Asociația EXCEDO</p>
              <a href="mailto:excedo2022@gmail.com" className="text-[#1a9410] text-sm hover:underline">
                excedo2022@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 mt-1">
              <a
                href="https://www.facebook.com/AsociatiaExcedo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1a9410] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/asociatiaexcedo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1a9410] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
