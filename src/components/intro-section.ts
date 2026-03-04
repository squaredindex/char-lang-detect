import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface IntroData {
  heading: string;
  paragraphs: string[];
}

@customElement('intro-section')
export class IntroSection extends LitElement {
  @property({ attribute: false }) data!: IntroData;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="intro" class="py-16 px-4">
        <div class="max-w-content mx-auto">
          <h2 class="text-center mb-8 text-primary">${this.data.heading}</h2>
          ${this.data.paragraphs.map(
            (p) => html`<p class="mb-4 text-on-surface-variant">${p}</p>`
          )}
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'intro-section': IntroSection;
  }
}
