export type Lang = "ro" | "en";

export const t = {
  nav: {
    gallery: { ro: "Galerie", en: "Gallery" },
    about: { ro: "Despre proiect", en: "About" },
    submit: { ro: "Înscrie o lucrare", en: "Submit artwork" },
    contact: { ro: "Contact", en: "Contact" },
    tagline: { ro: "Talente Ascunse", en: "Hidden Talents" },
  },
  hero: {
    title: {
      ro: "Arta nu are adresă",
      en: "Art has no address",
    },
    subtitle: {
      ro: "Talentul se naște într-un suflet curajos, care merită să fie descoperit și să aducă bucurie în viețile celorlalți.",
      en: "Talent is born in a courageous soul, worthy of being discovered and bringing joy to the lives of others.",
    },
    cta: { ro: "Descoperă galeria", en: "Discover the gallery" },
    nudge: {
      ro: "Cunoști un tânăr cu talent artistic? Ajută-ne să îl aducem în lumină.",
      en: "Do you know a young artistic talent? Help us bring them to light.",
    },
    nudgeCta: { ro: "Înscrie o lucrare →", en: "Submit an artwork →" },
  },
  stats: {
    artworks: { ro: "lucrări expuse", en: "artworks displayed" },
    localities: { ro: "localități", en: "localities" },
    counties: { ro: "județe", en: "counties" },
  },
  gallery: {
    title: { ro: "Galerie", en: "Gallery" },
    subtitle: {
      ro: "Lucrări originale ale tinerilor artiști",
      en: "Original artworks by young artists",
    },
    filters: {
      all: { ro: "Toate", en: "All" },
      paintingDrawing: { ro: "Pictură & Desen", en: "Painting & Drawing" },
      painting: { ro: "Pictură", en: "Painting" },
      watercolor: { ro: "Acuarelă", en: "Watercolor" },
      drawing: { ro: "Desen", en: "Drawing" },
      sculpture: { ro: "Sculptură & Arte 3D", en: "Sculpture & 3D Arts" },
    },
  },
  artwork: {
    technique: { ro: "Tehnică", en: "Technique" },
    locality: { ro: "Localitate", en: "Locality" },
    artist: { ro: "Artist", en: "Artist" },
    story: { ro: "Povestea artistului", en: "The artist's story" },
    support: {
      ro: "Vrei să susții pe",
      en: "Want to support",
    },
    supportSuffix: {
      ro: "? Scrie la:",
      en: "? Write to:",
    },
    backToGallery: { ro: "← Înapoi la galerie", en: "← Back to gallery" },
  },
  about: {
    title: { ro: "Despre proiect", en: "About the project" },
    missionTitle: { ro: "Misiunea noastră", en: "Our mission" },
    mission: {
      ro: "Platforma Talente Ascunse aduce în lumină lucrările originale ale tinerilor artiști, oferindu-le vizibilitatea și recunoașterea pe care le merită.",
      en: "The Hidden Talents platform brings to light original artworks by young artists, giving them the visibility and recognition they deserve.",
    },
    contextTitle: { ro: "Context", en: "Context" },
    context: {
      ro: "Mulți tineri cu talent artistic real nu au acces la resurse sau platforme care să le recunoască valoarea. Am inițiat acest proiect pentru a schimba această realitate.",
      en: "Many young people with real artistic talent lack access to resources or platforms that recognize their value. We launched this project to change that reality.",
    },
    teamTitle: { ro: "Echipa", en: "Team" },
  },
  submit: {
    title: { ro: "Înscrie o lucrare", en: "Submit an artwork" },
    subtitle: {
      ro: "Toate lucrările trec prin aprobare manuală înainte de publicare.",
      en: "All artworks go through manual approval before being published.",
    },
    eligibilityTitle: { ro: "Criterii de eligibilitate", en: "Eligibility criteria" },
    criteria: {
      ro: [
        "Lucrarea trebuie să fie 100% originală, creată de un tânăr artist",
        "Fără personaje protejate de copyright",
        "Fără reproduceri după alte opere de artă",
        "Acordul GDPR al părintelui/tutorelui (dacă artistul este minor)",
      ],
      en: [
        "The artwork must be 100% original, created by a young artist",
        "No copyrighted characters",
        "No reproductions of other artworks",
        "GDPR consent from parent/guardian (if the artist is a minor)",
      ],
    },
    howToTitle: { ro: "Cum înscrii lucrările", en: "How to submit artworks" },
    howToSteps: {
      ro: [
        "Descarcă și completează Formularul de înscriere",
        "Descarcă, completează și semnează Acordul GDPR",
        "Atașează formularul, acordul GDPR semnat și fotografiile lucrărilor (JPG sau PNG) și trimite prin email la: excedo2022@gmail.com",
        "Veți primi un mesaj prin email cu lucrările care vor fi postate și cu textul pentru Povestea artistului, pentru confirmare.",
        "Pentru orice nelămuriri și informații suplimentare ne puteți contacta prin email sau telefon.",
      ],
      en: [
        "Download and fill in the Submission Form",
        "Download, fill in and sign the GDPR Agreement",
        "Attach the form, signed GDPR agreement and artwork photos (JPG or PNG) and send by email to: excedo2022@gmail.com",
        "You will receive an email with the artworks to be posted and the text for The Artist's Story, for confirmation.",
        "For any questions and additional information, you can contact us by email or phone.",
      ],
    },
    formLabel: { ro: "Formular de înscriere", en: "Submission Form" },
    gdprLabel: { ro: "Acord GDPR", en: "GDPR Agreement" },
    sendTo: { ro: "Trimite emailul la:", en: "Send your email to:" },
    note: {
      ro: "Lucrarea va fi publicată doar după aprobarea manuală de către echipa EXCEDO.",
      en: "The artwork will be published only after manual approval by the EXCEDO team.",
    },
  },
  footer: {
    rights: { ro: "Toate drepturile rezervate", en: "All rights reserved" },
    privacy: { ro: "Politică de Confidențialitate", en: "Privacy Policy" },
    gdpr: { ro: "GDPR", en: "GDPR" },
  },
  privacy: {
    title: { ro: "Politică de Confidențialitate", en: "Privacy Policy" },
  },
};

export function tr(key: { ro: string; en: string }, lang: Lang): string {
  return key[lang];
}

export function trArr(key: { ro: string[]; en: string[] }, lang: Lang): string[] {
  return key[lang];
}
