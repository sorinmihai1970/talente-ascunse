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
              ? "O inițiativă a Asociației EXCEDO pentru arta românească rurală"
              : "An initiative by EXCEDO Association for rural Romanian art"}
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
                  ro: "Dăm voce artiștilor din zone fără acces la platforme culturale.",
                  en: "We give voice to artists from areas without access to cultural platforms.",
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
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{tr(t.about.teamTitle, lang)}</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6"
              >
                <div className="w-14 h-14 rounded-full bg-[#1a9410] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  {member.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{member.name}</p>
                  <p className="text-gray-500 text-sm">
                    {lang === "ro" ? member.role.ro : member.role.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Logo EXCEDO */}
        <section className="text-center border-t border-gray-100 pt-10">
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="/logo.jpeg" alt="EXCEDO" width={48} height={48} className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Asociația EXCEDO</p>
              <a href="mailto:contact@excedo.ro" className="text-[#1a9410] text-sm hover:underline">
                contact@excedo.ro
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
