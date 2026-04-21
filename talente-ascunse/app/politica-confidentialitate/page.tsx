"use client";

import { useLang } from "@/lib/LanguageContext";

export default function PrivacyPage() {
  const { lang } = useLang();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-2" id="gdpr">
          {lang === "ro" ? "Politică de Confidențialitate" : "Privacy Policy"}
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          {lang === "ro" ? "Ultima actualizare: 2025" : "Last updated: 2025"}
        </p>

        <div className="prose prose-gray max-w-none">
          {lang === "ro" ? (
            <>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. Operatorul de date</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Asociația EXCEDO, cu sediul în România, este operatorul de date cu caracter personal în sensul GDPR (Regulamentul UE 2016/679).
                Contact: <a href="mailto:contact@excedo.ro" className="text-[#1a9410] hover:underline">contact@excedo.ro</a>
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. Date colectate</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Platforma Talente Ascunse nu colectează niciun cookie, nu folosește Google Analytics și nu aplică niciun sistem de tracking.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pentru artiștii înscriși, publicăm exclusiv: <strong>prenumele</strong> și <strong>localitatea</strong> de proveniență. Nu publicăm: vârsta, numele de familie, adresa, sau orice alte date personale.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">3. Scopul prelucrării</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Datele sunt prelucrate exclusiv în scopul promovării lucrărilor artistice originale ale tinerilor din medii rurale.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">4. Temeiul legal</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Prelucrarea are la bază consimțământul explicit al artistului (sau al părintelui/tutorelui, dacă artistul este minor), exprimat la momentul înscrierii lucrării.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">5. Drepturile tale</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Conform GDPR, ai dreptul la:
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-1 mb-4">
                <li>Acces la datele tale</li>
                <li>Rectificarea datelor inexacte</li>
                <li>Ștergerea datelor ("dreptul de a fi uitat")</li>
                <li>Restricționarea prelucrării</li>
                <li>Opoziție la prelucrare</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pentru orice solicitare, contactează-ne la: <a href="mailto:contact@excedo.ro" className="text-[#1a9410] hover:underline">contact@excedo.ro</a>
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">6. Politica privind cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Acest site nu folosește cookie-uri. Nu există sisteme de tracking, analiză sau publicitate.
              </p>

              <p className="text-gray-400 text-sm mt-10 pt-6 border-t border-gray-100">
                Această politică va fi completată cu documentul oficial generat via gdprgenerator.ro înainte de lansarea platformei.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">1. Data controller</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                EXCEDO Association, based in Romania, is the data controller within the meaning of GDPR (EU Regulation 2016/679).
                Contact: <a href="mailto:contact@excedo.ro" className="text-[#1a9410] hover:underline">contact@excedo.ro</a>
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">2. Data collected</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The Hidden Talents platform does not collect any cookies, does not use Google Analytics, and does not apply any tracking system.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                For enrolled artists, we publish exclusively: <strong>first name</strong> and <strong>locality</strong> of origin. We do not publish: age, last name, address, or any other personal data.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">3. Purpose of processing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Data is processed exclusively for the purpose of promoting original artistic works by young people from rural areas.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">4. Legal basis</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Processing is based on the explicit consent of the artist (or parent/guardian, if the artist is a minor), expressed at the time of artwork submission.
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">5. Your rights</h2>
              <p className="text-gray-600 leading-relaxed mb-2">Under GDPR, you have the right to:</p>
              <ul className="list-disc ml-6 text-gray-600 space-y-1 mb-4">
                <li>Access your data</li>
                <li>Rectification of inaccurate data</li>
                <li>Erasure ("right to be forgotten")</li>
                <li>Restriction of processing</li>
                <li>Object to processing</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                For any request, contact us at: <a href="mailto:contact@excedo.ro" className="text-[#1a9410] hover:underline">contact@excedo.ro</a>
              </p>

              <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">6. Cookie policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This site does not use cookies. There are no tracking, analytics, or advertising systems.
              </p>

              <p className="text-gray-400 text-sm mt-10 pt-6 border-t border-gray-100">
                This policy will be completed with the official document generated via gdprgenerator.ro before the platform launch.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
