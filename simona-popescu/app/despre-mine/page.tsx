import Link from "next/link";
import Image from "next/image";

const acreditari = [
  { titlu: "Competență Apifitoterapie", institutie: "Colegiul Medicilor" },
  { titlu: "Formator", institutie: "Ministerul Muncii" },
  { titlu: "Consilier Dezvoltare Personală", institutie: "Ministerul Muncii" },
  { titlu: "Specialist Masaj Terapeutic", institutie: "Ministerul Muncii" },
  { titlu: "Maestru Reiki", institutie: "Certificare internațională" },
  { titlu: "Hipnoză & Regresie", institutie: "Formare specializată" },
];

export default function DespreMine() {
  return (
    <>
      {/* HERO — lila închis */}
      <section className="py-20 bg-[#2D1B69]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#7C3AED]/50">
              <Image
                src="/00.jpg"
                alt="Simona Popescu — terapeut holistic"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
          <div>
            <p className="text-[#a78bfa] font-semibold text-sm uppercase tracking-widest mb-4">Despre mine</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Sunt Simona.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Nu ești o sumă de simptome. Ești un întreg. Și uneori, tot ce ai nevoie e un loc sigur în care să-ți dai voie să fii exact ce ești — fără să te explici, fără să te justifici.
            </p>
            <p className="text-white/60 leading-relaxed">
              De peste 20 de ani, asta construiesc alături de oameni ca tine.
            </p>
          </div>
        </div>
      </section>

      {/* POVESTEA — crem */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="w-12 h-1 bg-[#7C3AED] mb-8 rounded-full" />
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">Povestea mea</h2>
          <div className="space-y-5 text-[#1A1A2E]/80 leading-relaxed text-lg">
            <p>
              Am pornit din medicină — cu tot rigoarea și știința ei. Dar am înțeles repede că omul nu e doar biologie. E emoție, suflet, energie, poveste.
            </p>
            <p>
              Așa am ajuns să explorez terapiile complementare: Reiki, masaj terapeutic, cristaloterapie, aromaterapie, hipnoză. Nu ca să înlocuiesc medicina, ci ca să completez ce ea lasă uneori neabordat — dimensiunea interioară a vindecării.
            </p>
            <p>
              Astăzi lucrez cu oameni care simt că ceva nu e în regulă, dar nu știu exact ce. Oameni care au încercat multe și caută un spațiu în care să fie ascultați cu adevărat. Un loc sigur.
            </p>
            <p>
              Acela e spațiul pe care îl construiesc cu fiecare om care vine la mine.
            </p>
          </div>
        </div>
      </section>

      {/* FILOZOFIA — lila închis */}
      <section className="py-16 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-12 h-1 bg-[#7C3AED] mx-auto mb-4 rounded-full" />
          <h2 className="text-3xl font-bold text-white mb-12">Filozofia mea terapeutică</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-bold text-white mb-3">Omul întreg</h3>
              <p className="text-white/70 text-sm leading-relaxed">Lucrez cu tine ca întreg — corp, minte, emoție și suflet. Nu tratez simptome izolate, ci cauze.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-bold text-white mb-3">Spațiu sigur</h3>
              <p className="text-white/70 text-sm leading-relaxed">Fiecare sesiune e un spațiu fără judecată. Poți fi exact ce ești, fără să te justifici.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-bold text-white mb-3">Vindecarea e în tine</h3>
              <p className="text-white/70 text-sm leading-relaxed">Eu sunt doar ghidul. Resursele de vindecare sunt ale tale — eu te ajut să le accesezi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ACREDITĂRI — crem */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-12 h-1 bg-[#7C3AED] mx-auto mb-4 rounded-full" />
          <h2 className="text-3xl font-bold text-center text-[#1A1A2E] mb-12">Competențe & Acreditări</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {acreditari.map((a) => (
              <div key={a.titlu} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-[#e8e0f0]">
                <div className="w-8 h-8 bg-[#7C3AED] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-[#1A1A2E]">{a.titlu}</p>
                  <p className="text-sm text-[#7C3AED]">{a.institutie}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCEDO — lila închis */}
      <section className="py-12 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Co-fondatoare Asociația EXCEDO</h3>
            <p className="text-white/70 leading-relaxed">
              Alături de echipa EXCEDO, construiesc o comunitate unde oamenii cresc, se vindecă și se susțin reciproc.
            </p>
          </div>
          <a
            href="https://asociatiaexcedo.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border-2 border-[#7C3AED] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#7C3AED] transition-colors"
          >
            Vizitează asociatiaexcedo.ro →
          </a>
        </div>
      </section>

      {/* CTA — violet */}
      <section className="py-16 bg-[#7C3AED]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Hai să ne cunoaștem</h2>
          <p className="opacity-90 mb-8 text-lg">O primă sesiune e o conversație. Fără angajamente, fără presiuni.</p>
          <Link
            href="/contact"
            className="bg-white text-[#7C3AED] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FAF7F2] transition-colors"
          >
            Programează o sesiune
          </Link>
        </div>
      </section>
    </>
  );
}
