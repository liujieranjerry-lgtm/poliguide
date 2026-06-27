// 中国选举制度 - 四级人大选举可视化
// 设计：从下到上的间接选举流程图

import { useState } from "react";
import { electionLevels } from "@/lib/cnData";

export default function CnElectionSystem() {
  const [activeLevel, setActiveLevel] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      {/* 直接/间接选举对比 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="rounded-xl p-5"
          style={{ background: "rgba(21,101,192,0.12)", border: "1px solid rgba(21,101,192,0.35)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🗳️</span>
            <h3 className="font-bold text-lg" style={{ color: "#42A5F5", fontFamily: "'Noto Serif SC', serif" }}>
              直接选举
            </h3>
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.75)" }}>
            由选民直接投票选出代表或官员。在中国，<strong style={{ color: "#fff" }}>县级和乡镇级</strong>人民代表大会代表由选民直接选举产生，
            村民委员会主任和委员也由村民直接选举。
          </p>
          <div
            className="rounded-lg p-3 text-sm"
            style={{ background: "rgba(21,101,192,0.15)", color: "rgba(255,255,255,0.6)" }}
          >
            约10.64亿选民参与县乡两级人大换届选举（2021-2022年）
          </div>
        </div>

        <div
          className="rounded-xl p-5"
          style={{ background: "rgba(196,30,58,0.12)", border: "1px solid rgba(196,30,58,0.35)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🏛️</span>
            <h3 className="font-bold text-lg" style={{ color: "#EF5350", fontFamily: "'Noto Serif SC', serif" }}>
              间接选举
            </h3>
          </div>
          <p className="text-sm leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.75)" }}>
            由下一级人大代表选举产生上一级人大代表。<strong style={{ color: "#fff" }}>县级以上</strong>各级人大代表均由间接选举产生，
            全国人大代表由省级人大选举产生。
          </p>
          <div
            className="rounded-lg p-3 text-sm"
            style={{ background: "rgba(196,30,58,0.15)", color: "rgba(255,255,255,0.6)" }}
          >
            全国人大2977名代表由31个省级人大及解放军选举产生
          </div>
        </div>
      </div>

      {/* 四级选举层级图 */}
      <div>
        <h3 className="font-bold text-lg mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
          人大代表选举层级（从下到上）
        </h3>
        <div className="space-y-2">
          {[...electionLevels].reverse().map((lvl, idx) => {
            const isActive = activeLevel === idx;
            const isDirect = lvl.method === "直接选举";
            return (
              <div
                key={idx}
                className="rounded-lg cursor-pointer transition-all duration-200"
                style={{
                  background: isActive ? `${lvl.color}22` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isActive ? lvl.color : "rgba(255,255,255,0.1)"}`,
                }}
                onClick={() => setActiveLevel(isActive ? null : idx)}
              >
                <div className="flex items-center gap-4 p-4">
                  {/* 层级标签 */}
                  <div
                    className="w-24 text-center rounded-md py-1 px-2 flex-shrink-0"
                    style={{ background: `${lvl.color}33`, border: `1px solid ${lvl.color}66` }}
                  >
                    <span className="text-xs font-bold" style={{ color: lvl.color }}>
                      {lvl.level}
                    </span>
                  </div>

                  {/* 机构名称 */}
                  <div className="flex-1">
                    <span className="font-bold text-sm text-white">{lvl.level}人民代表大会</span>
                    {isActive && (
                      <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                        {lvl.desc}
                      </p>
                    )}
                  </div>

                  {/* 选举方式标签 */}
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold flex-shrink-0"
                    style={{
                      background: isDirect ? "rgba(21,101,192,0.25)" : "rgba(196,30,58,0.25)",
                      color: isDirect ? "#42A5F5" : "#EF5350",
                      border: `1px solid ${isDirect ? "rgba(21,101,192,0.5)" : "rgba(196,30,58,0.5)"}`,
                    }}
                  >
                    {lvl.method}
                  </div>

                  {/* 任期 */}
                  <div className="text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.4)" }}>
                    任期 {lvl.term}
                  </div>
                </div>

                {/* 向上箭头（非最顶层） */}
                {idx < electionLevels.length - 1 && (
                  <div className="text-center py-1" style={{ color: "rgba(212,175,55,0.4)" }}>
                    ↑ 选举产生
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 候选人提名说明 */}
      <div
        className="rounded-xl p-5"
        style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
      >
        <h3 className="font-bold mb-3" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
          候选人提名方式
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
          <div>
            <p className="font-semibold mb-1" style={{ color: "#fff" }}>各政党、人民团体提名</p>
            <p>中国共产党、各民主党派及人民团体可以联合或单独提名候选人，这是主要的提名渠道。</p>
          </div>
          <div>
            <p className="font-semibold mb-1" style={{ color: "#fff" }}>选民联名提名</p>
            <p>在直接选举中，10名以上选民联名也可以提出代表候选人，体现了一定的基层民主空间。</p>
          </div>
        </div>
        <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>
          注：候选人数量须多于应选代表数量（差额选举），县乡级差额比例不低于三分之一。
        </p>
      </div>
    </div>
  );
}
