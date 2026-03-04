import type { EventContent } from './types.js';

export const content: EventContent = {
  lang: 'zh',
  nav: {
    eventName: '奇翼之旅',
    links: [
      { label: '简介', href: '#intro' },
      { label: '鸟类', href: '#birds' },
      { label: '日程', href: '#schedule' },
      { label: '须知', href: '#info' },
    ],
  },
  hero: {
    title: '奇翼之旅',
    subtitle: '珍稀鸟类观赏体验',
    date: '2026年9月14日至15日',
    location: '红杉谷自然保护区',
    ctaLabel: '立即报名',
  },
  intro: {
    heading: '探索非凡之美',
    paragraphs: [
      '加入我们，在大自然中最壮丽的鸟类陪伴下度过一个难忘的周末。"奇翼之旅"汇聚热忱的观鸟爱好者、野生动物摄影师和自然爱好者，在原始森林栖息地中进行为期两天的专家导览探险。',
      '在经验丰富的鸟类学家带领下，您将获得在自然环境中观察珍稀物种的宝贵机会——从蜂鸟闪烁的虹彩光芒到黎明时分仙鹤翱翔天际的壮观景象。',
      '无论您是资深观鸟者还是刚对自然世界产生好奇，这次活动都将为您带来终生难忘的震撼瞬间。',
    ],
  },
  featuredBirds: {
    heading: '精选物种',
    birds: [
      {
        name: '红喉蜂鸟',
        description: '森林中的微小宝石。阳光下，其喉部羽毛闪耀出绚丽的深红色光泽，令人惊叹。',
        habitat: '林缘与花园',
        image: 'header-bird-ruby-throated-hummingbird.png',
      },
      {
        name: '雪松太平鸟',
        description: '优雅而善于社交的鸟类。光滑的冠羽和翅膀尖端蜡质般的红色装饰羽是其显著特征。',
        habitat: '浆果丰富的林地',
        image: 'header-bird-cedar-waxwing.png',
      },
      {
        name: '北美黑啄木鸟',
        description: '北美最大的啄木鸟。在枯木上凿出长方形洞穴时发出的强劲鼓声在原始森林中回荡。',
        habitat: '成熟落叶林',
        image: 'header-bird-pileated-woodpecker.png',
      },
      {
        name: '沙丘鹤',
        description: '自远古延续至今的优雅身影。它们表演精妙的求偶舞蹈，用独特的号角般鸣叫声填满天空。',
        habitat: '湿地与草原',
        image: 'header-bird-sandhill-crane.png',
      },
      {
        name: '林鸳鸯',
        description: '被誉为北美最美丽的鸭类。雄鸟展示出虹彩绿、紫色和栗色交织的绝妙色彩。',
        habitat: '林间沼泽与池塘',
        image: 'header-bird-wood-duck.png',
      },
    ],
  },
  schedule: {
    heading: '活动日程',
    days: [
      {
        dayLabel: '第一天 — 9月14日 星期六',
        items: [
          { time: '上午6:00', title: '黎明鸟鸣漫步', description: '在导览陪同下聆听森林苏醒的声音，开启美好的一天。' },
          { time: '上午8:30', title: '早餐与迎新', description: '欢迎会，专家介绍及发放观鸟手册。' },
          { time: '上午10:00', title: '湿地探险', description: '探索沼泽地，观察仙鹤、野鸭和涉禽。' },
          { time: '下午1:00', title: '午餐与摄影工作坊', description: '学习捕捉飞行中鸟类的拍摄技巧。' },
          { time: '下午3:00', title: '森林树冠步道', description: '穿越原始森林的高架步道——寻找啄木鸟和莺类。' },
          { time: '下午6:00', title: '日落观鸟', description: '在山脊观景台观赏傍晚的鸟类迁徙。' },
        ],
      },
      {
        dayLabel: '第二天 — 9月15日 星期日',
        items: [
          { time: '上午5:30', title: '蜂鸟花园参观', description: '清晨参观保护区的蜂鸟喂食站。' },
          { time: '上午8:00', title: '早餐与鸟鸣工作坊', description: '学习通过鸣叫声识别常见鸟类。' },
          { time: '上午10:00', title: '自由探索', description: '选择您喜欢的路线，可选配专业导览。' },
          { time: '中午12:30', title: '告别午餐与颁奖', description: '分享观鸟记录，庆祝周末的精彩时刻。' },
        ],
      },
    ],
  },
  practicalInfo: {
    heading: '实用信息',
    items: [
      { icon: 'location_on', title: '场地', detail: '红杉谷自然保护区，距市中心以北45分钟车程。提供免费停车。' },
      { icon: 'backpack', title: '携带物品', detail: '望远镜、舒适的登山鞋、适应天气的分层衣物、水壶和相机。' },
      { icon: 'accessibility', title: '无障碍设施', detail: '提供轮椅可通行的铺装路径。为视障来宾提供语音描述服务。' },
      { icon: 'restaurant', title: '餐饮', detail: '包含所有餐食。提供素食、纯素和无麸质选项——请在注册时注明饮食需求。' },
    ],
  },
  techWalkthrough: {
    heading: '这个页面如何识别你的语言',
    subtitle: '本站逐字分析文字内容，实时调整排版。无需服务器，无需Cookie，仅凭Unicode。',
    steps: [
      {
        icon: 'edit_note',
        title: '内容在Light DOM中渲染',
        body: '所有组件直接渲染到文档中，而非隐藏在Shadow DOM之后。全局MutationObserver监视整个页面的文本变化，Light DOM确保每个段落、标题和标签都可被观察。',
      },
      {
        icon: 'visibility',
        title: '观察器发现新文本',
        body: '当DOM发生变化时——标签切换、页面加载、注入新内容——观察器遍历节点树，找到所有P、H1–H6、SPAN、LI元素，提取原始文本并传递给检测引擎。',
      },
      {
        icon: 'translate',
        title: 'Unicode范围识别文字系统',
        body: '引擎统计特定Unicode区块中的字符：拉丁字母（A–Z、À–ɏ）、韩文（가–힣）、平假名（ぁ–ゖ）、片假名（ァ–ヿ）、CJK统一汉字（一–鿿）。韩文最先检查，因其独一无二。日文需要假名和汉字共同判断。中文则是纯CJK，不含假名。',
      },
      {
        icon: 'style',
        title: 'CSS类切换排版样式',
        body: '检测到的语言变成lang-ja、lang-ko、lang-zh或lang-en类，直接应用于元素。该类覆盖CSS自定义属性：字体切换为Noto Sans SC，行高调整为1.8，word-break变为break-all。浏览器完成其余工作。',
      },
    ],
    footnote: '检测完全在客户端运行。使用上方导航切换语言，观察字体变化。',
  },
  cta: {
    heading: '准备好展翅飞翔了吗？',
    body: '为确保亲密而尊重自然的体验，名额有限。立即预订，与我们共度难忘的周末。',
    buttonLabel: '报名参加奇翼之旅',
  },
  footer: {
    credits: '红杉谷鸟类学会主办',
    copyright: '© 2026 奇翼之旅. All rights reserved.',
  },
};
