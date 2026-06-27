// 中国政治制度全解 - 数据文件
// 设计风格：新中式极简主义 × 信息密集型仪表盘
// 配色：深红 #C41E3A（党）+ 金黄 #D4AF37（国）+ 深石板 #0D1117（背景）

export const cnNavSections = [
  {
    title: "基础框架",
    items: [
      { id: "foundation", label: "立国基石", num: "01" },
      { id: "party-system", label: "党的领导", num: "02" },
      { id: "politburo", label: "最高权力", num: "03" },
      { id: "party-congress", label: "党代会制度", num: "04" },
    ],
  },
  {
    title: "国家机构",
    items: [
      { id: "npc", label: "全国人大", num: "05" },
      { id: "state-council", label: "国务院", num: "06" },
      { id: "judiciary", label: "司法机关", num: "07" },
      { id: "supervision", label: "监察机关", num: "08" },
      { id: "military", label: "中央军委", num: "09" },
    ],
  },
  {
    title: "政党与协商",
    items: [
      { id: "multiparty", label: "多党合作", num: "10" },
      { id: "cppcc", label: "人民政协", num: "11" },
    ],
  },
  {
    title: "选举与民主",
    items: [
      { id: "election-system", label: "选举制度", num: "12" },
      { id: "grassroots", label: "基层民主", num: "13" },
      { id: "cadre", label: "干部选拔", num: "14" },
    ],
  },
  {
    title: "地方治理",
    items: [
      { id: "local-gov", label: "地方政府", num: "15" },
      { id: "summary", label: "制度总结", num: "16" },
    ],
  },
];

export const cnKeyStats = [
  { value: "9800", unit: "万", label: "中共党员总数", color: "#C41E3A", desc: "占全国人口约7%" },
  { value: "2977", unit: "名", label: "全国人大代表", color: "#D4AF37", desc: "第十四届（2023-2028）" },
  { value: "7", unit: "人", label: "政治局常委", color: "#C41E3A", desc: "国家最高决策核心" },
  { value: "5", unit: "年", label: "党代会周期", color: "#D4AF37", desc: "五年一届，选举中央委员会" },
  { value: "8", unit: "个", label: "民主党派", color: "#6A1B9A", desc: "参政党，非反对党" },
  { value: "4", unit: "级", label: "人大层级", color: "#1565C0", desc: "全国、省、市、县乡" },
];

export const politburoStanding = [
  { rank: 1, name: "习近平", roles: ["中共中央总书记", "国家主席", "中央军委主席"], color: "#C41E3A" },
  { rank: 2, name: "李强", roles: ["国务院总理", "中央政治局常委"], color: "#C41E3A" },
  { rank: 3, name: "赵乐际", roles: ["全国人大常委会委员长", "中央政治局常委"], color: "#C41E3A" },
  { rank: 4, name: "王沪宁", roles: ["全国政协主席", "中央政治局常委"], color: "#C41E3A" },
  { rank: 5, name: "蔡奇", roles: ["中央书记处书记", "中央政治局常委"], color: "#C41E3A" },
  { rank: 6, name: "丁薛祥", roles: ["国务院常务副总理", "中央政治局常委"], color: "#C41E3A" },
  { rank: 7, name: "李希", roles: ["中央纪律检查委员会书记", "中央政治局常委"], color: "#C41E3A" },
];

export const partyOrgLevels = [
  {
    level: 1,
    name: "中央政治局常务委员会",
    members: "7人",
    desc: "最高决策核心，集体领导国家事务",
    color: "#C41E3A",
    width: "20%",
  },
  {
    level: 2,
    name: "中央政治局",
    members: "24人",
    desc: "讨论决定党和国家重大方针政策",
    color: "#D4252A",
    width: "35%",
  },
  {
    level: 3,
    name: "中央委员会",
    members: "205名委员 + 171名候补",
    desc: "党代会闭会期间代表全党行使权力",
    color: "#E53935",
    width: "55%",
  },
  {
    level: 4,
    name: "全国代表大会",
    members: "约2300名代表",
    desc: "党的最高权力机关，每五年召开一次",
    color: "#EF5350",
    width: "75%",
  },
  {
    level: 5,
    name: "全体党员",
    members: "约9800万名",
    desc: "党的基础，分布于全国各地各行业",
    color: "#E57373",
    width: "100%",
  },
];

