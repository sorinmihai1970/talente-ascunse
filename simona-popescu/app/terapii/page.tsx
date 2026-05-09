import Link from "next/link";

const terapii = [
  {
    icon: "💆",
    titlu: "Masaj Terapeutic",
    descriere: "Tehnici manuale care eliberează tensiunile musculare, îmbunătățesc circulația și restabilesc echilibrul fizic. Recomandat pentru stres cronic, dureri musculare, recuperare post-traumatică.",
    cui: "Oricui simte tensiune fizică, oboseală cronică sau dureri musculare.",
  },
  {
    icon: "✨",
    titlu: "Reiki (Maestru)",
    descriere: "Canalizam energia universală pentru a dizolva blocajele energetice și a stimula vindecarea naturală la nivel fizic, emoțional și spiritual. Sesiunile sunt blânde, profunde și regenerante.",
    cui: "Celor care se simt epuizați energetic, anxioși sau în căutarea echilibrului interior.",
  },
  {
    icon: "💎",
    titlu: "Cristaloterapie",
    descriere: "Folosim proprietățile energetice ale cristalelor pentru a armoniza câmpurile energetice ale corpului. Fiecare cristal e ales specific pentru nevoile tale.",
    cui: "Celor deschiși să exploreze dimensiunea energetică a vindecării.",
  },
  {
    icon: "🌸",
    titlu: "Aromaterapie",
    descriere: "Uleiurile esențiale de calitate terapeutică acționează direct asupra sistemului nervos și hormonal. Combinăm aromaterapia cu alte terapii pentru efect maxim.",
    cui: "Celor cu stres, tulburări de somn, dezechilibre emoționale.",
  },
  {
    icon: "🧠",
    titlu: "Hipnoză & Regresie",
    descriere: "Accedem împreună la resursele subconștientului pentru a identifica și transforma tiparele limitative. Regresia ne permite să explorăm originea unor blocaje profunde.",
    cui: "Celor care simt că același tipar se repetă în viața lor și vor să-l schimbe.",
  },
  {
    icon: "🐝",
    titlu: "Apifitoterapie",
    descriere: "Folosim produsele stupului (miere, propolis, venin de albine) cu scop terapeutic. Acreditată de Colegiul Medicilor, această terapie are efecte dovedite în numeroase afecțiuni.",
    cui: "Celor cu afecțiuni inflamatorii, imunitate scăzută, dureri articulare.",
  },
  {
    icon: "🕉️",
    titlu: "Medicină Ayurvedică",
    descriere: "Medicina tradițională indiană abordează omul ca pe un întreg, echilibrând doshas (energiile vitale) prin dietă, rutine, plante și terapii specifice.",
    cui: "Celor care vor o abordare holistică pe termen lung a sănătății.",
  },
  {
    icon: "🌟",
    titlu: "Consiliere Dezvoltare Personală",
    descriere: "Sesiuni individuale în care explorăm obiectivele, blocajele și resursele tale. Construim împreună un plan concret de creștere personală, adaptat realității tale.",
    cui: "Celor care vor mai mult din viața lor și nu știu de unde să înceapă.",
  },
];

export default function Terapii() {
  return (
    <>
      {/* HEADER — lila închis */}
      <section className="py-20 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#a78bfa] font-semibold text-sm uppercase tracking-widest mb-4">Terapii & Servicii</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Abordare integrativă,<br />rezultate reale
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Fiecare terapie pe care o practic e un instrument. Împreună, alegem ce se potrivește cel mai bine nevoilor tale — acum, în acest moment al vieții tale.
          </p>
        </div>
      </section>

      {/* TERAPII GRID — crem */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {terapii.map((t) => (
            <div key={t.titlu} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e0f0] hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{t.icon}</div>
              <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{t.titlu}</h3>
              <p className="text-[#1A1A2E]/70 leading-relaxed mb-4">{t.descriere}</p>
              <div className="bg-[#FAF7F2] rounded-xl px-4 py-3 mb-6 border border-[#e8e0f0]">
                <p className="text-sm text-[#7C3AED]">
                  <span className="font-bold">Se adresează:</span> {t.cui}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-[#7C3AED] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#5b21b6] transition-colors"
              >
                Vreau să programez o sesiune
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — violet */}
      <section className="py-16 bg-[#7C3AED]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Nu știi de unde să începi?</h2>
          <p className="opacity-90 mb-8 text-lg">
            Scrie-mi și discutăm. Prima conversație e gratuită și fără niciun angajament.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#7C3AED] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FAF7F2] transition-colors"
          >
            Contactează-mă
          </Link>
        </div>
      </section>
    </>
  );
}
