import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface PracticalInfoData {
  heading: string;
  items: { icon: string; title: string; detail: string }[];
}

@customElement('practical-info')
export class PracticalInfo extends LitElement {
  @property({ attribute: false }) data!: PracticalInfoData;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="info" class="py-16 px-4 bg-surface-container-low">
        <div class="max-w-content mx-auto">
          <h2 class="text-center mb-10 text-primary">${this.data.heading}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            ${this.data.items.map(
              (item) => html`
                <div class="flex gap-4 items-start p-6 bg-surface rounded-md border border-outline-variant/50">
                  <md-icon class="shrink-0 text-primary text-[28px]">${item.icon}</md-icon>
                  <div>
                    <h4 class="mb-1 text-on-surface text-[1.05rem]">${item.title}</h4>
                    <p class="text-on-surface-variant text-sm">${item.detail}</p>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'practical-info': PracticalInfo;
  }
}
