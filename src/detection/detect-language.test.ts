import { describe, expect, it } from 'vitest';
import { detectLanguage, getUnicodeProfile } from './detect-language.js';

describe('detectLanguage', () => {
  describe('pure language texts', () => {
    it('detects English', () => {
      const result = detectLanguage('The quick brown fox jumps over the lazy dog');
      expect(result.lang).toBe('en');
      expect(result.confidence).toBeGreaterThan(0.9);
    });

    it('detects Japanese (with kana + kanji)', () => {
      const result = detectLanguage('東京の桜はとても美しいです');
      expect(result.lang).toBe('ja');
      expect(result.confidence).toBeGreaterThan(0.5);
    });

    it('detects Japanese (hiragana only)', () => {
      const result = detectLanguage('おはようございます');
      expect(result.lang).toBe('ja');
    });

    it('detects Japanese (katakana only)', () => {
      const result = detectLanguage('カタカナテスト');
      expect(result.lang).toBe('ja');
    });

    it('detects Korean', () => {
      const result = detectLanguage('안녕하세요 세계 여러분');
      expect(result.lang).toBe('ko');
      expect(result.confidence).toBeGreaterThan(0.8);
    });

    it('detects Chinese', () => {
      const result = detectLanguage('中华人民共和国是世界上人口最多的国家');
      expect(result.lang).toBe('zh');
      expect(result.confidence).toBeGreaterThan(0.9);
    });
  });

  describe('mixed content', () => {
    it('detects Japanese when mixed with kanji and kana', () => {
      const result = detectLanguage('日本語のテスト test');
      expect(result.lang).toBe('ja');
    });

    it('detects Korean with some English', () => {
      const result = detectLanguage('한국어 Korean text 테스트');
      expect(result.lang).toBe('ko');
    });

    it('detects Chinese with CJK only (no kana)', () => {
      const result = detectLanguage('这是中文测试');
      expect(result.lang).toBe('zh');
    });
  });

  describe('edge cases', () => {
    it('returns unknown for empty string', () => {
      expect(detectLanguage('').lang).toBe('unknown');
    });

    it('returns unknown for whitespace only', () => {
      expect(detectLanguage('   \n\t  ').lang).toBe('unknown');
    });

    it('returns unknown for numbers only', () => {
      expect(detectLanguage('12345').lang).toBe('unknown');
    });

    it('returns unknown for emoji only', () => {
      expect(detectLanguage('🎉🐦🌸').lang).toBe('unknown');
    });

    it('returns unknown for punctuation only', () => {
      expect(detectLanguage('...!!!???').lang).toBe('unknown');
    });

    it('handles short English text', () => {
      const result = detectLanguage('Hello');
      expect(result.lang).toBe('en');
    });

    it('handles short Korean text', () => {
      const result = detectLanguage('안녕');
      expect(result.lang).toBe('ko');
    });

    it('handles short Chinese text', () => {
      const result = detectLanguage('你好');
      expect(result.lang).toBe('zh');
    });
  });
});

describe('getUnicodeProfile', () => {
  it('counts Latin characters', () => {
    const profile = getUnicodeProfile('Hello World');
    expect(profile.latin).toBe(10);
    expect(profile.total).toBe(10);
  });

  it('counts CJK characters', () => {
    const profile = getUnicodeProfile('中文');
    expect(profile.cjk).toBe(2);
  });

  it('counts Hangul characters', () => {
    const profile = getUnicodeProfile('한글');
    expect(profile.hangul).toBe(2);
  });

  it('counts Hiragana and Katakana separately', () => {
    const profile = getUnicodeProfile('あアい');
    expect(profile.hiragana).toBe(2);
    expect(profile.katakana).toBe(1);
  });

  it('strips noise from total', () => {
    const profile = getUnicodeProfile('Hello 123 !!!');
    expect(profile.total).toBe(5);
    expect(profile.latin).toBe(5);
  });
});
