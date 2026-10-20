import type { PhotoKey } from "./photos";

/** Two photographs for each page opening: the pair echoes the two figures in the monogram. */
type Pair = [PhotoKey, PhotoKey];

const exact: Record<string, Pair> = {
  "/": ["terraceStreet", "familyCourt"],
  "/about": ["graysInn", "ringsWheat"],
  "/how-we-work": ["innerTemple", "gavelKeys"],
  "/qualifications-accreditations": ["lincolnsInnFields", "graysInn"],
  "/fees": ["bankOfEngland", "saleBoard"],
  "/contact": ["familyCourtEntrance", "delanceyStreet"],
  "/services": ["familyCourt", "bankOfEngland"],
  "/case-types": ["semiDetached", "ringsRoses"],
  "/practice-areas": ["innerTemple", "farmhouse"],
  "/case-studies": ["villageCottages", "gavelKeys"],
  "/insights": ["lincolnsInnFields", "ringsWheat"],
  "/blog": ["delanceyStreet", "ringsRoses"],
  "/privacy": ["graysInn", "terraceStreet"],
  "/terms": ["innerTemple", "terraceStreet"],
  "/cookies": ["graysInn", "semiDetached"],
  "/image-credits": ["thatchedCottage", "suburbanStreet"],
};

const prefix: [string, Pair][] = [
  ["/services/", ["bankOfEngland", "familyCourtEntrance"]],
  ["/case-types/", ["suburbanStreet", "saleBoard"]],
  ["/practice-areas/", ["farmhouse", "thatchedCottage"]],
  ["/insights/", ["lincolnsInnFields", "terraceStreet"]],
  ["/blog/", ["delanceyStreet", "ringsWheat"]],
];

export function photosFor(path: string): Pair {
  if (exact[path]) return exact[path];
  const hit = prefix.find(([p]) => path.startsWith(p));
  return hit ? hit[1] : ["terraceStreet", "familyCourt"];
}
