// ============================================================
// 美国政治制度全解 - 网站数据
// 知识图谱设计风格：每章节有专属颜色标识
// ============================================================

export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  color: string;
  colorClass: string;
  bgClass: string;
  icon: string;
  category: 'structure' | 'election' | 'party' | 'mechanism';
}

export const chapters: Chapter[] = [
  { id: 'constitution', number: '01', title: '立国基石', subtitle: '宪法与联邦制', color: '#F59E0B', colorClass: 'text-amber-400', bgClass: 'bg-amber-400', icon: '📜', category: 'structure' },
  { id: 'separation', number: '02', title: '三权分立', subtitle: '权力架构与制衡', color: '#60A5FA', colorClass: 'text-blue-400', bgClass: 'bg-blue-400', icon: '⚖️', category: 'structure' },
  { id: 'congress', number: '03', title: '立法分支', subtitle: '国会的组成与运作', color: '#3B82F6', colorClass: 'text-blue-500', bgClass: 'bg-blue-500', icon: '🏛️', category: 'structure' },
  { id: 'president', number: '04', title: '行政分支', subtitle: '总统与行政体系', color: '#EF4444', colorClass: 'text-red-400', bgClass: 'bg-red-400', icon: '🦅', category: 'structure' },
  { id: 'judiciary', number: '05', title: '司法分支', subtitle: '联邦法院与司法审查', color: '#22C55E', colorClass: 'text-green-400', bgClass: 'bg-green-400', icon: '⚖️', category: 'structure' },
  { id: 'federalism', number: '06', title: '政府层级', subtitle: '联邦、州与地方', color: '#06B6D4', colorClass: 'text-cyan-400', bgClass: 'bg-cyan-400', icon: '🗺️', category: 'structure' },
  { id: 'parties', number: '07', title: '两党制度', subtitle: '民主党与共和党', color: '#A78BFA', colorClass: 'text-violet-400', bgClass: 'bg-violet-400', icon: '🐘🫏', category: 'party' },
  { id: 'presidential-election', number: '08', title: '总统选举', subtitle: '从参选到就职典礼', color: '#F59E0B', colorClass: 'text-amber-400', bgClass: 'bg-amber-400', icon: '🗳️', category: 'election' },
  { id: 'congress-election', number: '09', title: '国会选举', subtitle: '中期选举与选区政治', color: '#3B82F6', colorClass: 'text-blue-400', bgClass: 'bg-blue-400', icon: '🗳️', category: 'election' },
  { id: 'electoral-college', number: '10', title: '选举人团', subtitle: '美国独特的间接选举', color: '#F97316', colorClass: 'text-orange-400', bgClass: 'bg-orange-400', icon: '🗺️', category: 'election' },
  { id: 'primary', number: '11', title: '初选制度', subtitle: '党内民主的运作', color: '#EC4899', colorClass: 'text-pink-400', bgClass: 'bg-pink-400', icon: '🗳️', category: 'election' },
  { id: 'voters', number: '12', title: '选民制度', subtitle: '登记、投票与资格', color: '#10B981', colorClass: 'text-emerald-400', bgClass: 'bg-emerald-400', icon: '👤', category: 'election' },
  { id: 'gerrymandering', number: '13', title: '选区划分', subtitle: '杰利蝾螈与选区操纵', color: '#F43F5E', colorClass: 'text-rose-400', bgClass: 'bg-rose-400', icon: '🗺️', category: 'mechanism' },
  { id: 'impeachment', number: '14', title: '弹劾制度', subtitle: '对权力的终极制约', color: '#EF4444', colorClass: 'text-red-400', bgClass: 'bg-red-400', icon: '⚖️', category: 'mechanism' },
  { id: 'lobbying', number: '15', title: '游说集团', subtitle: '看不见的第四权', color: '#8B5CF6', colorClass: 'text-purple-400', bgClass: 'bg-purple-400', icon: '💼', category: 'mechanism' },
  { id: 'swing-states', number: '16', title: '摇摆州', subtitle: '决定选举的关键战场', color: '#F59E0B', colorClass: 'text-amber-400', bgClass: 'bg-amber-400', icon: '🗺️', category: 'election' },
  { id: 'summary', number: '17', title: '制度总结', subtitle: '美国政治的核心逻辑', color: '#60A5FA', colorClass: 'text-blue-400', bgClass: 'bg-blue-400', icon: '🔍', category: 'structure' },
];

export const keyStats = [
  { value: '538', label: '总选举人票', sublabel: '需270票当选总统', color: '#F59E0B' },
  { value: '535', label: '国会议员总数', sublabel: '100参议员 + 435众议员', color: '#3B82F6' },
  { value: '9', label: '最高法院大法官', sublabel: '终身任职，总统提名', color: '#22C55E' },
  { value: '50', label: '个州 + 华盛顿特区', sublabel: '各自拥有独立政府体系', color: '#A78BFA' },
  { value: '4年', label: '总统任期', sublabel: '最多连任两届（8年）', color: '#EF4444' },
  { value: '27', label: '宪法修正案', sublabel: '230余年历史的成文宪法', color: '#F97316' },
];

