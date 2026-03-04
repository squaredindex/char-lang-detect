import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { LangCode } from '../detection/types.js';
import type { EventContent } from '../content/types.js';
import { content as enContent } from '../content/en.js';
import { content as jaContent } from '../content/ja.js';
import { content as koContent } from '../content/ko.js';
import { content as zhContent } from '../content/zh.js';

const contentMap: Record<string, EventContent> = {
  en: enContent,
  ja: jaContent,
  ko: koContent,
  zh: zhContent,
};

@customElement('event-page')
export class EventPage extends LitElement {
  @property() lang: LangCode = 'en';

  createRenderRoot() {
    return this;
  }

  private get content(): EventContent {
    return contentMap[this.lang] ?? enContent;
  }

  render() {
    const c = this.content;
    return html`
      <site-nav .data=${c.nav} .currentLang=${this.lang}></site-nav>
      <main>
        <hero-section .data=${c.hero}></hero-section>
        <feather-divider index="1"></feather-divider>
        <intro-section .data=${c.intro}></intro-section>
        <feather-divider index="3"></feather-divider>
        <featured-birds .data=${c.featuredBirds}></featured-birds>
        <feather-divider index="4"></feather-divider>
        <schedule-section .data=${c.schedule}></schedule-section>
        <feather-divider index="1"></feather-divider>
        <practical-info .data=${c.practicalInfo}></practical-info>
        <feather-divider index="3"></feather-divider>
        <tech-walkthrough .data=${c.techWalkthrough}></tech-walkthrough>
        <feather-divider index="1"></feather-divider>
        <cta-section .data=${c.cta}></cta-section>
      </main>
      <site-footer .data=${c.footer}></site-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'event-page': EventPage;
  }
}
