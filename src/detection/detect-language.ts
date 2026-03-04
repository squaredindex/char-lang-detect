import type { DetectionResult, LangCode, UnicodeProfile } from './types.js';
import {
  CJK_RE,
  HANGUL_RE,
  HIRAGANA_RE,
  KATAKANA_RE,
  LATIN_RE,
  NOISE_RE,
} from './unicode-ranges.js';

function countMatches(text: string, re: RegExp): number {
  re.lastIndex = 0;
  return (text.match(re) ?? []).length;
}

export function getUnicodeProfile(text: string): UnicodeProfile {
  const cleaned = text.replace(NOISE_RE, '');
  return {
    total: cleaned.length,
    latin: countMatches(cleaned, LATIN_RE),
    hangul: countMatches(cleaned, HANGUL_RE),
    hiragana: countMatches(cleaned, HIRAGANA_RE),
    katakana: countMatches(cleaned, KATAKANA_RE),
    cjk: countMatches(cleaned, CJK_RE),
  };
}

export function detectLanguage(text: string): DetectionResult {
  const profile = getUnicodeProfile(text);
  const { total, latin, hangul, hiragana, katakana, cjk } = profile;

  const unknown: DetectionResult = { lang: 'unknown', confidence: 0, profile };

  if (total === 0) return unknown;

  const threshold = total < 10 ? 0.5 : 0.3;

  // Priority 1: Hangul → Korean
  const hangulRatio = hangul / total;
  if (hangulRatio >= threshold) {
    return { lang: 'ko', confidence: hangulRatio, profile };
  }

  // Priority 2: Kana → Japanese (hiragana + katakana, may include CJK kanji)
  const kana = hiragana + katakana;
  const kanaRatio = kana / total;
  const japaneseRatio = (kana + cjk) / total;
  if (kanaRatio >= threshold * 0.5 && japaneseRatio >= threshold) {
    return { lang: 'ja', confidence: japaneseRatio, profile };
  }

  // Priority 3: CJK only (no kana, no hangul) → Chinese
  const cjkRatio = cjk / total;
  if (cjkRatio >= threshold && kana === 0 && hangul === 0) {
    return { lang: 'zh', confidence: cjkRatio, profile };
  }

  // Priority 4: Latin → English
  const latinRatio = latin / total;
  if (latinRatio >= threshold) {
    return { lang: 'en', confidence: latinRatio, profile };
  }

  // Fallback: pick highest ratio
  const scores: [LangCode, number][] = [
    ['ko', hangulRatio],
    ['ja', japaneseRatio],
    ['zh', cjkRatio],
    ['en', latinRatio],
  ];
  scores.sort((a, b) => b[1] - a[1]);
  const [bestLang, bestScore] = scores[0];
  if (bestScore > 0) {
    return { lang: bestLang, confidence: bestScore, profile };
  }

  return unknown;
}