export const stateInstitutions = [
  {
    id: "npc",
    name: "全国人民代表大会",
    shortName: "全国人大",
    role: "最高国家权力机关",
    head: "赵乐际（委员长）",
    color: "#1565C0",
    icon: "⚖️",
    desc: "国家立法机关，选举产生其他国家机构领导人，审查批准国家预算",
    powers: ["制定和修改法律", "选举国家主席、国务院总理", "审批国家预算", "监督宪法实施"],
  },
  {
    id: "president",
    name: "国家主席",
    shortName: "国家主席",
    role: "国家元首（礼仪性）",
    head: "习近平",
    color: "#C41E3A",
    icon: "🏛️",
    desc: "对外代表国家，公布法律，发布命令。实际权力来自党的总书记职务",
    powers: ["公布法律", "发布命令", "接受外国使节", "授予国家荣誉"],
  },
  {
    id: "state-council",
    name: "国务院",
    shortName: "国务院",
    role: "最高行政机关",
    head: "李强（总理）",
    color: "#2E7D32",
    icon: "🏢",
    desc: "执行全国人大通过的法律，管理国家行政事务，下设26个组成部门",
    powers: ["执行法律法规", "制定行政法规", "管理国家行政", "编制国家预算"],
  },
  {
    id: "court",
    name: "最高人民法院",
    shortName: "最高法院",
    role: "最高审判机关",
    head: "张军（院长）",
    color: "#E65100",
    icon: "⚖️",
    desc: "监督地方各级法院和专门法院的审判工作，解释法律适用问题",
    powers: ["监督各级法院", "解释法律适用", "审理重大案件", "死刑复核"],
  },
  {
    id: "procuratorate",
    name: "最高人民检察院",
    shortName: "最高检察院",
    role: "最高检察机关",
    head: "应勇（检察长）",
    color: "#F57F17",
    icon: "🔍",
    desc: "对国家法律的统一正确实施实行监督，对刑事案件提起公诉",
    powers: ["法律监督", "提起公诉", "侦查职务犯罪", "监督执法"],
  },
  {
    id: "supervision",
    name: "国家监察委员会",
    shortName: "监察委",
    role: "国家监察机关（2018年新设）",
    head: "李希（主任）",
    color: "#6A1B9A",
    icon: "🛡️",
    desc: "与中央纪委合署办公，对所有行使公权力的公职人员进行监察，反腐败核心机构",
    powers: ["监察公职人员", "调查职务违法", "反腐败工作", "政务处分"],
  },
  {
    id: "military",
    name: "中央军事委员会",
    shortName: "中央军委",
    role: "最高军事领导机关",
    head: "习近平（主席）",
    color: "#1B5E20",
    icon: "⭐",
    desc: "领导全国武装力量，实行军委主席负责制，党对军队实行绝对领导",
    powers: ["领导武装力量", "制定军事战略", "指挥作战行动", "管理国防建设"],
  },
];

export const democraticParties = [
  { name: "中国国民党革命委员会", shortName: "民革", founded: 1948, members: "约13万", focus: "台湾问题、统一战线" },
  { name: "中国民主同盟", shortName: "民盟", founded: 1941, members: "约34万", focus: "教育、文化、科技" },
  { name: "中国民主建国会", shortName: "民建", founded: 1945, members: "约18万", focus: "经济、工商界" },
  { name: "中国民主促进会", shortName: "民进", founded: 1945, members: "约17万", focus: "教育、文化、出版" },
  { name: "中国农工民主党", shortName: "农工党", founded: 1930, members: "约20万", focus: "医疗卫生、人口资源" },
  { name: "中国致公党", shortName: "致公党", founded: 1925, members: "约5万", focus: "海外华人、对外交流" },
  { name: "九三学社", shortName: "九三学社", founded: 1945, members: "约17万", focus: "科学技术、高等教育" },
  { name: "台湾民主自治同盟", shortName: "台盟", founded: 1947, members: "约3000", focus: "台湾籍人士、两岸关系" },
];

