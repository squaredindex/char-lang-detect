import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { BirdInfo } from '../content/types.js';

// Import bird images
import hummingbird from '../assets/header-bird-ruby-throated-hummingbird.png';
import waxwing from '../assets/header-bird-cedar-waxwing.png';
import woodpecker from '../assets/header-bird-pileated-woodpecker.png';
import crane from '../assets/header-bird-sandhill-crane.png';
import woodDuck from '../assets/header-bird-wood-duck.png';

const imageMap: Record<string, string> = {
  'header-bird-ruby-throated-hummingbird.png': hummingbird,
  'header-bird-cedar-waxwing.png': waxwing,
  'header-bird-pileated-woodpecker.png': woodpecker,
  'header-bird-sandhill-crane.png': crane,
  'header-bird-wood-duck.png': woodDuck,
};

interface FeaturedBirdsData {
  heading: string;
  birds: BirdInfo[];
}

@customElement('featured-birds')
export class FeaturedBirds extends LitElement {
  @property({ attribute: false }) data!: FeaturedBirdsData;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section id="birds" class="py-16 px-4 bg-surface-container-low">
        <div class="max-w-page mx-auto">
          <h2 class="text-center mb-12 text-primary">${this.data.heading}</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${this.data.birds.map(
              (bird) => html`
                <md-outlined-card class="overflow-hidden">
                  <img
                    src=${imageMap[bird.image] ?? ''}
                    alt=${bird.name}
                    class="w-full h-[220px] object-contain object-bottom aspect-video bg-surface-container"
                  />
                  <div class="p-4 pb-6 px-6">
                    <h3 class="mb-2 text-xl text-on-surface">${bird.name}</h3>
                    <p class="text-on-surface-variant mb-4 text-[0.95rem]">${bird.description}</p>
                    <md-chip-set>
                      <md-assist-chip label=${bird.habitat}></md-assist-chip>
                    </md-chip-set>
                  </div>
                </md-outlined-card>
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
    'featured-birds': FeaturedBirds;
  }
}
