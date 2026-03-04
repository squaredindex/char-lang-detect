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

          <div class="mt-6 text-center">
            <md-text-button class="py-3 px-8" href="https://github.com/squaredindex/char-lang-detect" target="_blank" trailing-icon>
              <svg slot="icon" class="w-4.5 h-4.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
              View on GitHub
            </md-text-button>
          </div>
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