export const electionLevels = [
  {
    level: "全国人大",
    method: "间接选举",
    electedBy: "省级人大代表",
    term: "5年",
    seats: 2977,
    color: "#1565C0",
    desc: "由各省、自治区、直辖市人大选举产生，另有解放军代表",
  },
  {
    level: "省级人大",
    method: "间接选举",
    electedBy: "设区的市级人大代表",
    term: "5年",
    seats: "各省不等",
    color: "#1976D2",
    desc: "由下一级人大选举产生，负责本省立法和监督",
  },
  {
    level: "设区的市级人大",
    method: "间接选举",
    electedBy: "县级人大代表",
    term: "5年",
    seats: "各市不等",
    color: "#1E88E5",
    desc: "由县级人大选举产生，负责本市立法和监督",
  },
  {
    level: "县乡级人大",
    method: "直接选举",
    electedBy: "选民直接投票",
    term: "5年",
    seats: "约250万名",
    color: "#42A5F5",
    desc: "唯一由选民直接选举产生的人大代表，是民主的基础层级",
  },
];

export const npcLegislativeProcess = [
  { step: 1, title: "法案提出", desc: "全国人大主席团、全国人大常委会、国务院、最高法院、最高检察院、各代表团或30名以上代表联名提出法律案", color: "#1565C0" },
  { step: 2, title: "审议讨论", desc: "提交全国人大相关专门委员会审议，提出审议意见；全体会议分组审议，代表发表意见", color: "#1976D2" },
  { step: 3, title: "修改完善", desc: "根据代表意见对法律草案进行修改，法律委员会统一审议，形成修改稿", color: "#1E88E5" },
  { step: 4, title: "表决通过", desc: "全体会议表决，普通法律需全体代表过半数通过；宪法修正案需三分之二以上多数", color: "#2196F3" },
  { step: 5, title: "公布施行", desc: "国家主席签署主席令予以公布，自公布之日起或规定日期起施行", color: "#42A5F5" },
];

export const localGovLevels = [
  { level: "省级", name: "省、自治区、直辖市", count: 34, color: "#C41E3A", desc: "最高地方行政单位，设省委书记（党）和省长（政）" },
  { level: "地级", name: "地级市、自治州、地区", count: 333, color: "#D4AF37", desc: "中间层级，设市委书记和市长" },
  { level: "县级", name: "县、县级市、市辖区", count: 2843, color: "#1565C0", desc: "基层政权的重要层级，设县委书记和县长" },
  { level: "乡级", name: "乡、镇、街道", count: 38755, color: "#2E7D32", desc: "最基层政权单位，直接面向群众" },
];

export const cadreSelectionSteps = [
  { step: 1, title: "民主推荐", desc: "在一定范围内进行民主推荐，广泛听取群众意见，确定初步人选" },
  { step: 2, title: "组织考察", desc: "组织部门对推荐人选进行全面考察，包括德、能、勤、绩、廉五个方面" },
  { step: 3, title: "民主测评", desc: "在更大范围内开展民主测评，了解群众对候选人的评价" },
  { step: 4, title: "党委讨论", desc: "党委集体讨论决定，按照民主集中制原则，集体研究确定任用人选" },
  { step: 5, title: "任前公示", desc: "在一定范围内进行任前公示，接受群众监督，公示期一般为5个工作日" },
  { step: 6, title: "正式任命", desc: "经过公示无异议后，由相应机关正式任命，颁发任命书" },
];
