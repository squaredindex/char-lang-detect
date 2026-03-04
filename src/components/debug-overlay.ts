import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getUnicodeProfile, detectLanguage } from '../detection/detect-language.js';

interface ElementInfo {
  tag: string;
  text: string;
  lang: string;
  confidence: string;
  profile: string;
}

@customElement('debug-overlay')
export class DebugOverlay extends LitElement {
  @state() private visible = false;
  @state() private elements: ElementInfo[] = [];

  static styles = css`
    :host {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 9999;
      font-family: 'SF Mono', 'Fira Code', monospace;
      font-size: 12px;
    }
    .panel {
      width: 400px;
      max-height: 100vh;
      overflow-y: auto;
      background: rgba(0, 0, 0, 0.92);
      color: #e0e0e0;
      padding: 16px;
      border-left: 2px solid #1B6B5A;
    }
    .panel[hidden] { display: none; }
    h3 {
      color: #1B6B5A;
      margin: 0 0 12px;
      font-size: 14px;
    }
    .entry {
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding: 8px 0;
    }
    .tag { color: #8B6914; }
    .lang-badge {
      display: inline-block;
      padding: 1px 6px;
      border-radius: 4px;
      font-weight: bold;
      font-size: 11px;
    }
    .lang-en { background: #2d4a7a; color: #a0c4ff; }
    .lang-ja { background: #7a2d4a; color: #ffa0c4; }
    .lang-ko { background: #4a7a2d; color: #c4ffa0; }
    .lang-zh { background: #7a4a2d; color: #ffc4a0; }
    .lang-unknown { background: #444; color: #999; }
    .text-preview {
      color: #999;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 350px;
      display: block;
      margin-top: 4px;
    }
    .profile { color: #666; font-size: 10px; margin-top: 2px; }
    .hint {
      color: #666;
      text-align: center;
      padding: 8px;
      font-size: 11px;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.handleKeydown);
  }

  private handleKeydown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'L') {
      e.preventDefault();
      this.visible = !this.visible;
      if (this.visible) this.scan();
    }
  };

  private scan() {
    const results: ElementInfo[] = [];
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
      {
        acceptNode(node) {
          const el = node as HTMLElement;
          if (el.tagName === 'DEBUG-OVERLAY' || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        },
      }
    );

    let node: Node | null = walker.currentNode;
    while (node) {
      const el = node as HTMLElement;
      const text = el.childNodes.length > 0
        ? Array.from(el.childNodes)
            .filter((n) => n.nodeType === Node.TEXT_NODE)
            .map((n) => n.textContent?.trim())
            .filter(Boolean)
            .join(' ')
        : '';

      if (text.length > 0) {
        const result = detectLanguage(text);
        const profile = getUnicodeProfile(text);
        results.push({
          tag: el.tagName.toLowerCase(),
          text: text.slice(0, 80),
          lang: result.lang,
          confidence: (result.confidence * 100).toFixed(0) + '%',
          profile: `L:${profile.latin} H:${profile.hangul} Hi:${profile.hiragana} Ka:${profile.katakana} C:${profile.cjk}`,
        });
      }
      node = walker.nextNode();
    }
    this.elements = results;
  }

  render() {
    return html`
      <div class="hint" ?hidden=${this.visible}>Ctrl+Shift+L</div>
      <div class="panel" ?hidden=${!this.visible}>
        <h3>Language Detection Debug</h3>
        <div style="margin-bottom: 8px; color: #999;">
          ${this.elements.length} elements scanned
        </div>
        ${this.elements.map(
          (el) => html`
            <div class="entry">
              <span class="tag">&lt;${el.tag}&gt;</span>
              <span class="lang-badge lang-${el.lang}">${el.lang.toUpperCase()} ${el.confidence}</span>
              <span class="text-preview">${el.text}</span>
              <div class="profile">${el.profile}</div>
            </div>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'debug-overlay': DebugOverlay;
  }
}
