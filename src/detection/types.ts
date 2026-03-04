export type LangCode = 'en' | 'ja' | 'ko' | 'zh' | 'unknown';

export interface UnicodeProfile {
  total: number;
  latin: number;
  hangul: number;
  hiragana: number;
  katakana: number;
  cjk: number;
}

export interface DetectionResult {
  lang: LangCode;
  confidence: number;
  profile: UnicodeProfile;
}
