// Japan Political System Data
// Design: Deep Navy × Crimson Red × Sakura Pink × Silver White
// Typography: Space Grotesk (headings) + Noto Serif SC (body)

export const jpStats = [
  { label: "都道府县", value: 47, suffix: "个", color: "#E8344E" },
  { label: "众议院席位", value: 465, suffix: "席", color: "#C0A0FF" },
  { label: "参议院席位", value: 248, suffix: "席", color: "#FF9BB0" },
  { label: "自民党执政年数", value: 65, suffix: "年+", color: "#FFD700" },
  { label: "宪法第九条", value: 1947, suffix: "年", color: "#7EC8E3" },
  { label: "选举投票年龄", value: 18, suffix: "岁", color: "#5BAD6F" },
];

export const jpInstitutions = [
  {
    id: "tenno",
    name: "天皇",
    japaneseName: "天皇（Tennō）",
    icon: "🌸",
    color: "#FFD700",
    description: "日本国及日本国民统合的象征，无政治实权。现任天皇为德仁（令和天皇），2019年即位。",
    powers: [
      "任命内阁总理大臣（依国会提名）",
      "任命最高裁判所长官（依内阁提名）",
      "公布宪法修正案、法律、政令",
      "召集国会、宣布众议院解散",
      "主持国事行为（外交接待等）",
    ],
    details: "天皇的所有国事行为须经内阁建议和承认，实质上由内阁决定。天皇不能参与政治，不能发表政治意见。皇位由男性皇族继承（皇位继承争议持续中）。现任皇嗣为秋篠宫文仁亲王。",
  },
  {
    id: "kokkai",
    name: "国会",
    japaneseName: "国会（Kokkai）",
    icon: "🏛️",
    color: "#7EC8E3",
    description: "国家最高权力机关，唯一立法机关。由众议院和参议院组成，均由民选产生。",
    powers: [
      "制定、修改、废止法律",
      "审议批准国家预算",
      "批准国际条约",
      "提名内阁总理大臣",
      "发动宪法修正程序",
      "国政调查权（监督行政）",
    ],
    details: "众议院权力优于参议院：预算、条约批准、首相提名若两院不一致，以众议院为准。众议院可通过内阁不信任案，参议院不可。国会分为常会（每年1月召开，会期150天）、临时会和特别会。",
  },
  {
    id: "shugiin",
    name: "众议院",
    japaneseName: "衆議院（Shūgiin）",
    icon: "🗳️",
    color: "#E8344E",
    description: "下院，465席，任期4年（可提前解散）。拥有预算先议权、条约批准优先权、首相提名优先权。",
    powers: [
      "预算案先议权（参议院只能审议，不能修改）",
      "条约批准优先权",
      "首相提名优先权",
      "通过内阁不信任案（参议院无此权）",
      "法律案优先审议",
    ],
    details: "选举制度：289席小选举区（单一选区相对多数制）+ 176席比例代表区（11个区块）。内阁可建议天皇解散众议院，解散后40天内举行大选，大选后30天内召开特别国会选举首相。",
  },
  {
    id: "sangiin",
    name: "参议院",
    japaneseName: "参議院（Sangiin）",
    icon: "📜",
    color: "#C0A0FF",
    description: "上院，248席，任期6年，每3年改选一半（不可解散）。作为众议院的制衡，提供更稳定的立法审议。",
    powers: [
      "审议众议院通过的法律案",
      "对法律案有60天审议期（超时视为否决）",
      "众议院解散期间召开紧急集会",
      "参与条约批准",
      "国政调查权",
    ],
    details: "选举制度：148席选举区（都道府县为单位，1-6席）+ 100席全国比例代表（个人名单制，选民可选政党或候选人）。参议院不可解散，提供政治稳定性。若两院对法律案意见不同，众议院可以2/3多数再次通过。",
  },
  {
    id: "naikaku",
    name: "内阁",
    japaneseName: "内閣（Naikaku）",
    icon: "⚡",
    color: "#FF9BB0",
    description: "最高行政机关，由内阁总理大臣（首相）及国务大臣组成，对国会负责。",
    powers: [
      "执行法律、处理国务",
      "制定政令",
      "编制预算案提交国会",
      "缔结条约（须国会批准）",
      "任命最高裁判所长官以外的法官",
      "决定解散众议院",
    ],
    details: "内阁成员通常20人以内，过半数须为国会议员。内阁会议须全体一致（实质上首相意见决定一切）。若众议院通过不信任案，内阁须在10天内总辞职或解散众议院。",
  },
  {
    id: "saibancho",
    name: "最高裁判所",
    japaneseName: "最高裁判所（Saikō Saibansho）",
    icon: "⚖️",
    color: "#5BAD6F",
    description: "司法最高机关，15名法官，拥有违宪立法审查权。独特的国民审查制度：选民可在众议院大选时投票罢免法官。",
    powers: [
      "违宪立法审查（附带审查制）",
      "民事、刑事、行政终审",
      "制定法院规则",
      "监督下级法院",
    ],
    details: "15名法官由内阁任命，天皇认证，长官由内阁提名。国民审查：每次众议院大选时，选民可对就任后首次接受审查的法官投票，过半数投罢免票则罢免（历史上从未有法官被罢免）。日本最高裁判所历史上极少宣布法律违宪，被批评司法保守。",
  },
];

