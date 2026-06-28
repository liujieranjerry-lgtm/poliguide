// JapanHome.tsx
// Design: Deep Navy × Crimson Red × Sakura Pink × Silver White
// Knowledge Atlas style matching US, China, Germany pages

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  jpStats, jpInstitutions, jpElectionSystem, jpParties,
  jpPMSelection, jpLDPFactions, jpLocalGov, jpConstitutionArticle9, jpSections
} from "@/lib/jpData";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663323503525/aCXDEF7YVcoSkYzDs44ysS/jp_hero_bg-BDqJtWnLkefFE2KbFY8zYz.webp";

// ── Animated counter ──────────────────────────────────────────────────────────
function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      observer.disconnect();
      let start = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        start = Math.min(start + step, target);
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, 20);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ── Side Navigation ───────────────────────────────────────────────────────────
function SideNav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="fixed left-0 top-0 h-full w-56 bg-[#060D1A]/95 backdrop-blur border-r border-[#E8344E]/20 z-40 flex flex-col py-6 overflow-y-auto hidden lg:flex">
      <div className="px-4 mb-6">
        <Link href="/#/">
          <div className="flex items-center gap-2 text-[#E8344E]/70 hover:text-[#E8344E] transition-colors cursor-pointer mb-1">
            <span className="text-xs">← 返回首页</span>
          </div>
        </Link>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-2xl">🇯🇵</span>
          <div>
            <div className="text-white font-bold text-sm leading-tight">日本政治</div>
            <div className="text-[#E8344E] text-xs">制度全解</div>
          </div>
        </div>
      </div>
      <div className="flex-1 px-2">
        {jpSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex flex-col px-3 py-2 rounded-lg mb-1 transition-all ${
              activeSection === s.id
                ? "bg-[#E8344E]/20 border-l-2 border-[#E8344E] text-[#E8344E]"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-xs font-semibold">{s.title}</span>
            <span className="text-[10px] opacity-60">{s.subtitle}</span>
          </a>
        ))}
      </div>
      <div className="px-4 mt-4 space-y-1 border-t border-white/10 pt-4">
        <div className="text-[10px] text-slate-600 uppercase tracking-widest mb-2">其他国家</div>
        <Link href="/#/">
          <div className="text-xs text-slate-500 hover:text-blue-400 transition-colors cursor-pointer py-1">🇺🇸 美国政治制度</div>
        </Link>
        <Link href="/#/china">
          <div className="text-xs text-slate-500 hover:text-red-400 transition-colors cursor-pointer py-1">🇨🇳 中国政治制度</div>
        </Link>
        <Link href="/#/germany">
          <div className="text-xs text-slate-500 hover:text-yellow-400 transition-colors cursor-pointer py-1">🇩🇪 德国政治制度</div>
        </Link>
      </div>
    </nav>
  );
}

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-16 px-6 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}

function SectionHeader({ title, subtitle, accent = "#E8344E" }: { title: string; subtitle: string; accent?: string }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px flex-1 max-w-8" style={{ background: accent }} />
        <span className="text-xs tracking-widest uppercase" style={{ color: accent }}>{subtitle}</span>
      </div>
      <h2 className="text-3xl font-bold text-white">{title}</h2>
    </div>
  );
}

