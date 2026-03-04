// Latin: Basic Latin letters + Latin Extended
export const LATIN_RE = /[\u0041-\u005A\u0061-\u007A\u00C0-\u024F]/g;

// Hangul: Syllables + Jamo + Compatibility Jamo
export const HANGUL_RE = /[\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F]/g;

// Hiragana
export const HIRAGANA_RE = /[\u3040-\u309F]/g;

// Katakana (includes Katakana Phonetic Extensions)
export const KATAKANA_RE = /[\u30A0-\u30FF\u31F0-\u31FF]/g;

// CJK Unified Ideographs (shared between Chinese, Japanese, Korean)
export const CJK_RE = /[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/g;

// Noise: whitespace, punctuation, digits, symbols, emoji
export const NOISE_RE = /[\s\d\p{P}\p{S}]/gu;
