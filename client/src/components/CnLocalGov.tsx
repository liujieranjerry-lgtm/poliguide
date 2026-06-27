// 中国地方政府层级 - 可视化组件
// 设计：四级政府层级展示 + 干部选拔流程

import { useState } from "react";
import { localGovLevels, cadreSelectionSteps } from "@/lib/cnData";

export default function CnLocalGov() {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);
  const [showCadre, setShowCadre] = useState(false);

  return (
    <div className="space-y-8">
      {/* 四级政府层级 */}
      <div>
        <h3 className="font-bold text-lg mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
          地方行政层级（四级体系）
        </h3>
        <div className="space-y-3">
          {localGovLevels.map((lvl, idx) => {
            const isActive = activeLevel === idx;
            return (
              <div
                key={idx}
                className="rounded-xl cursor-pointer transition-all duration-200"
                style={{
                  background: isActive ? `${lvl.color}18` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isActive ? lvl.color : "rgba(255,255,255,0.1)"}`,
                }}
                onClick={() => setActiveLevel(isActive ? null : idx)}
              >
                <div className="flex items-center gap-4 p-4">
                  <div
                    className="w-16 text-center rounded-lg py-2 flex-shrink-0"
                    style={{ background: `${lvl.color}33`, border: `1px solid ${lvl.color}66` }}
                  >
                    <span className="text-xs font-bold" style={{ color: lvl.color }}>
                      {lvl.level}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-white text-sm">{lvl.name}</p>
                    {isActive && (
                      <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {lvl.desc}
                      </p>
                    )}
                  </div>
                  <div
                    className="text-right flex-shrink-0"
                  >
                    <span
                      className="text-2xl font-bold"
                      style={{ color: lvl.color }}
                    >
                      {lvl.count.toLocaleString()}
                    </span>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>个行政单位</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 党政双轨说明 */}
      <div
        className="rounded-xl p-5"
        style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
      >
        <h3 className="font-bold mb-3" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
          党政双轨：每级政府的双重领导
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div
            className="rounded-lg p-3"
            style={{ background: "rgba(196,30,58,0.12)", border: "1px solid rgba(196,30,58,0.3)" }}
          >
            <p className="font-bold mb-1" style={{ color: "#C41E3A" }}>党委系统（党）</p>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              省委书记 / 市委书记 / 县委书记 / 乡镇党委书记
              <br />负责政治方向、干部管理、重大决策
            </p>
          </div>
          <div
            className="rounded-lg p-3"
            style={{ background: "rgba(21,101,192,0.12)", border: "1px solid rgba(21,101,192,0.3)" }}
          >
            <p className="font-bold mb-1" style={{ color: "#42A5F5" }}>政府系统（政）</p>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              省长 / 市长 / 县长 / 乡镇长
              <br />负责行政执行、经济发展、公共服务
            </p>
          </div>
        </div>
        <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>
          通常情况下，党委书记的实际权力高于同级政府首长。党委书记负责"把方向"，政府首长负责"抓落实"。
        </p>
      </div>

      {/* 干部选拔制度 */}
      <div>
        <button
          onClick={() => setShowCadre(!showCadre)}
          className="w-full flex items-center justify-between px-5 py-4 rounded-xl transition-all"
          style={{
            background: showCadre ? "rgba(196,30,58,0.2)" : "rgba(196,30,58,0.08)",
            border: "1px solid rgba(196,30,58,0.4)",
          }}
        >
          <span className="font-bold text-lg" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
            干部选拔制度：党管干部的六个步骤
          </span>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>{showCadre ? "▲" : "▼"}</span>
        </button>

        {showCadre && (
          <div className="mt-4 space-y-3">
            {cadreSelectionSteps.map((step) => (
              <div
                key={step.step}
                className="flex gap-4 rounded-lg p-4"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{ background: "#C41E3A", color: "#fff" }}
                >
                  {step.step}
                </div>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{step.title}</p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
