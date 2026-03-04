import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';
import type { LangCode } from '../detection/types.js';

const validLangs = new Set<string>(['en', 'ja', 'ko', 'zh']);

@customElement('app-shell')
export class AppShell extends LitElement {
  private _router = new Router(this, [
    {
      path: '/',
      enter: async () => {
        await this._router.goto('/en');
        return false;
      },
    },
    {
      path: '/:lang',
      render: ({ lang }) => {
        const resolved = validLangs.has(lang ?? '') ? lang! as LangCode : 'en';
        document.documentElement.lang = resolved;
        return html`<event-page lang=${resolved}></event-page>`;
      },
    },
  ]);

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      ${this._router.outlet()}
      <debug-overlay></debug-overlay>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-shell': AppShell;
  }
}
