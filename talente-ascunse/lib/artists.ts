export interface Artist {
  contactEmail: string;
  firstName: string;
  locality: string;
  county: string;
  storyRo: string;
  storyEn: string;
}

export const artists: Artist[] = [
  {
    contactEmail: "dumitru.daria2004@gmail.com",
    firstName: "Daria Teodora",
    locality: "Râu Alb",
    county: "Dambovita",
    storyRo: "Daria Teodora din Râu Alb a început să picteze din joacă și a ajuns să creeze lumi întregi pe pânză și hârtie.\nDe doi ani, pensula nu mai e singurul ei instrument. Aceleași mâini care au pictat lumi întregi modelează acum ceara albinelor — lumânări, figurine, aranjamente care îți opresc privirea. Aceeași bucurie de a crea, aceeași răbdare, alte forme, alte texturi.",
    storyEn: "Daria Teodora from Râu Alb started painting for fun and ended up creating entire worlds on canvas and paper.\nFor two years, the brush has no longer been her only instrument. The same hands that painted entire worlds now shape beeswax — candles, figurines, arrangements that stop you in your tracks. The same joy of creating, the same patience, different forms, different textures.",
  },
  {
    contactEmail: "naievalentin13@yahoo.com",
    firstName: "Maria Valentina",
    locality: "Râu Alb",
    county: "Dâmbovița",
    storyRo: "Maria Valentina din Râu Alb, Dâmbovița, nu a urmat cursuri la o școală de artă. Nu a avut un mentor. A avut doar o foaie albă, o pensulă și ceva ce nu se poate învăța — har.\nDe la 7 ani desenează și pictează. Azi, lucrările ei opresc privirea.",
    storyEn: "Maria Valentina from Râu Alb, Dâmbovița, never attended art school. She had no mentor. She had only a blank sheet, a brush, and something that cannot be taught — gift.\nSince age 7, she has been drawing and painting. Today, her works stop you in your tracks.",
  },
];

export function getArtistByEmail(email: string): Artist | undefined {
  return artists.find((a) => a.contactEmail.toLowerCase() === email.toLowerCase());
}
