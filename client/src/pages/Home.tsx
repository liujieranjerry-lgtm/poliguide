// 美国政治制度全解 - 主页面
// 设计风格：知识图谱（Knowledge Atlas）
// 深石板背景 + 彩色数据层 + Space Grotesk + Noto Serif SC
import { useState, useEffect, useRef, useCallback } from 'react';
import { chapters, keyStats } from '@/lib/data';
import SideNav from '@/components/SideNav';
import SeparationChart from '@/components/SeparationChart';
import ElectoralCollegeViz from '@/components/ElectoralCollegeViz';
import ElectionTimeline from '@/components/ElectionTimeline';
import LegislativeFlow from '@/components/LegislativeFlow';
import PartyComparison from '@/components/PartyComparison';
import ImpeachmentHistory from '@/components/ImpeachmentHistory';
import SwingStates from '@/components/SwingStates';
import SupremeCourtCases from '@/components/SupremeCourtCases';
import GerrymanderingViz from '@/components/GerrymanderingViz';
import { useIntersectionObserver } from '@/hooks/useCountUp';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663323503525/aCXDEF7YVcoSkYzDs44ysS/hero_bg-6UmU7EXVtpdKdgBZcc9doq.webp';

// 章节内容区块包装器
function SectionWrapper({ id, color, children }: { id: string; color: string; children: React.ReactNode }) {
  const { ref, isVisible } = useIntersectionObserver(0.05);
  return (
    <div
      ref={ref}
      id={id}
      className="scroll-mt-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {children}
    </div>
  );
}

// 章节标题组件
function ChapterHeader({ number, title, subtitle, color, icon }: {
  number: string; title: string; subtitle: string; color: string; icon: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div
        className="w-1 rounded-full flex-shrink-0 mt-1"
        style={{ backgroundColor: color, height: '60px', boxShadow: `0 0 12px ${color}60` }}
      />
      <div>
        <div className="text-xs font-mono text-white/30 mb-1 font-['Space_Grotesk']">CHAPTER {number}</div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 font-['Space_Grotesk']">{title}</h2>
        <div className="text-base text-white/50 font-['Noto_Serif_SC']">{subtitle}</div>
      </div>
      <div className="ml-auto text-3xl opacity-40">{icon}</div>
    </div>
  );
}

