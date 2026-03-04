# char-lang-detect

Client-side language detection using Unicode character ranges. No API calls, no dictionaries — just regex pattern matching on the characters themselves.

Built as a demo site: a multilingual bird-watching event page ("Wings of Wonder") in English, Japanese, Korean, and Chinese.

## How the detection works

Every Unicode character belongs to a defined range. Korean uses Hangul syllables (`U+AC00–U+D7AF`), Japanese uses Hiragana (`U+3040–U+309F`) and Katakana (`U+30A0–U+30FF`), Chinese and Japanese share CJK ideographs (`U+4E00–U+9FFF`), and English uses Latin (`U+0041–U+007A`).

The detector counts how many characters in a string fall into each range, then applies a priority chain:

```
Text → strip noise (spaces, punctuation, digits, emoji)
     → count characters per script
     → apply priority rules:

        1. Hangul found?      → Korean
        2. Kana + CJK found?  → Japanese
        3. CJK only?          → Chinese
        4. Latin found?        → English
        5. None match?         → unknown
```

**Why this order?** CJK ideographs are shared across Japanese, Chinese, and Korean. The algorithm checks for script-exclusive characters first (Hangul, Hiragana/Katakana) to disambiguate, then falls back to CJK-only = Chinese.

### Confidence scoring

Each result includes a confidence score (0–1) based on the ratio of matched characters to total meaningful characters. Short texts (under 10 characters) use a stricter threshold (50%) than longer texts (30%).

### Live detection pipeline

The detector doesn't just run once — it watches the page:

1. **Initial scan** — walks the DOM after components render
2. **MutationObserver** — watches for text changes and new elements
3. **Style application** — applies `lang-en`, `lang-ja`, `lang-ko`, or `lang-zh` CSS classes and `lang` attributes to each text element

This allows per-element language-appropriate typography (font family, line height, letter spacing) without manual annotation.

## Stack

- **Vite** — build and dev server
- **Lit** — web components (light DOM for global MutationObserver access)
- **TypeScript** — type safety
- **Tailwind CSS v4** — styling
- **Material Design 3** — UI components

## Quick start

```bash
bun install
bun run dev
```

## Tests

```bash
bun run test
```

## Project structure

```
src/
├── detection/
│   ├── unicode-ranges.ts    # regex patterns for each script
│   ├── detect-language.ts   # core detection algorithm
│   └── types.ts             # LangCode, UnicodeProfile, DetectionResult
├── observers/
│   ├── lang-observer.ts     # MutationObserver + DOM scanning
│   └── style-applicator.ts  # applies lang-* classes to elements
├── content/                 # page content data (en, ja, ko, zh)
├── components/              # Lit web components
└── styles/                  # design tokens, typography, MD3 theme
```
