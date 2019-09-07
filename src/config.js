import verbsData from "./data/verbs.json";

const verbs = verbsData.verbs;

export const VERBS_ORDERED = [
  verbs.bleiben,
  verbs.essen,
  verbs.fallen,
  verbs.finden,
  verbs.geben,
  verbs.gehen,
  verbs.gewinnen,
  verbs.halten,
  verbs.heißen,
  verbs.helfen,
  verbs.kommen,
  verbs.lassen,
  verbs.laufen,
  verbs.liegen,
  verbs.nehmen,
  verbs.scheiden,
  verbs.sehen,
  verbs.sitzen,
  verbs.sprechen,
  verbs.stehen,
  verbs.tragen,
  verbs.tun,
  verbs.verlieren,
  verbs.ziehen
];

export function lookupVerb(verbIdx) {
  return VERBS_ORDERED[verbIdx];
}

export const WORDS_PER_POINT = 3;
export const REPETITIONS = 6;
export const INITIAL_HEARTS = 5;