// ── Institution Card ──────────────────────────────────────────────────────────
function InstitutionCard({ inst }: { inst: typeof jpInstitutions[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="rounded-xl border overflow-hidden cursor-pointer"
      style={{ borderColor: inst.color + "40", background: "rgba(6,13,26,0.8)" }}
      onClick={() => setOpen(!open)}
      whileHover={{ scale: 1.01 }}
    >
      <div className="p-5 flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: inst.color + "20", border: `1px solid ${inst.color}40` }}>
          {inst.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <h3 className="text-white font-bold text-lg">{inst.name}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: inst.color + "20", color: inst.color }}>
              {inst.japaneseName}
            </span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{inst.description}</p>
        </div>
        <div className="text-slate-500 text-sm ml-2">{open ? "▲" : "▼"}</div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t" style={{ borderColor: inst.color + "30" }}>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: inst.color }}>核心职权</h4>
                  <ul className="space-y-1">
                    {inst.powers.map((p, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                        <span style={{ color: inst.color }} className="mt-0.5 flex-shrink-0">›</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: inst.color }}>详细说明</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{inst.details}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Diet Comparison ───────────────────────────────────────────────────────────
function DietComparison() {
  const [active, setActive] = useState<"shugiin" | "sangiin">("shugiin");
  const data = active === "shugiin" ? jpElectionSystem.shugiin : jpElectionSystem.sangiin;
  return (
    <div className="rounded-xl border border-[#E8344E]/20 bg-[#060D1A]/80 p-6">
      <div className="flex gap-3 mb-6">
        <button onClick={() => setActive("shugiin")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${active === "shugiin" ? "bg-[#E8344E] text-white" : "bg-white/5 text-slate-400 hover:text-white"}`}>
          众议院（465席）
        </button>
        <button onClick={() => setActive("sangiin")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${active === "sangiin" ? "bg-[#C0A0FF] text-white" : "bg-white/5 text-slate-400 hover:text-white"}`}>
          参议院（248席）
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <h3 className="text-white font-bold text-xl mb-1">{data.title}</h3>
          <div className="text-slate-400 text-sm mb-5">{data.subtitle}</div>
          <div className="grid md:grid-cols-2 gap-4">
            {data.methods.map((m, i) => (
              <div key={i} className="p-4 rounded-lg border" style={{ borderColor: m.color + "40", background: m.color + "08" }}>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ background: m.color + "20", color: m.color, border: `2px solid ${m.color}` }}>
                    {m.seats}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{m.name}</div>
                    <div className="text-xs" style={{ color: m.color }}>{m.seats}席</div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{m.description}</p>
                {"pros" in m && (
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-green-400 mb-1">优点</div>
                      {(m as any).pros?.map((p: string, j: number) => <div key={j} className="text-slate-400">+ {p}</div>)}
                    </div>
                    <div>
                      <div className="text-red-400 mb-1">缺点</div>
                      {(m as any).cons?.map((c: string, j: number) => <div key={j} className="text-slate-400">- {c}</div>)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {"note" in data && (data as any).note && (
            <div className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm text-amber-300">
              💡 {(data as any).note}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── PM Selection Flow ─────────────────────────────────────────────────────────
function PMSelectionFlow() {
  const [step, setStep] = useState(0);
  return (
    <div className="rounded-xl border border-[#FF9BB0]/20 bg-[#060D1A]/80 p-6">
      <h3 className="text-white font-bold text-xl mb-6">首相产生的七个步骤</h3>
      <div className="flex gap-1 mb-6 overflow-x-auto pb-2">
        {jpPMSelection.map((s, i) => (
          <button key={i} onClick={() => setStep(i)}
            className="flex-shrink-0 w-10 h-10 rounded-full text-sm font-bold transition-all"
            style={{
              background: step === i ? "#E8344E" : step > i ? "#E8344E40" : "rgba(255,255,255,0.05)",
              color: step >= i ? "white" : "#64748b",
              border: `2px solid ${step === i ? "#E8344E" : step > i ? "#E8344E60" : "rgba(255,255,255,0.1)"}`,
            }}>
            {s.step}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
          <div className="p-5 rounded-xl border border-[#E8344E]/20 bg-[#E8344E]/5">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{jpPMSelection[step].icon}</span>
              <div>
                <div className="text-white font-bold text-lg">{jpPMSelection[step].title}</div>
                <div className="text-[#E8344E] text-xs">第 {jpPMSelection[step].step} 步</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">{jpPMSelection[step].desc}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4 flex justify-between">
        <button onClick={() => setStep(Math.max(0, step - 1))}
          className="px-4 py-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition-colors text-sm disabled:opacity-30"
          disabled={step === 0}>← 上一步</button>
        <button onClick={() => setStep(Math.min(jpPMSelection.length - 1, step + 1))}
          className="px-4 py-2 rounded-lg bg-[#E8344E]/20 text-[#E8344E] hover:bg-[#E8344E]/30 transition-colors text-sm disabled:opacity-30"
          disabled={step === jpPMSelection.length - 1}>下一步 →</button>
      </div>
    </div>
  );
}

// ── Party Cards ───────────────────────────────────────────────────────────────
function PartyCard({ party }: { party: typeof jpParties[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="rounded-xl border overflow-hidden cursor-pointer"
      style={{ borderColor: party.color + "60", background: `linear-gradient(135deg, ${party.bgColor}40 0%, rgba(6,13,26,0.9) 100%)` }}
      onClick={() => setOpen(!open)}
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-white font-bold">{party.name}</span>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full font-mono"
              style={{ background: party.color + "30", color: party.color }}>{party.abbr}</span>
          </div>
          <div className="text-right">
            <div className="text-white font-bold text-lg">{party.seats2026}</div>
            <div className="text-xs text-slate-400">众议院席位</div>
          </div>
        </div>
        <div className="text-xs text-slate-400 mb-2">成立于{party.founded}年 · {party.ideology}</div>
        <p className="text-slate-300 text-sm">{party.description}</p>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
              <div className="mt-3 pt-3 border-t" style={{ borderColor: party.color + "30" }}>
                <div className="text-xs font-semibold mb-2" style={{ color: party.color }}>核心政策立场</div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {party.positions.map((p, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: party.color + "20", color: party.color }}>{p}</span>
                  ))}
                </div>
                <div className="text-xs text-slate-400">代表人物：{party.leaders.join("、")}</div>
                <div className="text-xs text-slate-500 mt-1">联合关系：{party.coalition}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── LDP Factions ──────────────────────────────────────────────────────────────
function LDPFactionViz() {
  return (
    <div className="rounded-xl border border-[#E8344E]/20 bg-[#060D1A]/80 p-6">
      <h3 className="text-white font-bold text-xl mb-2">自民党派阀体系</h3>
      <p className="text-slate-400 text-sm mb-5">
        自民党内部长期存在"派阀"（Habatsu）制度——以资深议员为核心的非正式政治团体，
        通过控制资金、职位分配和选举支援维系凝聚力。2024年政治献金丑闻导致多个主要派阀宣布解散。
      </p>
      <div className="space-y-2 mb-5">
        {jpLDPFactions.map((f, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
            <div className={`w-2 h-2 rounded-full flex-shrink-0 ${f.members.includes("解散") ? "bg-red-500" : "bg-green-500"}`} />
            <div className="flex-1">
              <div className="text-white text-sm font-medium">{f.name}</div>
              <div className="text-slate-500 text-xs">{f.note}</div>
            </div>
            <div className={`text-xs px-2 py-0.5 rounded-full ${f.members.includes("解散") ? "bg-red-500/20 text-red-400" : "bg-green-500/20 text-green-400"}`}>
              {f.members}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
        <div className="text-amber-400 font-semibold text-sm mb-2">💡 为什么自民党能长期执政？</div>
        <div className="space-y-1 text-sm text-slate-300">
          {[
            "选举制度优势：小选举区制度有利于大党，自民党在农村选区具有结构性优势",
            "利益网络：与财界、农业团体、建设业等利益集团形成稳固的支持联盟",
            "在野党分裂：反对党长期分裂，无法形成有效的替代选择",
            "经济管理能力：战后高速增长期建立的执政合法性延续至今",
            "派阀内部竞争：派阀制度在党内提供权力流动渠道，减少分裂风险",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5 flex-shrink-0">›</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Article 9 Viz ─────────────────────────────────────────────────────────────
function Article9Viz() {
  const [tab, setTab] = useState(0);
  return (
    <div className="rounded-xl border border-[#7EC8E3]/20 bg-[#060D1A]/80 p-6">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">☮️</span>
        <div>
          <h3 className="text-white font-bold text-xl">宪法第九条</h3>
          <div className="text-[#7EC8E3] text-sm">日本国宪法最具争议的条款</div>
        </div>
      </div>
      <div className="p-4 rounded-lg border border-[#7EC8E3]/20 bg-[#7EC8E3]/5 mb-5">
        <div className="text-[#7EC8E3] text-xs font-semibold mb-2">原文（中文译文）</div>
        <p className="text-slate-200 text-sm leading-relaxed italic">{jpConstitutionArticle9.text}</p>
      </div>
      <div className="flex gap-2 mb-4">
        {["政府解释", "修宪 vs 护宪", "现状"].map((t, i) => (
          <button key={i} onClick={() => setTab(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${tab === i ? "bg-[#7EC8E3] text-[#060D1A]" : "bg-white/5 text-slate-400 hover:text-white"}`}>
            {t}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {tab === 0 && (
          <motion.div key={0} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="text-slate-300 text-sm leading-relaxed">{jpConstitutionArticle9.interpretation}</p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
              {[
                { year: "1954", event: "自卫队成立", note: "政府解释为'自卫力量'不违宪" },
                { year: "1960", event: "日美安保条约", note: "引发大规模抗议（安保斗争）" },
                { year: "2015", event: "安保法制通过", note: "允许集体自卫权，引发违宪争议" },
                { year: "2022", event: "防卫费倍增", note: "GDP 1% → 2%，接近北约标准" },
              ].map((e, i) => (
                <div key={i} className="p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-[#7EC8E3] font-bold">{e.year}</div>
                  <div className="text-white font-medium">{e.event}</div>
                  <div className="text-slate-500">{e.note}</div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        {tab === 1 && (
          <motion.div key={1} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="grid md:grid-cols-2 gap-4">
              {jpConstitutionArticle9.debate.map((d, i) => (
                <div key={i} className="p-4 rounded-lg border"
                  style={{ borderColor: i === 0 ? "#E8344E40" : "#4A90D940", background: i === 0 ? "#E8344E08" : "#4A90D908" }}>
                  <div className="font-semibold text-sm mb-2" style={{ color: i === 0 ? "#E8344E" : "#4A90D9" }}>
                    {i === 0 ? "修宪派" : "护宪派"}
                  </div>
                  <div className="text-xs text-slate-400 mb-2">{d.side}</div>
                  <p className="text-slate-300 text-sm">{d.view}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
        {tab === 2 && (
          <motion.div key={2} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="text-slate-300 text-sm leading-relaxed">{jpConstitutionArticle9.status}</p>
            <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-white font-semibold text-sm mb-2">修宪程序要求</div>
              <div className="space-y-2 text-sm">
                {[
                  { step: "①", desc: "众议院 2/3 以上多数赞成" },
                  { step: "②", desc: "参议院 2/3 以上多数赞成" },
                  { step: "③", desc: "国民投票过半数赞成（18岁以上选民）" },
                  { step: "④", desc: "天皇以国民名义公布" },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-[#7EC8E3] font-bold">{s.step}</span>
                    <span className="text-slate-300">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Local Government ──────────────────────────────────────────────────────────
function LocalGovViz() {
  return (
    <div className="rounded-xl border border-white/10 bg-[#060D1A]/80 p-6">
      <h3 className="text-white font-bold text-xl mb-5">地方政府层级结构</h3>
      <div className="space-y-3">
        {jpLocalGov.map((level, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
            className="p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                style={{ background: ["#E8344E", "#C0A0FF", "#7EC8E3", "#5BAD6F"][i] + "20", color: ["#E8344E", "#C0A0FF", "#7EC8E3", "#5BAD6F"][i] }}>
                {["都道府县", "市", "町", "村"][i].charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-white font-bold">{level.level}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-slate-300">{level.count}个</span>
                </div>
                <div className="text-slate-400 text-xs mb-2">{level.type}</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-slate-300">行政首长：{level.leader}</div>
                  <div className="text-slate-300">议会：{level.assembly}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 p-4 rounded-lg bg-white/5 border border-white/10">
        <div className="text-white font-semibold text-sm mb-2">日本地方自治的特点</div>
        <div className="grid md:grid-cols-2 gap-3 text-xs text-slate-300">
          {[
            "首长与议会均由选民直接选举，相互独立制衡",
            "议会可通过不信任案，首长可解散议会",
            "地方政府承担大量国家委托事务（教育、福祉等）",
            "地方财政高度依赖国家转移支付（地方交付税）",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#E8344E] mt-0.5 flex-shrink-0">›</span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Comparison Table ──────────────────────────────────────────────────────────
function ComparisonTable() {
  const rows = [
    { aspect: "政体类型", jp: "议会内阁制（君主立宪）", de: "联邦议会制共和国", us: "联邦总统制共和国", cn: "人民代表大会制" },
    { aspect: "国家元首", jp: "天皇（象征性）", de: "联邦总统（礼仪性）", us: "总统（实权）", cn: "国家主席" },
    { aspect: "政府首脑", jp: "内阁总理大臣", de: "联邦总理", us: "总统", cn: "国务院总理" },
    { aspect: "立法机构", jp: "众议院+参议院", de: "联邦议院+联邦参议院", us: "参议院+众议院", cn: "全国人民代表大会" },
    { aspect: "选举制度", jp: "小选区比例并立制", de: "两票混合比例制", us: "单一选区多数制", cn: "间接选举制" },
    { aspect: "政党制度", jp: "一党优势制（自民党）", de: "多党联合制", us: "两党制", cn: "中共领导多党合作" },
    { aspect: "国家结构", jp: "单一制（47都道府县）", de: "联邦制（16州）", us: "联邦制（50州）", cn: "单一制（省级自治）" },
    { aspect: "违宪审查", jp: "最高裁判所（消极）", de: "联邦宪法法院（积极）", us: "最高法院（附带）", cn: "全国人大常委会" },
  ];
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-3 text-slate-400 font-medium bg-white/5 w-28">比较维度</th>
              <th className="text-left p-3 font-medium bg-[#E8344E]/10 text-[#E8344E]">🇯🇵 日本</th>
              <th className="text-left p-3 font-medium bg-[#D4A017]/10 text-[#D4A017]">🇩🇪 德国</th>
              <th className="text-left p-3 font-medium bg-blue-500/10 text-blue-400">🇺🇸 美国</th>
              <th className="text-left p-3 font-medium bg-red-500/10 text-red-400">🇨🇳 中国</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                <td className="p-3 text-slate-400 font-medium">{r.aspect}</td>
                <td className="p-3 text-slate-300">{r.jp}</td>
                <td className="p-3 text-slate-300">{r.de}</td>
                <td className="p-3 text-slate-300">{r.us}</td>
                <td className="p-3 text-slate-300">{r.cn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function JapanHome() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    jpSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#060D1A] text-white">
      <SideNav activeSection={activeSection} />
      <div className="lg:ml-56">
        {/* Hero */}
        <div className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO_BG} alt="日本政治制度" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060D1A] via-[#060D1A]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060D1A]/50 to-transparent" />
          </div>
          <div className="relative z-10 px-6 lg:px-10 pb-16 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🇯🇵</span>
                <div className="h-px flex-1 max-w-16 bg-[#E8344E]" />
                <span className="text-[#E8344E] text-sm tracking-widest uppercase">Nihon-koku Kenpō</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                日本政治制度
                <span className="block text-2xl lg:text-3xl text-[#FF9BB0] font-normal mt-2">全解 · 从象征天皇到自民党长期执政</span>
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                议会内阁制 · 象征天皇制 · 小选区比例并立制 · 自民党一党优势 · 宪法第九条和平主义
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 lg:px-10 py-10 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {jpStats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                className="text-center p-4 rounded-xl border" style={{ borderColor: s.color + "30", background: s.color + "08" }}>
                <div className="text-2xl font-bold mb-1" style={{ color: s.color }}>
                  <CountUp target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-slate-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 1: Intro */}
        <Section id="intro" className="border-b border-white/5">
          <SectionHeader title="立国基石：宪法与象征天皇制" subtitle="Constitutional Foundation" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-[#E8344E]/20 bg-[#E8344E]/5">
                <h3 className="text-[#E8344E] font-bold text-lg mb-3">日本国宪法（1947年）</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  现行《日本国宪法》于1947年5月3日生效，由美国占领军主导起草，
                  在战后民主化改革框架下颁布。宪法确立了三大核心原则：
                  国民主权、基本人权尊重、和平主义（第九条）。
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  宪法将天皇地位从"神圣不可侵犯的主权者"（明治宪法）
                  转变为"日本国及日本国民统合的象征"，实现了权力的根本性转移。
                  这是日本历史上最重大的政治变革之一。
                </p>
              </div>
              <div className="p-5 rounded-xl border border-[#FFD700]/20 bg-[#FFD700]/5">
                <h3 className="text-[#FFD700] font-bold text-lg mb-3">象征天皇制的独特性</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  天皇的所有国事行为（任命首相、公布法律、召集国会等）
                  均须经内阁建议和承认，天皇无权自行决定任何政治事务。
                  这与英国君主立宪制类似，但日本天皇的权力限制更为彻底。
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {[
                    { label: "现任天皇", value: "德仁（令和）" },
                    { label: "即位年份", value: "2019年5月1日" },
                    { label: "皇室成员", value: "约17人" },
                    { label: "皇居", value: "东京千代田区" },
                  ].map((item, i) => (
                    <div key={i} className="p-2 rounded-lg bg-[#FFD700]/10 border border-[#FFD700]/20">
                      <div className="text-[#FFD700] text-xs">{item.label}</div>
                      <div className="text-white text-sm font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-[#7EC8E3]/20 bg-[#7EC8E3]/5">
                <h3 className="text-[#7EC8E3] font-bold text-lg mb-3">议会内阁制的运作逻辑</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  日本采用议会内阁制：行政权（内阁）来源于立法权（国会），
                  内阁须对国会负责。这与美国总统制（行政与立法相互独立）形成鲜明对比。
                </p>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "国会选举首相", desc: "首相由国会议员中选出，通常为最大党党首" },
                    { label: "内阁对国会负责", desc: "众议院可通过不信任案，迫使内阁总辞职或解散众议院" },
                    { label: "行政立法融合", desc: "内阁成员通常为国会议员，行政与立法高度重叠" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-2 rounded-lg bg-white/5">
                      <span className="text-[#7EC8E3] font-medium flex-shrink-0">›</span>
                      <div>
                        <div className="text-white font-medium">{item.label}</div>
                        <div className="text-slate-400 text-xs">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl border border-[#C0A0FF]/20 bg-[#C0A0FF]/5">
                <h3 className="text-[#C0A0FF] font-bold text-lg mb-3">宪法的历史背景</h3>
                <div className="space-y-2 text-xs text-slate-300">
                  {[
                    { year: "1889", event: "大日本帝国宪法（明治宪法）颁布", note: "天皇主权，议会权力有限" },
                    { year: "1945", event: "二战结束，美军占领", note: "麦克阿瑟主导民主化改革" },
                    { year: "1946", event: "日本国宪法公布", note: "GHQ起草，日本政府修订" },
                    { year: "1947", event: "宪法生效至今", note: "78年来从未修改，全球最古老现行宪法之一" },
                  ].map((e, i) => (
                    <div key={i} className="flex gap-3 p-2 rounded-lg bg-white/5">
                      <span className="text-[#C0A0FF] font-mono font-bold w-10 flex-shrink-0">{e.year}</span>
                      <div>
                        <div className="text-white">{e.event}</div>
                        <div className="text-slate-500">{e.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2: Institutions */}
        <Section id="institutions" className="border-b border-white/5">
          <SectionHeader title="核心国家机构" subtitle="State Institutions" />
          <div className="space-y-4">
            {jpInstitutions.map((inst) => (
              <InstitutionCard key={inst.id} inst={inst} />
            ))}
          </div>
        </Section>

        {/* Section 3: Diet */}
        <Section id="diet" className="border-b border-white/5">
          <SectionHeader title="国会两院：众议院与参议院" subtitle="The National Diet" accent="#7EC8E3" />
          <DietComparison />
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-[#E8344E]/20 bg-[#E8344E]/5">
              <h3 className="text-[#E8344E] font-bold mb-3">众议院优越性原则</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                日本宪法赋予众议院在多项事务上的优先权，以确保民意的直接反映：
              </p>
              <div className="space-y-2 text-sm">
                {[
                  "预算案：众议院先议，参议院30天内未议决视为通过",
                  "条约批准：两院不一致，以众议院为准",
                  "首相提名：两院不一致，以众议院为准",
                  "法律案：参议院否决后，众议院2/3再次通过即成立",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="text-[#E8344E] mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-xl border border-[#C0A0FF]/20 bg-[#C0A0FF]/5">
              <h3 className="text-[#C0A0FF] font-bold mb-3">参议院的稳定器作用</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                参议院不可解散，每3年改选一半，提供政治连续性。
                当执政党在参议院失去多数（"扭曲国会"），立法将陷入困境：
              </p>
              <div className="space-y-2 text-sm">
                {[
                  "2007-2009年：安倍、福田、麻生政府遭遇扭曲国会",
                  "2010-2012年：民主党政府遭遇扭曲国会，政治陷入僵局",
                  "扭曲国会迫使执政党妥协或提前解散众议院大选",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="text-[#C0A0FF] mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Section 4: PM Selection */}
        <Section id="pmselection" className="border-b border-white/5">
          <SectionHeader title="首相产生机制" subtitle="Prime Minister Selection" accent="#FF9BB0" />
          <PMSelectionFlow />
        </Section>

        {/* Section 5: Election */}
        <Section id="election" className="border-b border-white/5">
          <SectionHeader title="选举制度详解" subtitle="Electoral System" />
          <DietComparison />
        </Section>

        {/* Section 6: Parties */}
        <Section id="parties" className="border-b border-white/5">
          <SectionHeader title="政党格局" subtitle="Political Parties" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jpParties.map((p) => <PartyCard key={p.abbr} party={p} />)}
          </div>
        </Section>

        {/* Section 7: LDP */}
        <Section id="ldp" className="border-b border-white/5">
          <SectionHeader title="自民党政治：派阀与长期执政" subtitle="LDP Dominance" />
          <LDPFactionViz />
        </Section>

        {/* Section 8: Article 9 */}
        <Section id="article9" className="border-b border-white/5">
          <SectionHeader title="宪法第九条：和平主义与修宪争议" subtitle="Article 9 & Pacifism" accent="#7EC8E3" />
          <Article9Viz />
        </Section>

        {/* Section 9: Local Gov */}
        <Section id="local" className="border-b border-white/5">
          <SectionHeader title="地方政治：47都道府县" subtitle="Local Government" accent="#5BAD6F" />
          <LocalGovViz />
        </Section>

        {/* Section 10: Comparison */}
        <Section id="comparison" className="border-b border-white/5">
          <SectionHeader title="四国政治制度对比" subtitle="Comparative Politics" />
          <ComparisonTable />
        </Section>

        {/* Footer nav */}
        <div className="px-6 lg:px-10 py-12 border-t border-white/10">
          <div className="text-center mb-6">
            <div className="text-slate-400 text-sm mb-4">探索其他国家的政治制度</div>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                { href: "/", flag: "🇺🇸", name: "美国政治制度", color: "#4A90D9" },
                { href: "/china", flag: "🇨🇳", name: "中国政治制度", color: "#E07B54" },
                { href: "/germany", flag: "🇩🇪", name: "德国政治制度", color: "#D4A017" },
              ].map((l) => (
                <Link key={l.href} href={l.href}>
                  <div className="px-5 py-3 rounded-xl border cursor-pointer transition-all hover:scale-105"
                    style={{ borderColor: l.color + "40", background: l.color + "10" }}>
                    <span className="text-2xl mr-2">{l.flag}</span>
                    <span className="text-white text-sm">{l.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
