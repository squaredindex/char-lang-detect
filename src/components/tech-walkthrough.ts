import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface TechWalkthroughData {
  heading: string;
  subtitle: string;
  steps: { icon: string; title: string; body: string }[];
  footnote: string;
}

@customElement('tech-walkthrough')
export class TechWalkthrough extends LitElement {
  @property({ attribute: false }) data!: TechWalkthroughData;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="how-it-works" class="py-16 px-4 bg-surface-container-low">
        <div class="max-w-content mx-auto">
          <h2 class="text-center mb-3 text-primary">${this.data.heading}</h2>
          <p class="text-center text-on-surface-variant mb-12 max-w-[560px] mx-auto text-[0.95rem]">
            ${this.data.subtitle}
          </p>

          <div class="space-y-8">
            ${this.data.steps.map(
              (step, i) => html`
                <div class="flex gap-5 items-start">
                  <div class="shrink-0 w-12 h-12 rounded-full bg-primary-container flex items-center justify-center">
                    <md-icon class="text-on-primary-container">${step.icon}</md-icon>
                  </div>
                  <div class="pt-1">
                    <h3 class="text-lg mb-1 text-on-surface">
                      <span class="text-primary font-body font-semibold mr-2">${i + 1}.</span>${step.title}
                    </h3>
                    <p class="text-on-surface-variant text-[0.95rem] leading-relaxed">${step.body}</p>
                  </div>
                </div>
              `
            )}
          </div>

          <p class="mt-10 text-center text-sm text-on-surface-variant italic">
            ${this.data.footnote}
          </p>
        </div>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'tech-walkthrough': TechWalkthrough;
  }
}
