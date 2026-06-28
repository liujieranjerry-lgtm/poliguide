// Presidents.tsx
// Design: Knowledge Atlas — Deep Slate × Blue × Red
// 紧凑时间线 + 可展开卡片 + 党派色彩标识

import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { presidents, partyStats, type President } from "@/lib/presidentsData";

// ── Filters ───────────────────────────────────────────────────────────────────
type FilterParty = "全部" | "共和党" | "民主党" | "其他";
type FilterEra = "全部" | "建国时期" | "内战前后" | "进步镀金" | "二战冷战" | "现代";

const eras: { label: FilterEra; range: [number, number] }[] = [
  { label: "建国时期", range: [1789, 1829] },
  { label: "内战前后", range: [1829, 1877] },
  { label: "进步镀金", range: [1877, 1933] },
  { label: "二战冷战", range: [1933, 1981] },
  { label: "现代", range: [1981, 2025] },
];

function getEra(p: President): FilterEra {
  const y = p.years[0];
  for (const e of eras) if (y >= e.range[0] && y < e.range[1]) return e.label;
  return "现代";
}

// ── President Card ────────────────────────────────────────────────────────────
function PresidentCard({ p, compact }: { p: President; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const isRep = p.party.includes("共和党");
  const isDem = p.party.includes("民主党");
  const accentColor = isRep ? "#ef4444" : isDem ? "#3b82f6" : "#94a3b8";

  return (
    <motion.div
      layout
      className="rounded-xl border overflow-hidden cursor-pointer select-none"
      style={{ borderColor: accentColor + "30", background: "rgba(8,14,26,0.85)" }}
      onClick={() => setOpen(!open)}
      whileHover={{ borderColor: accentColor + "70", scale: 1.005 }}
      transition={{ duration: 0.15 }}
    >
      {/* Header row */}
      <div className="flex items-center gap-3 px-4 py-3">
        {/* Number badge */}
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 font-['Space_Grotesk']"
          style={{ background: accentColor + "18", color: accentColor, border: `1.5px solid ${accentColor}50` }}
        >
          {p.number}
        </div>

        {/* Name + term */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-white font-semibold text-sm leading-tight">{p.nameCn}</span>
            {!compact && (
              <span className="text-slate-500 text-xs hidden sm:inline">{p.name}</span>
            )}
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs font-mono" style={{ color: accentColor + "cc" }}>{p.term}</span>
            <span className="text-slate-600 text-xs">·</span>
            <span className="text-slate-500 text-xs truncate">{p.highlight}</span>
          </div>
        </div>

        {/* Party dot */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <div className="w-2 h-2 rounded-full" style={{ background: accentColor }} />
          <span className="text-xs text-slate-500 hidden md:inline">{p.party.split("/")[0]}</span>
          <span className="text-slate-600 text-xs ml-1">{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {/* Expanded detail */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t" style={{ borderColor: accentColor + "20" }}>
              <div className="mt-3 grid sm:grid-cols-2 gap-4">
                {/* Left: meta */}
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-400">
                    <span className="text-slate-600">英文名</span><span className="text-slate-300">{p.name}</span>
                    <span className="text-slate-600">党派</span><span style={{ color: accentColor }}>{p.party}</span>
                    <span className="text-slate-600">副总统</span><span className="text-slate-300">{p.vp}</span>
                    <span className="text-slate-600">出生州</span><span className="text-slate-300">{p.state}</span>
                    <span className="text-slate-600">生卒</span>
                    <span className="text-slate-300">{p.born}{p.died ? `–${p.died}` : "–"}</span>
                  </div>
                  {p.quote && (
                    <blockquote className="mt-2 pl-3 border-l-2 italic text-slate-400 text-xs leading-relaxed"
                      style={{ borderColor: accentColor + "60" }}>
                      "{p.quote}"
                    </blockquote>
                  )}
                </div>
                {/* Right: key events */}
                <div>
                  <div className="text-xs font-semibold mb-2" style={{ color: accentColor }}>任内大事</div>
                  <ul className="space-y-1">
                    {p.keyEvents.map((e, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span style={{ color: accentColor }} className="mt-0.5 flex-shrink-0">›</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Timeline bar ──────────────────────────────────────────────────────────────
function TimelineBar() {
  const minYear = 1789, maxYear = 2029;
  const span = maxYear - minYear;
  return (
    <div className="relative h-10 mb-6 hidden lg:block">
      {/* axis */}
      <div className="absolute top-4 left-0 right-0 h-px bg-white/10" />
      {/* era labels */}
      {eras.map((e) => {
        const left = ((e.range[0] - minYear) / span) * 100;
        const width = ((e.range[1] - e.range[0]) / span) * 100;
        return (
          <div key={e.label}
            className="absolute top-0 h-3 opacity-30 rounded-sm"
            style={{ left: `${left}%`, width: `${width}%`, background: ["#6366f1","#f59e0b","#22c55e","#3b82f6","#ef4444"][eras.indexOf(e)] }}>
          </div>
        );
      })}
      {/* year ticks */}
      {[1800,1850,1900,1950,2000].map(y => (
        <div key={y} className="absolute top-3 flex flex-col items-center"
          style={{ left: `${((y - minYear) / span) * 100}%` }}>
          <div className="w-px h-3 bg-white/20" />
          <span className="text-[10px] text-slate-600 mt-1">{y}</span>
        </div>
      ))}
      {/* president dots */}
      {presidents.map(p => {
        const isRep = p.party.includes("共和党");
        const isDem = p.party.includes("民主党");
        const color = isRep ? "#ef4444" : isDem ? "#3b82f6" : "#94a3b8";
        const left = ((p.years[0] - minYear) / span) * 100;
        return (
          <div key={p.number}
            className="absolute top-3 w-1.5 h-1.5 rounded-full -translate-x-0.5"
            style={{ left: `${left}%`, background: color, opacity: 0.8 }}
            title={`${p.number}. ${p.nameCn} (${p.term})`}
          />
        );
      })}
    </div>
  );
}

// ── Stats bar ─────────────────────────────────────────────────────────────────
function StatsBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      {[
        { label: "历任总统", value: "47", suffix: "位", color: "#94a3b8" },
        { label: "共和党总统", value: partyStats.find(p=>p.party==="共和党")!.count.toString(), suffix: "位", color: "#ef4444" },
        { label: "民主党总统", value: partyStats.find(p=>p.party==="民主党")!.count.toString(), suffix: "位", color: "#3b82f6" },
        { label: "遭弹劾总统", value: "4", suffix: "次", color: "#f59e0b" },
      ].map((s, i) => (
        <div key={i} className="rounded-xl border px-4 py-3 text-center"
          style={{ borderColor: s.color + "30", background: s.color + "08" }}>
          <div className="text-2xl font-bold font-['Space_Grotesk']" style={{ color: s.color }}>{s.value}<span className="text-base ml-0.5">{s.suffix}</span></div>
          <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Presidents() {
  const [filterParty, setFilterParty] = useState<FilterParty>("全部");
  const [filterEra, setFilterEra] = useState<FilterEra>("全部");
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "era">("list");

  const filtered = useMemo(() => {
    return presidents.filter(p => {
      if (filterParty === "共和党" && !p.party.includes("共和党")) return false;
      if (filterParty === "民主党" && !p.party.includes("民主党")) return false;
      if (filterParty === "其他" && (p.party.includes("共和党") || p.party.includes("民主党"))) return false;
      if (filterEra !== "全部" && getEra(p) !== filterEra) return false;
      if (search) {
        const q = search.toLowerCase();
        if (!p.nameCn.includes(search) && !p.name.toLowerCase().includes(q) &&
          !(p.highlight ?? "").includes(search) && !p.term.includes(search)) return false;
      }
      return true;
    });
  }, [filterParty, filterEra, search]);

  const byEra = useMemo(() => {
    const map: Record<string, President[]> = {};
    filtered.forEach(p => {
      const e = getEra(p);
      if (!map[e]) map[e] = [];
      map[e].push(p);
    });
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-[#080e1a] text-white">
      {/* Side nav */}
      <aside className="fixed left-0 top-0 h-full w-56 bg-[#080e1a] border-r border-white/8 z-30 hidden lg:flex flex-col py-6 overflow-y-auto">
        <div className="px-4 mb-6">
          <Link href="/#/">
            <div className="flex items-center gap-2 text-blue-400/70 hover:text-blue-400 transition-colors cursor-pointer mb-3 text-xs">
              ← 返回美国政治制度
            </div>
          </Link>
          <div className="text-xs font-bold text-white/40 uppercase tracking-widest">美国政治制度</div>
          <div className="text-xs text-white/20 mt-1">历任总统全览</div>
        </div>
        {/* Era quick links */}
        <div className="px-4 space-y-1">
          <div className="text-[10px] text-white/20 uppercase tracking-widest mb-2">按时代</div>
          {(["全部", ...eras.map(e => e.label)] as (FilterEra | "全部")[]).map(e => (
            <button key={e} onClick={() => setFilterEra(e as FilterEra)}
              className={`w-full text-left text-xs px-3 py-1.5 rounded-lg transition-all ${filterEra === e ? "bg-blue-500/20 text-blue-400" : "text-slate-500 hover:text-white"}`}>
              {e}
            </button>
          ))}
        </div>
        <div className="px-4 mt-6 space-y-1">
          <div className="text-[10px] text-white/20 uppercase tracking-widest mb-2">按党派</div>
          {(["全部", "共和党", "民主党", "其他"] as FilterParty[]).map(party => (
            <button key={party} onClick={() => setFilterParty(party)}
              className={`w-full text-left text-xs px-3 py-1.5 rounded-lg transition-all ${filterParty === party ? "bg-blue-500/20 text-blue-400" : "text-slate-500 hover:text-white"}`}>
              {party === "共和党" ? "🔴 " : party === "民主党" ? "🔵 " : ""}{party}
            </button>
          ))}
        </div>
        <div className="mt-auto px-4 space-y-1 border-t border-white/10 pt-4">
          <div className="text-[10px] text-slate-600 uppercase tracking-widest mb-2">其他国家</div>
          <Link href="/#/china"><div className="text-xs text-slate-500 hover:text-red-400 transition-colors cursor-pointer py-1">🇨🇳 中国政治制度</div></Link>
          <Link href="/#/germany"><div className="text-xs text-slate-500 hover:text-yellow-400 transition-colors cursor-pointer py-1">🇩🇪 德国政治制度</div></Link>
          <Link href="/#/japan"><div className="text-xs text-slate-500 hover:text-pink-400 transition-colors cursor-pointer py-1">🇯🇵 日本政治制度</div></Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="lg:ml-56 px-4 sm:px-6 lg:px-10 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🇺🇸</span>
            <div>
              <h1 className="text-3xl font-bold text-white font-['Space_Grotesk']">历任美国总统</h1>
              <p className="text-slate-400 text-sm mt-1">1789–至今 · 共 47 位 · 点击任意总统查看详情</p>
            </div>
          </div>
        </div>

        <StatsBar />
        <TimelineBar />

        {/* Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {/* Search */}
          <input
            type="text"
            placeholder="搜索总统姓名、关键词..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 w-48"
          />
          {/* Party filter (mobile) */}
          <div className="flex gap-1.5 lg:hidden">
            {(["全部", "共和党", "民主党", "其他"] as FilterParty[]).map(p => (
              <button key={p} onClick={() => setFilterParty(p)}
                className={`px-2.5 py-1 rounded-lg text-xs transition-all ${filterParty === p ? "bg-blue-500/30 text-blue-300" : "bg-white/5 text-slate-400"}`}>
                {p}
              </button>
            ))}
          </div>
          {/* View toggle */}
          <div className="flex gap-1.5 ml-auto">
            <button onClick={() => setViewMode("list")}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${viewMode === "list" ? "bg-white/15 text-white" : "bg-white/5 text-slate-500"}`}>
              列表
            </button>
            <button onClick={() => setViewMode("era")}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${viewMode === "era" ? "bg-white/15 text-white" : "bg-white/5 text-slate-500"}`}>
              按时代
            </button>
          </div>
          <span className="text-xs text-slate-600">共 {filtered.length} 位</span>
        </div>

        {/* List view */}
        {viewMode === "list" && (
          <div className="space-y-2">
            <AnimatePresence>
              {filtered.map(p => (
                <motion.div key={p.number}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}>
                  <PresidentCard p={p} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Era view */}
        {viewMode === "era" && (
          <div className="space-y-8">
            {eras.map((era, ei) => {
              const list = byEra[era.label];
              if (!list || list.length === 0) return null;
              const eraColors = ["#6366f1","#f59e0b","#22c55e","#3b82f6","#ef4444"];
              const color = eraColors[ei];
              return (
                <div key={era.label}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-px flex-1 max-w-6" style={{ background: color }} />
                    <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color }}>
                      {era.label}
                    </h2>
                    <span className="text-xs text-slate-600">{era.range[0]}–{era.range[1]}</span>
                    <div className="h-px flex-1" style={{ background: color + "30" }} />
                  </div>
                  <div className="space-y-2">
                    {list.map(p => <PresidentCard key={p.number} p={p} />)}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-600">
            <div className="text-4xl mb-3">🔍</div>
            <div>没有找到匹配的总统</div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/8 text-center">
          <Link href="/#/">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm cursor-pointer hover:bg-blue-500/20 transition-colors">
              ← 返回美国政治制度全解
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