export const separationOfPowers = {
  legislative: {
    name: '立法分支',
    subtitle: '国会',
    color: '#3B82F6',
    powers: ['制定法律', '宣战权', '批准条约', '批准预算', '弹劾权', '调查权'],
    checks: [
      { target: '行政', action: '推翻总统否决（2/3多数）、弹劾总统、批准条约、控制预算' },
      { target: '司法', action: '弹劾法官、批准法官任命、设立下级法院、修改宪法' },
    ],
  },
  executive: {
    name: '行政分支',
    subtitle: '总统',
    color: '#EF4444',
    powers: ['执行法律', '外交权', '军事指挥', '行政命令', '提名官员', '赦免权'],
    checks: [
      { target: '立法', action: '否决法案、召集特别国会、提议立法、发布行政命令' },
      { target: '司法', action: '提名联邦法官（含最高法院）、赦免权' },
    ],
  },
  judicial: {
    name: '司法分支',
    subtitle: '联邦法院',
    color: '#22C55E',
    powers: ['解释法律', '司法审查', '宣布违宪', '终审裁决'],
    checks: [
      { target: '立法', action: '宣布法律违宪（司法审查）' },
      { target: '行政', action: '宣布行政命令违宪、审查行政行为合法性' },
    ],
  },
};

export const electoralCollegeData = [
  { state: '加利福尼亚', votes: 54, party: 'dem' },
  { state: '德克萨斯', votes: 40, party: 'rep' },
  { state: '佛罗里达', votes: 30, party: 'rep' },
  { state: '纽约', votes: 28, party: 'dem' },
  { state: '宾夕法尼亚', votes: 19, party: 'swing' },
  { state: '伊利诺伊', votes: 19, party: 'dem' },
  { state: '俄亥俄', votes: 17, party: 'rep' },
  { state: '佐治亚', votes: 16, party: 'swing' },
  { state: '北卡罗莱纳', votes: 16, party: 'swing' },
  { state: '密歇根', votes: 15, party: 'swing' },
  { state: '新泽西', votes: 14, party: 'dem' },
  { state: '弗吉尼亚', votes: 13, party: 'dem' },
  { state: '华盛顿州', votes: 12, party: 'dem' },
  { state: '亚利桑那', votes: 11, party: 'swing' },
  { state: '马萨诸塞', votes: 11, party: 'dem' },
];

export const electionTimeline = [
  { date: '2023年初', event: '候选人宣布参选', desc: '候选人正式宣布参选，组建竞选团队，开始募集资金', color: '#3B82F6', side: 'top' },
  { date: '2024年1-6月', event: '初选 & 党团会议', desc: '各州通过初选或党团会议，选出党代表，决定党内提名人', color: '#A78BFA', side: 'bottom' },
  { date: '2024年7-8月', event: '两党全国代表大会', desc: '两党分别召开全国代表大会，正式提名总统和副总统候选人', color: '#F97316', side: 'top' },
  { date: '2024年9-10月', event: '总统候选人辩论', desc: '通常3场辩论，全国直播，是选民了解候选人的重要窗口', color: '#3B82F6', side: 'bottom' },
  { date: '2024年11月5日', event: '选举日 · 全国投票', desc: '全国统一投票日，选民前往投票站投票，各州陆续公布计票结果', color: '#EF4444', side: 'top' },
  { date: '2024年12月17日', event: '选举人正式投票', desc: '各州选举人在各州首府集会，正式投票选出总统和副总统', color: '#22C55E', side: 'bottom' },
  { date: '2025年1月6日', event: '国会认证选举结果', desc: '参众两院联席会议在国会大厦召开，副总统主持，正式统计并认证结果', color: '#A78BFA', side: 'top' },
  { date: '2025年1月20日', event: '就职典礼 · 新总统宣誓', desc: '当选总统在国会大厦前宣誓就职，正式成为美国总统', color: '#EF4444', side: 'bottom' },
];

export const legislativeSteps = [
  { step: '①', title: '法案提出', desc: '任何议员均可在所属议院提出法案。税收法案必须由众议院发起。', color: '#3B82F6' },
  { step: '②', title: '委员会审议', desc: '法案提交相关委员会，举行听证会、专家证词、修改法案。大多数法案在此阶段被搁置——这是法案的"第一道关卡"。', color: '#2563EB' },
  { step: '③', title: '全院辩论与投票', desc: '众议院：规则委员会设定辩论规则，简单多数通过。参议院：可能面临冗长辩论（Filibuster），需60票才能终止辩论（Cloture）。', color: '#1D4ED8' },
  { step: '④', title: '两院协调', desc: '两院版本不同时，成立两院协商委员会（Conference Committee），统一法案文本后，再次提交两院表决。', color: '#A78BFA' },
  { step: '⑤', title: '送交总统', desc: '两院通过完全相同的法案文本后，送交总统。总统有10个工作日决定。', color: '#EF4444' },
];

