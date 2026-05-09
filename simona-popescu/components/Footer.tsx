import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D1B69] text-white/80 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">
            <span className="text-[#a78bfa]">Simona</span> Popescu
          </h3>
          <p className="text-sm leading-relaxed">
            Terapeut holistic și consilier de dezvoltare personală.<br />
            <em className="text-[#a78bfa]">Tot ce ești merită vindecat.</em>
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Pagini</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#a78bfa] transition-colors">Acasă</Link></li>
            <li><Link href="/despre-mine" className="hover:text-[#a78bfa] transition-colors">Despre mine</Link></li>
            <li><Link href="/terapii" className="hover:text-[#a78bfa] transition-colors">Terapii & Servicii</Link></li>
            <li><Link href="/cursuri" className="hover:text-[#a78bfa] transition-colors">Cursuri & Webinare</Link></li>
            <li><Link href="/contact" className="hover:text-[#a78bfa] transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Râu Alb</li>
            <li>
              <a href="https://asociatiaexcedo.ro" target="_blank" rel="noopener noreferrer" className="hover:text-[#a78bfa] transition-colors">
                Asociația EXCEDO →
              </a>
            </li>
            <li className="flex gap-3 mt-2">
              <a href="#" className="hover:text-[#a78bfa] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#a78bfa] transition-colors">Instagram</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Simona Popescu. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
