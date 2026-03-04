import type { LangCode } from '../detection/types.js';

export interface BirdInfo {
  name: string;
  description: string;
  habitat: string;
  image: string;
}

export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

export interface ScheduleDay {
  dayLabel: string;
  items: ScheduleItem[];
}

export interface EventContent {
  lang: LangCode;
  nav: {
    eventName: string;
    links: { label: string; href: string }[];
  };
  hero: {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    ctaLabel: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  featuredBirds: {
    heading: string;
    birds: BirdInfo[];
  };
  schedule: {
    heading: string;
    days: ScheduleDay[];
  };
  practicalInfo: {
    heading: string;
    items: { icon: string; title: string; detail: string }[];
  };
  techWalkthrough: {
    heading: string;
    subtitle: string;
    steps: { icon: string; title: string; body: string }[];
    footnote: string;
  };
  cta: {
    heading: string;
    body: string;
    buttonLabel: string;
  };
  footer: {
    credits: string;
    copyright: string;
  };
}
