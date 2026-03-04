import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface HeroData {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  ctaLabel: string;
}

@customElement('hero-section')
export class HeroSection extends LitElement {
  @property({ attribute: false }) data!: HeroData;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section class="bg-contain bg-bottom bg-no-repeat bg-[url('/assets/bird-nest.png')] px-4 text-center flex flex-col items-center justify-start pt-16 md:pt-24 min-h-[75vh]">
        <p class="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-3 font-body">
          ${this.data.date} · ${this.data.location}
        </p>
        <h1 class="font-display text-[clamp(2.5rem,6vw,4.5rem)] mb-3 text-on-surface leading-tight">
          ${this.data.title}
        </h1>
        <p class="text-lg text-on-surface-variant mb-6 max-w-content font-body">
          ${this.data.subtitle}
        </p>
        <div class="flex flex-col gap-2 items-center flex-wrap justify-center">
          <md-outlined-button class="py-3 px-8" @click=${() => {
            document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
          }}>${this.data.ctaLabel}</md-outlined-button>
          <md-text-button class="py-3 px-8" href="https://github.com/squaredindex/char-lang-detect" target="_blank" trailing-icon>
            <svg slot="icon" class="w-4.5 h-4.5" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </md-text-button>
        </div>
      </section>

      <md-fab
        class="fixed bottom-6 right-6 z-40 text-white! fill-white!"
        size="small"
        aria-label=${this.data.ctaLabel}
        @click=${() => {
          document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <md-icon class="text-white! fill-white!" slot="icon">edit_calendar</md-icon>
      </md-fab>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hero-section': HeroSection;
  }
}
