// 两党对比组件
import { useState } from 'react';
import { partyComparison } from '@/lib/data';

export default function PartyComparison() {
  const [activeIssue, setActiveIssue] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {/* 党派标识 */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl p-4 border border-blue-500/30 bg-blue-500/10 text-center">
          <div className="text-3xl mb-2">🫏</div>
          <div className="font-bold text-blue-400 text-lg font-['Space_Grotesk']">民主党</div>
          <div className="text-xs text-white/50 mt-1">Democratic Party · 蓝色</div>
          <div className="text-xs text-white/40 mt-1">成立于 1828 年</div>
        </div>
        <div className="rounded-xl p-4 border border-red-500/30 bg-red-500/10 text-center">
          <div className="text-3xl mb-2">🐘</div>
          <div className="font-bold text-red-400 text-lg font-['Space_Grotesk']">共和党</div>
          <div className="text-xs text-white/50 mt-1">Republican Party · 红色</div>
          <div className="text-xs text-white/40 mt-1">成立于 1854 年</div>
        </div>
      </div>

      {/* 议题对比 */}
      <div className="text-xs text-white/40 uppercase tracking-widest mb-2 font-['Space_Grotesk']">点击议题查看详情</div>
      {partyComparison.map((item, i) => (
        <div key={i}>
          <button
            className="w-full text-left rounded-xl overflow-hidden border transition-all duration-200"
            style={{
              borderColor: activeIssue === i ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.06)',
            }}
            onClick={() => setActiveIssue(activeIssue === i ? null : i)}
          >
            <div className="flex items-center px-4 py-3 bg-white/3">
              <span className="font-medium text-white/80 text-sm font-['Space_Grotesk']">{item.issue}</span>
              <span className="ml-auto text-white/30 text-xs">{activeIssue === i ? '收起' : '展开'}</span>
            </div>
            {activeIssue === i && (
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="p-4 bg-blue-500/8">
                  <div className="text-xs text-blue-400 font-medium mb-2 font-['Space_Grotesk']">民主党立场</div>
                  <p className="text-sm text-white/70 leading-relaxed">{item.dem}</p>
                </div>
                <div className="p-4 bg-red-500/8">
                  <div className="text-xs text-red-400 font-medium mb-2 font-['Space_Grotesk']">共和党立场</div>
                  <p className="text-sm text-white/70 leading-relaxed">{item.rep}</p>
                </div>
              </div>
            )}
          </button>
        </div>
      ))}

      {/* 两党制说明 */}
      <div className="mt-4 p-4 rounded-xl border border-violet-400/20 bg-violet-400/5">
        <div className="text-sm font-bold text-violet-400 mb-2 font-['Space_Grotesk']">为什么是两党制？</div>
        <p className="text-sm text-white/60 leading-relaxed">
          美国的"单一选区相对多数制"天然有利于两党制的形成。在"胜者全得"规则下，第三党候选人即使获得可观选票，也很难赢得席位，反而可能分裂与其理念相近的大党选票，导致对立党获胜——这被称为<strong className="text-violet-400">"剧透效应"</strong>。
        </p>
      </div>
    </div>
  );
}
