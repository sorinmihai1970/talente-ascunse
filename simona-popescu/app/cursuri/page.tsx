import Link from "next/link";

const WEBINAR_ACTIV = false;
const webinarActiv = {
  titlu: "Vindecare prin cei 5 Piloni",
  data: "Sâmbătă, 7 iunie 2026 · ora 18:00",
  descriere: "Un webinar gratuit de 90 de minute în care explorăm cei 5 piloni ai vindecării integrative: Fizic, Mental, Emoțional, Sufletesc și Spiritual.",
  link: "#",
};

const piloni = [
  { nr: "01", titlu: "Fizic", descriere: "Corpul ca fundație — nutriție, mișcare, somn, ritm." },
  { nr: "02", titlu: "Mental", descriere: "Gânduri, credințe, tiparele minții care ne creează realitatea." },
  { nr: "03", titlu: "Emoțional", descriere: "Emoțiile neintegrate care se stochează în corp și comportament." },
  { nr: "04", titlu: "Sufletesc", descriere: "Valorile, scopul, relațiile — ce dă sens vieții tale." },
  { nr: "05", titlu: "Spiritual", descriere: "Conexiunea cu ceva mai mare — credință, natură, univers." },
];

const workshopuri = [
  {
    titlu: "Retreat Intensiv — Râu Alb",
    tip: "3 zile",
    descriere: "Imersiune completă în natură. Terapii, meditație, comunitate și transformare profundă.",
    status: "În curând",
  },
  {
    titlu: "Zi Intensivă — Echilibru Interior",
    tip: "1 zi",
    descriere: "O zi dedicată reconectării cu tine. Masaj, Reiki, meditație și consiliere de grup.",
    status: "În curând",
  },
];

export default function Cursuri() {
  return (
    <>
      {/* HEADER — lila închis */}
      <section className="py-20 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#a78bfa] font-semibold text-sm uppercase tracking-widest mb-4">Cursuri & Webinare</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Învățăm împreună<br />să ne vindecăm
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Webinare gratuite, programe intensive și workshopuri în natură. Fiecare experiență e construită să-ți ofere instrumentele de care ai nevoie.
          </p>
        </div>
      </section>

      {/* WEBINAR GRATUIT — crem */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-12 h-1 bg-[#7C3AED] mb-4 rounded-full" />
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-8">Webinar gratuit</h2>
          {WEBINAR_ACTIV ? (
            <div className="bg-[#2D1B69] rounded-2xl p-8 md:p-12 text-white">
              <span className="bg-[#7C3AED] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Înregistrare deschisă
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-4 mb-2">{webinarActiv.titlu}</h3>
              <p className="opacity-80 mb-4">{webinarActiv.data}</p>
              <p className="opacity-90 leading-relaxed mb-8 max-w-2xl">{webinarActiv.descriere}</p>
              <Link href={webinarActiv.link} className="bg-[#7C3AED] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5b21b6] transition-colors">
                Înscrie-te gratuit
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 border-2 border-dashed border-[#e8e0f0] text-center">
              <p className="text-[#1A1A2E]/50 text-lg">Nu există webinar activ în acest moment.</p>
              <p className="text-[#1A1A2E]/40 mt-2">Urmărește paginile de social media pentru anunțul următorului webinar gratuit.</p>
            </div>
          )}
        </div>
      </section>

      {/* PROGRAM INTENSIV — lila închis */}
      <section className="py-16 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-[#7C3AED] mx-auto mb-4 rounded-full" />
            <h2 className="text-3xl font-bold text-white mb-4">Program Intensiv — Cei 5 Piloni</h2>
            <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
              Un program plătit de transformare profundă. Lucrăm pe cei 5 piloni ai ființei tale pentru un echilibru durabil.
            </p>
            <span className="inline-block mt-3 bg-[#7C3AED] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              Certificate acreditate Ministerul Muncii
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
            {piloni.map((p) => (
              <div key={p.nr} className="bg-white/10 rounded-2xl p-5 border border-white/10 text-center">
                <p className="text-2xl font-bold text-[#a78bfa] mb-1">{p.nr}</p>
                <p className="font-bold text-white mb-2">{p.titlu}</p>
                <p className="text-xs text-white/60 leading-relaxed">{p.descriere}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contact" className="bg-[#7C3AED] text-white px-8 py-4 rounded-full font-bold hover:bg-[#5b21b6] transition-colors">
              Vreau să aflu mai multe
            </Link>
          </div>
        </div>
      </section>

      {/* WORKSHOPURI — crem */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="w-12 h-1 bg-[#7C3AED] mb-4 rounded-full" />
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Workshopuri & Tabere — Râu Alb</h2>
          <p className="text-[#1A1A2E]/60 mb-10 leading-relaxed">
            Experiențe intensive în natură, la Râu Alb. Combinăm terapia, meditația și comunitatea pentru transformare profundă.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workshopuri.map((w) => (
              <div key={w.titlu} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e0f0] hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#FAF7F2] text-[#7C3AED] text-xs font-bold px-3 py-1 rounded-full border border-[#e8e0f0]">{w.tip}</span>
                  <span className="bg-[#FAF7F2] text-[#1A1A2E]/50 text-xs font-bold px-3 py-1 rounded-full border border-[#e8e0f0]">{w.status}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{w.titlu}</h3>
                <p className="text-[#1A1A2E]/70 leading-relaxed mb-6">{w.descriere}</p>
                <Link href="/contact" className="text-[#7C3AED] font-semibold hover:underline text-sm">
                  Anunță-mă când e disponibil →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — violet */}
      <section className="py-16 bg-[#7C3AED]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Primul pas: webinarul gratuit</h2>
          <p className="opacity-90 mb-8 text-lg">
            Înscrie-te la newsletter și fii primul anunțat când deschidem înregistrările.
          </p>
          <Link href="/contact" className="bg-white text-[#7C3AED] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FAF7F2] transition-colors">
            Abonează-te la newsletter
          </Link>
        </div>
      </section>
    </>
  );
}
