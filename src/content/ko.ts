import type { EventContent } from './types.js';

export const content: EventContent = {
  lang: 'ko',
  nav: {
    eventName: '경이로운 날개',
    links: [
      { label: '소개', href: '#intro' },
      { label: '조류', href: '#birds' },
      { label: '일정', href: '#schedule' },
      { label: '안내', href: '#info' },
    ],
  },
  hero: {
    title: '경이로운 날개',
    subtitle: '이국적인 탐조 체험',
    date: '2026년 9월 14일~15일',
    location: '레드우드 밸리 자연보호구역',
    ctaLabel: '지금 등록하기',
  },
  intro: {
    heading: '특별한 만남을 발견하세요',
    paragraphs: [
      '자연 속 가장 웅장한 조류와 함께하는 잊지 못할 주말에 참여하세요. "경이로운 날개"는 열정적인 탐조가, 야생동물 사진작가, 자연 애호가들이 모여 원시림 서식지를 탐험하는 이틀간의 가이드 투어입니다.',
      '숙련된 조류학자의 안내 아래, 벌새의 무지개빛 반짝임부터 새벽녘 두루미의 웅장한 비행까지 — 희귀 종을 자연 서식지에서 관찰하는 귀중한 기회를 즐기실 수 있습니다.',
      '숙련된 탐조인이든 자연 세계에 대한 호기심을 갖기 시작한 분이든, 평생 잊지 못할 감동의 순간을 약속드립니다.',
    ],
  },
  featuredBirds: {
    heading: '주요 관찰 종',
    birds: [
      {
        name: '붉은목벌새',
        description: '숲속의 작은 보석. 햇빛 아래 선홍빛으로 빛나는 목 부분의 깃털이 아름다운 초소형 벌새입니다.',
        habitat: '숲 가장자리 · 정원',
        image: 'header-bird-ruby-throated-hummingbird.png',
      },
      {
        name: '삼나무여새',
        description: '우아하고 사교적인 새. 매끄러운 볏과 날개 끝의 밀랍 같은 붉은 장식 깃이 특징입니다.',
        habitat: '열매가 풍부한 숲',
        image: 'header-bird-cedar-waxwing.png',
      },
      {
        name: '큰부리딱따구리',
        description: '북미 최대의 딱따구리. 고사목에 직사각형 구멍을 파는 강력한 드러밍이 원시림에 울려 퍼집니다.',
        habitat: '성숙한 활엽수림',
        image: 'header-bird-pileated-woodpecker.png',
      },
      {
        name: '캐나다두루미',
        description: '태고의 우아함을 간직한 새. 정교한 구애 춤을 추며, 독특한 나팔 같은 울음소리로 하늘을 채웁니다.',
        habitat: '습지 · 초원',
        image: 'header-bird-sandhill-crane.png',
      },
      {
        name: '아메리카원앙',
        description: '북미에서 가장 아름다운 오리라 불리는 종. 수컷은 무지개빛 초록, 보라, 밤색의 놀라운 색채를 자랑합니다.',
        habitat: '삼림 늪지 · 연못',
        image: 'header-bird-wood-duck.png',
      },
    ],
  },
  schedule: {
    heading: '행사 일정',
    days: [
      {
        dayLabel: '1일차 — 9월 14일 토요일',
        items: [
          { time: '오전 6시', title: '새벽 합창 산책', description: '숲의 아침을 여는 새소리를 들으며 가이드 산책으로 하루를 시작합니다.' },
          { time: '오전 8시 30분', title: '조식 및 오리엔테이션', description: '전문가 소개와 필드 가이드 배포를 포함한 환영 세션.' },
          { time: '오전 10시', title: '습지 탐험', description: '두루미, 오리, 물새를 관찰하는 습지 탐방.' },
          { time: '오후 1시', title: '중식 및 사진 워크숍', description: '비행 중인 새를 촬영하는 팁과 기술.' },
          { time: '오후 3시', title: '숲 캐노피 산책', description: '원시림의 고가 산책로 — 딱따구리와 솔새를 찾아보세요.' },
          { time: '오후 6시', title: '석양 관찰', description: '능선 전망대에서 저녁 이동을 관찰합니다.' },
        ],
      },
      {
        dayLabel: '2일차 — 9월 15일 일요일',
        items: [
          { time: '오전 5시 30분', title: '벌새 정원 방문', description: '보호구역의 벌새 먹이 스테이션을 이른 아침에 방문.' },
          { time: '오전 8시', title: '조식 및 새소리 워크숍', description: '일반적인 종을 울음소리로 구별하는 방법을 배웁니다.' },
          { time: '오전 10시', title: '자유 탐험', description: '원하는 산책로를 선택하여 전문 가이드와 함께 탐험 가능.' },
          { time: '오후 12시 30분', title: '송별 오찬 및 시상', description: '관찰 기록을 공유하고 주말의 하이라이트를 축하합니다.' },
        ],
      },
    ],
  },
  practicalInfo: {
    heading: '실용 정보',
    items: [
      { icon: 'location_on', title: '장소', detail: '레드우드 밸리 자연보호구역. 시내 중심에서 북쪽으로 45분. 무료 주차 가능.' },
      { icon: 'backpack', title: '준비물', detail: '쌍안경, 편한 등산화, 날씨에 맞는 겹쳐 입기, 물병, 카메라.' },
      { icon: 'accessibility', title: '접근성', detail: '휠체어 이용 가능한 포장 경로 제공. 시각 장애 손님을 위한 음성 해설 제공.' },
      { icon: 'restaurant', title: '식사', detail: '모든 식사 포함. 채식, 비건, 글루텐프리 옵션 제공 — 등록 시 식이 요구사항을 알려주세요.' },
    ],
  },
  techWalkthrough: {
    heading: '이 페이지는 당신의 언어를 읽습니다',
    subtitle: '이 사이트는 글자 하나하나를 분석하여 실시간으로 타이포그래피를 조정합니다. 서버 없이. 쿠키 없이. 오직 유니코드만으로.',
    steps: [
      {
        icon: 'edit_note',
        title: '콘텐츠가 Light DOM에 렌더링됩니다',
        body: '모든 컴포넌트는 Shadow DOM 뒤가 아닌 문서에 직접 렌더링됩니다. 글로벌 MutationObserver가 페이지 전체의 텍스트 변경을 감시하며, Light DOM이 모든 단락, 제목, 레이블을 관찰 가능하게 유지합니다.',
      },
      {
        icon: 'visibility',
        title: '옵저버가 새 텍스트를 감지합니다',
        body: 'DOM이 변경되면 — 탭 전환, 페이지 로드, 새 콘텐츠 삽입 시 — 옵저버가 트리를 순회합니다. 모든 P, H1–H6, SPAN, LI 요소를 찾아 원시 텍스트를 추출하고 감지 엔진에 전달합니다.',
      },
      {
        icon: 'translate',
        title: '유니코드 범위가 스크립트를 식별합니다',
        body: '엔진은 특정 유니코드 블록의 문자를 셉니다: 라틴 문자(A–Z, À–ɏ), 한글(가–힣), 히라가나(ぁ–ゖ), 가타카나(ァ–ヿ), CJK 통합 한자(一–鿿). 한글은 고유하므로 가장 먼저 확인되고, 일본어는 가나와 한자 모두 필요합니다.',
      },
      {
        icon: 'style',
        title: 'CSS 클래스가 타이포그래피를 전환합니다',
        body: '감지된 언어가 lang-ja, lang-ko, lang-zh, lang-en 클래스가 되어 요소에 직접 적용됩니다. 이 클래스가 CSS 사용자 정의 속성을 재정의하여 글꼴이 Noto Sans KR로, word-break가 keep-all로 변경됩니다.',
      },
    ],
    footnote: '감지는 전적으로 클라이언트 측에서 실행됩니다. 위 내비게이션에서 언어를 전환하고 글꼴 변화를 확인해 보세요.',
  },
  cta: {
    heading: '날개를 펼칠 준비가 되셨나요?',
    body: '친밀하고 자연을 존중하는 체험을 위해 참가 인원을 제한합니다. 잊지 못할 주말을 위해 오늘 자리를 확보하세요.',
    buttonLabel: '경이로운 날개 등록하기',
  },
  footer: {
    credits: '레드우드 밸리 조류학회 주최',
    copyright: '© 2026 경이로운 날개. All rights reserved.',
  },
};
