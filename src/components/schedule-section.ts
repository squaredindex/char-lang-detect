import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import type { ScheduleDay } from '../content/types.js';

interface ScheduleData {
  heading: string;
  days: ScheduleDay[];
}

@customElement('schedule-section')
export class ScheduleSection extends LitElement {
  @property({ attribute: false }) data!: ScheduleData;
  @state() activeDay = 0;

  createRenderRoot() {
    return this;
  }

  private _onTabChange(e: Event) {
    const tabs = e.target as HTMLElement & { activeTabIndex: number };
    this.activeDay = tabs.activeTabIndex;
  }

  render() {
    const day = this.data.days[this.activeDay];

    return html`
      <section id="schedule" class="py-16 px-4">
        <div class="max-w-content mx-auto">
          <h2 class="text-center mb-10 text-primary">${this.data.heading}</h2>

          ${this.data.days.length > 1 ? html`
            <md-tabs class="mb-8" @change=${this._onTabChange}>
              ${this.data.days.map(
                (d) => html`<md-primary-tab>${d.dayLabel}</md-primary-tab>`
              )}
            </md-tabs>
          ` : nothing}

          ${day ? this._renderTimeline(day) : nothing}
        </div>
      </section>
    `;
  }

  private _renderTimeline(day: ScheduleDay) {
    return html`
      <div class="border-l-[3px] border-primary-container pl-6 relative">
        ${day.items.map(
          (item) => html`
            <div class="mb-6 relative">
              <div class="absolute -left-[31px] top-1.5 w-[11px] h-[11px] rounded-full bg-primary"></div>
              <span class="text-sm text-primary font-semibold">${item.time}</span>
              <h4 class="my-1 text-lg text-on-surface">${item.title}</h4>
              <p class="text-on-surface-variant text-[0.95rem]">${item.description}</p>
            </div>
          `
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'schedule-section': ScheduleSection;
  }
}
