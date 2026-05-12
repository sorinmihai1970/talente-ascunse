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
    contactEmail: "naievalentin13@yahoo.com",
    firstName: "Maria Valentina",
    locality: "Râu Alb",
    county: "Dâmbovița",
    storyRo: "Maria Valentina este elevă a Școlii Gimnaziale Râu Alb de Jos, care nu a urmat nicio școală de artă și pictează singură, cu ce are la îndemână, de la 7 ani. Există locuri în care talentul crește în tăcere, fără aplauze, fără cursuri speciale — și uneori, cele mai valoroase talente sunt tocmai cele care au avut cel mai puțin șansa să fie văzute.",
    storyEn: "Maria Valentina is a student at Râu Alb de Jos School who has never attended art school and has been painting on her own, with whatever she has at hand, since age 7. There are places where talent grows in silence, without applause, without special courses — and sometimes, the most valuable talents are precisely those that have had the least chance to be seen.",
  },
];

export function getArtistByEmail(email: string): Artist | undefined {
  return artists.find((a) => a.contactEmail.toLowerCase() === email.toLowerCase());
}
