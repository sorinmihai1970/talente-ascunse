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
      ro: "Arta vine din locuri neașteptate",
      en: "Art comes from unexpected places",
    },
    subtitle: {
      ro: "Descoperă lucrările originale ale tinerilor artiști din medii rurale din România, promovate de Asociația EXCEDO.",
      en: "Discover original artworks by young artists from rural Romania, promoted by EXCEDO Association.",
    },
    cta: { ro: "Vezi galeria", en: "View gallery" },
    contact: {
      ro: "Vrei să promovezi un tânăr artist? Scrie la",
      en: "Want to promote a young artist? Write to",
    },
  },
  stats: {
    artworks: { ro: "lucrări expuse", en: "artworks displayed" },
    localities: { ro: "localități", en: "localities" },
    counties: { ro: "județe", en: "counties" },
  },
  gallery: {
    title: { ro: "Galerie", en: "Gallery" },
    subtitle: {
      ro: "Lucrări originale ale tinerilor artiști care merită să fie văzuți",
      en: "Original artworks by young artists who deserve to be seen",
    },
    filters: {
      all: { ro: "Toate", en: "All" },
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
    story: { ro: "Povestea din spate", en: "The story behind" },
    support: {
      ro: "Vrei să îl/o susții pe",
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
      ro: "Platforma Talente Ascunse promovează lucrările originale ale tinerilor artiști din medii rurale din România, oferindu-le vizibilitate și recunoaștere meritate.",
      en: "The Hidden Talents platform promotes original artworks by young artists from rural Romania, giving them the visibility and recognition they deserve.",
    },
    contextTitle: { ro: "Context", en: "Context" },
    context: {
      ro: "Mulți tineri cu talent artistic real nu au acces la resurse, profesori sau platforme care să le pună în valoare munca. Asociația EXCEDO a inițiat acest proiect pentru a schimba această realitate.",
      en: "Many young people with real artistic talent lack access to resources, teachers, or platforms to showcase their work. EXCEDO Association launched this project to change that reality.",
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
        "Artistul trebuie să provină dintr-un mediu rural",
        "Acordul GDPR al părintelui/tutorelui (dacă artistul este minor)",
      ],
      en: [
        "The artwork must be 100% original, created by a young artist",
        "No copyrighted characters",
        "No reproductions of other artworks",
        "The artist must come from a rural area",
        "GDPR consent from parent/guardian (if the artist is a minor)",
      ],
    },
    templateTitle: { ro: "Șablon email", en: "Email template" },
    templateSubtitle: {
      ro: "Completează și trimite emailul următor la adresa de contact:",
      en: "Fill in and send the following email to the contact address:",
    },
    template: {
      ro: `Subiect: Înscriere lucrare – [Prenume Artist]

Bună ziua,

Doresc să înscriu următoarea lucrare în cadrul platformei Talente Ascunse:

Prenume artist:
Localitate:
Județ:
Tehnică (pictură / acuarelă / desen / sculptură):
Descriere lucrare:
Povestea din spate (opțional):

Atașez fotografia lucrării în format JPG sau PNG.

Confirm că lucrarea este 100% originală și că sunt de acord cu publicarea pe platforma Talente Ascunse.
Acord GDPR: Da / Nu (dacă artistul este minor, semnătura părintelui/tutorelui)

Mulțumesc!`,
      en: `Subject: Artwork submission – [Artist First Name]

Hello,

I would like to submit the following artwork to the Hidden Talents platform:

Artist's first name:
Locality:
County:
Technique (painting / watercolor / drawing / sculpture):
Artwork description:
The story behind (optional):

I'm attaching the artwork photo in JPG or PNG format.

I confirm that the artwork is 100% original and I agree to its publication on the Hidden Talents platform.
GDPR consent: Yes / No (if the artist is a minor, parent/guardian signature required)

Thank you!`,
    },
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