export const jpElectionSystem = {
  shugiin: {
    title: "众议院选举制度",
    subtitle: "小选举区比例代表并立制",
    total: 465,
    methods: [
      {
        name: "小选举区",
        seats: 289,
        color: "#E8344E",
        description: "全国划分289个选区，每区选出1名议员，相对多数制（得票最多者当选）。",
        pros: ["选区与议员关系密切", "政治稳定性高", "易于产生多数政府"],
        cons: ["小党难以进入议会", "大量选票'浪费'", "易受选区划分影响"],
      },
      {
        name: "比例代表区",
        seats: 176,
        color: "#C0A0FF",
        description: "全国划分11个区块，选民投票给政党，按各党得票比例分配席位（名单制）。",
        pros: ["反映政党实际支持率", "小党有机会进入议会", "减少选票浪费"],
        cons: ["选民与议员联系较弱", "可能产生碎片化议会"],
      },
    ],
    note: "候选人可同时参加小选举区和比例代表区（重复立候补），小选举区落选者可能通过比例代表区当选。",
  },
  sangiin: {
    title: "参议院选举制度",
    subtitle: "选举区 + 全国比例代表",
    total: 248,
    methods: [
      {
        name: "选举区",
        seats: 148,
        color: "#7EC8E3",
        description: "以都道府县为单位，每次改选74席（1-6席不等）。大选区采用连记制。",
      },
      {
        name: "全国比例代表",
        seats: 100,
        color: "#FFD700",
        description: "全国为一个选区，选民可投票给政党或候选人个人（个人名单制）。每次改选50席。",
      },
    ],
  },
};

export const jpParties = [
  {
    name: "自由民主党",
    abbr: "自民党 LDP",
    color: "#E8344E",
    bgColor: "#8B0000",
    ideology: "保守主义、自由保守主义",
    founded: 1955,
    seats2026: 310,
    description: "日本最大政党，自1955年起几乎持续执政（除1993-1994年和2009-2012年短暂在野）。'五五年体制'的核心。",
    positions: ["修改宪法第九条", "强化日美同盟", "经济增长优先", "传统价值观"],
    leaders: ["高市早苗（现任首相）"],
    coalition: "与公明党联合执政",
  },
  {
    name: "公明党",
    abbr: "Komeito",
    color: "#FF9BB0",
    bgColor: "#8B4560",
    ideology: "中间偏右、佛教民主主义",
    founded: 1964,
    seats2026: 32,
    description: "创价学会的政治组织，自1999年起与自民党联合执政。在福利政策上偏左，在外交上偏温和。",
    positions: ["和平主义", "福利政策", "中小企业支持", "日中关系改善"],
    leaders: ["山口那津男"],
    coalition: "自民党长期联盟",
  },
  {
    name: "立宪民主党",
    abbr: "CDP",
    color: "#4A90D9",
    bgColor: "#1a3a6b",
    ideology: "中左、社会自由主义",
    founded: 2017,
    seats2026: 65,
    description: "最大在野党，由民主党系各党整合而来。反对修宪，主张保护劳动权益和宪法第九条。",
    positions: ["护宪", "劳动权益", "脱核电", "多元社会"],
    leaders: ["野田佳彦"],
    coalition: "在野党第一大党",
  },
  {
    name: "日本维新会",
    abbr: "Ishin",
    color: "#FF8C00",
    bgColor: "#7B4000",
    ideology: "中右、地方分权主义",
    founded: 2015,
    seats2026: 38,
    description: "发源于大阪的地方政党，主张大阪都构想、地方分权、行政改革，近年扩展为全国性政党。",
    positions: ["地方分权", "行政改革", "教育改革", "道州制"],
    leaders: ["吉村洋文"],
    coalition: "在野党第二大党",
  },
  {
    name: "国民民主党",
    abbr: "DPP",
    color: "#FFD700",
    bgColor: "#7B6000",
    ideology: "中间、经济自由主义",
    founded: 2018,
    seats2026: 28,
    description: "中间路线政党，关注经济政策和劳动者权益，在2024年大选中因'103万円壁'政策获得支持。",
    positions: ["减税", "工资提升", "能源政策", "经济安保"],
    leaders: ["玉木雄一郎"],
    coalition: "部分议题支持自民党",
  },
  {
    name: "日本共产党",
    abbr: "JCP",
    color: "#CC0000",
    bgColor: "#660000",
    ideology: "左翼、共产主义",
    founded: 1922,
    seats2026: 8,
    description: "日本历史最悠久的政党之一，坚持护宪、反对日美安保条约、主张废除天皇制（现已软化立场）。",
    positions: ["护宪", "反安保条约", "福利扩大", "反核武"],
    leaders: ["田村智子"],
    coalition: "在野党",
  },
];

