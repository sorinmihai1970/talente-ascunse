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
          {lang === "ro" ? "Ultima actualizare: 29 aprilie 2026" : "Last updated: April 29, 2026"}
        </p>

        <div className="prose prose-gray max-w-none">
          {lang === "ro" ? (
            <>
              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>1. Operatorul de date</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>ASOCIAȚIA EXCEDO – PENTRU ACCELERAREA SUCCESULUI TINERILOR ROMÂNI</strong><br />
                Sediul social: Sat Râu Alb de Jos, Com. Râu Alb, Str. Ciobănești, Nr. 34, Jud. Dâmbovița, România<br />
                Cod de identificare fiscală (CIF): 26611385<br />
                Email: <a href="mailto:excedo2022@gmail.com" className="text-[#1a9410] hover:underline">excedo2022@gmail.com</a><br />
                Telefon: <a href="tel:+40737701211" className="text-[#1a9410] hover:underline">+40 737 701 211</a>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Asociația EXCEDO este operatorul de date cu caracter personal în sensul Regulamentului (UE) 2016/679 al Parlamentului European și al Consiliului (GDPR), aplicabil de la 25 mai 2018.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>2. Date colectate</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Platforma Talente Ascunse colectează și prelucrează exclusiv datele de mai jos:
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-1 mb-4">
                <li><strong>Pentru artiștii promovați:</strong> prenume și localitate de proveniență. Nu publicăm vârsta, numele de familie, adresa sau orice alte date cu caracter personal.</li>
                <li><strong>Pentru persoanele care ne contactează:</strong> adresa de email furnizată voluntar prin trimiterea unui mesaj la adresa noastră de contact.</li>
              </ul>
              <div className="bg-[#f0faf0] border-l-4 border-[#1a9410] px-5 py-4 rounded text-sm text-gray-700 mb-4">
                Platforma Talente Ascunse <strong>nu colectează cookie-uri</strong>, nu folosește Google Analytics și nu aplică niciun sistem de tracking sau publicitate.
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>3. Scopul prelucrării</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Datele sunt prelucrate exclusiv în scopul <strong>promovării lucrărilor artistice originale ale tinerilor din medii rurale</strong>, în cadrul proiectului cultural al Asociației EXCEDO. Datele nu sunt utilizate în scopuri comerciale și nu sunt vândute sau închiriate terților.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>4. Temeiul legal</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Prelucrarea datelor se bazează pe <strong>consimțământul explicit</strong> al artistului sau, în cazul minorilor, al părintelui ori tutorelui legal, exprimat în scris prin formularul GDPR semnat înainte de publicarea oricărei lucrări pe platformă. Consimțământul poate fi retras oricând, fără nicio consecință.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>5. Durata păstrării datelor</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Datele sunt păstrate pe durata activității proiectului Talente Ascunse sau până la retragerea consimțământului de către persoana vizată ori reprezentantul său legal. La retragerea consimțământului, datele sunt șterse în termen de 30 de zile.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>6. Transferul datelor către terți</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Platforma este găzduită pe serverele <strong>Vercel Inc.</strong> (SUA), furnizor de infrastructură cloud care asigură transferul datelor în condiții de securitate adecvate, în conformitate cu Standardele Contractuale ale Comisiei Europene (SCC). Nu transferăm date către alți terți.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>7. Drepturile persoanelor vizate</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Conform GDPR, orice persoană ale cărei date sunt prelucrate de Asociația EXCEDO are dreptul la:
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-1 mb-4">
                <li><strong>Acces</strong> – să solicite informații despre datele deținute</li>
                <li><strong>Rectificare</strong> – să corecteze datele inexacte</li>
                <li><strong>Ștergere</strong> – „dreptul de a fi uitat"</li>
                <li><strong>Restricționarea prelucrării</strong></li>
                <li><strong>Opoziție</strong> la prelucrare</li>
                <li><strong>Retragerea consimțământului</strong> în orice moment</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pentru orice solicitare privind datele personale, contactați-ne la:{" "}
                <a href="mailto:excedo2022@gmail.com" className="text-[#1a9410] hover:underline">excedo2022@gmail.com</a>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Dacă considerați că drepturile vă sunt încălcate, puteți depune o plângere la{" "}
                <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong>:{" "}
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#1a9410] hover:underline">www.dataprotection.ro</a>
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>8. Politica privind cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Acest site <strong>nu folosește cookie-uri</strong> de nicio natură — nici esențiale, nici de analiză, nici de marketing. Nu există sisteme de tracking, analiză a comportamentului sau publicitate pe această platformă.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>9. Securitatea datelor</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Asociația EXCEDO aplică măsuri tehnice și organizatorice adecvate pentru protejarea datelor cu caracter personal împotriva accesului neautorizat, pierderii sau distrugerii. Accesul la datele colectate este limitat exclusiv la persoanele autorizate din cadrul asociației.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>10. Modificări ale politicii</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Această politică poate fi actualizată periodic. Data ultimei modificări este afișată în partea de sus a documentului. Vă recomandăm să o consultați periodic.
              </p>

              <p className="text-gray-400 text-sm mt-10 pt-6 border-t border-gray-100">
                © 2026 Asociația EXCEDO – Pentru Accelerarea Succesului Tinerilor Români. Toate drepturile rezervate.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>1. Data Controller</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>EXCEDO ASSOCIATION – FOR ACCELERATING THE SUCCESS OF YOUNG ROMANIANS</strong><br />
                Registered address: Sat Râu Alb de Jos, Com. Râu Alb, Str. Ciobănești, Nr. 34, Dâmbovița County, Romania<br />
                Tax Identification Number (CIF): 26611385<br />
                Email: <a href="mailto:excedo2022@gmail.com" className="text-[#1a9410] hover:underline">excedo2022@gmail.com</a><br />
                Phone: <a href="tel:+40737701211" className="text-[#1a9410] hover:underline">+40 737 701 211</a>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                EXCEDO Association is the data controller within the meaning of Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR), applicable from 25 May 2018.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>2. Data Collected</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                The Hidden Talents platform collects and processes exclusively the following data:
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-1 mb-4">
                <li><strong>For promoted artists:</strong> first name and locality of origin. We do not publish age, last name, address, or any other personal data.</li>
                <li><strong>For people who contact us:</strong> email address voluntarily provided by sending a message to our contact address.</li>
              </ul>
              <div className="bg-[#f0faf0] border-l-4 border-[#1a9410] px-5 py-4 rounded text-sm text-gray-700 mb-4">
                The Hidden Talents platform <strong>does not collect cookies</strong>, does not use Google Analytics, and does not apply any tracking or advertising system.
              </div>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>3. Purpose of Processing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Data is processed exclusively for the purpose of <strong>promoting original artistic works by young people from rural areas</strong>, within the cultural project of EXCEDO Association. Data is not used for commercial purposes and is not sold or rented to third parties.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>4. Legal Basis</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Data processing is based on the <strong>explicit consent</strong> of the artist or, in the case of minors, of the parent or legal guardian, expressed in writing through the GDPR form signed before any artwork is published on the platform. Consent may be withdrawn at any time without any consequence.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>5. Data Retention Period</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Data is retained for the duration of the Hidden Talents project or until consent is withdrawn by the data subject or their legal representative. Upon withdrawal of consent, data is deleted within 30 days.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>6. Transfer of Data to Third Parties</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The platform is hosted on the servers of <strong>Vercel Inc.</strong> (USA), a cloud infrastructure provider that ensures data transfer under adequate security conditions, in accordance with the European Commission's Standard Contractual Clauses (SCC). We do not transfer data to any other third parties.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>7. Rights of Data Subjects</h2>
              <p className="text-gray-600 leading-relaxed mb-2">
                Under GDPR, any person whose data is processed by EXCEDO Association has the right to:
              </p>
              <ul className="list-disc ml-6 text-gray-600 space-y-1 mb-4">
                <li><strong>Access</strong> – request information about the data held</li>
                <li><strong>Rectification</strong> – correct inaccurate data</li>
                <li><strong>Erasure</strong> – "right to be forgotten"</li>
                <li><strong>Restriction of processing</strong></li>
                <li><strong>Object</strong> to processing</li>
                <li><strong>Withdraw consent</strong> at any time</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                For any request regarding personal data, contact us at:{" "}
                <a href="mailto:excedo2022@gmail.com" className="text-[#1a9410] hover:underline">excedo2022@gmail.com</a>
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you believe your rights have been violated, you may lodge a complaint with the{" "}
                <strong>National Supervisory Authority for Personal Data Processing (ANSPDCP)</strong>:{" "}
                <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#1a9410] hover:underline">www.dataprotection.ro</a>
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>8. Cookie Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This site <strong>does not use cookies</strong> of any kind — neither essential, analytical, nor marketing. There are no tracking, behavioral analysis, or advertising systems on this platform.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>9. Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                EXCEDO Association applies appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or destruction. Access to collected data is limited exclusively to authorized persons within the association.
              </p>

              <h2 className="text-xl font-bold mt-8 mb-3" style={{ color: "#1a9410" }}>10. Policy Changes</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                This policy may be updated periodically. The date of the last modification is displayed at the top of the document. We recommend consulting it periodically.
              </p>

              <p className="text-gray-400 text-sm mt-10 pt-6 border-t border-gray-100">
                © 2026 EXCEDO Association – For Accelerating the Success of Young Romanians. All rights reserved.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
