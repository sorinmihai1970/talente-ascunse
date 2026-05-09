import Link from "next/link";
import Image from "next/image";

const serviciiPreview = [
  {
    icon: "🌿",
    titlu: "Masaj Terapeutic",
    descriere: "Eliberează tensiunile acumulate și restabilește echilibrul corpului prin tehnici tradiționale și moderne.",
  },
  {
    icon: "✨",
    titlu: "Reiki & Cristaloterapie",
    descriere: "Lucrăm cu energia ta pentru a dizolva blocajele și a stimula vindecarea naturală.",
  },
  {
    icon: "🧠",
    titlu: "Consiliere & Hipnoză",
    descriere: "Explorăm împreună rădăcinile tiparelor care te limitează și găsim calea spre schimbare.",
  },
];

const testimoniale = [
  {
    text: "Simona m-a ajutat să înțeleg că vindecarea nu înseamnă să uiți, ci să integrezi. Mi-a schimbat perspectiva complet.",
    autor: "Maria D.",
  },
  {
    text: "După 3 ședințe de consiliere am simțit că respir din nou. E un spațiu cu adevărat sigur.",
    autor: "Andrei P.",
  },
  {
    text: "Cursul despre cei 5 piloni mi-a dat instrumentele pe care le căutam de ani de zile.",
    autor: "Elena M.",
  },
];

const WEBINAR_ACTIV = false;
const webinarData = {
  titlu: "Vindecare prin cei 5 Piloni",
  data: "Sâmbătă, 7 iunie 2026 · ora 18:00",
  descriere: "Un webinar gratuit despre cum să-ți recapeți echilibrul fizic, mental, emoțional, sufletesc și spiritual.",
};

export default function Home() {
  return (
    <>
      {/* HERO — fundal #2D1B69 */}
      <section className="min-h-[90vh] flex items-center bg-[#2D1B69]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
          <div className="order-2 md:order-1">
            <p className="text-[#a78bfa] font-semibold text-sm uppercase tracking-widest mb-4">
              Terapeut Holistic · Consilier Dezvoltare Personală
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Tot ce ești<br />
              <span className="text-[#a78bfa]">merită vindecat.</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Vindecarea e în tine. Sunt lângă tine să te ajut să o accesezi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[#7C3AED] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#5b21b6] transition-colors text-center shadow-lg shadow-purple-900/50"
              >
                Programează o sesiune
              </Link>
              <Link
                href="/despre-mine"
                className="border-2 border-[#7C3AED] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Află despre mine
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-[#7C3AED]/50">
              <Image
                src="/Poza 2.jpeg"
                alt="Simona Popescu"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO FILOZOFIE — crem */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-12 h-1 bg-[#7C3AED] mx-auto mb-8 rounded-full" />
          <p className="text-xl md:text-2xl text-[#1A1A2E] leading-relaxed italic">
            „Nu ești o sumă de simptome. Ești un întreg. Și uneori, tot ce ai nevoie e un loc sigur în care să-ți dai voie să fii exact ce ești — fără să te explici, fără să te justifici."
          </p>
          <p className="mt-6 text-[#7C3AED] font-semibold">— Simona Popescu</p>
          <div className="w-12 h-1 bg-[#7C3AED] mx-auto mt-8 rounded-full" />
        </div>
      </section>

      {/* SERVICII PREVIEW — lila închis */}
      <section className="py-16 bg-[#2D1B69]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-[#7C3AED] mx-auto mb-4 rounded-full" />
            <h2 className="text-3xl font-bold text-white mb-3">Cum te pot ajuta</h2>
            <p className="text-white/60">Peste 20 de ani de experiență în terapii complementare și dezvoltare personală</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviciiPreview.map((s) => (
              <div key={s.titlu} className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{s.titlu}</h3>
                <p className="text-white/70 leading-relaxed mb-6">{s.descriere}</p>
                <Link href="/terapii" className="text-[#a78bfa] font-semibold hover:underline text-sm">
                  Află mai multe →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/terapii"
              className="bg-[#7C3AED] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5b21b6] transition-colors"
            >
              Vezi toate terapiile
            </Link>
          </div>
        </div>
      </section>

      {/* WEBINAR BANNER */}
      {WEBINAR_ACTIV && (
        <section className="py-12 bg-[#7C3AED]">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 opacity-80">Webinar gratuit</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{webinarData.titlu}</h2>
            <p className="opacity-90 mb-2">{webinarData.data}</p>
            <p className="opacity-80 mb-6 max-w-xl mx-auto">{webinarData.descriere}</p>
            <Link href="/cursuri" className="bg-white text-[#7C3AED] px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Înscrie-te gratuit
            </Link>
          </div>
        </section>
      )}

      {/* TESTIMONIALE — crem */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-[#7C3AED] mx-auto mb-4 rounded-full" />
            <h2 className="text-3xl font-bold text-[#1A1A2E]">Ce spun oamenii</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimoniale.map((t) => (
              <div key={t.autor} className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e0f0]">
                <div className="text-4xl text-[#7C3AED] mb-4 font-serif">"</div>
                <p className="text-[#1A1A2E]/80 leading-relaxed italic mb-6">{t.text}</p>
                <p className="text-[#7C3AED] font-semibold text-sm">— {t.autor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXCEDO CROSS-PROMO — lila închis */}
      <section className="py-12 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">Asociația EXCEDO</h3>
            <p className="text-white/70 leading-relaxed">
              Simona este co-fondatoare a Asociației EXCEDO — o comunitate dedicată dezvoltării personale, terapiei și creșterii conștiente.
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

      {/* CTA FINAL — violet viu */}
      <section className="py-20 bg-[#7C3AED]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ești gata să începi?</h2>
          <p className="text-lg opacity-90 mb-8">
            Primul pas e cel mai important. Programează o sesiune și hai să vedem împreună ce e posibil.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#7C3AED] px-10 py-4 rounded-full text-lg font-bold hover:bg-[#FAF7F2] transition-colors shadow-xl"
          >
            Programează o sesiune
          </Link>
        </div>
      </section>
    </>
  );
}
