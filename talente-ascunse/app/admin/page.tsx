"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { artworks } from "@/lib/artworks";

type Technique = "pictura" | "acuarela" | "desen" | "sculptura";

const techniqueOptions: { value: Technique; ro: string; en: string }[] = [
  { value: "pictura", ro: "Pictură în acrilic", en: "Acrylic painting" },
  { value: "acuarela", ro: "Acuarelă", en: "Watercolor" },
  { value: "desen", ro: "Desen", en: "Drawing" },
  { value: "sculptura", ro: "Sculptură", en: "Sculpture" },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const EMPTY_FORM = {
  titleRo: "",
  titleEn: "",
  technique: "pictura" as Technique,
  artistFirstName: "",
  locality: "",
  county: "",
  contactEmail: "",
  descriptionRo: "",
  descriptionEn: "",
  storyRo: "",
  storyEn: "",
  imageFolder: "",
  imageFile: "",
  featured: false,
};

export default function AdminPage() {
  const router = useRouter();
  const [form, setForm] = useState(EMPTY_FORM);
  const [translating, setTranslating] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  const set = (field: keyof typeof EMPTY_FORM, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleTranslate = async () => {
    setTranslating(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          texts: {
            titleEn: form.titleRo,
            descriptionEn: form.descriptionRo,
            storyEn: form.storyRo,
          },
        }),
      });
      const data = await res.json();
      if (data.translations) {
        setForm((f) => ({
          ...f,
          titleEn: data.translations.titleEn || f.titleEn,
          descriptionEn: data.translations.descriptionEn || f.descriptionEn,
          storyEn: data.translations.storyEn || f.storyEn,
        }));
        setMessage({ type: "ok", text: "Traducere completată. Verifică și corectează dacă e nevoie." });
      }
    } catch {
      setMessage({ type: "err", text: "Eroare la traducere. Încearcă din nou." });
    }
    setTranslating(false);
  };

  const handleSave = async () => {
    if (!form.titleRo || !form.titleEn || !form.artistFirstName || !form.locality || !form.imageFile || !form.imageFolder) {
      setMessage({ type: "err", text: "Completează toate câmpurile obligatorii (marcate cu *)." });
      return;
    }

    setSaving(true);
    setMessage(null);

    const tech = techniqueOptions.find((t) => t.value === form.technique)!;
    const slug = slugify(form.titleRo);
    const imageFolder = form.imageFolder.trim();
    const imageFile = form.imageFile.trim();
    const imagePath = `/Lucrari/${encodeURIComponent(imageFolder)}/${imageFile}`;

    try {
      const res = await fetch("/api/admin/save-artwork", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          titleRo: form.titleRo,
          titleEn: form.titleEn,
          technique: form.technique,
          techniqueLabelRo: tech.ro,
          techniqueLabelEn: tech.en,
          artistFirstName: form.artistFirstName,
          locality: form.locality,
          county: form.county,
          contactEmail: form.contactEmail,
          descriptionRo: form.descriptionRo,
          descriptionEn: form.descriptionEn,
          storyRo: form.storyRo,
          storyEn: form.storyEn,
          image: imagePath,
          featured: form.featured,
        }),
      });

      if (res.ok) {
        setMessage({ type: "ok", text: `Lucrarea "${form.titleRo}" a fost adăugată. Fă commit + push pentru a o publica.` });
        setForm(EMPTY_FORM);
      } else {
        setMessage({ type: "err", text: "Eroare la salvare. Încearcă din nou." });
      }
    } catch {
      setMessage({ type: "err", text: "Eroare de rețea." });
    }
    setSaving(false);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const slug = form.titleRo ? slugify(form.titleRo) : "";
  const tech = techniqueOptions.find((t) => t.value === form.technique)!;
  const imagePath = form.imageFolder && form.imageFile
    ? `/Lucrari/${encodeURIComponent(form.imageFolder.trim())}/${form.imageFile.trim()}`
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image src="/logo.jpeg" alt="EXCEDO" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-sm">Panou Admin</span>
              <span className="text-gray-400 text-xs ml-2">Talente Ascunse</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">{artworks.length} lucrări în platformă</span>
            <button
              onClick={handleLogout}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors"
            >
              Ieși
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
        {/* FORMULAR */}
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold text-gray-900">Adaugă lucrare nouă</h2>

          {/* Artist */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Artist</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="text-xs text-gray-500 mb-1 block">Prenume *</label>
                <input
                  value={form.artistFirstName}
                  onChange={(e) => set("artistFirstName", e.target.value)}
                  placeholder="ex: Maria Valentina"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Localitate *</label>
                <input
                  value={form.locality}
                  onChange={(e) => set("locality", e.target.value)}
                  placeholder="ex: Râu Alb"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Județ</label>
                <input
                  value={form.county}
                  onChange={(e) => set("county", e.target.value)}
                  placeholder="ex: Dâmbovița"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
                />
              </div>
              <div className="col-span-2">
                <label className="text-xs text-gray-500 mb-1 block">Email contact</label>
                <input
                  value={form.contactEmail}
                  onChange={(e) => set("contactEmail", e.target.value)}
                  placeholder="ex: parinte@email.com"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
                />
              </div>
            </div>
          </section>

          {/* Lucrare */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Lucrare</h3>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Titlu (română) *</label>
              <input
                value={form.titleRo}
                onChange={(e) => set("titleRo", e.target.value)}
                placeholder="ex: Leopard"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
              />
              {slug && <p className="text-xs text-gray-400 mt-1">Slug: <code>{slug}</code></p>}
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Tehnică *</label>
              <select
                value={form.technique}
                onChange={(e) => set("technique", e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410] bg-white"
              >
                {techniqueOptions.map((t) => (
                  <option key={t.value} value={t.value}>{t.ro}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Descriere (română)</label>
              <textarea
                value={form.descriptionRo}
                onChange={(e) => set("descriptionRo", e.target.value)}
                rows={3}
                placeholder="Descrie lucrarea în română..."
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410] resize-none"
              />
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Povestea artistului (română)</label>
              <textarea
                value={form.storyRo}
                onChange={(e) => set("storyRo", e.target.value)}
                rows={4}
                placeholder="Povestea artistului în română..."
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410] resize-none"
              />
            </div>

            <button
              onClick={handleTranslate}
              disabled={translating || (!form.titleRo && !form.descriptionRo && !form.storyRo)}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#1a9410] text-[#1a9410] text-sm font-medium hover:bg-[#e0f5e0] transition-colors disabled:opacity-40"
            >
              {translating ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Se traduce...
                </>
              ) : (
                <> Traduce automat în engleză</>
              )}
            </button>

            {/* Câmpuri EN — editabile după traducere */}
            <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
              <p className="text-xs text-gray-400 font-medium">Engleză (verifică după traducere)</p>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Titlu (engleză) *</label>
                <input
                  value={form.titleEn}
                  onChange={(e) => set("titleEn", e.target.value)}
                  placeholder="Title in English"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Descriere (engleză)</label>
                <textarea
                  value={form.descriptionEn}
                  onChange={(e) => set("descriptionEn", e.target.value)}
                  rows={3}
                  placeholder="Description in English..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410] resize-none"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Povestea artistului (engleză)</label>
                <textarea
                  value={form.storyEn}
                  onChange={(e) => set("storyEn", e.target.value)}
                  rows={4}
                  placeholder="Artist's story in English..."
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410] resize-none"
                />
              </div>
            </div>
          </section>

          {/* Poză */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">Imagine</h3>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Folder artist în /public/Lucrari/ *</label>
              <input
                value={form.imageFolder}
                onChange={(e) => set("imageFolder", e.target.value)}
                placeholder="ex: Maria _ Rau Alb"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Numele fișierului (cu extensie) *</label>
              <input
                value={form.imageFile}
                onChange={(e) => set("imageFile", e.target.value)}
                placeholder="ex: leopard.jpeg"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={form.featured}
                onChange={(e) => set("featured", e.target.checked)}
                className="accent-[#1a9410]"
              />
              <label htmlFor="featured" className="text-sm text-gray-700">Lucrare în evidență (featured)</label>
            </div>
          </section>

          {/* Mesaj status */}
          {message && (
            <div className={`rounded-xl px-4 py-3 text-sm ${message.type === "ok" ? "bg-[#e0f5e0] text-[#1a9410]" : "bg-red-50 text-red-600"}`}>
              {message.text}
            </div>
          )}

          <button
            onClick={handleSave}
            disabled={saving}
            className="w-full py-3 rounded-xl bg-[#1a9410] hover:bg-[#157a0d] text-white font-semibold transition-colors disabled:opacity-50"
          >
            {saving ? "Se salvează..." : "Adaugă lucrarea"}
          </button>
        </div>

        {/* PREVIEW */}
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold text-gray-900">Previzualizare</h2>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
            {/* Card preview */}
            <div className="aspect-[3/4] bg-gray-100 relative">
              {imagePath ? (
                <Image
                  src={imagePath}
                  alt={form.titleRo || "Previzualizare"}
                  fill
                  className="object-cover"
                  onError={() => {}}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 flex-col gap-2">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs">Imaginea va apărea aici</span>
                </div>
              )}
              {form.featured && (
                <div className="absolute top-3 left-3 px-2 py-1 bg-[#1a9410] text-white text-xs font-medium rounded-full">
                  Featured
                </div>
              )}
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-bold text-gray-900">{form.titleRo || "Titlul lucrării"}</h3>
              {form.titleEn && <p className="text-xs text-gray-400 italic">{form.titleEn}</p>}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>{form.artistFirstName || "Prenume"}</span>
                {form.locality && <><span>·</span><span className="text-xs px-2 py-0.5 rounded-full bg-[#e0f5e0] text-[#1a9410]">{form.locality}</span></>}
              </div>
              <span className="text-xs text-gray-400">{tech.ro}</span>
              {form.descriptionRo && (
                <p className="text-xs text-gray-500 leading-relaxed mt-1 line-clamp-3">{form.descriptionRo}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
