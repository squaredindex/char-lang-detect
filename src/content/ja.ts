import type { EventContent } from './types.js';

export const content: EventContent = {
  lang: 'ja',
  nav: {
    eventName: '翼の奇跡',
    links: [
      { label: '紹介', href: '#intro' },
      { label: '野鳥', href: '#birds' },
      { label: 'スケジュール', href: '#schedule' },
      { label: '情報', href: '#info' },
    ],
  },
  hero: {
    title: '翼の奇跡',
    subtitle: 'エキゾチックなバードウォッチング体験',
    date: '2026年9月14日〜15日',
    location: 'レッドウッドバレー自然保護区',
    ctaLabel: '今すぐ登録',
  },
  intro: {
    heading: '特別な出会いを',
    paragraphs: [
      '自然界で最も壮大な鳥たちに囲まれた、忘れられない週末をお過ごしください。「翼の奇跡」は、情熱的なバードウォッチャー、野生動物写真家、自然愛好家が集い、原生林の生息地を巡る二日間のガイド付き探検です。',
      '経験豊かな鳥類学者の案内のもと、ハチドリの虹色の輝きから夜明けの鶴の優雅な飛翔まで、珍しい種を自然の中で観察する貴重な機会をお楽しみいただけます。',
      'ベテランのバードウォッチャーも、自然の世界に興味を持ち始めた方も、一生心に残る感動の瞬間をお約束します。',
    ],
  },
  featuredBirds: {
    heading: '注目の種',
    birds: [
      {
        name: 'ノドアカハチドリ',
        description: '森の小さな宝石。太陽の光を受けて真紅に輝く喉の羽が美しい、極小のハチドリです。',
        habitat: '森林の縁・庭園',
        image: 'header-bird-ruby-throated-hummingbird.png',
      },
      {
        name: 'ヒメレンジャク',
        description: '優雅で社交的な鳥。すらりとした冠羽と翼の先端にある蝋のような赤い飾り羽が特徴的です。',
        habitat: '果実の豊かな森林',
        image: 'header-bird-cedar-waxwing.png',
      },
      {
        name: 'エボシクマゲラ',
        description: '北米最大のキツツキ。枯れ木に四角い穴を掘る力強いドラミングが原生林に響き渡ります。',
        habitat: '成熟した落葉樹林',
        image: 'header-bird-pileated-woodpecker.png',
      },
      {
        name: 'カナダヅル',
        description: '太古から変わらぬ優雅な姿。精巧な求愛ダンスを踊り、独特のトランペットのような鳴き声で空を満たします。',
        habitat: '湿地・草原',
        image: 'header-bird-sandhill-crane.png',
      },
      {
        name: 'アメリカオシドリ',
        description: '北米で最も美しいカモと称される種。オスは虹色の緑、紫、栗色の見事な色彩を誇ります。',
        habitat: '森林の沼・池',
        image: 'header-bird-wood-duck.png',
      },
    ],
  },
  schedule: {
    heading: 'イベントスケジュール',
    days: [
      {
        dayLabel: '1日目 — 9月14日（土曜日）',
        items: [
          { time: '午前6時', title: '夜明けのコーラスウォーク', description: '森の目覚めの声を聴くガイド付き散策で一日を始めましょう。' },
          { time: '午前8時30分', title: '朝食とオリエンテーション', description: '専門家紹介とフィールドガイド配布を含む歓迎セッション。' },
          { time: '午前10時', title: '湿地探検', description: '鶴、カモ、水鳥を観察する湿地帯の探検。' },
          { time: '午後1時', title: '昼食と写真撮影ワークショップ', description: '飛翔中の鳥を撮影するコツとテクニック。' },
          { time: '午後3時', title: '森林キャノピーウォーク', description: '原生林の高架トレイル — キツツキやアメリカムシクイを探しましょう。' },
          { time: '午後6時', title: '夕日の観察', description: '尾根の展望台から夕方の渡りを観察します。' },
        ],
      },
      {
        dayLabel: '2日目 — 9月15日（日曜日）',
        items: [
          { time: '午前5時30分', title: 'ハチドリガーデン訪問', description: '保護区のハチドリ餌場を早朝に訪問。' },
          { time: '午前8時', title: '朝食と鳴き声ワークショップ', description: '一般的な種を鳴き声で識別する方法を学びます。' },
          { time: '午前10時', title: '自由探索', description: 'お好みのトレイルを選んで、専門ガイド付きも可能。' },
          { time: '午後12時30分', title: 'お別れランチと表彰', description: '目撃情報を共有し、週末のハイライトを祝いましょう。' },
        ],
      },
    ],
  },
  practicalInfo: {
    heading: '実用情報',
    items: [
      { icon: 'location_on', title: '会場', detail: 'レッドウッドバレー自然保護区。市内中心部から北へ45分。無料駐車場あり。' },
      { icon: 'backpack', title: '持ち物', detail: '双眼鏡、履き慣れたハイキングシューズ、天候に合った重ね着、水筒、カメラ。' },
      { icon: 'accessibility', title: 'アクセシビリティ', detail: '車椅子対応の舗装路あり。視覚障害のあるお客様向け音声解説を提供。' },
      { icon: 'restaurant', title: '食事', detail: '全食事付き。ベジタリアン、ヴィーガン、グルテンフリー対応あり — 登録時に食事制限をお知らせください。' },
    ],
  },
  techWalkthrough: {
    heading: 'このページはあなたの言語を読み取ります',
    subtitle: 'このサイトは、一文字ずつ文字を解析し、リアルタイムでタイポグラフィを調整します。サーバー不要。Cookie不要。Unicodeだけで。',
    steps: [
      {
        icon: 'edit_note',
        title: 'コンテンツがLight DOMにレンダリングされる',
        body: 'すべてのコンポーネントはShadow DOMの壁の向こうではなく、ドキュメントに直接レンダリングされます。グローバルなMutationObserverがページ全体のテキスト変更を監視し、Light DOMがすべての段落、見出し、ラベルを可視状態に保ちます。',
      },
      {
        icon: 'visibility',
        title: 'オブザーバーが新しいテキストを検出',
        body: 'DOMが変更されると — タブ切り替え、ページ読み込み、新しいコンテンツの挿入時に — オブザーバーがツリーを巡回します。すべてのP、H1〜H6、SPAN、LI要素を見つけ、生テキストを抽出して検出エンジンに渡します。',
      },
      {
        icon: 'translate',
        title: 'Unicode範囲がスクリプトを識別',
        body: 'エンジンは特定のUnicodeブロックの文字を数えます：ラテン文字（A–Z、À–ɏ）、ハングル（가–힣）、ひらがな（ぁ–ゖ）、カタカナ（ァ–ヿ）、CJK統合漢字（一–鿿）。韓国語はハングルが固有なので最初にチェックされ、日本語は仮名と漢字の両方が必要です。',
      },
      {
        icon: 'style',
        title: 'CSSクラスがタイポグラフィを切り替える',
        body: '検出された言語がlang-ja、lang-ko、lang-zh、lang-enというクラスになり、要素に直接適用されます。このクラスがCSSカスタムプロパティを上書きし、フォントがNoto Serif JPに、行の高さが1.8に、word-breakがbreak-allに変わります。',
      },
    ],
    footnote: '検出はすべてクライアントサイドで実行されます。上のナビゲーションで言語を切り替えて、フォントの変化をご覧ください。',
  },
  cta: {
    heading: '翼を広げる準備はできましたか？',
    body: '親密で自然に配慮した体験を確保するため、参加人数を制限しています。忘れられない週末のためにお早めにお申し込みください。',
    buttonLabel: '翼の奇跡に登録する',
  },
  footer: {
    credits: 'レッドウッドバレー鳥類学会主催',
    copyright: '© 2026 翼の奇跡. All rights reserved.',
  },
};
