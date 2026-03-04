import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { LangCode } from '../detection/types.js';

interface NavData {
  eventName: string;
  links: { label: string; href: string }[];
}

const languages: { code: LangCode; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'zh', label: '中文' },
];

@customElement('site-nav')
export class SiteNav extends LitElement {
  @property({ attribute: false }) data!: NavData;
  @property() currentLang: LangCode = 'en';

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <nav class="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-outline-variant">
        <div class="max-w-page mx-auto flex items-center justify-between px-4 h-16 gap-4">
          <span class="font-display text-xl text-primary whitespace-nowrap font-normal">${this.data.eventName}</span>
          <ul class="hidden md:flex gap-4 list-none m-0 p-0">
            ${this.data.links.map(
              (link) => html`<li><a href=${link.href} class="text-on-surface-variant no-underline text-sm hover:text-primary transition-colors">${link.label}</a></li>`
            )}
          </ul>
          <a href="https://github.com/squaredindex/char-lang-detect" target="_blank" rel="noopener" class="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors" aria-label="GitHub repository">
            <svg class="w-5 h-5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
          </a>
          <div class="flex gap-1.5">
            ${languages.map(
              (l) => html`
                <a
                  href="/${l.code}"
                  class="inline-flex items-center justify-center px-3 py-1.5 rounded-lg text-sm leading-none no-underline transition-all ${l.code === this.currentLang
                    ? 'bg-primary text-on-primary'
                    : 'text-on-surface-variant hover:bg-surface-container'}"
                >${l.label}</a>
              `
            )}
          </div>
        </div>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'site-nav': SiteNav;
  }
}