// 信息卡片
function InfoCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/8 bg-white/3 p-6 ${className}`}>
      {children}
    </div>
  );
}

// 表格组件
function DataTable({ headers, rows, colors }: { headers: string[]; rows: string[][]; colors?: string[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-white/8">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left text-xs font-semibold text-white/50 uppercase tracking-wider font-['Space_Grotesk']">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/5 hover:bg-white/3 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-white/70" style={j === 0 && colors ? { color: colors[i] } : {}}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('constitution');
  const mainRef = useRef<HTMLDivElement>(null);

  // 滚动监听当前章节
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white">
      <SideNav activeSection={activeSection} onNavigate={scrollToSection} />

      {/* 主内容区 */}
      <div className="lg:ml-56">
        {/* ============ 英雄区 ============ */}
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_BG})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E]/60 via-[#0A0F1E]/40 to-[#0A0F1E]" />
          <div className="relative z-10 px-6 md:px-12 py-20 max-w-4xl">
            <div className="text-xs font-mono text-blue-400/80 uppercase tracking-widest mb-4 font-['Space_Grotesk']">
              Interactive Knowledge Atlas
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-['Space_Grotesk']">
              <span className="text-white">美国政治</span>
              <br />
              <span className="gradient-text-gold">选举与运转</span>
              <br />
              <span className="text-white/80">制度全解</span>
            </h1>
            <p className="text-lg text-white/60 max-w-xl leading-relaxed mb-8 font-['Noto_Serif_SC']">
              从立国宪法的哲学根基，到每一张选票背后的运作机制——
              17个核心章节，深入解析世界上最复杂的民主政治体系之一。
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollToSection('constitution')}
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 font-['Space_Grotesk']"
                style={{ backgroundColor: '#3B82F6', color: '#fff', boxShadow: '0 0 20px rgba(59,130,246,0.4)' }}
              >
                开始探索 →
              </button>
              <button
                onClick={() => scrollToSection('electoral-college')}
                className="px-6 py-3 rounded-xl font-semibold text-sm border border-white/20 text-white/70 hover:bg-white/5 transition-all duration-200 font-['Space_Grotesk']"
              >
                选举人团制度
              </button>
            </div>
          </div>

          {/* 关键数字 */}
          <div className="relative z-10 px-6 md:px-12 pb-12 mt-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {keyStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-3 border border-white/8 bg-black/40 backdrop-blur-sm text-center"
                >
                  <div className="stat-number text-2xl" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs text-white/60 mt-1 font-['Noto_Serif_SC']">{s.label}</div>
                  <div className="text-xs text-white/30 mt-0.5 hidden md:block">{s.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ 章节内容 ============ */}
        <div className="px-6 md:px-12 space-y-24 pb-24">

          {/* 01 立国基石 */}
          <SectionWrapper id="constitution" color="#F59E0B">
            <ChapterHeader number="01" title="立国基石" subtitle="美国宪法与联邦制" color="#F59E0B" icon="📜" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard>
                <h3 className="text-lg font-bold text-amber-400 mb-3 font-['Space_Grotesk']">宪法的诞生</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  1787年，美国制宪会议在费城召开。建国之父们面临一个核心难题：如何建立一个足够强大的中央政府，同时又防止这个政府变成他们刚刚从英国独立出来时所反抗的那种专制政权？
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  他们的解决方案，就是《美利坚合众国宪法》——一部迄今已有<strong className="text-amber-400">230余年历史</strong>、全世界最古老的成文宪法，仅有7条原文和27条修正案。
                </p>
              </InfoCard>
              <InfoCard>
                <h3 className="text-lg font-bold text-amber-400 mb-3 font-['Space_Grotesk']">第十修正案：联邦制的核心</h3>
                <blockquote className="border-l-2 border-amber-400 pl-4 mb-4 italic text-white/60 text-sm">
                  "本宪法未授予合众国、也未禁止各州行使的权力，由各州或人民保留。"
                </blockquote>
                <p className="text-sm text-white/70 leading-relaxed">
                  这一条款是美国联邦制的核心。联邦政府只拥有宪法明确授予的权力，其余权力由各州保留。这就是为什么美国各州在教育、警察、税收、婚姻法等方面拥有很大的自主权。
                </p>
              </InfoCard>
            </div>
            <div className="mt-6">
              <DataTable
                headers={['核心原则', '英文', '核心含义']}
                rows={[
                  ['联邦制', 'Federalism', '权力在联邦政府与各州政府之间分配，各州保留大量自治权'],
                  ['三权分立', 'Separation of Powers', '立法、行政、司法三权由三个独立机构分别掌握'],
                  ['制衡', 'Checks and Balances', '三个权力分支相互监督、相互约束，防止任何一方独大'],
                ]}
                colors={['#F59E0B', '#3B82F6', '#22C55E']}
              />
            </div>
          </SectionWrapper>

          {/* 02 三权分立 */}
          <SectionWrapper id="separation" color="#60A5FA">
            <ChapterHeader number="02" title="三权分立" subtitle="权力架构与相互制衡" color="#60A5FA" icon="⚖️" />
            <InfoCard className="mb-6">
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                美国联邦政府被分为三个独立的分支，每个分支都拥有独特的权力，同时受到其他两个分支的制约。点击下方任意分支，查看其核心权力和制衡关系。
              </p>
              <SeparationChart />
            </InfoCard>
          </SectionWrapper>

          {/* 03 立法分支 */}
          <SectionWrapper id="congress" color="#3B82F6">
            <ChapterHeader number="03" title="立法分支" subtitle="国会的组成与运作" color="#3B82F6" icon="🏛️" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InfoCard>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <h3 className="text-lg font-bold text-blue-400 font-['Space_Grotesk']">参议院</h3>
                  <span className="text-xs font-mono text-white/30 ml-auto">The Senate</span>
                </div>
                <DataTable
                  headers={['项目', '内容']}
                  rows={[
                    ['席位数', '100席（每州2名）'],
                    ['任期', '6年，每2年改选约1/3'],
                    ['最低年龄', '30岁'],
                    ['独特权力', '批准条约（2/3多数）、批准总统提名、主持弹劾审判'],
                  ]}
                />
                <div className="mt-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-white/60">
                  <span className="text-blue-400 font-medium">冗长辩论（Filibuster）：</span>
                  参议员可无限期发言阻止法案表决，需60票才能终止——这是参议院独有的程序。
                </div>
              </InfoCard>
              <InfoCard>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                  <h3 className="text-lg font-bold text-sky-400 font-['Space_Grotesk']">众议院</h3>
                  <span className="text-xs font-mono text-white/30 ml-auto">The House</span>
                </div>
                <DataTable
                  headers={['项目', '内容']}
                  rows={[
                    ['席位数', '435席（按各州人口比例分配）'],
                    ['任期', '2年，全部席位每2年改选'],
                    ['最低年龄', '25岁'],
                    ['独特权力', '所有税收法案必须由此发起；发起弹劾程序'],
                  ]}
                />
                <div className="mt-4 p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sm text-white/60">
                  <span className="text-sky-400 font-medium">规则委员会：</span>
                  控制每项法案的辩论规则，是众议院最有权力的委员会之一，被称为"院内警察"。
                </div>
              </InfoCard>
            </div>
            <InfoCard>
              <h3 className="text-lg font-bold text-blue-400 mb-4 font-['Space_Grotesk']">立法程序：一项法案如何成为法律</h3>
              <LegislativeFlow />
            </InfoCard>
          </SectionWrapper>

          {/* 04 行政分支 */}
          <SectionWrapper id="president" color="#EF4444">
            <ChapterHeader number="04" title="行政分支" subtitle="总统与行政体系" color="#EF4444" icon="🦅" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InfoCard>
                <h3 className="text-lg font-bold text-red-400 mb-4 font-['Space_Grotesk']">总统的六大核心权力</h3>
                <div className="space-y-3">
                  {[
                    { icon: '⭐', power: '军事权', desc: '担任武装部队总司令，但宣战权属于国会' },
                    { icon: '🌐', power: '外交权', desc: '制定外交政策、任命大使、谈判条约（需参议院批准）' },
                    { icon: '📋', power: '任命权', desc: '提名内阁成员、联邦法官、大使等（需参议院批准）' },
                    { icon: '📜', power: '赦免权', desc: '对联邦罪行（叛国罪除外）拥有赦免权' },
                    { icon: '✋', power: '否决权', desc: '可否决国会通过的法案，国会需2/3多数才能推翻' },
                    { icon: '✍️', power: '行政命令', desc: '向行政部门发出具有法律效力的指令，无需国会批准' },
                  ].map((p) => (
                    <div key={p.power} className="flex gap-3 items-start">
                      <span className="text-lg flex-shrink-0">{p.icon}</span>
                      <div>
                        <span className="text-sm font-bold text-white font-['Space_Grotesk']">{p.power}：</span>
                        <span className="text-sm text-white/60">{p.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </InfoCard>
              <InfoCard>
                <h3 className="text-lg font-bold text-red-400 mb-4 font-['Space_Grotesk']">15个内阁部门</h3>
                <div className="grid grid-cols-1 gap-1.5">
                  {[
                    ['国务院', '外交政策、驻外使馆'],
                    ['财政部', '货币政策、税收、国债'],
                    ['国防部', '军事事务（五角大楼）'],
                    ['司法部', '执法、联邦检察、FBI'],
                    ['内政部', '国家公园、自然资源'],
                    ['卫生与公众服务部', '医疗保健、FDA、CDC'],
                    ['国土安全部', '边境安全、移民、FEMA'],
                    ['教育部', '联邦教育政策'],
                  ].map(([name, desc]) => (
                    <div key={name} className="flex items-center gap-2 py-1.5 border-b border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-white/80 w-28 flex-shrink-0">{name}</span>
                      <span className="text-xs text-white/40">{desc}</span>
                    </div>
                  ))}
                  <div className="text-xs text-white/30 mt-2 text-center">+ 7个更多部门，共15个</div>
                </div>
              </InfoCard>
            </div>
            <InfoCard>
              <h3 className="text-lg font-bold text-red-400 mb-3 font-['Space_Grotesk']">总统继任顺序</h3>
              <div className="flex flex-wrap gap-2">
                {['副总统', '众议院议长', '参议院临时议长', '国务卿', '财政部长', '国防部长', '司法部长', '……'].map((p, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="text-xs font-mono text-red-400/60">{i + 1}.</span>
                    <span className="px-2 py-1 rounded text-xs bg-red-500/10 text-red-300 border border-red-500/20">{p}</span>
                    {i < 7 && <span className="text-white/20 text-xs">→</span>}
                  </div>
                ))}
              </div>
            </InfoCard>
          </SectionWrapper>

          {/* 05 司法分支 */}
          <SectionWrapper id="judiciary" color="#22C55E">
            <ChapterHeader number="05" title="司法分支" subtitle="联邦法院与司法审查" color="#22C55E" icon="⚖️" />
            <div className="mb-6">
              <InfoCard>
                <h3 className="text-lg font-bold text-green-400 mb-4 font-['Space_Grotesk']">联邦法院三级体系</h3>
                <div className="space-y-3">
                  {[
                    { level: '最高法院', en: 'Supreme Court', count: '1个', desc: '9名大法官，终身任职，每年受理约100-150件案件，终审裁决', color: '#22C55E', size: 'text-lg' },
                    { level: '上诉法院', en: 'Courts of Appeals', count: '13个', desc: '审查地区法院的判决是否存在法律错误，不重新审理事实', color: '#4ADE80', size: 'text-base' },
                    { level: '地区法院', en: 'District Courts', count: '94个', desc: '联邦司法系统的一审法院，处理联邦刑事案件和民事案件', color: '#86EFAC', size: 'text-sm' },
                  ].map((c) => (
                    <div
                      key={c.level}
                      className="rounded-xl p-4 border"
                      style={{ borderColor: c.color + '30', backgroundColor: c.color + '08' }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`font-bold text-white font-['Space_Grotesk'] ${c.size}`}>{c.level}</span>
                        <span className="text-xs text-white/30">{c.en}</span>
                        <span className="ml-auto px-2 py-0.5 rounded text-xs font-mono" style={{ backgroundColor: c.color + '20', color: c.color }}>{c.count}</span>
                      </div>
                      <p className="text-sm text-white/60">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </div>
            <InfoCard>
              <h3 className="text-lg font-bold text-green-400 mb-4 font-['Space_Grotesk']">历史性判决</h3>
              <SupremeCourtCases />
            </InfoCard>
          </SectionWrapper>

          {/* 06 政府层级 */}
          <SectionWrapper id="federalism" color="#06B6D4">
            <ChapterHeader number="06" title="政府层级" subtitle="联邦、州与地方的权力分配" color="#06B6D4" icon="🗺️" />
            <div className="space-y-4">
              {[
                {
                  level: '联邦政府', color: '#1E3A5F', border: '#3B82F6',
                  duties: '外交、国防、货币发行、移民、州际贸易监管、邮政',
                  officials: '总统、国会议员、联邦法官',
                  note: '宪法明确授予的权力',
                },
                {
                  level: '州政府（50个州 + 华盛顿特区）', color: '#1A3A2A', border: '#22C55E',
                  duties: '教育、警察、公路、公共卫生、州内商业监管、选举管理',
                  officials: '州长、州议员、州法官',
                  note: '宪法第十修正案保留的权力',
                },
                {
                  level: '地方政府（约90,000个单位）', color: '#1A2A1A', border: '#86EFAC',
                  duties: '垃圾收集、消防、地方道路、土地使用规划、地方学校管理',
                  officials: '市长、市议员、学区委员',
                  note: '由各州授权设立',
                },
              ].map((g) => (
                <div
                  key={g.level}
                  className="rounded-xl p-5 border"
                  style={{ borderColor: g.border + '40', backgroundColor: g.border + '08' }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: g.border }} />
                    <h3 className="font-bold text-white font-['Space_Grotesk']">{g.level}</h3>
                    <span className="ml-auto text-xs px-2 py-0.5 rounded" style={{ backgroundColor: g.border + '20', color: g.border }}>{g.note}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="text-white/40 text-xs">主要职责：</span>
                      <p className="text-white/70 mt-1">{g.duties}</p>
                    </div>
                    <div>
                      <span className="text-white/40 text-xs">代表性官员：</span>
                      <p className="text-white/70 mt-1">{g.officials}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>

          {/* 07 两党制度 */}
          <SectionWrapper id="parties" color="#A78BFA">
            <ChapterHeader number="07" title="两党制度" subtitle="民主党与共和党的立场对比" color="#A78BFA" icon="🐘🫏" />
            <InfoCard>
              <PartyComparison />
            </InfoCard>
          </SectionWrapper>

          {/* 08 总统选举 */}
          <SectionWrapper id="presidential-election" color="#F59E0B">
            <ChapterHeader number="08" title="总统选举" subtitle="从宣布参选到就职典礼" color="#F59E0B" icon="🗳️" />
            <InfoCard>
              <h3 className="text-lg font-bold text-amber-400 mb-6 font-['Space_Grotesk']">完整选举时间轴（以2024年为例）</h3>
              <ElectionTimeline />
            </InfoCard>
          </SectionWrapper>

          {/* 09 国会选举 */}
          <SectionWrapper id="congress-election" color="#3B82F6">
            <ChapterHeader number="09" title="国会选举" subtitle="中期选举与选区政治" color="#3B82F6" icon="🗳️" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard>
                <h3 className="text-lg font-bold text-blue-400 mb-4 font-['Space_Grotesk']">选举频率</h3>
                <DataTable
                  headers={['选举类型', '频率', '主要内容']}
                  rows={[
                    ['总统大选年', '每4年', '总统+全部众议员+1/3参议员'],
                    ['中期选举年', '每4年（大选年中间）', '全部众议员+1/3参议员+约36个州长'],
                    ['小年选举', '奇数年', '少数州的州长和地方官员'],
                    ['特别选举', '不定期', '填补任期中出现的空缺席位'],
                  ]}
                />
              </InfoCard>
              <InfoCard>
                <h3 className="text-lg font-bold text-blue-400 mb-4 font-['Space_Grotesk']">中期选举的政治意义</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">
                  中期选举通常被视为对现任总统执政的"期中考试"。在过去80多年的21次中期选举中，现任总统所属政党平均在众议院失去约<strong className="text-white">30个席位</strong>。
                </p>
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="text-sm font-bold text-blue-400 mb-2">分裂政府（Divided Government）</div>
                  <p className="text-sm text-white/60">若总统所属政党失去国会多数，总统将面临"分裂政府"局面，立法议程将举步维艰。这是美国政治中常见的权力制衡现象。</p>
                </div>
              </InfoCard>
            </div>
          </SectionWrapper>

          {/* 10 选举人团 */}
          <SectionWrapper id="electoral-college" color="#F97316">
            <ChapterHeader number="10" title="选举人团" subtitle="美国独特的间接选举制度" color="#F97316" icon="🗺️" />
            <InfoCard>
              <ElectoralCollegeViz />
            </InfoCard>
          </SectionWrapper>

          {/* 11 初选制度 */}
          <SectionWrapper id="primary" color="#EC4899">
            <ChapterHeader number="11" title="初选制度" subtitle="党内民主的运作" color="#EC4899" icon="🗳️" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard>
                <h3 className="text-lg font-bold text-pink-400 mb-4 font-['Space_Grotesk']">初选类型</h3>
                <div className="space-y-3">
                  {[
                    { type: '封闭式初选', desc: '只有登记为该党党员的选民才能参与', color: '#EC4899' },
                    { type: '开放式初选', desc: '任何登记选民都可以参与任意一党的初选', color: '#F472B6' },
                    { type: '半封闭式初选', desc: '登记党员 + 无党派选民可参与', color: '#FBCFE8' },
                  ].map((t) => (
                    <div key={t.type} className="rounded-lg p-3 border border-white/8 bg-white/3">
                      <div className="font-medium text-white text-sm mb-1 font-['Space_Grotesk']" style={{ color: t.color }}>{t.type}</div>
                      <p className="text-sm text-white/60">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
              <InfoCard>
                <h3 className="text-lg font-bold text-pink-400 mb-4 font-['Space_Grotesk']">关键节点</h3>
                <div className="space-y-3">
                  <div className="rounded-lg p-3 border border-pink-500/20 bg-pink-500/8">
                    <div className="font-medium text-pink-400 text-sm mb-1 font-['Space_Grotesk']">爱荷华党团会议</div>
                    <p className="text-sm text-white/60">每次总统选举的第一场竞争，具有重要的象征意义和"动力效应"。</p>
                  </div>
                  <div className="rounded-lg p-3 border border-pink-500/20 bg-pink-500/8">
                    <div className="font-medium text-pink-400 text-sm mb-1 font-['Space_Grotesk']">超级星期二（Super Tuesday）</div>
                    <p className="text-sm text-white/60">大量州同时举行初选的一天，结果往往能基本确定两党的提名人选。</p>
                  </div>
                  <div className="rounded-lg p-3 border border-pink-500/20 bg-pink-500/8">
                    <div className="font-medium text-pink-400 text-sm mb-1 font-['Space_Grotesk']">超级代表（民主党）</div>
                    <p className="text-sm text-white/60">党内高层官员，可以自由投票给任何候选人，不受初选结果约束，曾在2016年引发争议。</p>
                  </div>
                </div>
              </InfoCard>
            </div>
          </SectionWrapper>

          {/* 12 选民制度 */}
          <SectionWrapper id="voters" color="#10B981">
            <ChapterHeader number="12" title="选民制度" subtitle="登记、投票与资格" color="#10B981" icon="👤" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard>
                <h3 className="text-lg font-bold text-emerald-400 mb-4 font-['Space_Grotesk']">投票资格</h3>
                <div className="space-y-2 mb-4">
                  {['美国公民（非公民无联邦选举投票权）', '年满18岁（选举日当天或之前）', '在所在州完成选民登记'].map((r) => (
                    <div key={r} className="flex gap-2 items-start text-sm text-white/70">
                      <span className="text-emerald-400 mt-0.5">✓</span>
                      {r}
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-emerald-400 mb-3 font-['Space_Grotesk']">投票权历史演变</h3>
                <DataTable
                  headers={['年份', '事件']}
                  rows={[
                    ['1870年', '第十五修正案：禁止因种族剥夺投票权'],
                    ['1920年', '第十九修正案：赋予女性投票权'],
                    ['1965年', '《投票权法》：禁止歧视性投票资格限制'],
                    ['1971年', '第二十六修正案：投票年龄从21岁降至18岁'],
                  ]}
                />
              </InfoCard>
              <InfoCard>
                <h3 className="text-lg font-bold text-emerald-400 mb-4 font-['Space_Grotesk']">各州投票规则差异</h3>
                <div className="space-y-3">
                  {[
                    { rule: '身份证要求', desc: '部分州要求出示照片身份证，部分州不要求' },
                    { rule: '邮寄投票', desc: '部分州全面实施邮寄投票，部分州仅允许特殊情况' },
                    { rule: '提前投票', desc: '各州提前投票的天数从0到45天不等' },
                    { rule: '选民登记', desc: '美国选民必须主动登记，各州截止日期从选举日前30天到当天不等' },
                    { rule: '重罪犯投票权', desc: '各州规定差异极大，从服刑期间保留投票权到终身剥夺' },
                  ].map((r) => (
                    <div key={r.rule} className="border-b border-white/5 pb-2">
                      <div className="text-sm font-medium text-white mb-0.5 font-['Space_Grotesk']">{r.rule}</div>
                      <p className="text-xs text-white/50">{r.desc}</p>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </div>
          </SectionWrapper>

          {/* 13 选区划分与杰利蝾螈 */}
          <SectionWrapper id="gerrymandering" color="#F43F5E">
            <ChapterHeader number="13" title="选区划分" subtitle="杰利蝾螈与选区操纵" color="#F43F5E" icon="🗺️" />
            <InfoCard>
              <h3 className="text-lg font-bold text-rose-400 mb-4 font-['Space_Grotesk']">交互式示意图：选区划分如何改变选举结果</h3>
              <GerrymanderingViz />
            </InfoCard>
          </SectionWrapper>

          {/* 14 弹劾制度 */}
          <SectionWrapper id="impeachment" color="#EF4444">
            <ChapterHeader number="14" title="弹劾制度" subtitle="对权力的终极制约" color="#EF4444" icon="⚖️" />
            <InfoCard>
              <ImpeachmentHistory />
            </InfoCard>
          </SectionWrapper>

          {/* 15 游说与利益集团 */}
          <SectionWrapper id="lobbying" color="#8B5CF6">
            <ChapterHeader number="15" title="游说集团" subtitle="看不见的第四权" color="#8B5CF6" icon="💼" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoCard>
                <h3 className="text-lg font-bold text-purple-400 mb-4 font-['Space_Grotesk']">游说的规模</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { value: '$40亿+', label: '年游说支出', color: '#8B5CF6' },
                    { value: '10,000+', label: '注册游说者', color: '#A78BFA' },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-3 border border-purple-500/20 bg-purple-500/8 text-center">
                      <div className="stat-number text-2xl" style={{ color: s.color }}>{s.value}</div>
                      <div className="text-xs text-white/50 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  游说（Lobbying）是受宪法第一修正案（言论自由和请愿权）保护的合法活动。游说者代表各种利益集团，向国会议员和行政官员施加影响，推动或阻止特定立法和政策。
                </p>
              </InfoCard>
              <InfoCard>
                <h3 className="text-lg font-bold text-purple-400 mb-4 font-['Space_Grotesk']">超级政治行动委员会（Super PAC）</h3>
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 mb-4">
                  <div className="text-sm font-bold text-purple-400 mb-1">公民联合案（2010年）</div>
                  <p className="text-sm text-white/60">最高法院裁定限制企业和工会政治支出违宪，打开了无限资金涌入选举的闸门。</p>
                </div>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex gap-2"><span className="text-purple-400">✓</span>可筹集无限资金用于选举广告</div>
                  <div className="flex gap-2"><span className="text-purple-400">✓</span>可支持或反对特定候选人</div>
                  <div className="flex gap-2"><span className="text-red-400">✗</span>理论上不能直接与候选人协调</div>
                  <div className="flex gap-2"><span className="text-red-400">✗</span>不能直接向候选人捐款</div>
                </div>
              </InfoCard>
            </div>
          </SectionWrapper>

          {/* 16 摇摆州 */}
          <SectionWrapper id="swing-states" color="#F59E0B">
            <ChapterHeader number="16" title="摇摆州" subtitle="决定选举的关键战场" color="#F59E0B" icon="🗺️" />
            <InfoCard>
              <SwingStates />
            </InfoCard>
          </SectionWrapper>

          {/* 17 制度总结 */}
          <SectionWrapper id="summary" color="#60A5FA">
            <ChapterHeader number="17" title="制度总结" subtitle="美国政治的核心逻辑" color="#60A5FA" icon="🔍" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <InfoCard>
                <h3 className="text-lg font-bold text-blue-400 mb-4 font-['Space_Grotesk']">制度设计的根本目的</h3>
                <blockquote className="border-l-2 border-blue-400 pl-4 mb-4 italic text-white/60 text-sm">
                  "如果人都是天使，就不需要政府了。如果天使来统治人，就不需要对政府进行外部或内部的控制了。"
                  <footer className="text-white/40 mt-1 not-italic">—— 詹姆斯·麦迪逊，《联邦党人文集》第51篇</footer>
                </blockquote>
                <p className="text-sm text-white/70 leading-relaxed">
                  美国政治制度的设计，从根本上说是为了回答一个问题：<strong className="text-white">如何防止权力的滥用？</strong>
                  正是这种对权力的深刻警惕，催生了三权分立、联邦制、制衡机制、定期选举等一系列制度设计。
                </p>
              </InfoCard>
              <InfoCard>
                <h3 className="text-lg font-bold text-blue-400 mb-4 font-['Space_Grotesk']">制度的优势与局限</h3>
                <div className="space-y-2">
                  {[
                    { type: '优势', items: ['防止专制：多重制衡使任何单一力量难以独揽大权', '保障稳定：制度化的权力转移防止政治动荡', '保护少数：联邦制和司法审查保护少数群体权利'], color: '#22C55E' },
                    { type: '局限', items: ['效率低下：多重否决点使立法极为困难', '代表性问题：选举人团可能导致少数人控制多数', '金钱政治：竞选资金影响使普通公民声音被淡化'], color: '#EF4444' },
                  ].map((g) => (
                    <div key={g.type}>
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1.5 font-['Space_Grotesk']" style={{ color: g.color }}>{g.type}</div>
                      {g.items.map((item) => (
                        <div key={item} className="flex gap-2 text-sm text-white/60 mb-1">
                          <span style={{ color: g.color }}>•</span>
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </InfoCard>
            </div>

            {/* 章节导航网格 */}
            <InfoCard>
              <h3 className="text-lg font-bold text-blue-400 mb-4 font-['Space_Grotesk']">全部章节一览</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => scrollToSection(ch.id)}
                    className="rounded-lg p-3 border border-white/8 bg-white/3 hover:bg-white/6 text-left transition-all duration-200 group"
                  >
                    <div className="text-xs font-mono text-white/30 mb-1">{ch.number}</div>
                    <div className="text-sm font-bold text-white group-hover:text-white/90 font-['Space_Grotesk']" style={{ color: ch.color }}>{ch.title}</div>
                    <div className="text-xs text-white/40 mt-0.5">{ch.subtitle}</div>
                  </button>
                ))}
              </div>
            </InfoCard>
          </SectionWrapper>

        </div>

        {/* 中国政治制度跳转 */}
        <div className="px-6 md:px-12 py-10 border-t border-white/8">
          <div
            className="max-w-2xl mx-auto rounded-2xl p-6 text-center"
            style={{ background: 'rgba(196,30,58,0.1)', border: '1px solid rgba(196,30,58,0.3)' }}
          >
            <p className="text-lg font-bold mb-2 text-white" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              🇨🇳 想了解中国政治制度？
            </p>
            <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
              与本指南配套的中国政治制度全解，涵盖党的领导体制、人大制度、选举制度等16个核心章节
            </p>
            <a
              href="#/china"
              className="inline-block px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
              style={{ background: '#C41E3A' }}
            >
              查看中国政治制度全解 →
            </a>
          </div>
        </div>

        {/* 历任总统入口 */}
        <div className="px-6 md:px-12 py-6 border-t border-white/8">
          <div className="max-w-2xl mx-auto rounded-2xl p-5 flex items-center gap-5" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.25)' }}>
            <div className="text-4xl flex-shrink-0">🏛️</div>
            <div className="flex-1">
              <p className="text-base font-bold text-white mb-1">历任美国总统全览</p>
              <p className="text-xs text-white/50">47位总统完整档案 · 可按党派、时代、姓名筛选 · 点击展开任内大事与名言</p>
            </div>
            <a href="#/presidents" className="flex-shrink-0 px-4 py-2 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: '#1d4ed8' }}>查看全部 →</a>
          </div>
        </div>

        {/* 德国和日本入口 */}
        <div className="px-6 md:px-12 py-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 text-center">
              <p className="text-lg font-bold mb-2 text-white">🇩🇪 德国政治制度</p>
              <p className="text-sm mb-4 text-white/60">联邦议会制 · 两票混合比例制 · 建设性不信任投票 · 16联邦州</p>
              <a href="#/germany" className="inline-block px-5 py-2 rounded-lg font-bold text-white transition-all hover:opacity-90" style={{ background: '#B8860B' }}>查看德国政治制度全解 →</a>
            </div>
            <div className="p-5 rounded-xl border border-pink-500/30 bg-pink-500/5 text-center">
              <p className="text-lg font-bold mb-2 text-white">🇯🇵 日本政治制度</p>
              <p className="text-sm mb-4 text-white/60">议会内阁制 · 象征天皇制 · 自民党长期执政 · 宪法第九条</p>
              <a href="#/japan" className="inline-block px-5 py-2 rounded-lg font-bold text-white transition-all hover:opacity-90" style={{ background: '#C0406A' }}>查看日本政治制度全解 →</a>
            </div>
          </div>
        </div>

        {/* 页脚 */}
        <footer className="border-t border-white/8 px-6 md:px-12 py-8 text-center">
          <div className="text-sm text-white/30 font-['Noto_Serif_SC']">
            美国政治制度全解 · 交互式学习指南
          </div>
          <div className="text-xs text-white/20 mt-1">
            内容基于公开资料整理，仅供学习参考 · Powered by Manus AI
          </div>
        </footer>
      </div>
    </div>
  );
}
