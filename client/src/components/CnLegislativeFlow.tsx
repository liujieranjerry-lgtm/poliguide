// 全国人大立法程序流程图
// 设计：蓝色系步骤流程，可展开详情

import { useState } from "react";
import { npcLegislativeProcess } from "@/lib/cnData";

export default function CnLegislativeFlow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* 流程步骤 */}
      <div className="relative">
        {/* 连接线 */}
        <div
          className="absolute left-6 top-8 bottom-8 w-0.5"
          style={{ background: "linear-gradient(180deg, #1565C0, #42A5F5)" }}
        />

        <div className="space-y-3">
          {npcLegislativeProcess.map((step) => {
            const isActive = activeStep === step.step;
            return (
              <div
                key={step.step}
                className="relative flex gap-4 cursor-pointer"
                onClick={() => setActiveStep(isActive ? null : step.step)}
              >
                {/* 步骤圆圈 */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 z-10 transition-all duration-200"
                  style={{
                    background: isActive ? step.color : `${step.color}44`,
                    border: `2px solid ${step.color}`,
                    color: "#fff",
                    boxShadow: isActive ? `0 0 16px ${step.color}66` : "none",
                  }}
                >
                  {step.step}
                </div>

                {/* 内容卡片 */}
                <div
                  className="flex-1 rounded-lg p-4 transition-all duration-200"
                  style={{
                    background: isActive ? `${step.color}18` : "rgba(255,255,255,0.04)",
                    border: `1px solid ${isActive ? step.color : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-white" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      {step.title}
                    </h4>
                    <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px" }}>
                      {isActive ? "▲" : "▼"}
                    </span>
                  </div>
                  {isActive && (
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {step.desc}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 与美国对比 */}
      <div
        className="rounded-xl p-5"
        style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}
      >
        <h3 className="font-bold mb-3" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
          与美国立法程序的关键区别
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div style={{ color: "rgba(255,255,255,0.7)" }}>
            <p className="font-semibold mb-1" style={{ color: "#fff" }}>中国：一院制 + 党委审核</p>
            <p>全国人大是一院制立法机关，重大法律草案在提交审议前通常已经过党的相关机构审核，通过率极高。</p>
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)" }}>
            <p className="font-semibold mb-1" style={{ color: "#fff" }}>美国：两院制 + 总统否决</p>
            <p>美国国会由参众两院组成，法案须经两院分别通过，总统可行使否决权，立法过程充满博弈。</p>
          </div>
        </div>
      </div>

      {/* 全国人大常委会说明 */}
      <div
        className="rounded-xl p-5"
        style={{ background: "rgba(21,101,192,0.1)", border: "1px solid rgba(21,101,192,0.3)" }}
      >
        <h3 className="font-bold mb-2" style={{ color: "#42A5F5", fontFamily: "'Noto Serif SC', serif" }}>
          全国人大常务委员会的特殊作用
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
          全国人大每年只召开一次全体会议（约两周），闭会期间由常务委员会（约175人）行使大部分立法职权。
          常委会每两个月召开一次，可以制定和修改法律（宪法修正案除外），是实际上的常设立法机构。
        </p>
      </div>
    </div>
  );
}
