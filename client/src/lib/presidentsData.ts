export interface President {
  number: number;
  name: string;
  nameCn: string;
  party: string;
  partyColor: string;
  term: string;
  years: [number, number];
  vp: string;
  born: string;
  died: string;
  state: string;
  keyEvents: string[];
  quote?: string;
  highlight?: string; // 一句话定性
}

export const presidents: President[] = [
  {
    number: 1, name: "George Washington", nameCn: "乔治·华盛顿",
    party: "无党派", partyColor: "#94a3b8",
    term: "1789–1797", years: [1789, 1797],
    vp: "约翰·亚当斯", born: "1732", died: "1799", state: "弗吉尼亚",
    keyEvents: ["建立联邦政府框架", "确立总统两届惯例", "签署《权利法案》", "华盛顿特区选址"],
    quote: "自由、公正与人道，是我们国家的基础。",
    highlight: "开国之父，奠定共和制度基石"
  },
  {
    number: 2, name: "John Adams", nameCn: "约翰·亚当斯",
    party: "联邦党", partyColor: "#6366f1",
    term: "1797–1801", years: [1797, 1801],
    vp: "托马斯·杰斐逊", born: "1735", died: "1826", state: "马萨诸塞",
    keyEvents: ["《外国人与煽动叛乱法》", "避免与法国全面战争", "迁都华盛顿特区"],
    highlight: "首位入住白宫的总统"
  },
  {
    number: 3, name: "Thomas Jefferson", nameCn: "托马斯·杰斐逊",
    party: "民主共和党", partyColor: "#22c55e",
    term: "1801–1809", years: [1801, 1809],
    vp: "阿龙·伯尔 / 乔治·克林顿", born: "1743", died: "1826", state: "弗吉尼亚",
    keyEvents: ["路易斯安那购地（领土翻倍）", "刘易斯与克拉克探险", "废除奴隶贸易（1808）"],
    quote: "所有人生而平等。",
    highlight: "《独立宣言》起草人，领土大扩张"
  },
  {
    number: 4, name: "James Madison", nameCn: "詹姆斯·麦迪逊",
    party: "民主共和党", partyColor: "#22c55e",
    term: "1809–1817", years: [1809, 1817],
    vp: "乔治·克林顿 / 埃尔布里奇·格里", born: "1751", died: "1836", state: "弗吉尼亚",
    keyEvents: ["1812年战争", "白宫被英军焚毁", "《联邦党人文集》作者之一"],
    highlight: "宪法之父，经历白宫被焚"
  },
  {
    number: 5, name: "James Monroe", nameCn: "詹姆斯·门罗",
    party: "民主共和党", partyColor: "#22c55e",
    term: "1817–1825", years: [1817, 1825],
    vp: "丹尼尔·D·汤普金斯", born: "1758", died: "1831", state: "弗吉尼亚",
    keyEvents: ["门罗主义宣言", "佛罗里达并入美国", "密苏里妥协"],
    highlight: "门罗主义，确立美洲霸权原则"
  },
  {
    number: 6, name: "John Quincy Adams", nameCn: "约翰·昆西·亚当斯",
    party: "民主共和党", partyColor: "#22c55e",
    term: "1825–1829", years: [1825, 1829],
    vp: "约翰·C·卡尔霍恩", born: "1767", died: "1848", state: "马萨诸塞",
    keyEvents: ["基础设施建设计划", "反对奴隶制扩张", "卸任后重返国会"],
    highlight: "第二任总统之子，卸任后仍任众议员"
  },
  {
    number: 7, name: "Andrew Jackson", nameCn: "安德鲁·杰克逊",
    party: "民主党", partyColor: "#3b82f6",
    term: "1829–1837", years: [1829, 1837],
    vp: "约翰·C·卡尔霍恩 / 马丁·范布伦", born: "1767", died: "1845", state: "田纳西",
    keyEvents: ["印第安人迁移法案（血泪之路）", "否决美国银行", "否决权大量使用"],
    highlight: "民粹主义先驱，强化总统权力"
  },
  {
    number: 8, name: "Martin Van Buren", nameCn: "马丁·范布伦",
    party: "民主党", partyColor: "#3b82f6",
    term: "1837–1841", years: [1837, 1841],
    vp: "理查德·M·约翰逊", born: "1782", died: "1862", state: "纽约",
    keyEvents: ["1837年经济恐慌", "独立财政系统建立", "阿米斯塔德号案件"],
    highlight: "首位非英裔出身总统（荷兰裔）"
  },
  {
    number: 9, name: "William Henry Harrison", nameCn: "威廉·亨利·哈里森",
    party: "辉格党", partyColor: "#f59e0b",
    term: "1841", years: [1841, 1841],
    vp: "约翰·泰勒", born: "1773", died: "1841", state: "俄亥俄",
    keyEvents: ["就职演讲长达近两小时", "就职31天后因肺炎去世"],
    highlight: "任期最短的总统，仅31天"
  },
  {
    number: 10, name: "John Tyler", nameCn: "约翰·泰勒",
    party: "辉格党/无党派", partyColor: "#f59e0b",
    term: "1841–1845", years: [1841, 1845],
    vp: "（无）", born: "1790", died: "1862", state: "弗吉尼亚",
    keyEvents: ["首位副总统继任者", "被辉格党开除", "德克萨斯并入美国"],
    highlight: "首位副总统继任总统，后支持南方邦联"
  },
  {
    number: 11, name: "James K. Polk", nameCn: "詹姆斯·K·波尔克",
    party: "民主党", partyColor: "#3b82f6",
    term: "1845–1849", years: [1845, 1849],
    vp: "乔治·M·达拉斯", born: "1795", died: "1849", state: "田纳西",
    keyEvents: ["美墨战争", "俄勒冈领土并入", "加利福尼亚并入（黄金热前夕）"],
    highlight: "领土扩张最成功的总统之一"
  },
  {
    number: 12, name: "Zachary Taylor", nameCn: "扎卡里·泰勒",
    party: "辉格党", partyColor: "#f59e0b",
    term: "1849–1850", years: [1849, 1850],
    vp: "米勒德·菲尔莫尔", born: "1784", died: "1850", state: "路易斯安那",
    keyEvents: ["反对奴隶制扩张", "任职16个月后去世"],
    highlight: "军事英雄，任内突然去世"
  },
  {
    number: 13, name: "Millard Fillmore", nameCn: "米勒德·菲尔莫尔",
    party: "辉格党", partyColor: "#f59e0b",
    term: "1850–1853", years: [1850, 1853],
    vp: "（无）", born: "1800", died: "1874", state: "纽约",
    keyEvents: ["1850年妥协案", "《逃奴法》签署", "派遣舰队打开日本门户"],
    highlight: "最后一位辉格党总统"
  },
  {
    number: 14, name: "Franklin Pierce", nameCn: "富兰克林·皮尔斯",
    party: "民主党", partyColor: "#3b82f6",
    term: "1853–1857", years: [1853, 1857],
    vp: "威廉·R·D·金", born: "1804", died: "1869", state: "新罕布什尔",
    keyEvents: ["堪萨斯-内布拉斯加法案", "流血堪萨斯冲突", "加速南北分裂"],
    highlight: "政策加速了内战爆发"
  },
  {
    number: 15, name: "James Buchanan", nameCn: "詹姆斯·布坎南",
    party: "民主党", partyColor: "#3b82f6",
    term: "1857–1861", years: [1857, 1861],
    vp: "约翰·C·布雷肯里奇", born: "1791", died: "1868", state: "宾夕法尼亚",
    keyEvents: ["德雷德·斯科特案", "南方各州开始脱离联邦", "拒绝阻止分裂"],
    highlight: "唯一终身未婚总统，任内联邦走向分裂"
  },
  {
    number: 16, name: "Abraham Lincoln", nameCn: "亚伯拉罕·林肯",
    party: "共和党", partyColor: "#ef4444",
    term: "1861–1865", years: [1861, 1865],
    vp: "汉尼拔·哈姆林 / 安德鲁·约翰逊", born: "1809", died: "1865", state: "伊利诺伊",
    keyEvents: ["领导南北战争", "《解放黑人奴隶宣言》", "《葛底斯堡演说》", "遇刺身亡"],
    quote: "民有、民治、民享的政府不会从地球上消失。",
    highlight: "废除奴隶制，维护联邦统一"
  },
  {
    number: 17, name: "Andrew Johnson", nameCn: "安德鲁·约翰逊",
    party: "民主党/联合党", partyColor: "#3b82f6",
    term: "1865–1869", years: [1865, 1869],
    vp: "（无）", born: "1808", died: "1875", state: "田纳西",
    keyEvents: ["战后重建政策", "首位遭众议院弹劾总统", "购买阿拉斯加"],
    highlight: "首位被弹劾总统，参议院一票之差未被免职"
  },
  {
    number: 18, name: "Ulysses S. Grant", nameCn: "尤利西斯·S·格兰特",
    party: "共和党", partyColor: "#ef4444",
    term: "1869–1877", years: [1869, 1877],
    vp: "斯凯勒·科尔法克斯 / 亨利·威尔逊", born: "1822", died: "1885", state: "俄亥俄",
    keyEvents: ["推进南方重建", "第十五修正案批准", "信用动员丑闻"],
    highlight: "内战名将，任内腐败丑闻频发"
  },
  {
    number: 19, name: "Rutherford B. Hayes", nameCn: "拉瑟福德·B·海斯",
    party: "共和党", partyColor: "#ef4444",
    term: "1877–1881", years: [1877, 1881],
    vp: "威廉·A·惠勒", born: "1822", died: "1893", state: "俄亥俄",
    keyEvents: ["1877年妥协（结束重建）", "撤出南方联邦军队", "文官制度改革"],
    highlight: "争议选举当选，结束南方重建时代"
  },
  {
    number: 20, name: "James A. Garfield", nameCn: "詹姆斯·A·加菲尔德",
    party: "共和党", partyColor: "#ef4444",
    term: "1881", years: [1881, 1881],
    vp: "切斯特·A·阿瑟", born: "1831", died: "1881", state: "俄亥俄",
    keyEvents: ["就职仅4个月遭枪击", "两个月后伤重不治"],
    highlight: "任期第二短，遇刺后推动文官制度改革"
  },
  {
    number: 21, name: "Chester A. Arthur", nameCn: "切斯特·A·阿瑟",
    party: "共和党", partyColor: "#ef4444",
    term: "1881–1885", years: [1881, 1885],
    vp: "（无）", born: "1829", died: "1886", state: "纽约",
    keyEvents: ["《彭德尔顿文官改革法》", "排华法案签署", "海军现代化"],
    highlight: "出乎意料地推动文官制度改革"
  },
  {
    number: 22, name: "Grover Cleveland", nameCn: "格罗弗·克利夫兰",
    party: "民主党", partyColor: "#3b82f6",
    term: "1885–1889", years: [1885, 1889],
    vp: "托马斯·A·亨德里克斯", born: "1837", died: "1908", state: "纽约",
    keyEvents: ["大量使用否决权（414次）", "州际商业委员会建立", "反对高关税"],
    highlight: "唯一连任不连续的总统（第22、24任）"
  },
  {
    number: 23, name: "Benjamin Harrison", nameCn: "本杰明·哈里森",
    party: "共和党", partyColor: "#ef4444",
    term: "1889–1893", years: [1889, 1893],
    vp: "莱维·P·莫顿", born: "1833", died: "1901", state: "印第安纳",
    keyEvents: ["六个新州加入联邦", "《谢尔曼反托拉斯法》", "《麦金利关税法》"],
    highlight: "威廉·亨利·哈里森之孙"
  },
  {
    number: 24, name: "Grover Cleveland", nameCn: "格罗弗·克利夫兰",
    party: "民主党", partyColor: "#3b82f6",
    term: "1893–1897", years: [1893, 1897],
    vp: "阿德莱·E·史蒂文森", born: "1837", died: "1908", state: "纽约",
    keyEvents: ["1893年经济恐慌", "镇压普尔曼大罢工", "反对夏威夷并吞"],
    highlight: "史上唯一两度不连续执政的总统"
  },
  {
    number: 25, name: "William McKinley", nameCn: "威廉·麦金利",
    party: "共和党", partyColor: "#ef4444",
    term: "1897–1901", years: [1897, 1901],
    vp: "加勒特·A·霍巴特 / 西奥多·罗斯福", born: "1843", died: "1901", state: "俄亥俄",
    keyEvents: ["美西战争", "菲律宾、关岛、波多黎各并入", "遇刺身亡"],
    highlight: "美国帝国主义扩张的开端"
  },
  {
    number: 26, name: "Theodore Roosevelt", nameCn: "西奥多·罗斯福",
    party: "共和党", partyColor: "#ef4444",
    term: "1901–1909", years: [1901, 1909],
    vp: "查尔斯·W·费尔班克斯", born: "1858", died: "1919", state: "纽约",
    keyEvents: ["反托拉斯运动（解散标准石油）", "巴拿马运河开建", "诺贝尔和平奖", "国家公园体系"],
    quote: "说话要轻，但手持大棒。",
    highlight: "进步主义时代领袖，最年轻的总统"
  },
  {
    number: 27, name: "William Howard Taft", nameCn: "威廉·霍华德·塔夫脱",
    party: "共和党", partyColor: "#ef4444",
    term: "1909–1913", years: [1909, 1913],
    vp: "詹姆斯·S·谢尔曼", born: "1857", died: "1930", state: "俄亥俄",
    keyEvents: ["第十六修正案（所得税）", "第十七修正案（直选参议员）", "后任最高法院首席大法官"],
    highlight: "唯一同时担任过总统和最高法院首席大法官"
  },
  {
    number: 28, name: "Woodrow Wilson", nameCn: "伍德罗·威尔逊",
    party: "民主党", partyColor: "#3b82f6",
    term: "1913–1921", years: [1913, 1921],
    vp: "托马斯·R·马歇尔", born: "1856", died: "1924", state: "新泽西",
    keyEvents: ["一战参战", "十四点和平原则", "国际联盟倡议（未获批准）", "联邦储备系统建立"],
    quote: "世界必须为民主而安全。",
    highlight: "国际主义奠基人，诺贝尔和平奖"
  },
  {
    number: 29, name: "Warren G. Harding", nameCn: "沃伦·G·哈丁",
    party: "共和党", partyColor: "#ef4444",
    term: "1921–1923", years: [1921, 1923],
    vp: "卡尔文·柯立芝", born: "1865", died: "1923", state: "俄亥俄",
    keyEvents: ["茶壶山丑闻", "回归正常主义", "任内突然去世"],
    highlight: "茶壶山丑闻，历史评价最低之一"
  },
  {
    number: 30, name: "Calvin Coolidge", nameCn: "卡尔文·柯立芝",
    party: "共和党", partyColor: "#ef4444",
    term: "1923–1929", years: [1923, 1929],
    vp: "查尔斯·G·道斯", born: "1872", died: "1933", state: "马萨诸塞",
    keyEvents: ["咆哮的二十年代繁荣", "减税政策", "移民限制法案"],
    highlight: "沉默的卡尔，放任自由主义经济"
  },
  {
    number: 31, name: "Herbert Hoover", nameCn: "赫伯特·胡佛",
    party: "共和党", partyColor: "#ef4444",
    term: "1929–1933", years: [1929, 1933],
    vp: "查尔斯·柯蒂斯", born: "1874", died: "1964", state: "加利福尼亚",
    keyEvents: ["大萧条爆发", "斯穆特-霍利关税法", "胡佛村（流浪者营地）"],
    highlight: "大萧条的替罪羊，经济政策饱受批评"
  },
  {
    number: 32, name: "Franklin D. Roosevelt", nameCn: "富兰克林·D·罗斯福",
    party: "民主党", partyColor: "#3b82f6",
    term: "1933–1945", years: [1933, 1945],
    vp: "约翰·N·加纳 / 亨利·A·华莱士 / 哈里·S·杜鲁门", born: "1882", died: "1945", state: "纽约",
    keyEvents: ["新政（New Deal）", "二战领导", "炉边谈话广播", "唯一四届当选总统"],
    quote: "我们唯一需要恐惧的，就是恐惧本身。",
    highlight: "新政拯救经济，唯一四任总统"
  },
  {
    number: 33, name: "Harry S. Truman", nameCn: "哈里·S·杜鲁门",
    party: "民主党", partyColor: "#3b82f6",
    term: "1945–1953", years: [1945, 1953],
    vp: "阿尔本·W·巴克利", born: "1884", died: "1972", state: "密苏里",
    keyEvents: ["下令投放原子弹", "马歇尔计划", "北约成立", "朝鲜战争"],
    quote: "如果你受不了热，就离开厨房。",
    highlight: "冷战格局奠定者，原子弹决策者"
  },
  {
    number: 34, name: "Dwight D. Eisenhower", nameCn: "德怀特·D·艾森豪威尔",
    party: "共和党", partyColor: "#ef4444",
    term: "1953–1961", years: [1953, 1961],
    vp: "理查德·M·尼克松", born: "1890", died: "1969", state: "堪萨斯",
    keyEvents: ["朝鲜战争停战", "州际高速公路系统", "警告军工复合体", "太空竞赛开始"],
    highlight: "二战盟军最高统帅，冷战稳定者"
  },
  {
    number: 35, name: "John F. Kennedy", nameCn: "约翰·F·肯尼迪",
    party: "民主党", partyColor: "#3b82f6",
    term: "1961–1963", years: [1961, 1963],
    vp: "林登·B·约翰逊", born: "1917", died: "1963", state: "马萨诸塞",
    keyEvents: ["古巴导弹危机", "阿波罗登月计划启动", "柏林危机", "遇刺身亡"],
    quote: "不要问国家能为你做什么，要问你能为国家做什么。",
    highlight: "最年轻当选总统，遇刺成为永恒传奇"
  },
  {
    number: 36, name: "Lyndon B. Johnson", nameCn: "林登·B·约翰逊",
    party: "民主党", partyColor: "#3b82f6",
    term: "1963–1969", years: [1963, 1969],
    vp: "休伯特·H·汉弗莱", born: "1908", died: "1973", state: "德克萨斯",
    keyEvents: ["《民权法案》1964", "伟大社会计划", "越战升级", "《投票权法》1965"],
    highlight: "民权立法里程碑，越战泥潭"
  },
  {
    number: 37, name: "Richard M. Nixon", nameCn: "理查德·M·尼克松",
    party: "共和党", partyColor: "#ef4444",
    term: "1969–1974", years: [1969, 1974],
    vp: "斯皮罗·T·阿格纽 / 杰拉尔德·R·福特", born: "1913", died: "1994", state: "加利福尼亚",
    keyEvents: ["访问中国（破冰）", "越战撤军", "水门事件", "唯一辞职总统"],
    quote: "我不是骗子。",
    highlight: "打开中美关系大门，水门丑闻被迫辞职"
  },
  {
    number: 38, name: "Gerald R. Ford", nameCn: "杰拉尔德·R·福特",
    party: "共和党", partyColor: "#ef4444",
    term: "1974–1977", years: [1974, 1977],
    vp: "纳尔逊·A·洛克菲勒", born: "1913", died: "2006", state: "密歇根",
    keyEvents: ["特赦尼克松", "西贡陷落", "从未经全国选举产生的总统"],
    highlight: "唯一未经选举产生的总统（副总统→总统）"
  },
  {
    number: 39, name: "Jimmy Carter", nameCn: "吉米·卡特",
    party: "民主党", partyColor: "#3b82f6",
    term: "1977–1981", years: [1977, 1981],
    vp: "沃尔特·F·蒙代尔", born: "1924", died: "2024", state: "佐治亚",
    keyEvents: ["《戴维营协议》（以埃和平）", "伊朗人质危机", "能源危机", "诺贝尔和平奖（卸任后）"],
    highlight: "卸任后致力人道主义，获诺贝尔和平奖"
  },
  {
    number: 40, name: "Ronald Reagan", nameCn: "罗纳德·里根",
    party: "共和党", partyColor: "#ef4444",
    term: "1981–1989", years: [1981, 1989],
    vp: "乔治·H·W·布什", born: "1911", died: "2004", state: "加利福尼亚",
    keyEvents: ["里根经济学（减税+军备竞赛）", "冷战终结推手", "遇刺未遂", "伊朗门事件"],
    quote: "政府不是解决问题的方案，政府本身就是问题。",
    highlight: "保守主义革命，冷战终结推手"
  },
  {
    number: 41, name: "George H. W. Bush", nameCn: "乔治·H·W·布什",
    party: "共和党", partyColor: "#ef4444",
    term: "1989–1993", years: [1989, 1993],
    vp: "丹·奎尔", born: "1924", died: "2018", state: "德克萨斯",
    keyEvents: ["柏林墙倒塌", "海湾战争（沙漠风暴）", "苏联解体", "《北美自由贸易协定》谈判"],
    highlight: "冷战终结见证者，海湾战争胜利者"
  },
  {
    number: 42, name: "Bill Clinton", nameCn: "比尔·克林顿",
    party: "民主党", partyColor: "#3b82f6",
    term: "1993–2001", years: [1993, 2001],
    vp: "阿尔·戈尔", born: "1946", died: "", state: "阿肯色",
    keyEvents: ["经济繁荣（财政盈余）", "NAFTA签署", "莱温斯基丑闻", "第二位被弹劾总统"],
    quote: "我感受到你的痛苦。",
    highlight: "经济繁荣时代，性丑闻遭弹劾"
  },
  {
    number: 43, name: "George W. Bush", nameCn: "乔治·W·布什",
    party: "共和党", partyColor: "#ef4444",
    term: "2001–2009", years: [2001, 2009],
    vp: "迪克·切尼", born: "1946", died: "", state: "德克萨斯",
    keyEvents: ["9/11恐怖袭击", "阿富汗战争", "伊拉克战争", "《爱国者法案》"],
    highlight: "9/11后反恐战争，伊拉克战争争议"
  },
  {
    number: 44, name: "Barack Obama", nameCn: "巴拉克·奥巴马",
    party: "民主党", partyColor: "#3b82f6",
    term: "2009–2017", years: [2009, 2017],
    vp: "乔·拜登", born: "1961", died: "", state: "伊利诺伊",
    keyEvents: ["《平价医疗法》（奥巴马医改）", "击毙本·拉登", "2008金融危机应对", "诺贝尔和平奖"],
    quote: "是的，我们能做到。",
    highlight: "首位非裔美国总统，诺贝尔和平奖"
  },
  {
    number: 45, name: "Donald J. Trump", nameCn: "唐纳德·J·特朗普",
    party: "共和党", partyColor: "#ef4444",
    term: "2017–2021", years: [2017, 2021],
    vp: "迈克·彭斯", born: "1946", died: "", state: "纽约/佛罗里达",
    keyEvents: ["贸易战（对华关税）", "两次弹劾（均未被定罪）", "COVID-19疫情", "1月6日国会山冲击事件"],
    highlight: "唯一两次遭弹劾总统，颠覆传统政治"
  },
  {
    number: 46, name: "Joe Biden", nameCn: "乔·拜登",
    party: "民主党", partyColor: "#3b82f6",
    term: "2021–2025", years: [2021, 2025],
    vp: "卡马拉·哈里斯", born: "1942", died: "", state: "特拉华",
    keyEvents: ["阿富汗撤军", "《基础设施投资法》", "俄乌战争援助", "退出2024年竞选"],
    highlight: "史上最年长就任总统，首位女性副总统搭档"
  },
  {
    number: 47, name: "Donald J. Trump", nameCn: "唐纳德·J·特朗普",
    party: "共和党", partyColor: "#ef4444",
    term: "2025–至今", years: [2025, 2025],
    vp: "J·D·万斯", born: "1946", died: "", state: "佛罗里达",
    keyEvents: ["重返白宫（史上第二位非连续执政总统）", "大规模关税政策", "DOGE政府效率部门"],
    highlight: "史上第二位非连续执政总统"
  },
];

export const partyStats = [
  { party: "共和党", color: "#ef4444", count: presidents.filter(p => p.party.includes("共和党")).length },
  { party: "民主党", color: "#3b82f6", count: presidents.filter(p => p.party.includes("民主党")).length },
  { party: "辉格党", color: "#f59e0b", count: presidents.filter(p => p.party.includes("辉格党")).length },
  { party: "民主共和党", color: "#22c55e", count: presidents.filter(p => p.party.includes("民主共和党")).length },
  { party: "联邦党/无党派", color: "#94a3b8", count: presidents.filter(p => p.party === "无党派" || p.party.includes("联邦党")).length },
];

export const stateStats = [
  { state: "俄亥俄", count: 7 },
  { state: "纽约", count: 5 },
  { state: "弗吉尼亚", count: 5 },
  { state: "德克萨斯", count: 3 },
  { state: "马萨诸塞", count: 3 },
  { state: "加利福尼亚", count: 3 },
];
