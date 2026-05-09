"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nume: "",
    email: "",
    telefon: "",
    serviciu: "",
    mesaj: "",
  });
  const [trimis, setTrimis] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectare email / Supabase
    setTrimis(true);
  };

  return (
    <>
      {/* HEADER — lila închis */}
      <section className="py-20 bg-[#2D1B69]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#a78bfa] font-semibold text-sm uppercase tracking-widest mb-4">Contact & Programări</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hai să vorbim
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Completează formularul și te contactez în 24 de ore. Prima conversație e o simplă discuție — fără angajamente, fără presiuni.
          </p>
        </div>
      </section>

      {/* FORMULAR + INFO — crem */}
      <section className="py-16 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* FORMULAR */}
          <div>
            <div className="w-12 h-1 bg-[#7C3AED] mb-4 rounded-full" />
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-8">Programează o sesiune</h2>

            {trimis ? (
              <div className="bg-white border border-[#e8e0f0] rounded-2xl p-8 text-center shadow-sm">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Mesaj trimis!</h3>
                <p className="text-[#1A1A2E]/60">Te contactez în cel mult 24 de ore. Mulțumesc că ai ales să lucrăm împreună.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">Nume și prenume *</label>
                  <input
                    type="text"
                    name="nume"
                    required
                    value={form.nume}
                    onChange={handleChange}
                    className="w-full border border-[#e8e0f0] bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-[#1A1A2E]"
                    placeholder="Numele tău"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-[#e8e0f0] bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-[#1A1A2E]"
                    placeholder="email@exemplu.ro"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">Telefon</label>
                  <input
                    type="tel"
                    name="telefon"
                    value={form.telefon}
                    onChange={handleChange}
                    className="w-full border border-[#e8e0f0] bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-[#1A1A2E]"
                    placeholder="07xx xxx xxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">Ce te interesează?</label>
                  <select
                    name="serviciu"
                    value={form.serviciu}
                    onChange={handleChange}
                    className="w-full border border-[#e8e0f0] bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent text-[#1A1A2E]"
                  >
                    <option value="">Alege o opțiune</option>
                    <option>Masaj Terapeutic</option>
                    <option>Reiki</option>
                    <option>Cristaloterapie</option>
                    <option>Aromaterapie</option>
                    <option>Hipnoză & Regresie</option>
                    <option>Apifitoterapie</option>
                    <option>Medicină Ayurvedică</option>
                    <option>Consiliere Dezvoltare Personală</option>
                    <option>Program Intensiv 5 Piloni</option>
                    <option>Nu știu încă — vreau să discutăm</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">Mesaj</label>
                  <textarea
                    name="mesaj"
                    value={form.mesaj}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-[#e8e0f0] bg-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent resize-none text-[#1A1A2E]"
                    placeholder="Spune-mi în câteva cuvinte cu ce te pot ajuta..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#7C3AED] text-white py-4 rounded-full font-bold text-lg hover:bg-[#5b21b6] transition-colors"
                >
                  Vreau să programez o sesiune
                </button>
              </form>
            )}
          </div>

          {/* INFO */}
          <div className="space-y-8">
            <div>
              <div className="w-12 h-1 bg-[#7C3AED] mb-4 rounded-full" />
              <h2 className="text-2xl font-bold text-[#1A1A2E] mb-6">Informații</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#2D1B69] rounded-full flex items-center justify-center shrink-0">
                    <span>📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A2E]">Locație</p>
                    <p className="text-[#1A1A2E]/70">Râu Alb</p>
                    <p className="text-sm text-[#1A1A2E]/50">Sesiunile online sunt disponibile la cerere</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#2D1B69] rounded-full flex items-center justify-center shrink-0">
                    <span>🕐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A2E]">Program</p>
                    <p className="text-[#1A1A2E]/70">Luni — Sâmbătă</p>
                    <p className="text-[#1A1A2E]/50 text-sm">Orele se stabilesc de comun acord</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#2D1B69] rounded-full flex items-center justify-center shrink-0">
                    <span>⏱️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A2E]">Răspuns în</p>
                    <p className="text-[#1A1A2E]/70">Maxim 24 de ore</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#e8e0f0] pt-8">
              <h3 className="font-bold text-[#1A1A2E] mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white border border-[#e8e0f0] hover:border-[#7C3AED] transition-colors px-5 py-3 rounded-xl text-[#7C3AED] font-semibold text-sm">
                  Facebook
                </a>
                <a href="#" className="bg-white border border-[#e8e0f0] hover:border-[#7C3AED] transition-colors px-5 py-3 rounded-xl text-[#7C3AED] font-semibold text-sm">
                  Instagram
                </a>
              </div>
            </div>

            <div className="border-t border-[#e8e0f0] pt-8">
              <h3 className="font-bold text-[#1A1A2E] mb-3">Asociația EXCEDO</h3>
              <p className="text-[#1A1A2E]/60 text-sm mb-4">
                Simona este co-fondatoare EXCEDO — o comunitate dedicată dezvoltării și vindecării.
              </p>
              <a
                href="https://asociatiaexcedo.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C3AED] font-semibold hover:underline text-sm"
              >
                asociatiaexcedo.ro →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
