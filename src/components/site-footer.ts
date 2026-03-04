import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface FooterData {
  credits: string;
  copyright: string;
}

@customElement('site-footer')
export class SiteFooter extends LitElement {
  @property({ attribute: false }) data!: FooterData;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <footer class="noise-texture bg-footer-bg py-12 px-4 text-center border-t border-outline-variant">
        <p class="text-on-surface-variant text-sm mb-2">${this.data.credits}</p>
        <p class="text-outline text-xs">${this.data.copyright}</p>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'site-footer': SiteFooter;
  }
}
