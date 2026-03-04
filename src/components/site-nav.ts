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
