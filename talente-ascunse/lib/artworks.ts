export type Technique = "pictura" | "acuarela" | "desen" | "sculptura";

export interface Artwork {
  slug: string;
  title: string;
  titleEn: string;
  technique: Technique;
  techniqueLabel: { ro: string; en: string };
  artistFirstName: string;
  locality: string;
  county: string;
  description: { ro: string; en: string };
  story?: { ro: string; en: string };
  image: string;
  featured?: boolean;
  contactEmail?: string;
}

export const artworks: Artwork[] = [
  // --- Maria Valentina, Râu Alb, Dâmbovița ---
  {
    slug: "leopard",
    title: "Leopard",
    titleEn: "Leopard",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Maria Valentina",
    locality: "Râu Alb",
    county: "Dâmbovița",
    description: {
      ro: "Un leopard surprins cu forță și expresivitate, redat în culori calde pe fond întunecat. Intensitatea privirii și textura blănii trădează un talent remarcabil pentru redarea volumului și a luminii.",
      en: "A leopard captured with strength and expressiveness, rendered in warm colors against a dark background. The intensity of the gaze and the texture of the fur reveal a remarkable talent for depicting volume and light.",
    },
    story: {
      ro: "Maria Valentina este elevă a Școlii Gimnaziale Râu Alb de Jos, care nu a urmat nicio școală de artă și pictează singură, cu ce are la îndemână, de la 7 ani. Există locuri în care talentul crește în tăcere, fără aplauze, fără cursuri speciale — și uneori, cele mai valoroase talente sunt tocmai cele care au avut cel mai puțin șansa să fie văzute.",
      en: "Maria Valentina is a student at Râu Alb de Jos School who has never attended art school and has been painting on her own, with whatever she has at hand, since age 7. There are places where talent grows in silence, without applause, without special courses — and sometimes, the most valuable talents are precisely those that have had the least chance to be seen.",
    },
    image: "/Lucrari/Maria%20_%20Rau%20Alb/carousel_slide_1.jpg",
    featured: true,
    contactEmail: "naievalentin13@yahoo.com",
  },
  {
    slug: "iubirea-mamei",
    title: "Iubirea mamei",
    titleEn: "Mother's Love",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Maria Valentina",
    locality: "Râu Alb",
    county: "Dâmbovița",
    description: {
      ro: "O figură feminină îmbrățișând o inimă roșie — imaginea iubirii materne redată cu simplitate și căldură. Fundalul în tonuri de roz amplifică emoția întregii compoziții.",
      en: "A feminine figure embracing a red heart — the image of maternal love rendered with simplicity and warmth. The pink background amplifies the emotion of the entire composition.",
    },
    story: {
      ro: "Maria Valentina este elevă a Școlii Gimnaziale Râu Alb de Jos, care nu a urmat nicio școală de artă și pictează singură, cu ce are la îndemână, de la 7 ani. Există locuri în care talentul crește în tăcere, fără aplauze, fără cursuri speciale — și uneori, cele mai valoroase talente sunt tocmai cele care au avut cel mai puțin șansa să fie văzute.",
      en: "Maria Valentina is a student at Râu Alb de Jos School who has never attended art school and has been painting on her own, with whatever she has at hand, since age 7. There are places where talent grows in silence, without applause, without special courses — and sometimes, the most valuable talents are precisely those that have had the least chance to be seen.",
    },
    image: "/Lucrari/Maria%20_%20Rau%20Alb/carousel_slide_2.jpg",
    contactEmail: "naievalentin13@yahoo.com",
  },
  {
    slug: "stapana-firelor",
    title: "Stăpâna firelor",
    titleEn: "Master of Puppets",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Maria Valentina",
    locality: "Râu Alb",
    county: "Dâmbovița",
    description: {
      ro: "O compoziție teatrală cu un păpușar misterios care controlează trei marionete. Lucrarea explorează teme de putere și control cu un vocabular vizual surprinzător de matur.",
      en: "A theatrical composition featuring a mysterious puppeteer controlling three marionettes. The work explores themes of power and control with a surprisingly mature visual vocabulary.",
    },
    story: {
      ro: "Maria Valentina este elevă a Școlii Gimnaziale Râu Alb de Jos, care nu a urmat nicio școală de artă și pictează singură, cu ce are la îndemână, de la 7 ani. Există locuri în care talentul crește în tăcere, fără aplauze, fără cursuri speciale — și uneori, cele mai valoroase talente sunt tocmai cele care au avut cel mai puțin șansa să fie văzute.",
      en: "Maria Valentina is a student at Râu Alb de Jos School who has never attended art school and has been painting on her own, with whatever she has at hand, since age 7. There are places where talent grows in silence, without applause, without special courses — and sometimes, the most valuable talents are precisely those that have had the least chance to be seen.",
    },
    image: "/Lucrari/Maria%20_%20Rau%20Alb/carousel_slide_3.jpg",
    featured: true,
    contactEmail: "naievalentin13@yahoo.com",
  },
  {
    slug: "pisica-nazdravana",
    title: "Pisica năzdrăvană",
    titleEn: "The Mischievous Cat",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în ulei", en: "Oil painting" },
    artistFirstName: "Maria Valentina",
    locality: "Râu Alb",
    county: "Dâmbovița",
    description: {
      ro: "Portret de pisică pe pânză circulară, cu privire pătrunzătoare și mustăți expresive. Ochii galbeni, redați cu lumini fine, dau personajului o prezență inconfundabilă.",
      en: "Cat portrait on a circular canvas, with a piercing gaze and expressive whiskers. The yellow eyes, rendered with delicate highlights, give the subject an unmistakable presence.",
    },
    story: {
      ro: "Maria Valentina este elevă a Școlii Gimnaziale Râu Alb de Jos, care nu a urmat nicio școală de artă și pictează singură, cu ce are la îndemână, de la 7 ani. Există locuri în care talentul crește în tăcere, fără aplauze, fără cursuri speciale — și uneori, cele mai valoroase talente sunt tocmai cele care au avut cel mai puțin șansa să fie văzute.",
      en: "Maria Valentina is a student at Râu Alb de Jos School who has never attended art school and has been painting on her own, with whatever she has at hand, since age 7. There are places where talent grows in silence, without applause, without special courses — and sometimes, the most valuable talents are precisely those that have had the least chance to be seen.",
    },
    image: "/Lucrari/Maria%20_%20Rau%20Alb/carousel_slide_4.jpg",
    contactEmail: "naievalentin13@yahoo.com",
  },
  {
    slug: "compozitie-monocromatica-dinamica",
    title: "Compoziție monocromatică dinamică",
    titleEn: "Dynamic Monochromatic Composition",
    technique: "acuarela",
    techniqueLabel: { ro: "Acuarelă și tuș", en: "Watercolor and ink" },
    artistFirstName: "Maria Valentina",
    locality: "Râu Alb",
    county: "Dâmbovița",
    description: {
      ro: "Trei gimnaste redate în mișcare, într-o paletă monocromatică de mov și violet. Compoziția transmite energie și eleganță, cu o stăpânire remarcabilă a spațiului și proporțiilor.",
      en: "Three gymnasts depicted in motion, in a monochromatic palette of mauve and violet. The composition conveys energy and elegance, with a remarkable command of space and proportions.",
    },
    story: {
      ro: "Maria Valentina este elevă a Școlii Gimnaziale Râu Alb de Jos, care nu a urmat nicio școală de artă și pictează singură, cu ce are la îndemână, de la 7 ani. Există locuri în care talentul crește în tăcere, fără aplauze, fără cursuri speciale — și uneori, cele mai valoroase talente sunt tocmai cele care au avut cel mai puțin șansa să fie văzute.",
      en: "Maria Valentina is a student at Râu Alb de Jos School who has never attended art school and has been painting on her own, with whatever she has at hand, since age 7. There are places where talent grows in silence, without applause, without special courses — and sometimes, the most valuable talents are precisely those that have had the least chance to be seen.",
    },
    image: "/Lucrari/Maria%20_%20Rau%20Alb/carousel_slide_5.jpg",
    contactEmail: "naievalentin13@yahoo.com",
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}

export const stats = {
  artworks: artworks.length,
  localities: new Set(artworks.map((a) => a.locality)).size,
  counties: new Set(artworks.map((a) => a.county)).size,
};
