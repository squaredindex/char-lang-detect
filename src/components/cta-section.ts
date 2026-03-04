import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface CtaData {
  heading: string;
  body: string;
  buttonLabel: string;
}

@customElement('cta-section')
export class CtaSection extends LitElement {
  @property({ attribute: false }) data!: CtaData;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="cta" class="noise-texture bg-primary text-on-primary py-24 px-4 text-center">
        <div class="max-w-content mx-auto">
          <h2 class="mb-4 font-display text-3xl text-white">${this.data.heading}</h2>
          <p class="mb-8 opacity-90 max-w-[560px] mx-auto text-[1.05rem]">${this.data.body}</p>
          <md-filled-button class="py-3 px-8" style="
            --md-filled-button-container-color: white;
            --md-filled-button-label-text-color: var(--md-sys-color-primary);
            --md-filled-button-hover-label-text-color: var(--md-sys-color-primary);
            --md-filled-button-hover-state-layer-color: var(--md-sys-color-primary);
            --md-filled-button-hover-state-layer-opacity: 0.08;
          ">${this.data.buttonLabel}</md-filled-button>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'cta-section': CtaSection;
  }
}
