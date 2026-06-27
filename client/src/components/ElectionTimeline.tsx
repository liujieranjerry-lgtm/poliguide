// 总统大选时间轴组件
import { electionTimeline } from '@/lib/data';
import { useIntersectionObserver } from '@/hooks/useCountUp';

export default function ElectionTimeline() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <div ref={ref} className="relative">
      {/* 中轴线 */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

      <div className="space-y-6 md:space-y-0">
        {electionTimeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s ease ${i * 0.1}s`,
              }}
            >
              {/* 内容卡片 */}
              <div className={`flex-1 ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                <div
                  className="inline-block rounded-xl p-4 border max-w-sm"
                  style={{
                    borderColor: item.color + '30',
                    backgroundColor: item.color + '08',
                  }}
                >
                  <div className="text-xs font-mono mb-1" style={{ color: item.color }}>{item.date}</div>
                  <div className="font-bold text-white text-sm mb-1 font-['Space_Grotesk']">{item.event}</div>
                  <div className="text-xs text-white/60 leading-relaxed">{item.desc}</div>
                </div>
              </div>

              {/* 中心节点 */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                <div
                  className="w-4 h-4 rounded-full border-2 border-[#0F172A] z-10"
                  style={{
                    backgroundColor: item.color,
                    boxShadow: `0 0 12px ${item.color}80`,
                  }}
                />
              </div>

              {/* 另一侧占位 */}
              <div className="hidden md:block flex-1" />
            </div>
          );
        })}
      </div>

      {/* 底部说明 */}
      <div className="mt-8 p-4 rounded-xl border border-white/10 bg-white/5 text-center">
        <p className="text-sm text-white/60">
          <span className="text-amber-400 font-medium">★ </span>
          美国总统选举周期为 4 年，从候选人宣布参选到新总统就职，整个过程长达约<strong className="text-white">两年</strong>。
        </p>
      </div>
    </div>
  );
}
