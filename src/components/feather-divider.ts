import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import feather1 from '../assets/feather-divider-1.png';
import feather3 from '../assets/feather-divider-3.png';
import feather4 from '../assets/feather-divider-4.png';

const featherMap: Record<string, string> = {
  '1': feather1,
  '3': feather3,
  '4': feather4,
};

@customElement('feather-divider')
export class FeatherDivider extends LitElement {
  @property() index = '1';

  static styles = css`
    :host {
      display: block;
      text-align: center;
      margin-block: 2rem;
    }
    img {
      user-select: none;
      select: none;
      pointer-events: none;
      max-width: 100%;
      height: auto;
      display: block;
      object-position: center;
      margin: 0 auto;
    }
  `;

  render() {
    const src = featherMap[this.index] ?? feather1;
    return html`<img src=${src} alt="" role="presentation" />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'feather-divider': FeatherDivider;
  }
}
