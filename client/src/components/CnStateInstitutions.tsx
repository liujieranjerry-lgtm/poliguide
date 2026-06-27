// 中国国家机构 - 交互式卡片展示
// 设计：各机构专属颜色，点击展开详情

import { useState } from "react";
import { stateInstitutions } from "@/lib/cnData";

export default function CnStateInstitutions() {
  const [activeId, setActiveId] = useState<string | null>("npc");

  const active = stateInstitutions.find((i) => i.id === activeId);

  return (
    <div className="space-y-6">
      {/* 机构选择卡片 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {stateInstitutions.map((inst) => (
          <button
            key={inst.id}
            onClick={() => setActiveId(inst.id === activeId ? null : inst.id)}
            className="rounded-lg p-3 text-left transition-all duration-200"
            style={{
              background:
                activeId === inst.id
                  ? `${inst.color}22`
                  : "rgba(255,255,255,0.04)",
              border: `1px solid ${activeId === inst.id ? inst.color : "rgba(255,255,255,0.1)"}`,
              boxShadow: activeId === inst.id ? `0 0 16px ${inst.color}33` : "none",
            }}
          >
            <div className="text-2xl mb-1">{inst.icon}</div>
            <div
              className="font-bold text-sm"
              style={{
                color: activeId === inst.id ? "#fff" : "rgba(255,255,255,0.7)",
                fontFamily: "'Noto Serif SC', serif",
              }}
            >
              {inst.shortName}
            </div>
            <div className="text-xs mt-0.5" style={{ color: inst.color }}>
              {inst.role.split("（")[0]}
            </div>
          </button>
        ))}
      </div>

      {/* 详情展示 */}
      {active && (
        <div
          className="rounded-xl p-6 transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${active.color}15, ${active.color}08)`,
            border: `1px solid ${active.color}44`,
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
              style={{ background: `${active.color}22`, border: `1px solid ${active.color}44` }}
            >
              {active.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3
                  className="text-xl font-bold"
                  style={{ color: "#fff", fontFamily: "'Noto Serif SC', serif" }}
                >
                  {active.name}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-full"
                  style={{ background: `${active.color}33`, color: active.color }}
                >
                  {active.role}
                </span>
              </div>
              <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                现任负责人：<span style={{ color: "#D4AF37" }}>{active.head}</span>
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
                {active.desc}
              </p>
              <div>
                <p className="text-xs font-semibold mb-2" style={{ color: active.color }}>
                  主要职权
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {active.powers.map((power, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      <span style={{ color: active.color }}>▸</span>
                      {power}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 党政关系说明 */}
      <div
        className="rounded-lg p-4"
        style={{ background: "rgba(196,30,58,0.08)", border: "1px solid rgba(196,30,58,0.25)" }}
      >
        <p className="text-sm font-bold mb-2" style={{ color: "#C41E3A", fontFamily: "'Noto Serif SC', serif" }}>
          党政关系的核心逻辑
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          在中国政治体制中，上述国家机构均在中国共产党的领导下运作。
          各机构内部均设有党委或党组，负责贯彻执行党的路线方针政策。
          全国人大虽是宪法规定的最高权力机关，但其重大决策须与党的决策保持一致。
          这种"党政合一"的体制是中国政治制度的根本特征。
        </p>
      </div>
    </div>
  );
}
