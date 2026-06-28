// GermanyHome.tsx
// Design: Prussian Blue × Amber Gold × Deep Charcoal
// Knowledge Atlas style matching US and China pages

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  deStats, deInstitutions, deElectionSystem, deParties,
  deFederalism, deConstructiveVote, deCoalitions, deSections
} from "@/lib/deData";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663323503525/aCXDEF7YVcoSkYzDs44ysS/de_hero_bg-BDqJtWnLkefFE2KbFY8zYz.webp";

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
    <nav className="fixed left-0 top-0 h-full w-56 bg-[#0A0F1A]/95 backdrop-blur border-r border-[#D4A017]/20 z-40 flex flex-col py-6 overflow-y-auto hidden lg:flex">
      <div className="px-4 mb-6">
        <Link href="/#/">
          <div className="flex items-center gap-2 text-[#D4A017]/70 hover:text-[#D4A017] transition-colors cursor-pointer mb-1">
            <span className="text-xs">← 返回首页</span>
          </div>
        </Link>
        <div className="flex items-center gap-2 mt-3">
          <span className="text-2xl">🇩🇪</span>
          <div>
            <div className="text-white font-bold text-sm leading-tight">德国政治</div>
            <div className="text-[#D4A017] text-xs">制度全解</div>
          </div>
        </div>
      </div>
      <div className="flex-1 px-2">
        {deSections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex flex-col px-3 py-2 rounded-lg mb-1 transition-all ${
              activeSection === s.id
                ? "bg-[#D4A017]/20 border-l-2 border-[#D4A017] text-[#D4A017]"
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
        <Link href="/#/japan">
          <div className="text-xs text-slate-500 hover:text-pink-400 transition-colors cursor-pointer py-1">🇯🇵 日本政治制度</div>
        </Link>
      </div>
    </nav>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────
function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-16 px-6 lg:px-10 ${className}`}>
      {children}
    </section>
  );
}

function SectionHeader({ title, subtitle, accent = "#D4A017" }: { title: string; subtitle: string; accent?: string }) {
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
function InstitutionCard({ inst }: { inst: typeof deInstitutions[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      layout
      className="rounded-xl border overflow-hidden cursor-pointer"
      style={{ borderColor: inst.color + "40", background: "rgba(10,15,26,0.8)" }}
      onClick={() => setOpen(!open)}
      whileHover={{ scale: 1.01 }}
    >
      <div className="p-5 flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: inst.color + "20", border: `1px solid ${inst.color}40` }}>
          {inst.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-bold text-lg">{inst.name}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: inst.color + "20", color: inst.color }}>
              {inst.germanName}
            </span>
          </div>
          <div className="flex gap-4 text-xs text-slate-400 mb-2">
            {inst.seats > 1 && <span>席位：{inst.seats}</span>}
            <span>任期：{inst.term}</span>
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

// ── Two-Vote Visualization ────────────────────────────────────────────────────
function TwoVoteViz() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="rounded-xl border border-[#D4A017]/20 bg-[#0A0F1A]/80 p-6">
      <h3 className="text-white font-bold text-xl mb-2">{deElectionSystem.title}</h3>
      <p className="text-slate-400 text-sm mb-6">{deElectionSystem.description}</p>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {deElectionSystem.votes.map((v, i) => (
          <motion.div
            key={i}
            className="rounded-lg p-5 cursor-pointer border transition-all"
            style={{
              borderColor: active === i ? v.color : v.color + "30",
              background: active === i ? v.color + "15" : "rgba(255,255,255,0.02)",
            }}
            onClick={() => setActive(active === i ? null : i)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold"
                style={{ background: v.color + "20", color: v.color, border: `2px solid ${v.color}` }}>
                {i + 1}
              </div>
              <div>
                <div className="text-white font-bold">{v.name}</div>
                <div className="text-xs" style={{ color: v.color }}>{v.germanName} · {v.seats}席</div>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-2">{v.description}</p>
            <AnimatePresence>
              {active === i && (
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                  <div className="mt-3 p-3 rounded-lg text-xs text-slate-300" style={{ background: v.color + "10" }}>
                    <strong style={{ color: v.color }}>实际效果：</strong> {v.effect}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="rounded-lg p-4 border border-amber-500/30 bg-amber-500/5">
        <div className="flex items-start gap-3">
          <span className="text-amber-400 text-lg mt-0.5">⚠️</span>
          <div>
            <div className="text-amber-400 font-semibold text-sm mb-1">5% 门槛规则</div>
            <p className="text-slate-300 text-sm">{deElectionSystem.threshold.percent}% 第二票门槛：{deElectionSystem.threshold.exception}</p>
            <p className="text-slate-400 text-xs mt-1">{deElectionSystem.threshold.minority}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-lg border border-blue-500/20 bg-blue-500/5">
        <div className="text-blue-400 font-semibold text-sm mb-1">📋 2025年选举制度改革</div>
        <p className="text-slate-300 text-sm">{deElectionSystem.reform2025}</p>
      </div>
    </div>
  );
}

// ── Party Cards ───────────────────────────────────────────────────────────────
function PartyCard({ party }: { party: typeof deParties[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="rounded-xl border overflow-hidden cursor-pointer"
      style={{ borderColor: party.color + "60", background: `linear-gradient(135deg, ${party.bgColor}40 0%, rgba(10,15,26,0.9) 100%)` }}
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
          {party.seats2025 > 0 && (
            <div className="text-right">
              <div className="text-white font-bold text-lg">{party.seats2025}</div>
              <div className="text-xs text-slate-400">2025席位</div>
            </div>
          )}
          {party.seats2025 === 0 && (
            <div className="text-xs text-red-400 bg-red-400/10 px-2 py-1 rounded">未入议院</div>
          )}
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── Coalition Builder ─────────────────────────────────────────────────────────
function CoalitionViz() {
  const [selected, setSelected] = useState(0);
  const c = deCoalitions[selected];
  return (
    <div className="rounded-xl border border-[#D4A017]/20 bg-[#0A0F1A]/80 p-6">
      <h3 className="text-white font-bold text-xl mb-4">历届联合政府</h3>
      <div className="flex gap-2 mb-6 flex-wrap">
        {deCoalitions.map((co, i) => (
          <button key={i} onClick={() => setSelected(i)}
            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
            style={{
              background: selected === i ? co.color : "rgba(255,255,255,0.05)",
              color: selected === i ? "white" : "#94a3b8",
              border: `1px solid ${selected === i ? co.color : "rgba(255,255,255,0.1)"}`,
            }}>
            {co.abbr}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={selected} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 rounded-full" style={{ background: c.color }} />
            <h4 className="text-white font-bold text-lg">{c.name}</h4>
            <span className="text-xs text-slate-400">{c.years}</span>
          </div>
          <div className="flex gap-2 mb-3 flex-wrap">
            {c.parties.map((p, i) => (
              <span key={i} className="text-sm px-3 py-1 rounded-full bg-white/10 text-white">{p}</span>
            ))}
          </div>
          <p className="text-slate-300 text-sm">{c.description}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
        <div className="text-white font-semibold text-sm mb-2">💡 为什么德国总是联合政府？</div>
        <p className="text-slate-300 text-sm leading-relaxed">
          德国比例代表制确保多党并立，单一政党极难获得过半数席位（630席需316席）。
          因此，选举结束后通常需要数周至数月的联合谈判（Koalitionsverhandlungen），
          各党就政策纲领达成联合协议（Koalitionsvertrag）后方可组阁。
        </p>
      </div>
    </div>
  );
}

// ── Federalism Map ────────────────────────────────────────────────────────────
function FederalismViz() {
  const [hovered, setHovered] = useState<string | null>(null);
  const byVotes = [6, 5, 4, 3];
  return (
    <div className="rounded-xl border border-[#D4A017]/20 bg-[#0A0F1A]/80 p-6">
      <h3 className="text-white font-bold text-xl mb-2">16个联邦州与参议院票数</h3>
      <p className="text-slate-400 text-sm mb-6">各州在联邦参议院的票数按人口分配（3-6票），共69票。</p>
      {byVotes.map((votes) => {
        const states = deFederalism.filter(s => s.votes === votes);
        return (
          <div key={votes} className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                {Array.from({ length: votes }).map((_, i) => (
                  <div key={i} className="w-2 h-4 rounded-sm bg-[#D4A017]" />
                ))}
              </div>
              <span className="text-[#D4A017] text-sm font-semibold">{votes}票</span>
              <span className="text-slate-500 text-xs">（{states.length}个州）</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {states.map((s) => (
                <motion.div
                  key={s.state}
                  className="px-3 py-1.5 rounded-lg text-sm cursor-pointer transition-all"
                  style={{
                    background: hovered === s.state ? s.color + "30" : "rgba(255,255,255,0.05)",
                    border: `1px solid ${hovered === s.state ? s.color : "rgba(255,255,255,0.1)"}`,
                    color: hovered === s.state ? "white" : "#94a3b8",
                  }}
                  onHoverStart={() => setHovered(s.state)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  {s.state}
                  {hovered === s.state && (
                    <span className="ml-2 text-xs opacity-70">首府：{s.capital} · {s.population}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
      <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
        <div className="text-white font-semibold text-sm mb-2">联邦制权力划分</div>
        <div className="grid grid-cols-3 gap-3 text-xs">
          {[
            { title: "联邦专属权", items: ["外交", "国防", "货币", "邮政电信", "联邦铁路"] },
            { title: "竞合立法权", items: ["民法刑法", "劳动法", "经济法", "核能", "土地法"] },
            { title: "州专属权", items: ["教育文化", "警察", "地方政府", "广播电视", "建筑法"] },
          ].map((cat, i) => (
            <div key={i}>
              <div className="text-[#D4A017] font-semibold mb-1">{cat.title}</div>
              {cat.items.map((item, j) => (
                <div key={j} className="text-slate-400 py-0.5">· {item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Constructive Vote ─────────────────────────────────────────────────────────
function ConstructiveVoteViz() {
  const [step, setStep] = useState(0);
  return (
    <div className="rounded-xl border border-[#9B7FD4]/30 bg-[#0A0F1A]/80 p-6">
      <h3 className="text-white font-bold text-xl mb-1">{deConstructiveVote.title}</h3>
      <div className="text-[#9B7FD4] text-sm mb-2">{deConstructiveVote.germanName}</div>
      <p className="text-slate-400 text-sm mb-6">{deConstructiveVote.description}</p>
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {deConstructiveVote.steps.map((s, i) => (
          <button key={i} onClick={() => setStep(i)}
            className="flex-shrink-0 px-3 py-2 rounded-lg text-sm transition-all"
            style={{
              background: step === i ? "#9B7FD4" : "rgba(155,127,212,0.1)",
              color: step === i ? "white" : "#9B7FD4",
              border: `1px solid ${step === i ? "#9B7FD4" : "rgba(155,127,212,0.3)"}`,
            }}>
            第{s.step}步
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
          className="p-4 rounded-lg border border-[#9B7FD4]/20 bg-[#9B7FD4]/5 mb-6">
          <div className="text-[#9B7FD4] font-bold mb-2">{deConstructiveVote.steps[step].title}</div>
          <p className="text-slate-300 text-sm">{deConstructiveVote.steps[step].desc}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-4">
        <div className="text-white font-semibold text-sm mb-3">历史案例</div>
        <div className="space-y-2">
          {deConstructiveVote.history.map((h, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
              <div className="text-lg font-bold text-[#D4A017]">{h.year}</div>
              <div className={`text-xs px-2 py-0.5 rounded-full ${h.result === "成功" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>
                {h.result}
              </div>
              <div className="text-slate-300 text-sm">{h.desc}</div>
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
    { aspect: "政体类型", de: "联邦议会制共和国", us: "联邦总统制共和国", cn: "人民代表大会制", jp: "议会内阁制（君主立宪）" },
    { aspect: "政府首脑", de: "联邦总理（议会选举）", us: "总统（选举人团）", cn: "国务院总理（人大任命）", jp: "内阁总理大臣（国会选举）" },
    { aspect: "国家元首", de: "联邦总统（礼仪性）", us: "总统（实权）", cn: "国家主席", jp: "天皇（象征性）" },
    { aspect: "立法机构", de: "联邦议院+联邦参议院", us: "参议院+众议院", cn: "全国人民代表大会", jp: "众议院+参议院" },
    { aspect: "选举制度", de: "两票混合比例制", us: "单一选区多数制", cn: "间接选举制", jp: "小选区比例并立制" },
    { aspect: "政党制度", de: "多党联合制", us: "两党制", cn: "中共领导多党合作", jp: "一党优势制（自民党）" },
    { aspect: "违宪审查", de: "联邦宪法法院（专门）", us: "最高法院（附带）", cn: "全国人大常委会", jp: "最高裁判所（消极）" },
    { aspect: "联邦制度", de: "强联邦制（16州）", us: "强联邦制（50州）", cn: "单一制（省级自治）", jp: "单一制（47都道府县）" },
  ];
  return (
    <div className="rounded-xl border border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-3 text-slate-400 font-medium bg-white/5 w-28">比较维度</th>
              <th className="text-left p-3 font-medium bg-[#D4A017]/10 text-[#D4A017]">🇩🇪 德国</th>
              <th className="text-left p-3 font-medium bg-blue-500/10 text-blue-400">🇺🇸 美国</th>
              <th className="text-left p-3 font-medium bg-red-500/10 text-red-400">🇨🇳 中国</th>
              <th className="text-left p-3 font-medium bg-pink-500/10 text-pink-400">🇯🇵 日本</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/2" : ""}`}>
                <td className="p-3 text-slate-400 font-medium">{r.aspect}</td>
                <td className="p-3 text-slate-300">{r.de}</td>
                <td className="p-3 text-slate-300">{r.us}</td>
                <td className="p-3 text-slate-300">{r.cn}</td>
                <td className="p-3 text-slate-300">{r.jp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function GermanyHome() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    deSections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      <SideNav activeSection={activeSection} />
      <div className="lg:ml-56">
        {/* Hero */}
        <div className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO_BG} alt="德国政治制度" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1A]/40 to-transparent" />
          </div>
          <div className="relative z-10 px-6 lg:px-10 pb-16 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🇩🇪</span>
                <div className="h-px flex-1 max-w-16 bg-[#D4A017]" />
                <span className="text-[#D4A017] text-sm tracking-widest uppercase">Bundesrepublik Deutschland</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                德国政治制度
                <span className="block text-2xl lg:text-3xl text-[#D4A017] font-normal mt-2">全解 · 从基本法到联合政府</span>
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                联邦议会制民主共和国 · 16个联邦州 · 两票混合比例选举制 · 建设性不信任投票 · 联邦宪法法院
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="px-6 lg:px-10 py-10 border-b border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {deStats.map((s, i) => (
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
          <SectionHeader title="立国基石：《基本法》与联邦制" subtitle="Constitutional Foundation" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-[#D4A017]/20 bg-[#D4A017]/5">
                <h3 className="text-[#D4A017] font-bold text-lg mb-3">《基本法》（Grundgesetz）</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  1949年5月23日，《基本法》在西德生效，最初被设计为临时宪法（因此称"基本法"而非"宪法"），
                  但1990年德国统一后正式成为全德宪法。《基本法》的核心是对纳粹历史的深刻反思：
                  通过分权制衡、联邦制、违宪审查等机制，防止权力集中和独裁再现。
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  《基本法》第1条宣示"人的尊严不可侵犯"，第20条规定德国是"民主的、社会的联邦国家"，
                  并赋予公民在有人试图推翻这一宪政秩序时的抵抗权。
                </p>
              </div>
              <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5">
                <h3 className="text-blue-400 font-bold text-lg mb-3">永恒条款（Ewigkeitsklausel）</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  《基本法》第79条第3款规定，即使通过修宪程序，也不得修改以下内容：
                  联邦制结构、各州参与立法、人的尊严、民主原则、法治国家原则、社会国家原则。
                  这些是"永恒条款"，任何政府都无法合法废除。
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-[#5BAD6F]/20 bg-[#5BAD6F]/5">
                <h3 className="text-[#5BAD6F] font-bold text-lg mb-3">联邦制的历史根源</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  德国的联邦制有深厚的历史根源。德意志地区在历史上长期是数百个独立邦国的集合体，
                  直到1871年俾斯麦才完成统一。二战后，盟军（尤其是美国）坚持恢复联邦制，
                  以防止中央集权的再度出现。
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  16个联邦州在教育、文化、警察、广播等领域拥有独立立法权，
                  通过联邦参议院参与联邦立法，形成真正的双层政府体系。
                </p>
              </div>
              <div className="p-5 rounded-xl border border-[#E07B54]/20 bg-[#E07B54]/5">
                <h3 className="text-[#E07B54] font-bold text-lg mb-3">三权分立的德国特色</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  {[
                    { branch: "立法权", body: "联邦议院 + 联邦参议院", color: "#4A90D9" },
                    { branch: "行政权", body: "联邦政府（总理主导）+ 联邦总统（礼仪）", color: "#D4A017" },
                    { branch: "司法权", body: "联邦宪法法院 + 五大专门联邦法院", color: "#5BAD6F" },
                  ].map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: b.color }} />
                      <span className="font-medium" style={{ color: b.color }}>{b.branch}</span>
                      <span className="text-slate-400">→</span>
                      <span>{b.body}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2: Institutions */}
        <Section id="institutions" className="border-b border-white/5">
          <SectionHeader title="五大核心机构" subtitle="State Institutions" />
          <div className="space-y-4">
            {deInstitutions.map((inst) => (
              <InstitutionCard key={inst.id} inst={inst} />
            ))}
          </div>
        </Section>

        {/* Section 3: Chancellor */}
        <Section id="chancellor" className="border-b border-white/5">
          <SectionHeader title="联邦总理：政府核心" subtitle="Federal Chancellor" accent="#E07B54" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-[#E07B54]/20 bg-[#E07B54]/5">
                <h3 className="text-[#E07B54] font-bold text-lg mb-3">总理的选举产生</h3>
                <div className="space-y-3">
                  {[
                    { step: "①", title: "联邦议院大选", desc: "选民投出第一票（选人）和第二票（选党），决定联邦议院席位分配" },
                    { step: "②", title: "联合谈判", desc: "各党协商组建联合政府，签署联合执政协议（Koalitionsvertrag）" },
                    { step: "③", title: "总理候选人提名", desc: "联邦总统正式提名总理候选人（通常为最大联合党团领袖）" },
                    { step: "④", title: "联邦议院投票", desc: "须获得绝对多数（316票以上），若失败可进行多轮投票" },
                    { step: "⑤", title: "总统任命", desc: "联邦总统正式任命总理，总理随即提名各部长名单" },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-white/5">
                      <span className="text-[#E07B54] font-bold text-lg flex-shrink-0">{s.step}</span>
                      <div>
                        <div className="text-white font-medium text-sm">{s.title}</div>
                        <div className="text-slate-400 text-xs mt-0.5">{s.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-[#D4A017]/20 bg-[#D4A017]/5">
                <h3 className="text-[#D4A017] font-bold text-lg mb-3">政策方针权（Richtlinienkompetenz）</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  《基本法》第65条赋予联邦总理"确定政策总方针"的权力，这是德国总理权力的核心。
                  在此方针框架内，各部长独立负责本部门事务（部长原则），
                  但总理可以通过方针权统一政府立场。
                </p>
                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  {[
                    { name: "总理原则", desc: "总理确定政策方针" },
                    { name: "部长原则", desc: "各部长独立负责" },
                    { name: "内阁原则", desc: "分歧事项内阁集体决定" },
                  ].map((p, i) => (
                    <div key={i} className="p-2 rounded-lg bg-[#D4A017]/10 border border-[#D4A017]/20">
                      <div className="text-[#D4A017] font-semibold mb-1">{p.name}</div>
                      <div className="text-slate-400">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-bold text-lg mb-3">历任联邦总理</h3>
                <div className="space-y-2 text-sm">
                  {[
                    { name: "康拉德·阿登纳", party: "基民盟", years: "1949–1963", note: "首任总理，战后重建" },
                    { name: "维利·勃兰特", party: "社民党", years: "1969–1974", note: "东方政策，诺贝尔和平奖" },
                    { name: "赫尔穆特·科尔", party: "基民盟", years: "1982–1998", note: "推动德国统一" },
                    { name: "格哈德·施罗德", party: "社民党", years: "1998–2005", note: "劳动力市场改革" },
                    { name: "安格拉·默克尔", party: "基民盟", years: "2005–2021", note: "欧洲最具影响力领导人" },
                    { name: "奥拉夫·朔尔茨", party: "社民党", years: "2021–2025", note: "红绿灯联合政府" },
                    { name: "弗里德里希·默茨", party: "基民盟", years: "2025–", note: "现任总理" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="text-[#D4A017] font-mono text-xs w-20 flex-shrink-0">{c.years}</div>
                      <div className="flex-1">
                        <span className="text-white font-medium">{c.name}</span>
                        <span className="text-slate-500 text-xs ml-2">({c.party})</span>
                      </div>
                      <div className="text-slate-500 text-xs hidden md:block">{c.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 4: Election */}
        <Section id="election" className="border-b border-white/5">
          <SectionHeader title="选举制度：两票混合比例制" subtitle="Electoral System" />
          <TwoVoteViz />
        </Section>

        {/* Section 5: Parties */}
        <Section id="parties" className="border-b border-white/5">
          <SectionHeader title="政党格局" subtitle="Political Parties" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deParties.map((p) => <PartyCard key={p.abbr} party={p} />)}
          </div>
        </Section>

        {/* Section 6: Coalition */}
        <Section id="coalition" className="border-b border-white/5">
          <SectionHeader title="联合政府机制" subtitle="Coalition Government" />
          <CoalitionViz />
        </Section>

        {/* Section 7: Federalism */}
        <Section id="federalism" className="border-b border-white/5">
          <SectionHeader title="联邦制度：16州权力分配" subtitle="Federalism" />
          <FederalismViz />
        </Section>

        {/* Section 8: Constructive Vote */}
        <Section id="constructive" className="border-b border-white/5">
          <SectionHeader title="建设性不信任投票" subtitle="Constructive Vote of No Confidence" accent="#9B7FD4" />
          <ConstructiveVoteViz />
        </Section>

        {/* Section 9: Judiciary */}
        <Section id="judiciary" className="border-b border-white/5">
          <SectionHeader title="司法体系" subtitle="Judicial System" accent="#5BAD6F" />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="p-5 rounded-xl border border-[#5BAD6F]/20 bg-[#5BAD6F]/5">
              <h3 className="text-[#5BAD6F] font-bold text-lg mb-4">五大联邦最高法院</h3>
              <div className="space-y-3">
                {[
                  { name: "联邦宪法法院", location: "卡尔斯鲁厄", jurisdiction: "宪法争议、违宪审查", color: "#9B7FD4" },
                  { name: "联邦法院", location: "卡尔斯鲁厄", jurisdiction: "民事、刑事终审", color: "#4A90D9" },
                  { name: "联邦行政法院", location: "莱比锡", jurisdiction: "行政诉讼终审", color: "#D4A017" },
                  { name: "联邦财政法院", location: "慕尼黑", jurisdiction: "税务、关税终审", color: "#E07B54" },
                  { name: "联邦劳动法院", location: "埃尔福特", jurisdiction: "劳动争议终审", color: "#5BAD6F" },
                  { name: "联邦社会法院", location: "卡塞尔", jurisdiction: "社会保险终审", color: "#4A90D9" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
                    <div className="flex-1">
                      <div className="text-white font-medium text-sm">{c.name}</div>
                      <div className="text-slate-500 text-xs">{c.jurisdiction}</div>
                    </div>
                    <div className="text-slate-500 text-xs">{c.location}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-[#9B7FD4]/20 bg-[#9B7FD4]/5">
                <h3 className="text-[#9B7FD4] font-bold text-lg mb-3">联邦宪法法院的特殊地位</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  联邦宪法法院是德国最独特的政治机构之一。它不仅是最高司法机关，
                  更是宪法秩序的守护者。历史上，它曾宣布多项联邦法律违宪，
                  包括2021年的气候保护法（要求更严格的减排目标）和2023年的联邦预算（违反债务刹车条款）。
                </p>
                <div className="space-y-2 text-sm">
                  {[
                    "抽象违宪审查：联邦政府、州政府或1/3议员可申请",
                    "具体违宪审查：普通法院在审案中发现法律可能违宪时提交",
                    "宪法诉愿：公民认为基本权利受侵害时申请（每年数千件）",
                    "政党禁止：检察机关申请，宪法法院裁决",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-[#9B7FD4] mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-5 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-bold text-lg mb-3">法官独立性保障</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  联邦宪法法院法官任期12年，不可连任，退休年龄68岁。
                  这种设计确保法官不会为谋求连任而迎合政治压力。
                  法官须获得联邦议院或联邦参议院2/3多数同意，
                  迫使两大党必须协商，防止单一政党控制法院。
                </p>
              </div>
            </div>
          </div>
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
                { href: "/japan", flag: "🇯🇵", name: "日本政治制度", color: "#FF69B4" },
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
