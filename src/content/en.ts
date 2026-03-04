import type { EventContent } from './types.js';

export const content: EventContent = {
  lang: 'en',
  nav: {
    eventName: 'Wings of Wonder',
    links: [
      { label: 'About', href: '#intro' },
      { label: 'Birds', href: '#birds' },
      { label: 'Schedule', href: '#schedule' },
      { label: 'Info', href: '#info' },
    ],
  },
  hero: {
    title: 'Wings of Wonder',
    subtitle: 'An Exotic Bird-Watching Experience',
    date: 'September 14–15, 2026',
    location: 'Redwood Valley Nature Reserve',
    ctaLabel: 'Register Now',
  },
  intro: {
    heading: 'Discover the Extraordinary',
    paragraphs: [
      'Join us for an unforgettable weekend surrounded by nature\'s most magnificent avian wonders. Wings of Wonder brings together passionate birders, wildlife photographers, and nature enthusiasts for two days of guided expeditions through pristine forest habitats.',
      'Led by expert ornithologists, you\'ll have the rare opportunity to observe exotic species in their natural environment — from the iridescent flash of hummingbirds to the majestic soar of cranes at dawn.',
      'Whether you\'re a seasoned birder or simply curious about the natural world, this event promises moments of awe that will stay with you for a lifetime.',
    ],
  },
  featuredBirds: {
    heading: 'Featured Species',
    birds: [
      {
        name: 'Ruby-throated Hummingbird',
        description: 'A tiny jewel of the forest, this hummingbird dazzles with its iridescent throat patch that flashes brilliant crimson in the sunlight.',
        habitat: 'Forest edges & gardens',
        image: 'header-bird-ruby-throated-hummingbird.png',
      },
      {
        name: 'Cedar Waxwing',
        description: 'Elegant and social, the cedar waxwing sports a sleek crest and distinctive waxy red tips on its wing feathers.',
        habitat: 'Berry-rich woodlands',
        image: 'header-bird-cedar-waxwing.png',
      },
      {
        name: 'Pileated Woodpecker',
        description: 'The largest woodpecker in North America, its powerful drumming echoes through old-growth forests as it excavates rectangular holes in dead trees.',
        habitat: 'Mature deciduous forests',
        image: 'header-bird-pileated-woodpecker.png',
      },
      {
        name: 'Sandhill Crane',
        description: 'Ancient and graceful, these tall birds perform elaborate courtship dances and fill the sky with their distinctive bugling calls.',
        habitat: 'Wetlands & grasslands',
        image: 'header-bird-sandhill-crane.png',
      },
      {
        name: 'Wood Duck',
        description: 'Often called the most beautiful duck in North America, the male displays an extraordinary palette of iridescent greens, purples, and chestnut.',
        habitat: 'Wooded swamps & ponds',
        image: 'header-bird-wood-duck.png',
      },
    ],
  },
  schedule: {
    heading: 'Event Schedule',
    days: [
      {
        dayLabel: 'Day 1 — Saturday, September 14',
        items: [
          { time: '6:00 AM', title: 'Dawn Chorus Walk', description: 'Begin the day with a guided walk to hear the forest wake up.' },
          { time: '8:30 AM', title: 'Breakfast & Orientation', description: 'Welcome session with expert introductions and field guide distribution.' },
          { time: '10:00 AM', title: 'Wetland Expedition', description: 'Explore the marshlands to spot cranes, ducks, and wading birds.' },
          { time: '1:00 PM', title: 'Lunch & Photography Workshop', description: 'Tips and techniques for capturing birds in flight.' },
          { time: '3:00 PM', title: 'Forest Canopy Walk', description: 'Elevated trail through old-growth forest — watch for woodpeckers and warblers.' },
          { time: '6:00 PM', title: 'Sunset Observation', description: 'Watch the evening migration from the ridge viewpoint.' },
        ],
      },
      {
        dayLabel: 'Day 2 — Sunday, September 15',
        items: [
          { time: '5:30 AM', title: 'Hummingbird Garden Visit', description: 'Early morning visit to the reserve\'s hummingbird feeding stations.' },
          { time: '8:00 AM', title: 'Breakfast & Bird Call Workshop', description: 'Learn to identify common species by their songs.' },
          { time: '10:00 AM', title: 'Free Exploration', description: 'Choose your own trail with optional expert guides.' },
          { time: '12:30 PM', title: 'Farewell Lunch & Awards', description: 'Share your sightings and celebrate the weekend\'s highlights.' },
        ],
      },
    ],
  },
  practicalInfo: {
    heading: 'Practical Information',
    items: [
      { icon: 'location_on', title: 'Venue', detail: 'Redwood Valley Nature Reserve, 45 minutes north of the city center. Free parking available.' },
      { icon: 'backpack', title: 'What to Bring', detail: 'Binoculars, comfortable hiking shoes, weather-appropriate layers, water bottle, and a camera.' },
      { icon: 'accessibility', title: 'Accessibility', detail: 'Paved paths available for wheelchair access. Audio descriptions provided for visually impaired guests.' },
      { icon: 'restaurant', title: 'Meals', detail: 'All meals included. Vegetarian, vegan, and gluten-free options available — please note dietary needs at registration.' },
    ],
  },
  techWalkthrough: {
    heading: 'How This Page Reads Your Language',
    subtitle: 'This site detects which language you\'re reading — character by character — and adjusts typography in real time. No server. No cookies. Just Unicode.',
    steps: [
      {
        icon: 'edit_note',
        title: 'Content renders in the Light DOM',
        body: 'Every component on this page renders directly into the document — not behind a Shadow DOM wall. That\'s deliberate. A global MutationObserver watches for text changes across the entire page, and Light DOM keeps every paragraph, heading, and label visible to it.',
      },
      {
        icon: 'visibility',
        title: 'The observer spots new text',
        body: 'When the DOM changes — a tab switch, a page load, new content injected — the observer walks the tree. It finds every P, H1–H6, SPAN, and LI element, extracts the raw text, and hands it to the detection engine. Buttons, icons, and decorative elements are skipped.',
      },
      {
        icon: 'translate',
        title: 'Unicode ranges identify the script',
        body: 'The engine counts characters in specific Unicode blocks: Latin (A–Z, À–ɏ), Hangul (가–힣), Hiragana (ぁ–ゖ), Katakana (ァ–ヿ), and CJK ideographs (一–鿿). Korean is checked first because Hangul is unique. Japanese needs both kana and kanji. Chinese is pure CJK with no kana. English is the Latin fallback.',
      },
      {
        icon: 'style',
        title: 'A CSS class switches the typography',
        body: 'The detected language becomes a class — lang-ja, lang-ko, lang-zh, or lang-en — applied directly to the element. That class overrides CSS custom properties: --font-display swaps to Noto Serif JP, --line-height-base increases to 1.8, and word-break switches to break-all. The browser does the rest.',
      },
    ],
    footnote: 'The detection runs entirely client-side. Switch languages with the nav above and watch the fonts change.',
  },
  cta: {
    heading: 'Ready to Spread Your Wings?',
    body: 'Spaces are limited to ensure an intimate, respectful wildlife experience. Secure your place today and join us for a weekend you\'ll never forget.',
    buttonLabel: 'Register for Wings of Wonder',
  },
  footer: {
    credits: 'Organized by the Redwood Valley Ornithological Society',
    copyright: '© 2026 Wings of Wonder. All rights reserved.',
  },
};
