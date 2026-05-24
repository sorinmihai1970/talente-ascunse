"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { artworks } from "@/lib/artworks";

type PreviewData = {
  titleRo: string;
  titleEn: string;
  artistFirstName: string;
  locality: string;
  county: string;
  techniqueRo: string;
  descriptionRo: string;
  storyRo: string;
  contactEmail: string;
  imagePath: string | null;
};

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

function slugToTitle(slug: string): string {
  const withoutExt = slug.replace(/\.[^.]+$/, "");
  return withoutExt
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
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
  const [generatingTitle, setGeneratingTitle] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [artistFound, setArtistFound] = useState<boolean | null>(null);
  const [lookingUp, setLookingUp] = useState(false);
  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [allEmails, setAllEmails] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const set = (field: keyof typeof EMPTY_FORM, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleEmailChange = async (email: string) => {
    set("contactEmail", email);
    setArtistFound(null);

    // Autocomplete: încarcă toate email-urile o singură dată, filtrează local
    if (email.length >= 1) {
      let emails = allEmails;
      if (emails.length === 0) {
        try {
          const res = await fetch("/api/admin/artists");
          const data = await res.json();
          emails = data.emails ?? [];
          setAllEmails(emails);
        } catch {
          emails = [];
        }
      }
      const filtered = emails.filter((e: string) =>
        e.toLowerCase().startsWith(email.toLowerCase())
      );
      setEmailSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setEmailSuggestions([]);
      setShowSuggestions(false);
    }

    if (!email.includes("@")) return;

    setLookingUp(true);
    try {
      const res = await fetch(`/api/admin/artist?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (data.artist) {
        setForm((f) => ({
          ...f,
          contactEmail: email,
          artistFirstName: data.artist.firstName,
          locality: data.artist.locality,
          county: data.artist.county,
          storyRo: data.artist.storyRo,
          storyEn: data.artist.storyEn,
        }));
        setArtistFound(true);
      } else {
        setArtistFound(false);
      }
    } catch {
      setArtistFound(false);
    }
    setLookingUp(false);
  };

  const selectEmail = (email: string) => {
    setShowSuggestions(false);
    setEmailSuggestions([]);
    handleEmailChange(email);
  };

  const handleImageFileChange = async (value: string) => {
    const withoutExt = value.replace(/\.[^.]+$/, "").trim();
    set("imageFile", withoutExt + ".jpeg");

    if (!withoutExt) return;

    const preview = slugToTitle(withoutExt);
    set("titleRo", preview);

    if (withoutExt.length < 3) return;
    setGeneratingTitle(true);
    try {
      const res = await fetch("/api/admin/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          texts: { titleRo: withoutExt },
        }),
      });
      const data = await res.json();
      if (data.translations?.titleRo) {
        set("titleRo", data.translations.titleRo);
      }
    } catch {
      // păstrăm preview-ul generat local
    }
    setGeneratingTitle(false);
  };

  const handleTranslate = async () => {
    setTranslating(true);
    setMessage(null);
    const needsDescription = !form.descriptionRo.trim();
    const tech = techniqueOptions.find((t) => t.value === form.technique)!;
    try {
      const body: Record<string, unknown> = {
        texts: {
          ...(form.descriptionRo ? { descriptionRo: form.descriptionRo } : {}),
          ...(form.storyRo ? { storyRo: form.storyRo } : {}),
        },
        generateDescription: {
          titleRo: form.titleRo,
          techniqueRo: tech.ro,
        },
      };
      const res = await fetch("/api/admin/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.translations) {
        setForm((f) => ({
          ...f,
          titleEn: data.translations.titleEn || f.titleEn,
          descriptionRo: data.translations.descriptionRo || f.descriptionRo,
          descriptionEn: data.translations.descriptionEn || f.descriptionEn,
          storyEn: data.translations.storyEn || f.storyEn,
        }));
        setMessage({
          type: "ok",
          text: needsDescription
            ? "Descriere generată automat. Verifică și corectează dacă e nevoie."
            : "Verifică și corectează dacă e nevoie.",
        });
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

    // Dacă e artist nou, îl salvăm în artists.ts
    if (artistFound === false && form.contactEmail && form.artistFirstName) {
      await fetch("/api/admin/artist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contactEmail: form.contactEmail,
          firstName: form.artistFirstName,
          locality: form.locality,
          county: form.county,
          storyRo: form.storyRo,
          storyEn: form.storyEn,
        }),
      });
    }

    const tech = techniqueOptions.find((t) => t.value === form.technique)!;
    const slug = slugify(form.titleRo);
    const imagePath = `/Lucrari/${encodeURIComponent(form.imageFolder.trim())}/${form.imageFile.trim()}`;

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
        setArtistFound(null);
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
              <img src="/logo.jpeg" alt="EXCEDO" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-sm">Panou Admin</span>
              <span className="text-gray-400 text-xs ml-2">Talente Ascunse</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">{artworks.length} lucrări în platformă</span>
            <button onClick={handleLogout} className="text-xs text-gray-400 hover:text-red-500 transition-colors">
              Ieși
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 grid lg:grid-cols-2 gap-8">
        {/* FORMULAR */}
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold text-gray-900">Adaugă lucrare nouă</h2>

          {/* 1. IMAGINE — primul */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">1. Imagine</h3>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Folder artist în /public/Lucrari/ *</label>
              <input
                value={form.imageFolder}
                onChange={(e) => set("imageFolder", e.target.value)}
                placeholder="ex: Daria_Rau Alb"
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Numele fișierului (cu extensie) *
                {generatingTitle && <span className="ml-2 text-[#1a9410]">— se generează titlul...</span>}
              </label>
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#1a9410]">
                <input
                  value={form.imageFile.replace(/\.jpeg$/, "")}
                  onChange={(e) => handleImageFileChange(e.target.value)}
                  placeholder="ex: mere-si-gri"
                  className="flex-1 px-3 py-2 text-sm focus:outline-none"
                />
                <span className="px-3 py-2 bg-gray-50 text-gray-400 text-sm border-l border-gray-200">.jpeg</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Titlul se generează automat din numele fișierului</p>
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

          {/* 2. ARTIST */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">2. Artist</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="text-xs text-gray-500 mb-1 block">
                  Email contact *
                  {lookingUp && <span className="ml-2 text-[#1a9410]">— se caută artistul...</span>}
                  {artistFound === true && <span className="ml-2 text-[#1a9410] font-medium">— artist găsit ✓</span>}
                  {artistFound === false && <span className="ml-2 text-orange-500">— artist nou</span>}
                </label>
                <div className="relative">
                  <input
                    value={form.contactEmail}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                    onFocus={() => {
                      if (emailSuggestions.length > 0) setShowSuggestions(true);
                    }}
                    placeholder="ex: parinte@email.com"
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-[#1a9410]"
                    autoComplete="off"
                  />
                  {showSuggestions && (
                    <ul className="absolute z-20 left-0 right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                      {emailSuggestions.map((email) => (
                        <li
                          key={email}
                          onMouseDown={() => selectEmail(email)}
                          className="px-3 py-2 text-sm text-gray-700 hover:bg-[#e0f5e0] hover:text-[#1a9410] cursor-pointer transition-colors"
                        >
                          {email}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {artistFound === false && (
                  <p className="text-xs text-orange-500 mt-1">Artist nou — completează câmpurile de mai jos. Se vor salva automat.</p>
                )}
              </div>
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
            </div>
          </section>

          {/* 3. LUCRARE */}
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">
            <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">3. Lucrare</h3>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Titlu (română) *</label>
              <input
                value={form.titleRo}
                onChange={(e) => set("titleRo", e.target.value)}
                placeholder="Se completează automat din numele fișierului"
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
              disabled={translating || !form.titleRo}
              className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#1a9410] text-[#1a9410] text-sm font-medium hover:bg-[#e0f5e0] transition-colors disabled:opacity-40"
            >
              {translating ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  {!form.descriptionRo ? "Se generează descrierea..." : "Se traduce..."}
                </>
              ) : (
                <>{!form.descriptionRo ? "Generează descriere + traduce" : "Traducere și corectare"}</>
              )}
            </button>

            {/* Câmpuri EN */}
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
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900">Previzualizare</h2>
            <button
              onClick={() => setShowModal(true)}
              disabled={!form.titleRo}
              className="text-xs px-3 py-1.5 rounded-lg border border-[#1a9410] text-[#1a9410] hover:bg-[#e0f5e0] transition-colors disabled:opacity-30"
            >
              Vezi ca pe platformă
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
            {/* Imagine */}
            <div className="aspect-[3/4] bg-gray-100 relative overflow-hidden">
              {imagePath ? (
                <img
                  src={imagePath}
                  alt={form.titleRo || "Previzualizare"}
                  className="w-full h-full object-cover"
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
            {/* Card info */}
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
              {/* Povestea artistului în preview card */}
              {form.storyRo && (
                <div className="bg-[#e0f5e0] rounded-xl p-3 mt-2">
                  <p className="text-xs font-semibold text-[#1a9410] mb-1 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Povestea artistului
                  </p>
                  <p className="text-xs text-gray-600 italic leading-relaxed line-clamp-3">{form.storyRo}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL — previzualizare completă ca pe platformă */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto py-8 px-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl">
            {/* Header modal */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <span className="font-semibold text-gray-700 text-sm">Previzualizare — exact ca pe platformă</span>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-gray-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Conținut modal — replicăm pagina /lucrare/[slug] */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Imagine */}
                <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-gray-100">
                  {imagePath ? (
                    <img
                      src={imagePath}
                      alt={form.titleRo}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-300 text-sm">
                      Fără imagine
                    </div>
                  )}
                </div>

                {/* Detalii */}
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold text-gray-900">{form.titleRo || "Titlul lucrării"}</h1>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#e0f5e0] text-[#1a9410] text-sm font-medium">{tech.ro}</span>
                    {(form.locality || form.county) && (
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">
                        {[form.locality, form.county].filter(Boolean).join(", ")}
                      </span>
                    )}
                    {form.artistFirstName && (
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm">{form.artistFirstName}</span>
                    )}
                  </div>

                  {form.descriptionRo && (
                    <p className="text-gray-600 leading-relaxed text-sm">{form.descriptionRo}</p>
                  )}

                  {form.storyRo && (
                    <div className="bg-[#e0f5e0] rounded-2xl p-4">
                      <h2 className="font-semibold text-[#1a9410] mb-2 flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Povestea artistului
                      </h2>
                      <p className="text-gray-700 text-sm leading-relaxed italic">{form.storyRo}</p>
                    </div>
                  )}

                  <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                    <p className="text-gray-700 text-sm">
                      Vrei să susții pe <strong>{form.artistFirstName || "artist"}</strong>? Scrie la:
                    </p>
                    <span className="mt-1 inline-block text-[#1a9410] font-semibold text-sm">
                      {form.contactEmail || "excedo2022@gmail.com"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