export const presidentialPowers = [
  { power: '军事权', desc: '担任武装部队总司令（Commander-in-Chief），但宣战权属于国会', icon: '⭐' },
  { power: '外交权', desc: '制定外交政策、任命大使、谈判条约（需参议院批准）', icon: '🌐' },
  { power: '任命权', desc: '提名内阁成员、联邦法官、大使等（需参议院批准）', icon: '📋' },
  { power: '赦免权', desc: '对联邦罪行（叛国罪除外）拥有赦免权', icon: '📜' },
  { power: '否决权', desc: '可否决国会通过的法案，国会需2/3多数才能推翻', icon: '✋' },
  { power: '行政命令', desc: '向行政部门发出具有法律效力的指令，无需国会批准，但不能违宪', icon: '✍️' },
];

export const partyComparison = [
  { issue: '经济税收', dem: '支持累进税制、社会福利扩大、最低工资提升', rep: '支持减税、小政府、自由市场' },
  { issue: '医疗保健', dem: '支持全民医保、扩大医疗补助', rep: '反对政府主导医疗，支持市场竞争' },
  { issue: '枪支管控', dem: '支持更严格的枪支管控', rep: '强调第二修正案权利，反对枪支管控' },
  { issue: '移民政策', dem: '支持移民改革、为无证移民提供出路', rep: '强调边境安全、严格移民执法' },
  { issue: '气候变化', dem: '承认气候变化，支持清洁能源政策', rep: '质疑气候政策的经济代价，支持化石能源' },
  { issue: '堕胎权利', dem: '支持堕胎权', rep: '反对堕胎，支持各州限制权' },
  { issue: '外交政策', dem: '强调多边主义、国际合作', rep: '倾向单边主义、"美国优先"' },
];

export const impeachmentHistory = [
  { president: '安德鲁·约翰逊', year: '1868', reason: '违反《任职法》，未经参议院批准解雇国务卿', result: '参议院以1票之差未定罪', outcome: 'acquitted' },
  { president: '理查德·尼克松', year: '1974', reason: '水门事件：闯入民主党总部并掩盖真相', result: '弹劾程序启动前主动辞职', outcome: 'resigned' },
  { president: '比尔·克林顿', year: '1998', reason: '在大陪审团前作伪证、妨碍司法', result: '众议院弹劾，参议院未定罪', outcome: 'acquitted' },
  { president: '唐纳德·特朗普', year: '2019', reason: '滥用职权（向乌克兰施压）、妨碍国会', result: '众议院弹劾，参议院未定罪', outcome: 'acquitted' },
  { president: '唐纳德·特朗普', year: '2021', reason: '煽动叛乱（1月6日国会山事件）', result: '众议院再次弹劾，参议院再次未定罪', outcome: 'acquitted' },
];

export const swingStates2024 = [
  { state: '宾夕法尼亚', votes: 19, desc: '最重要的摇摆州，工业州，铁锈带核心' },
  { state: '佐治亚', votes: 16, desc: '新兴摇摆州，城郊人口变化，非裔美国人选民关键' },
  { state: '北卡罗莱纳', votes: 16, desc: '教育、科技产业增长，大学城影响显著' },
  { state: '密歇根', votes: 15, desc: '汽车工业州，工会影响大，蓝领工人关键票仓' },
  { state: '亚利桑那', votes: 11, desc: '快速增长的拉丁裔人口，城郊选民决定走向' },
  { state: '威斯康辛', votes: 10, desc: '农业与制造业混合，乳业州，历史上极度拉锯' },
  { state: '内华达', votes: 6, desc: '旅游业为主，拉丁裔选民比例高，工会势力强' },
];

export const supremeCourtCases = [
  { case: '马伯里诉麦迪逊', year: '1803', impact: '确立司法审查制度，奠定最高法院权威基础' },
  { case: '布朗诉教育局', year: '1954', impact: '宣布公立学校种族隔离违宪，推动民权运动' },
  { case: '米兰达诉亚利桑那州', year: '1966', impact: '确立"米兰达权利"，被捕时须告知沉默权和律师权' },
  { case: '罗伊诉韦德', year: '1973', impact: '确立堕胎权（2022年被多布斯案推翻）' },
  { case: '公民联合诉联邦选举委员会', year: '2010', impact: '允许企业和工会无限制政治支出，催生Super PAC' },
  { case: '多布斯诉杰克逊', year: '2022', impact: '推翻罗伊案，将堕胎权交还各州决定' },
];
