// 立法程序流程图组件
import { useState } from 'react';
import { legislativeSteps } from '@/lib/data';
import { useIntersectionObserver } from '@/hooks/useCountUp';

export default function LegislativeFlow() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { ref, isVisible } = useIntersectionObserver(0.2);

  const presidentOptions = [
    { icon: '✓', label: '签署', desc: '法案成为法律（最常见）', color: '#22C55E' },
    { icon: '✗', label: '否决', desc: '附否决声明退回国会，国会可尝试以2/3多数推翻', color: '#EF4444' },
    { icon: '⏱', label: '口袋否决', desc: '10天内国会休会，法案自动失效，国会无法推翻', color: '#F97316' },
  ];

  return (
    <div ref={ref} className="space-y-4">
      {/* 步骤流程 */}
      {legislativeSteps.map((step, i) => (
        <div key={i} className="relative">
          <button
            className="w-full text-left rounded-xl p-4 border transition-all duration-300"
            style={{
              borderColor: activeStep === i ? step.color + '60' : 'rgba(255,255,255,0.08)',
              backgroundColor: activeStep === i ? step.color + '12' : 'rgba(255,255,255,0.03)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: `opacity 0.4s ease ${i * 0.1}s, transform 0.4s ease ${i * 0.1}s, border-color 0.2s, background-color 0.2s`,
            }}
            onClick={() => setActiveStep(activeStep === i ? null : i)}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-mono flex-shrink-0"
                style={{ backgroundColor: step.color + '20', color: step.color }}
              >
                {step.step}
              </span>
              <span className="font-bold text-white font-['Space_Grotesk']">{step.title}</span>
              <span className="ml-auto text-white/30 text-sm">{activeStep === i ? '▲' : '▼'}</span>
            </div>
            {activeStep === i && (
              <div className="mt-3 ml-11 text-sm text-white/70 leading-relaxed">
                {step.desc}
              </div>
            )}
          </button>
          {i < legislativeSteps.length - 1 && (
            <div className="flex justify-start ml-7 my-1">
              <div className="w-px h-4 bg-white/15" />
            </div>
          )}
        </div>
      ))}

      {/* 总统的三种选择 */}
      <div className="mt-2">
        <div className="text-center text-sm text-white/40 mb-3 font-['Space_Grotesk']">— 送达总统后的三种结果 —</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {presidentOptions.map((opt) => (
            <div
              key={opt.label}
              className="rounded-xl p-4 border text-center"
              style={{ borderColor: opt.color + '30', backgroundColor: opt.color + '08' }}
            >
              <div className="text-2xl mb-2" style={{ color: opt.color }}>{opt.icon}</div>
              <div className="font-bold text-white mb-1 font-['Space_Grotesk']">{opt.label}</div>
              <div className="text-xs text-white/60 leading-relaxed">{opt.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 关键数据 */}
      <div className="rounded-xl p-4 border border-amber-400/20 bg-amber-400/5">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="stat-number text-3xl text-amber-400">10,000+</div>
            <div className="text-xs text-white/50 mt-1">每届国会提出的法案数量</div>
          </div>
          <div>
            <div className="stat-number text-3xl text-red-400">&lt;5%</div>
            <div className="text-xs text-white/50 mt-1">最终成为法律的比例</div>
          </div>
        </div>
      </div>
    </div>
  );
}
