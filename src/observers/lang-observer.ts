import { detectLanguage } from '../detection/detect-language.js';
import { applyLangStyle } from './style-applicator.js';

const TEXT_ELEMENTS = new Set([
  'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
  'SPAN', 'A', 'LI', 'TD', 'TH', 'LABEL',
  'BLOCKQUOTE', 'FIGCAPTION', 'DT', 'DD',
]);

const SKIP_ELEMENTS = new Set([
  'SCRIPT', 'STYLE', 'DEBUG-OVERLAY', 'FEATHER-DIVIDER',
  'MD-FILLED-BUTTON', 'MD-OUTLINED-BUTTON', 'MD-TEXT-BUTTON',
  'MD-ASSIST-CHIP', 'MD-ICON',
]);

function getDirectTextContent(el: HTMLElement): string {
  let text = '';
  for (const node of el.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      text += node.textContent ?? '';
    }
  }
  return text.trim();
}

function scanElement(el: HTMLElement) {
  if (SKIP_ELEMENTS.has(el.tagName)) return;

  if (TEXT_ELEMENTS.has(el.tagName)) {
    const text = getDirectTextContent(el);
    if (text.length > 0) {
      const result = detectLanguage(text);
      // Default to English styles when language can't be determined
      applyLangStyle(el, result.lang === 'unknown' ? 'en' : result.lang);
    }
  }

  // Recurse into children (light DOM only)
  for (const child of el.children) {
    if (child instanceof HTMLElement) {
      scanElement(child);
    }
  }
}

function fullScan() {
  scanElement(document.body);
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null;

function debouncedScan(target?: Node) {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (target instanceof HTMLElement) {
      scanElement(target);
    } else {
      fullScan();
    }
  }, 150);
}

export function initLangObserver() {
  // Initial full scan after components render
  requestAnimationFrame(() => {
    requestAnimationFrame(fullScan);
  });

  // Watch for DOM mutations
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        const target = mutation.target;
        debouncedScan(target instanceof HTMLElement ? target : undefined);
      } else if (mutation.type === 'characterData') {
        const parent = mutation.target.parentElement;
        if (parent) debouncedScan(parent);
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  return observer;
}
