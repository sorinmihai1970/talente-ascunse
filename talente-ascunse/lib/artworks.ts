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
}

export const artworks: Artwork[] = [
  {
    slug: "campul-de-flori",
    title: "Câmpul de flori",
    titleEn: "Field of Flowers",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în ulei", en: "Oil painting" },
    artistFirstName: "Maria",
    locality: "Șimleu Silvaniei",
    county: "Sălaj",
    description: {
      ro: "O lucrare vibrantă ce surprinde frumusețea câmpurilor de primăvară din zona Sălajului.",
      en: "A vibrant work capturing the beauty of spring fields in the Sălaj area.",
    },
    story: {
      ro: "Maria a pictat această lucrare după o plimbare de dimineață prin câmpurile din spatele casei. 'Voiam să prind lumina aceea aurie care dispare în câteva minute', spune ea.",
      en: "Maria painted this work after a morning walk through the fields behind her house. 'I wanted to catch that golden light that disappears in just a few minutes,' she says.",
    },
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
    featured: true,
  },
  {
    slug: "portret-bunica",
    title: "Portretul bunicii",
    titleEn: "Grandmother's Portrait",
    technique: "acuarela",
    techniqueLabel: { ro: "Acuarelă", en: "Watercolor" },
    artistFirstName: "Andrei",
    locality: "Topoloveni",
    county: "Argeș",
    description: {
      ro: "Un portret delicat realizat în acuarelă, surprinzând chipul bunicii în lumina serii.",
      en: "A delicate watercolor portrait capturing grandmother's face in the evening light.",
    },
    story: {
      ro: "Andrei și-a dorit să imortalizeze chipul bunicii sale înainte ca memoria să se estompeze. 'E cel mai important om din viața mea', mărturisește el.",
      en: "Andrei wanted to immortalize his grandmother's face before memory fades. 'She's the most important person in my life,' he confesses.",
    },
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    featured: true,
  },
  {
    slug: "podul-vechi",
    title: "Podul vechi",
    titleEn: "The Old Bridge",
    technique: "desen",
    techniqueLabel: { ro: "Desen în cărbune", en: "Charcoal drawing" },
    artistFirstName: "Elena",
    locality: "Horezu",
    county: "Vâlcea",
    description: {
      ro: "Un desen în cărbune ce redă podul istoric din centrul localității, cu texturi bogate și contraste puternice.",
      en: "A charcoal drawing depicting the historic bridge in the town center, with rich textures and strong contrasts.",
    },
    image: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?w=800&q=80",
  },
  {
    slug: "pasarea-libertatii",
    title: "Pasărea libertății",
    titleEn: "Bird of Freedom",
    technique: "sculptura",
    techniqueLabel: { ro: "Sculptură în lemn", en: "Wood sculpture" },
    artistFirstName: "Ionuț",
    locality: "Câmpulung Moldovenesc",
    county: "Suceava",
    description: {
      ro: "O sculptură în lemn de tei reprezentând o pasăre în zbor, simbol al libertății și al aspirației.",
      en: "A lime wood sculpture representing a bird in flight, a symbol of freedom and aspiration.",
    },
    story: {
      ro: "Ionuț a sculptat această pasăre din lemnul unui tei bătrân doborât de furtună. 'Am vrut să-i dau o a doua viață', explică el.",
      en: "Ionuț sculpted this bird from an old linden tree felled by a storm. 'I wanted to give it a second life,' he explains.",
    },
    image: "https://images.unsplash.com/photo-1577083552792-a0d461cb1dd6?w=800&q=80",
    featured: true,
  },
  {
    slug: "apus-la-munte",
    title: "Apus la munte",
    titleEn: "Mountain Sunset",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Cristina",
    locality: "Rucăr",
    county: "Argeș",
    description: {
      ro: "Culori calde și intense surprind ultimele raze ale soarelui dincolo de crestele munților.",
      en: "Warm and intense colors capture the last rays of sun beyond the mountain ridges.",
    },
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    slug: "strada-copilăriei",
    title: "Strada copilăriei",
    titleEn: "Childhood Street",
    technique: "acuarela",
    techniqueLabel: { ro: "Acuarelă", en: "Watercolor" },
    artistFirstName: "Mihai",
    locality: "Drăgășani",
    county: "Vâlcea",
    description: {
      ro: "Stradă de sat cu case albe și grădini înflorite, redată cu delicatețe în tehnica acuarelei.",
      en: "A village street with white houses and blooming gardens, delicately rendered in watercolor.",
    },
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80",
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
