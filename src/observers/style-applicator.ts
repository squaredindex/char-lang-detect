import type { LangCode } from '../detection/types.js';

const LANG_CLASSES = ['lang-en', 'lang-ja', 'lang-ko', 'lang-zh', 'lang-unknown'] as const;

export function applyLangStyle(el: HTMLElement, lang: LangCode) {
  // Remove any existing lang-* classes
  for (const cls of LANG_CLASSES) {
    el.classList.remove(cls);
  }

  // Apply new class and lang attribute
  el.classList.add(`lang-${lang}`);
  if (lang !== 'unknown') {
    el.setAttribute('lang', lang);
  }
}

export function removeLangStyle(el: HTMLElement) {
  for (const cls of LANG_CLASSES) {
    el.classList.remove(cls);
  }
}
