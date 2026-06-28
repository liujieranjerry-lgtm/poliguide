// 中国政治制度全解 - 主页面
// 设计哲学：新中式极简主义 × 信息密集型仪表盘
// 配色：深红 #C41E3A（党）+ 金黄 #D4AF37（国）+ 深石板 #0D1117（背景）
// 字体：Noto Serif SC（标题）+ Noto Sans SC（正文）+ Space Grotesk（数字）

import { useEffect, useRef, useState } from "react";
import CnSideNav from "@/components/CnSideNav";
import CnPartyPyramid from "@/components/CnPartyPyramid";
import CnStateInstitutions from "@/components/CnStateInstitutions";
import CnElectionSystem from "@/components/CnElectionSystem";
import CnLegislativeFlow from "@/components/CnLegislativeFlow";
import CnMultiParty from "@/components/CnMultiParty";
import CnLocalGov from "@/components/CnLocalGov";
import { cnKeyStats } from "@/lib/cnData";

// 数字计数动画 Hook
function useCountUp(target: number, duration = 1500, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// 章节容器
function Section({
  id,
  title,
  subtitle,
  accentColor = "#C41E3A",
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  accentColor?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="py-16 px-8 border-b"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-4xl">
        <div className="mb-8">
          <div
            className="w-10 h-1 mb-4 rounded-full"
            style={{ background: accentColor }}
          />
          <h2
            className="text-3xl font-bold mb-2"
            style={{ color: "#fff", fontFamily: "'Noto Serif SC', serif" }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="text-base" style={{ color: "rgba(255,255,255,0.5)" }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

// 统计数字卡片
function StatCard({ stat, index }: { stat: typeof cnKeyStats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const numericValue = parseInt(stat.value.replace(/,/g, ""));
  const count = useCountUp(numericValue, 1200, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-xl p-5 transition-all duration-300 hover:scale-105"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div
        className="text-3xl font-bold mb-1"
        style={{ color: stat.color, fontFamily: "'Space Grotesk', monospace" }}
      >
        {visible ? count.toLocaleString() : "0"}
        <span className="text-lg ml-0.5">{stat.unit}</span>
      </div>
      <div className="font-semibold text-sm text-white mb-1">{stat.label}</div>
      <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
        {stat.desc}
      </div>
    </div>
  );
}

export default function ChinaHome() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0D1117", fontFamily: "'Noto Sans SC', sans-serif" }}
    >
      {/* 侧边导航 */}
      <CnSideNav />

      {/* 主内容区 */}
      <main className="ml-56">
        {/* ===== 英雄区 ===== */}
        <div
          className="relative min-h-screen flex flex-col justify-center overflow-hidden"
          style={{
            background: `linear-gradient(135deg, #0D1117 0%, #1a0a0a 50%, #0D1117 100%)`,
          }}
        >
          {/* 背景图 */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663323503525/aCXDEF7YVcoSkYzDs44ysS/cn_hero_bg-FKHFKQseCmWotkK3FyDaqA.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center right",
              opacity: 0.35,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, #0D1117 35%, transparent 70%)",
            }}
          />

          {/* 内容 */}
          <div className="relative z-10 px-12 py-20 max-w-3xl">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-6"
              style={{ color: "#C41E3A" }}
            >
              INTERACTIVE KNOWLEDGE ATLAS
            </p>
            <h1
              className="text-6xl font-bold leading-tight mb-4"
              style={{ color: "#fff", fontFamily: "'Noto Serif SC', serif" }}
            >
              中国政治
              <br />
              <span style={{ color: "#C41E3A" }}>选举与运转</span>
              <br />
              制度全解
            </h1>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)", maxWidth: "520px" }}>
              从中华人民共和国的宪法根基，到每一张选票背后的运作机制——
              16个核心章节，深入解析世界上规模最大的政治体制之一。
            </p>
            <div className="flex gap-4">
              <button
                className="px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#C41E3A" }}
                onClick={() => document.getElementById("foundation")?.scrollIntoView({ behavior: "smooth" })}
              >
                开始探索 →
              </button>
              <button
                className="px-6 py-3 rounded-lg font-bold transition-all hover:opacity-90"
                style={{
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.5)",
                  color: "#D4AF37",
                }}
                onClick={() => document.getElementById("party-system")?.scrollIntoView({ behavior: "smooth" })}
              >
                党的领导体制
              </button>
            </div>
          </div>

          {/* 关键数据条 */}
          <div
            className="relative z-10 mx-12 mt-8 grid grid-cols-3 lg:grid-cols-6 gap-3"
          >
            {cnKeyStats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* ===== 01. 立国基石 ===== */}
        <Section
          id="foundation"
          title="立国基石：宪法与国体"
          subtitle="中华人民共和国的政治制度建立在1982年宪法的基础之上"
          accentColor="#C41E3A"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(196,30,58,0.1)", border: "1px solid rgba(196,30,58,0.3)" }}
              >
                <h3 className="font-bold text-lg mb-3" style={{ color: "#C41E3A", fontFamily: "'Noto Serif SC', serif" }}>
                  国体：人民民主专政
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  宪法第一条规定：中华人民共和国是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家。
                  这意味着国家政权代表工人阶级和广大人民的利益，同时对"敌对势力"实行专政。
                </p>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)" }}
              >
                <h3 className="font-bold text-lg mb-3" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                  政体：人民代表大会制度
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                  宪法第二条规定：中华人民共和国的一切权力属于人民。人民行使国家权力的机关是全国人民代表大会和地方各级人民代表大会。
                  这是中国的根本政治制度。
                </p>
              </div>
            </div>

            {/* 四项基本原则 */}
            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <h3 className="font-bold mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                四项基本原则（宪法序言）
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { title: "坚持社会主义道路", icon: "🌟", color: "#C41E3A" },
                  { title: "坚持人民民主专政", icon: "🏛️", color: "#D4AF37" },
                  { title: "坚持中国共产党的领导", icon: "⭐", color: "#C41E3A" },
                  { title: "坚持马列主义毛泽东思想", icon: "📖", color: "#D4AF37" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3 text-center"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}33` }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <p className="text-xs font-semibold" style={{ color: item.color }}>
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 历次宪法修正 */}
            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <h3 className="font-bold mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                宪法重要修正历程
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      {["年份", "届次", "重要修正内容"].map((h) => (
                        <th key={h} className="text-left py-2 pr-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["1988年", "第七届全国人大", "允许私营经济存在和发展；土地使用权可依法转让"],
                      ["1993年", "第八届全国人大", "确立社会主义市场经济体制；将县级人民代表大会任期改为5年"],
                      ["1999年", "第九届全国人大", "确立依法治国基本方略；将邓小平理论写入宪法"],
                      ["2004年", "第十届全国人大", "保护公民合法私有财产；国家尊重和保障人权"],
                      ["2018年", "第十三届全国人大", "将习近平新时代中国特色社会主义思想写入宪法；取消国家主席任期限制"],
                    ].map(([year, session, content], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <td className="py-2.5 pr-4 font-mono text-sm" style={{ color: "#D4AF37" }}>{year}</td>
                        <td className="py-2.5 pr-4 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{session}</td>
                        <td className="py-2.5 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== 02. 党的领导 ===== */}
        <Section
          id="party-system"
          title="党的领导：中国共产党组织体系"
          subtitle="理解中国政治，首先要理解党的组织架构与运作逻辑"
          accentColor="#C41E3A"
        >
          <CnPartyPyramid />
        </Section>

        {/* ===== 03. 最高权力 ===== */}
        <Section
          id="politburo"
          title="最高权力：政治局常委会的运作"
          subtitle="七人常委会是中国实际上的最高决策机构"
          accentColor="#C41E3A"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "集体领导制",
                  desc: "常委会以集体领导方式运作，重大决策须经全体常委讨论。总书记是第一中的平等者，而非独裁者（理论上）。",
                  color: "#C41E3A",
                },
                {
                  title: "分工负责制",
                  desc: "每位常委分管特定领域：总书记统管全局，国务院总理主管经济，全国人大委员长主管立法，全国政协主席主管协商。",
                  color: "#D4AF37",
                },
                {
                  title: "任期惯例",
                  desc: '2018年修宪前，国家主席有两届10年任期限制。党的总书记和中央军委主席无明文任期限制，但有「七上八下」的不成文惯例（67岁可留任，68岁退休）。',
                  color: "#6A1B9A",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}33` }}
                >
                  <h3 className="font-bold mb-2" style={{ color: item.color, fontFamily: "'Noto Serif SC', serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 权力集中趋势 */}
            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <h3 className="font-bold mb-3" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                习近平时代的权力集中
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                2012年习近平就任总书记以来，中国政治出现了权力向个人集中的趋势。
                习近平同时担任总书记、国家主席、中央军委主席三个最高职务，并设立了多个由其亲自主持的领导小组（如中央全面深化改革领导小组、中央网络安全和信息化领导小组等），
                绕过常规的党政机构直接推动政策。2018年修宪取消国家主席任期限制，进一步巩固了这一趋势。
                2022年党章修正案将"两个确立"（确立习近平党中央的核心地位、确立习近平新时代中国特色社会主义思想的指导地位）写入党章。
              </p>
            </div>
          </div>
        </Section>

        {/* ===== 04. 党代会 ===== */}
        <Section
          id="party-congress"
          title="党代会制度：五年一届的权力更迭"
          subtitle="全国代表大会是党的最高权力机关，每五年举行一次"
          accentColor="#C41E3A"
        >
          <div className="space-y-6">
            {/* 党代会流程 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "①", title: "代表选举", desc: "各省、自治区、直辖市及解放军系统选举产生约2300名党代表", color: "#C41E3A" },
                { step: "②", title: "大会召开", desc: "每5年举行一次，为期约一周，听取和审查中央委员会报告", color: "#D4252A" },
                { step: "③", title: "选举中央委员会", desc: "选举产生新一届中央委员会（约200名委员）和中央纪律检查委员会", color: "#E53935" },
                { step: "④", title: "中央委员会全会", desc: "党代会结束后立即召开一中全会，选举产生政治局、政治局常委会和总书记", color: "#EF5350" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}33` }}
                >
                  <div
                    className="text-2xl font-bold mb-2"
                    style={{ color: item.color, fontFamily: "'Space Grotesk', monospace" }}
                  >
                    {item.step}
                  </div>
                  <h4 className="font-bold text-white mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    {item.title}
                  </h4>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 历届党代会 */}
            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <h3 className="font-bold mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                改革开放以来历届党代会
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                      {["届次", "年份", "核心议题", "主要领导人"].map((h) => (
                        <th key={h} className="text-left py-2 pr-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["十一大", "1977年", "宣告文化大革命结束", "华国锋"],
                      ["十二大", "1982年", "提出建设有中国特色的社会主义", "邓小平"],
                      ["十三大", "1987年", "提出社会主义初级阶段理论", "赵紫阳"],
                      ["十四大", "1992年", "确立社会主义市场经济体制目标", "江泽民"],
                      ["十五大", "1997年", "将邓小平理论写入党章", "江泽民"],
                      ["十六大", "2002年", "提出全面建设小康社会目标", "胡锦涛"],
                      ["十七大", "2007年", "提出科学发展观", "胡锦涛"],
                      ["十八大", "2012年", "习近平接班，提出中国梦", "习近平"],
                      ["十九大", "2017年", "确立习近平新时代中国特色社会主义思想", "习近平"],
                      ["二十大", "2022年", "习近平开启第三任期，写入「两个确立」", "习近平"],
                    ].map(([session, year, topic, leader], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <td className="py-2 pr-4 font-bold" style={{ color: "#C41E3A" }}>{session}</td>
                        <td className="py-2 pr-4 font-mono" style={{ color: "#D4AF37" }}>{year}</td>
                        <td className="py-2 pr-4" style={{ color: "rgba(255,255,255,0.75)" }}>{topic}</td>
                        <td className="py-2" style={{ color: "rgba(255,255,255,0.55)" }}>{leader}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== 05. 全国人大 ===== */}
        <Section
          id="npc"
          title="全国人民代表大会：最高国家权力机关"
          subtitle="宪法规定的最高权力机关，但实际运作受党的领导"
          accentColor="#1565C0"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "代表总数", value: "2977", unit: "名", desc: "第十四届（2023-2028年）", color: "#1565C0" },
                { label: "每届任期", value: "5", unit: "年", desc: "每年召开一次全体会议", color: "#1976D2" },
                { label: "常委会人数", value: "175", unit: "名", desc: "全年常设，每两月开一次", color: "#1E88E5" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 text-center"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}44` }}
                >
                  <div className="text-4xl font-bold mb-1" style={{ color: item.color, fontFamily: "'Space Grotesk', monospace" }}>
                    {item.value}
                    <span className="text-xl ml-1">{item.unit}</span>
                  </div>
                  <div className="font-bold text-white mb-1">{item.label}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</div>
                </div>
              ))}
            </div>

            {/* 立法程序 */}
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: "#42A5F5", fontFamily: "'Noto Serif SC', serif" }}>
                立法程序：法律从提案到公布
              </h3>
              <CnLegislativeFlow />
            </div>

            {/* 代表构成 */}
            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(21,101,192,0.1)", border: "1px solid rgba(21,101,192,0.3)" }}
            >
              <h3 className="font-bold mb-3" style={{ color: "#42A5F5", fontFamily: "'Noto Serif SC', serif" }}>
                代表构成与名额分配
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                {[
                  { group: "省级代表团", count: "31个", desc: "含31个省、自治区、直辖市" },
                  { group: "解放军代表团", count: "1个", desc: "中国人民解放军及武警部队" },
                  { group: "香港代表团", count: "1个", desc: "香港特别行政区" },
                  { group: "澳门代表团", count: "1个", desc: "澳门特别行政区" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3"
                    style={{ background: "rgba(21,101,192,0.12)", border: "1px solid rgba(21,101,192,0.25)" }}
                  >
                    <p className="font-bold text-white text-sm">{item.group}</p>
                    <p className="text-lg font-bold" style={{ color: "#42A5F5" }}>{item.count}</p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ===== 06. 国务院 ===== */}
        <Section
          id="state-council"
          title="国务院：最高行政机关"
          subtitle="执行全国人大通过的法律，管理国家行政事务"
          accentColor="#2E7D32"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(46,125,50,0.12)", border: "1px solid rgba(46,125,50,0.35)" }}
              >
                <h3 className="font-bold mb-3" style={{ color: "#66BB6A", fontFamily: "'Noto Serif SC', serif" }}>
                  国务院组成
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <p>· <strong style={{ color: "#fff" }}>总理</strong>：李强（主持全面工作）</p>
                  <p>· <strong style={{ color: "#fff" }}>常务副总理</strong>：丁薛祥</p>
                  <p>· <strong style={{ color: "#fff" }}>副总理</strong>：何立峰、张国清、刘国中</p>
                  <p>· <strong style={{ color: "#fff" }}>国务委员</strong>：5人（分管具体领域）</p>
                  <p>· <strong style={{ color: "#fff" }}>各部委负责人</strong>：26个组成部门</p>
                  <p>· <strong style={{ color: "#fff" }}>秘书长</strong>：1人</p>
                </div>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(46,125,50,0.12)", border: "1px solid rgba(46,125,50,0.35)" }}
              >
                <h3 className="font-bold mb-3" style={{ color: "#66BB6A", fontFamily: "'Noto Serif SC', serif" }}>
                  26个组成部门
                </h3>
                <div className="grid grid-cols-2 gap-1 text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {["外交部", "国防部", "国家发改委", "教育部", "科学技术部", "工业和信息化部",
                    "国家民委", "公安部", "国家安全部", "民政部", "司法部", "财政部",
                    "人力资源和社会保障部", "自然资源部", "生态环境部", "住房和城乡建设部",
                    "交通运输部", "水利部", "农业农村部", "商务部", "文化和旅游部",
                    "国家卫生健康委", "退役军人事务部", "应急管理部", "中国人民银行", "审计署"].map((dept) => (
                    <span key={dept} className="py-0.5">· {dept}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ===== 07-09. 其他国家机构 ===== */}
        <Section
          id="judiciary"
          title="国家机构全览：司法、监察与军事"
          subtitle="点击各机构卡片，查看详细职权与现任负责人"
          accentColor="#E65100"
        >
          <CnStateInstitutions />
        </Section>

        {/* ===== 10. 多党合作 ===== */}
        <Section
          id="multiparty"
          title="政党制度：共产党领导的多党合作"
          subtitle="中国实行的不是西方式竞争性多党制，而是协商合作制"
          accentColor="#6A1B9A"
        >
          <CnMultiParty />
        </Section>

        {/* ===== 11. 人民政协 ===== */}
        <Section
          id="cppcc"
          title="人民政治协商会议：协商民主的主要平台"
          subtitle="政协不是权力机关，而是统一战线组织和协商机构"
          accentColor="#6A1B9A"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(106,27,154,0.12)", border: "1px solid rgba(106,27,154,0.35)" }}
              >
                <h3 className="font-bold mb-3" style={{ color: "#CE93D8", fontFamily: "'Noto Serif SC', serif" }}>
                  政协的性质与职能
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <p>· 是中国共产党领导的多党合作和政治协商制度的重要机构</p>
                  <p>· 是爱国统一战线的组织</p>
                  <p>· 是中国人民政治生活中发扬社会主义民主的重要形式</p>
                  <p>· 主要职能：政治协商、民主监督、参政议政</p>
                </div>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(106,27,154,0.12)", border: "1px solid rgba(106,27,154,0.35)" }}
              >
                <h3 className="font-bold mb-3" style={{ color: "#CE93D8", fontFamily: "'Noto Serif SC', serif" }}>
                  政协委员构成
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <p>· 中国共产党</p>
                  <p>· 八个民主党派</p>
                  <p>· 无党派人士</p>
                  <p>· 各人民团体（工会、共青团、妇联等）</p>
                  <p>· 各界别代表（科技、教育、文化、经济等）</p>
                  <p>· 港澳台同胞和海外华人代表</p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <h3 className="font-bold mb-2" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                "两会"：全国人大与全国政协
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                每年3月，全国人民代表大会和中国人民政治协商会议同期在北京召开，合称"两会"，是中国政治生活中的重大事件。
                全国人大负责立法和审查政府工作报告，全国政协负责政治协商和提交提案。
                两会期间，国务院总理会向全国人大作政府工作报告，公布年度经济社会发展目标。
              </p>
            </div>
          </div>
        </Section>

        {/* ===== 12. 选举制度 ===== */}
        <Section
          id="election-system"
          title="选举制度：直接选举与间接选举并用"
          subtitle="中国的选举制度以间接选举为主，县乡级实行直接选举"
          accentColor="#1565C0"
        >
          <CnElectionSystem />
        </Section>

        {/* ===== 13. 基层民主 ===== */}
        <Section
          id="grassroots"
          title="基层民主：村委会与居委会"
          subtitle="城乡基层自治是中国民主制度的重要组成部分"
          accentColor="#2E7D32"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(46,125,50,0.12)", border: "1px solid rgba(46,125,50,0.35)" }}
              >
                <h3 className="font-bold text-lg mb-3" style={{ color: "#66BB6A", fontFamily: "'Noto Serif SC', serif" }}>
                  🌾 村民委员会（农村）
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <p>· 由村民直接选举产生，任期3年</p>
                  <p>· 负责管理村级公共事务、调解纠纷、维护社会秩序</p>
                  <p>· 村民会议是村级最高决策机构</p>
                  <p>· 村务公开：重大事项须向村民公示</p>
                  <p>· 全国约49万个行政村</p>
                </div>
              </div>
              <div
                className="rounded-xl p-5"
                style={{ background: "rgba(21,101,192,0.12)", border: "1px solid rgba(21,101,192,0.35)" }}
              >
                <h3 className="font-bold text-lg mb-3" style={{ color: "#42A5F5", fontFamily: "'Noto Serif SC', serif" }}>
                  🏙️ 居民委员会（城市）
                </h3>
                <div className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <p>· 由居民直接选举产生，任期5年</p>
                  <p>· 负责管理社区公共事务、调解居民纠纷</p>
                  <p>· 协助政府开展社区服务和社会治理</p>
                  <p>· 疫情期间承担了大量社区防控工作</p>
                  <p>· 全国约11万个城市社区</p>
                </div>
              </div>
            </div>

            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
            >
              <h3 className="font-bold mb-2" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                党支部与基层自治的关系
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                在每个村委会和居委会中，都设有中国共产党的基层党支部。
                党支部书记通常在基层治理中发挥主导作用，与村委会主任（或居委会主任）形成"双轨"治理结构。
                在实践中，党支部书记往往比村委会主任拥有更大的实际权威。
              </p>
            </div>
          </div>
        </Section>

        {/* ===== 14-15. 干部与地方 ===== */}
        <Section
          id="cadre"
          title="地方治理与干部选拔制度"
          subtitle="四级地方政府体系与党管干部的核心原则"
          accentColor="#C41E3A"
        >
          <CnLocalGov />
        </Section>

        {/* ===== 16. 制度总结 ===== */}
        <Section
          id="summary"
          title="制度总结：中国特色社会主义政治制度"
          subtitle="理解中国政治制度的优势、特点与内在逻辑"
          accentColor="#D4AF37"
        >
          <div className="space-y-6">
            {/* 四大基本政治制度 */}
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                四大基本政治制度
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "人民代表大会制度",
                    desc: "根本政治制度，保证人民当家作主的根本途径和最高实现形式",
                    color: "#1565C0",
                  },
                  {
                    title: "中国共产党领导的多党合作和政治协商制度",
                    desc: "基本政治制度，实现了政党关系和谐、社会稳定有序",
                    color: "#C41E3A",
                  },
                  {
                    title: "民族区域自治制度",
                    desc: "基本政治制度，保障少数民族当家作主，维护国家统一",
                    color: "#2E7D32",
                  },
                  {
                    title: "基层群众自治制度",
                    desc: "基本政治制度，保障人民群众直接行使民主权利",
                    color: "#6A1B9A",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-5"
                    style={{ background: `${item.color}12`, border: `1px solid ${item.color}33` }}
                  >
                    <h4 className="font-bold mb-2" style={{ color: item.color, fontFamily: "'Noto Serif SC', serif" }}>
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 中美政治制度对比 */}
            <div>
              <h3 className="font-bold text-lg mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
                中美政治制度核心对比
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-3" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
                        维度
                      </th>
                      <th className="text-left p-3" style={{ background: "rgba(196,30,58,0.2)", color: "#EF5350" }}>
                        🇨🇳 中国
                      </th>
                      <th className="text-left p-3" style={{ background: "rgba(21,101,192,0.2)", color: "#42A5F5" }}>
                        🇺🇸 美国
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["政党制度", "一党执政，多党合作", "两党竞争，轮流执政"],
                      ["权力结构", "党领导一切，党政合一", "三权分立，制衡机制"],
                      ["立法机关", "全国人大（一院制）", "国会（两院制）"],
                      ["最高领导人产生", "党代会→中央委员会→政治局常委会", "全国直接选举（选举人团）"],
                      ["任期制度", "总书记无明文限制；国家主席已取消限制", "总统4年一届，最多两届"],
                      ["司法独立", "司法机关接受党的领导", "联邦法院独立，终身任职"],
                      ["地方自治", "中央集权，地方服从中央", "联邦制，州权较大"],
                      ["民主形式", "协商民主、全过程人民民主", "选举民主、代议制民主"],
                    ].map(([dim, cn, us], i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                        <td className="p-3 font-medium" style={{ color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.03)" }}>
                          {dim}
                        </td>
                        <td className="p-3" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(196,30,58,0.06)" }}>
                          {cn}
                        </td>
                        <td className="p-3" style={{ color: "rgba(255,255,255,0.8)", background: "rgba(21,101,192,0.06)" }}>
                          {us}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 切换到美国版 */}
            <div
              className="rounded-xl p-6 text-center"
              style={{ background: "rgba(21,101,192,0.1)", border: "1px solid rgba(21,101,192,0.3)" }}
            >
              <p className="text-lg font-bold mb-2" style={{ color: "#fff", fontFamily: "'Noto Serif SC', serif" }}>
                想了解美国政治制度？
              </p>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                与本指南配套的美国政治制度全解，同样包含17个章节和完整的交互式可视化
              </p>
              <a
                href="/#/"
                className="inline-block px-6 py-3 rounded-lg font-bold text-white transition-all hover:opacity-90"
                style={{ background: "#1565C0" }}
              >
                🇺🇸 查看美国政治制度全解 →
              </a>
            </div>
          </div>
        </Section>

        {/* 德国和日本入口 */}
        <div className="px-8 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="p-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 text-center">
              <p className="text-base font-bold mb-2 text-white">🇩🇪 德国政治制度</p>
              <p className="text-xs mb-3 text-white/60">联邦议会制 · 两票混合比例制 · 16联邦州</p>
              <a href="/#/germany" className="inline-block px-4 py-2 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: '#B8860B' }}>查看德国全解 →</a>
            </div>
            <div className="p-5 rounded-xl border border-pink-500/30 bg-pink-500/5 text-center">
              <p className="text-base font-bold mb-2 text-white">🇯🇵 日本政治制度</p>
              <p className="text-xs mb-3 text-white/60">议会内阁制 · 象征天皇制 · 自民党长期执政</p>
              <a href="/#/japan" className="inline-block px-4 py-2 rounded-lg font-bold text-white text-sm transition-all hover:opacity-90" style={{ background: '#C0406A' }}>查看日本全解 →</a>
            </div>
          </div>
        </div>

        {/* 底部 */}
        <footer
          className="px-8 py-8 text-center"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            中国政治制度全解 · 交互式学习指南 · 内容基于公开资料整理，仅供学习参考
          </p>
        </footer>
      </main>
    </div>
  );
}
