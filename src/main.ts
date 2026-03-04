// MD3 component imports (selective)
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/text-button.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/chips/chip-set.js';
import '@material/web/chips/filter-chip.js';
import '@material/web/divider/divider.js';
import '@material/web/fab/fab.js';
import '@material/web/icon/icon.js';
import '@material/web/labs/card/outlined-card.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/tabs/tabs.js';
import '@material/web/tabs/primary-tab.js';

// App components
import './components/app-shell.js';
import './components/event-page.js';
import './components/site-nav.js';
import './components/hero-section.js';
import './components/intro-section.js';
import './components/featured-birds.js';
import './components/schedule-section.js';
import './components/practical-info.js';
import './components/tech-walkthrough.js';
import './components/cta-section.js';
import './components/site-footer.js';
import './components/feather-divider.js';
import './components/debug-overlay.js';

// Language detection observer
import { initLangObserver } from './observers/lang-observer.js';

// Initialize observer once DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initLangObserver());
} else {
  initLangObserver();
}