export const jpPMSelection = [
  { step: 1, title: "众议院大选", desc: "选民投票，决定各党席位分配。执政党须维持或重新获得多数席位。", icon: "🗳️" },
  { step: 2, title: "自民党总裁选举", desc: "党员投票（约100万人）+ 国会议员投票，选出自民党总裁。总裁通常成为首相。", icon: "🏆" },
  { step: 3, title: "特别国会召开", desc: "大选后30天内召开特别国会，专门用于选举内阁总理大臣。", icon: "🏛️" },
  { step: 4, title: "众议院投票", desc: "众议院议员投票选举首相，通常执政党党首当选（相对多数）。", icon: "📊" },
  { step: 5, title: "参议院投票", desc: "参议院同时投票。若两院结果不同，召开两院协议会；若无法达成一致，以众议院为准。", icon: "⚖️" },
  { step: 6, title: "天皇任命", desc: "天皇依国会提名正式任命内阁总理大臣（国事行为，无实质决定权）。", icon: "🌸" },
  { step: 7, title: "组建内阁", desc: "首相任命国务大臣（通常20人以内），过半数须为国会议员。天皇认证。", icon: "📋" },
];

export const jpLDPFactions = [
  { name: "清和政策研究会（安倍派）", members: "已解散（2024年）", note: "因政治献金丑闻解散，曾是最大派阀" },
  { name: "平成研究会（茂木派）", members: "已解散（2024年）", note: "因丑闻解散" },
  { name: "宏池会（岸田派）", members: "已解散（2024年）", note: "岸田文雄主动解散" },
  { name: "志帅会（二阶派）", members: "已解散（2024年）", note: "因丑闻解散" },
  { name: "麻生派（志公会）", members: "约60人", note: "目前最大存续派阀" },
  { name: "无派阀", members: "约200人+", note: "2024年丑闻后大量议员宣布脱派" },
];

export const jpLocalGov = [
  { level: "都道府县", count: 47, type: "1都（东京）、1道（北海道）、2府（大阪、京都）、43县", leader: "知事（直选，任期4年）", assembly: "都道府县议会（直选）" },
  { level: "市", count: 792, type: "政令指定都市（20个）、中核市、一般市", leader: "市长（直选，任期4年）", assembly: "市议会（直选）" },
  { level: "町", count: 743, type: "介于市和村之间", leader: "町长（直选，任期4年）", assembly: "町议会（直选）" },
  { level: "村", count: 183, type: "人口最少的基层单位", leader: "村长（直选，任期4年）", assembly: "村议会（直선）" },
];

export const jpConstitutionArticle9 = {
  text: "日本国民衷心谋求基于正义与秩序的国际和平，永远放弃以国权发动的战争、武力威胁或武力行使作为解决国际争端的手段。为达到前项目的，不保持陆海空军及其他战争力量，不承认国家的交战权。",
  interpretation: "战后日本通过'自卫队'维持军事力量，政府解释为'专守防卫'不违宪。2015年安倍政府通过安保法制，允许'集体自卫权'，引发宪法争议。",
  debate: [
    { side: "修宪派（自民党为主）", view: "第九条过时，应明确自卫队合宪地位，允许更积极的安全政策" },
    { side: "护宪派（立宪民主党、共产党等）", view: "第九条是和平主义的基石，修改将导致日本重走军国主义道路" },
  ],
  status: "修宪须国会两院各2/3多数通过，再经国民投票过半数批准。自民党多次推动修宪，但始终未能完成程序。",
};

export const jpSections = [
  { id: "intro", title: "立国基石", subtitle: "宪法与象征天皇制" },
  { id: "institutions", title: "核心机构", subtitle: "国会、内阁、天皇" },
  { id: "diet", title: "国会两院", subtitle: "众议院与参议院" },
  { id: "pmselection", title: "首相产生", subtitle: "七步选举流程" },
  { id: "election", title: "选举制度", subtitle: "并立制详解" },
  { id: "parties", title: "政党格局", subtitle: "自民党与在野党" },
  { id: "ldp", title: "自民党政治", subtitle: "派阀与长期执政" },
  { id: "article9", title: "宪法第九条", subtitle: "和平主义与修宪争议" },
  { id: "local", title: "地方政治", subtitle: "47都道府县" },
  { id: "comparison", title: "制度对比", subtitle: "与其他民主国家比较" },
];
