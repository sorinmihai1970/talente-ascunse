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

const story = {
  ro: "Maria Valentina din Râu Alb, Dâmbovița, nu a urmat cursuri la o școală de artă. Nu a avut un mentor. A avut doar o foaie albă, o pensulă și ceva ce nu se poate învăța — har.\nDe la 7 ani desenează și pictează. Azi, lucrările ei opresc privirea.",
  en: "Maria Valentina from Râu Alb, Dâmbovița, never attended art school. She had no mentor. She had only a blank sheet, a brush, and something that cannot be taught — gift.\nSince age 7, she has been drawing and painting. Today, her works stop you in your tracks.",
};

const techniqueLabel = { ro: "Pictură în acrilic", en: "Acrylic painting" };

const base = {
  technique: "pictura" as Technique,
  techniqueLabel,
  artistFirstName: "Maria Valentina",
  locality: "Râu Alb",
  county: "Dâmbovița",
  contactEmail: "naievalentin13@yahoo.com",
  story,
};

const img = (name: string) =>
  `/Lucrari/Maria%20_%20Rau%20Alb/${name}`;

export const artworks: Artwork[] = [
  {
    slug: "muzica-si-blana",
    title: "Muzică și blană",
    titleEn: "Music and Fur",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: {
      ro: "O compoziție sensibilă care unește două lumi — muzica și blana moale a unui animal. Culorile calde și textura pensulei creează o atmosferă de căldură și intimitate.",
      en: "A sensitive composition uniting two worlds — music and the soft fur of an animal. Warm colors and brushwork texture create an atmosphere of warmth and intimacy.",
    },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/muzica-si-blana.jpeg",
    featured: false,
  },
  {
    slug: "chitara",
    title: "Chitară",
    titleEn: "Guitar",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: {
      ro: "O chitară redată cu sensibilitate și culoare — instrumentul muzical ca simbol al creativității și al pasiunii pentru frumos. Textura pensulei amplifică vibrația corzilor.",
      en: "A guitar rendered with sensitivity and color — the musical instrument as a symbol of creativity and passion for beauty. The brushwork texture amplifies the vibration of the strings.",
    },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/chitara.jpeg",
    featured: false,
  },
  {
    slug: "curgere",
    title: "Curgere",
    titleEn: "Flow",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: {
      ro: "O explorare abstractă a mișcării și fluidității — culorile curg liber pe suprafață, creând un dans vizual între formă și haos controlat. O lucrare despre starea de flux.",
      en: "An abstract exploration of movement and fluidity — colors flow freely across the surface, creating a visual dance between form and controlled chaos. A work about the state of flow.",
    },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/curgere.jpeg",
    featured: false,
  },
  {
    slug: "fecioara-maria",
    title: "Fecioara Maria",
    titleEn: "Virgin Mary",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: {
      ro: "Un portret sacru redat cu pietate și sensibilitate — Fecioara Maria privită prin ochii unui tânăr artist. Lucrarea transmite liniște, lumină interioară și devotament.",
      en: "A sacred portrait rendered with piety and sensitivity — the Virgin Mary seen through the eyes of a young artist. The work conveys peace, inner light and devotion.",
    },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/fecioara-maria.jpeg",
    featured: false,
  },
  {
    slug: "gemenii",
    title: "Gemenii",
    titleEn: "The Twins",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: {
      ro: "Două figuri oglindite — o explorare a dualității și a legăturii profunde dintre ființe. Compoziția simetrică și paleta cromatică creează un echilibru vizual fascinant.",
      en: "Two mirrored figures — an exploration of duality and the deep bond between beings. The symmetrical composition and color palette create a fascinating visual balance.",
    },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/gemenii.jpeg",
    featured: false,
  },
  {
    slug: "lumea-meduzelor",
    title: "Lumea meduzelor",
    titleEn: "The World of Jellyfish",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: {
      ro: "O lume subacvatică fascinantă populată de meduze — ființe translucide care plutesc în întunericul adâncurilor. Culorile luminoase pe fond întunecat creează un contrast magic.",
      en: "A fascinating underwater world populated by jellyfish — translucent creatures floating in the darkness of the deep. Luminous colors against a dark background create a magical contrast.",
    },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/lumea-meduzelor.jpeg",
    featured: true,
  },
  {
    slug: "pasi-spre-nicaieri",
    title: "Pași spre nicăieri",
    titleEn: "Steps to Nowhere",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: {
      ro: "O meditație vizuală despre incertitudine și căutare — pași care duc în necunoscut. Compoziția și paleta transmit acea stare suspendată între a merge mai departe și a te opri.",
      en: "A visual meditation on uncertainty and searching — steps leading into the unknown. The composition and palette convey that suspended state between moving forward and stopping.",
    },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/pasi-spre-nicaieri.jpeg",
    featured: false,
  },
  {
    slug: "prabusirea",
    title: "Prăbușirea",
    titleEn: "The Fall",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: {
      ro: "O lucrare cu încărcătură emoțională puternică — prăbușirea ca moment de transformare, nu de sfârșit. Dinamica compoziției și intensitatea culorilor transmit energie brută și autenticitate.",
      en: "A work with strong emotional charge — the fall as a moment of transformation, not an ending. The dynamic composition and intensity of colors convey raw energy and authenticity.",
    },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/prabusirea.jpeg",
    featured: false,
  },
  {
    slug: "mere-si-gri",
    title: "Mere și gri",
    titleEn: "Apples and Gray",
    technique: "pictura",
    techniqueLabel: { ro: "Pictură în acrilic", en: "Acrylic painting" },
    artistFirstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    contactEmail: "dumitru.daria2004@gmail.com",
    description: { ro: "O explorare subtilă a tensiunii dintre căldura fructelor și frigiditatea nuanțelor gri, această lucrare în acrilic captează esența contemplativă a naturii moarte moderne. Merele, cu prezența lor vibrantă, dansează ușor pe un fundal neutru, creând un dialog pictorescesc între culoare și abstracțiune. Tehnica acrilicului amplifică intensitatea tonurilor, transformând o scenă simplă într-o meditație asupra contrastelor și armoniei.", en: "A subtle exploration of the tension between the warmth of fruits and the coldness of gray nuances, this acrylic work captures the contemplative essence of modern still life. Apples, with their vibrant presence, dance gently on a neutral background, creating a picturesque dialogue between color and abstraction. The acrylic technique amplifies the intensity of tones, transforming a simple scene into a meditation on contrasts and harmony." },
    story: { ro: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.", en: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures." },
    image: "/Lucrari/Daria_Rau%20Alb/Picturi/mere-si-gri.jpeg",
    featured: true,
  },
  {
    ...base,
    slug: "leopard",
    title: "Leopard",
    titleEn: "Leopard",
    image: img("leopard.jpeg"),
    featured: true,
    description: {
      ro: "Un leopard surprins cu forță și expresivitate, redat în culori calde pe fond întunecat. Intensitatea privirii și textura blănii trădează un talent remarcabil pentru redarea volumului și a luminii.",
      en: "A leopard captured with strength and expressiveness, rendered in warm colors against a dark background. The intensity of the gaze and the texture of the fur reveal a remarkable talent for depicting volume and light.",
    },
  },
  {
    ...base,
    slug: "iubirea-mamei",
    title: "Iubirea mamei",
    titleEn: "Mother's Love",
    image: img("iubirea-mamei.jpeg"),
    description: {
      ro: "O figură feminină îmbrățișând o inimă roșie — imaginea iubirii materne redată cu simplitate și căldură. Fundalul în tonuri de roz amplifică emoția întregii compoziții.",
      en: "A feminine figure embracing a red heart — the image of maternal love rendered with simplicity and warmth. The pink background amplifies the emotion of the entire composition.",
    },
  },
  {
    ...base,
    slug: "stapana-firelor",
    title: "Stăpâna firelor",
    titleEn: "Master of Puppets",
    image: img("stapana-firelor.jpeg"),
    featured: true,
    description: {
      ro: "O compoziție teatrală cu un păpușar misterios care controlează trei marionete. Lucrarea explorează teme de putere și control cu un vocabular vizual surprinzător de matur.",
      en: "A theatrical composition featuring a mysterious puppeteer controlling three marionettes. The work explores themes of power and control with a surprisingly mature visual vocabulary.",
    },
  },
  {
    ...base,
    slug: "pisica-nazdravana",
    title: "Pisica năzdrăvană",
    titleEn: "The Mischievous Cat",
    image: img("pisica-nazdravana.jpeg"),
    description: {
      ro: "Portret de pisică pe pânză circulară, cu privire pătrunzătoare și mustăți expresive. Ochii galbeni, redați cu lumini fine, dau personajului o prezență inconfundabilă.",
      en: "Cat portrait on a circular canvas, with a piercing gaze and expressive whiskers. The yellow eyes, rendered with delicate highlights, give the subject an unmistakable presence.",
    },
  },
  {
    ...base,
    slug: "fata-floarea-soarelui",
    title: "Fața floarea soarelui",
    titleEn: "Sunflower Face",
    image: img("fata-floarea-soarelui.jpeg"),
    description: {
      ro: "Un chip tânăr contopindu-se cu floarea soarelui — simbol al luminii, bucuriei și al înfloririi interioare. Compoziția radiază energie solară și prospețime.",
      en: "A young face merging with a sunflower — a symbol of light, joy and inner blossoming. The composition radiates solar energy and freshness.",
    },
  },
  {
    ...base,
    slug: "natura-statica-neinteleasa",
    title: "Natură statică neînțeleasă",
    titleEn: "Misunderstood Still Life",
    image: img("natura-statica-neinteleasa.jpeg"),
    description: {
      ro: "O natură statică neconvențională care sfidează așteptările — obiecte familiare puse în relații surprinzătoare. Titlul însuși devine o invitație la interpretare.",
      en: "An unconventional still life that defies expectations — familiar objects placed in surprising relationships. The title itself becomes an invitation to interpretation.",
    },
  },
  {
    ...base,
    slug: "padure-adormita-in-gouache",
    title: "Pădure adormită în gouache",
    titleEn: "Sleeping Forest in Gouache",
    image: img("padure-adormita- in-gouche.jpeg"),
    description: {
      ro: "O pădure cufundată în somnul nopții, redată în tehnica gouache cu tonuri catifelate de albastru și verde. Lumina lunii filtrată printre copaci creează o atmosferă de basm.",
      en: "A forest plunged into the sleep of night, rendered in gouache with velvety tones of blue and green. Moonlight filtered through the trees creates a fairy-tale atmosphere.",
    },
  },
  {
    ...base,
    slug: "regina-maria",
    title: "Regina Maria",
    titleEn: "Queen Maria",
    image: img("regina-maria.jpeg"),
    description: {
      ro: "Un omagiu adus Reginei Maria a României — chip majestuos, culori regale și o compoziție care transmite forță și demnitate. O interpretare personală a uneia dintre cele mai iubite figuri istorice românești.",
      en: "A tribute to Queen Maria of Romania — a majestic face, royal colors and a composition that conveys strength and dignity. A personal interpretation of one of Romania's most beloved historical figures.",
    },
  },
  {
    ...base,
    slug: "vaza-cu-flori",
    title: "Vază cu flori",
    titleEn: "Flower Vase",
    image: img("vaza-cu-flori.jpeg"),
    description: {
      ro: "O natură statică clasică reinterpretată cu prospețime și culoare — flori vii într-o vază simplă, redând frumusețea lucrurilor de zi cu zi.",
      en: "A classic still life reinterpreted with freshness and color — vivid flowers in a simple vase, capturing the beauty of everyday things.",
    },
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
