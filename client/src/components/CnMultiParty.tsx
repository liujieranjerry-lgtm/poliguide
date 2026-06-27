// 中国多党合作制度 - 八大民主党派展示
// 设计：党派卡片 + 与西方多党制对比

import { useState } from "react";
import { democraticParties } from "@/lib/cnData";

const partyColors = [
  "#C41E3A", "#D4AF37", "#1565C0", "#2E7D32",
  "#6A1B9A", "#E65100", "#00695C", "#4527A0"
];

export default function CnMultiParty() {
  const [activeParty, setActiveParty] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      {/* 制度说明 */}
      <div
        className="rounded-xl p-5"
        style={{ background: "rgba(196,30,58,0.1)", border: "1px solid rgba(196,30,58,0.3)" }}
      >
        <h3 className="font-bold text-lg mb-3" style={{ color: "#C41E3A", fontFamily: "'Noto Serif SC', serif" }}>
          中国共产党领导的多党合作和政治协商制度
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          中国实行的不是西方式的多党竞争制度，而是"共产党领导、多党派合作"的政党制度。
          八个民主党派是<strong style={{ color: "#D4AF37" }}>参政党</strong>而非反对党，
          接受中国共产党的领导，在政治协商、参政议政方面发挥作用，
          但不参与执政权的竞争。
        </p>
      </div>

      {/* 八大民主党派 */}
      <div>
        <h3 className="font-bold text-lg mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
          八大民主党派
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {democraticParties.map((party, idx) => {
            const color = partyColors[idx];
            const isActive = activeParty === idx;
            return (
              <div
                key={idx}
                className="rounded-lg p-3 cursor-pointer transition-all duration-200"
                style={{
                  background: isActive ? `${color}22` : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isActive ? color : "rgba(255,255,255,0.1)"}`,
                  boxShadow: isActive ? `0 0 12px ${color}33` : "none",
                }}
                onClick={() => setActiveParty(isActive ? null : idx)}
              >
                <div
                  className="text-sm font-bold mb-1"
                  style={{ color: isActive ? color : "rgba(255,255,255,0.8)", fontFamily: "'Noto Serif SC', serif" }}
                >
                  {party.shortName}
                </div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  成立于 {party.founded}
                </div>
                {isActive && (
                  <div className="mt-2 pt-2 space-y-1" style={{ borderTop: `1px solid ${color}44` }}>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {party.name}
                    </p>
                    <p className="text-xs" style={{ color: color }}>
                      成员：{party.members}
                    </p>
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                      主要领域：{party.focus}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 与西方多党制对比 */}
      <div>
        <h3 className="font-bold text-lg mb-4" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
          与西方多党制的本质区别
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr>
                <th className="text-left p-3 rounded-tl-lg" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
                  比较维度
                </th>
                <th className="text-left p-3" style={{ background: "rgba(196,30,58,0.2)", color: "#EF5350" }}>
                  中国多党合作制
                </th>
                <th className="text-left p-3 rounded-tr-lg" style={{ background: "rgba(21,101,192,0.2)", color: "#42A5F5" }}>
                  西方竞争性多党制
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["执政关系", "共产党长期执政，民主党派参政", "各党竞争执政权，轮流执政"],
                ["党际关系", "合作协商，非竞争对抗", "竞争对立，互为对手"],
                ["政策制定", "协商一致，党委统一领导", "议会博弈，多方角力"],
                ["政治稳定", "制度连续性强，政策稳定", "政党轮替可能导致政策转向"],
                ["民主形式", "协商民主、全过程人民民主", "选举民主、代议制民主"],
              ].map(([dim, cn, west], i) => (
                <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <td className="p-3 font-medium" style={{ color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.03)" }}>
                    {dim}
                  </td>
                  <td className="p-3" style={{ color: "rgba(255,255,255,0.75)", background: "rgba(196,30,58,0.06)" }}>
                    {cn}
                  </td>
                  <td className="p-3" style={{ color: "rgba(255,255,255,0.75)", background: "rgba(21,101,192,0.06)" }}>
                    {west}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
