// 中国共产党组织体系金字塔 - 交互式可视化
// 设计：深红渐变金字塔，悬停展示详情

import { useState } from "react";
import { partyOrgLevels, politburoStanding } from "@/lib/cnData";

export default function CnPartyPyramid() {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [showStanding, setShowStanding] = useState(false);

  return (
    <div className="space-y-8">
      {/* 金字塔 */}
      <div className="flex flex-col items-center gap-1.5">
        {partyOrgLevels.map((lvl) => (
          <div
            key={lvl.level}
            className="relative cursor-pointer transition-all duration-300"
            style={{ width: lvl.width, maxWidth: "600px" }}
            onMouseEnter={() => setActiveLevel(lvl.level)}
            onMouseLeave={() => setActiveLevel(null)}
          >
            <div
              className="rounded px-4 py-3 text-center transition-all duration-300"
              style={{
                background:
                  activeLevel === lvl.level
                    ? `linear-gradient(135deg, ${lvl.color}ee, ${lvl.color}aa)`
                    : `linear-gradient(135deg, ${lvl.color}88, ${lvl.color}55)`,
                border: `1px solid ${lvl.color}${activeLevel === lvl.level ? "ff" : "66"}`,
                boxShadow: activeLevel === lvl.level ? `0 0 20px ${lvl.color}44` : "none",
                transform: activeLevel === lvl.level ? "scaleX(1.02)" : "scaleX(1)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="font-bold text-sm"
                  style={{ color: "#fff", fontFamily: "'Noto Serif SC', serif" }}
                >
                  {lvl.name}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(0,0,0,0.3)", color: "#D4AF37" }}
                >
                  {lvl.members}
                </span>
              </div>
              {activeLevel === lvl.level && (
                <p className="text-xs mt-1.5 text-left" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {lvl.desc}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 政治局常委会展开 */}
      <div>
        <button
          onClick={() => setShowStanding(!showStanding)}
          className="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all"
          style={{
            background: showStanding ? "rgba(196,30,58,0.2)" : "rgba(196,30,58,0.08)",
            border: "1px solid rgba(196,30,58,0.4)",
          }}
        >
          <span className="font-bold" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
            ★ 第二十届中央政治局常委会（7人）
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{showStanding ? "▲" : "▼"}</span>
        </button>

        {showStanding && (
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {politburoStanding.map((person) => (
              <div
                key={person.rank}
                className="rounded-lg p-3"
                style={{
                  background: "rgba(196,30,58,0.1)",
                  border: "1px solid rgba(196,30,58,0.3)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "#C41E3A", color: "#fff" }}
                  >
                    {person.rank}
                  </span>
                  <span className="font-bold text-white" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    {person.name}
                  </span>
                </div>
                <div className="space-y-1">
                  {person.roles.map((role, i) => (
                    <p key={i} className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                      · {role}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 说明 */}
      <div
        className="rounded-lg p-4"
        style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
      >
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Noto Sans SC', sans-serif" }}>
          <span style={{ color: "#D4AF37" }}>💡 民主集中制：</span>
          党的组织原则是"民主基础上的集中，集中指导下的民主"。下级服从上级，全党服从中央。
          党代会是最高权力机关，但由于每5年才召开一次，日常权力实际由政治局常委会行使。
        </p>
      </div>
    </div>
  );
}
