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
      <section class="noise-texture bg-surface py-24 md:py-32 px-4 text-center flex flex-col items-center justify-center min-h-[70vh]">
        <p class="text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-6 font-body">
          ${this.data.date} · ${this.data.location}
        </p>
        <h1 class="font-display text-[clamp(2.5rem,6vw,4.5rem)] mb-5 text-on-surface leading-tight">
          ${this.data.title}
        </h1>
        <p class="text-lg text-on-surface-variant mb-10 max-w-content font-body">
          ${this.data.subtitle}
        </p>
        <md-outlined-button class="py-3 px-8" @click=${() => {
          document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
        }}>${this.data.ctaLabel}</md-outlined-button>
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
