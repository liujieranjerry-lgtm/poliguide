// 摇摆州组件
import { swingStates2024 } from '@/lib/data';
import { useIntersectionObserver } from '@/hooks/useCountUp';

export default function SwingStates() {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  const totalSwingVotes = swingStates2024.reduce((s, d) => s + d.votes, 0);

  return (
    <div ref={ref} className="space-y-4">
      {/* 说明 */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="rounded-xl p-3 border border-blue-500/30 bg-blue-500/8 text-center">
          <div className="text-xl font-bold text-blue-400 font-mono">蓝州</div>
          <div className="text-xs text-white/50 mt-1">长期倾向民主党</div>
          <div className="text-xs text-white/30 mt-0.5">如加利福尼亚、纽约</div>
        </div>
        <div className="rounded-xl p-3 border border-amber-500/30 bg-amber-500/8 text-center">
          <div className="text-xl font-bold text-amber-400 font-mono">摇摆州</div>
          <div className="text-xs text-white/50 mt-1">两党激烈竞争</div>
          <div className="text-xs text-white/30 mt-0.5">决定选举结果</div>
        </div>
        <div className="rounded-xl p-3 border border-red-500/30 bg-red-500/8 text-center">
          <div className="text-xl font-bold text-red-400 font-mono">红州</div>
          <div className="text-xs text-white/50 mt-1">长期倾向共和党</div>
          <div className="text-xs text-white/30 mt-0.5">如德克萨斯、阿拉巴马</div>
        </div>
      </div>

      <div className="text-xs text-white/40 uppercase tracking-widest mb-2 font-['Space_Grotesk']">
        2024年关键摇摆州（共 {totalSwingVotes} 张选举人票）
      </div>

      {swingStates2024.map((state, i) => (
        <div
          key={i}
          className="rounded-xl p-4 border border-amber-400/15 bg-amber-400/5 hover:bg-amber-400/8 transition-colors"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
            transition: `all 0.4s ease ${i * 0.08}s`,
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-white font-['Space_Grotesk']">{state.state}</span>
            <span
              className="px-3 py-0.5 rounded-full text-sm font-mono font-bold"
              style={{ backgroundColor: '#F59E0B20', color: '#F59E0B' }}
            >
              {state.votes} 票
            </span>
          </div>
          <p className="text-sm text-white/60">{state.desc}</p>
          {/* 选举人票权重条 */}
          <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-amber-400"
              style={{
                width: isVisible ? `${(state.votes / 19) * 100}%` : '0%',
                transition: `width 0.8s ease ${i * 0.1 + 0.3}s`,
              }}
            />
          </div>
        </div>
      ))}

      <div className="p-4 rounded-xl border border-amber-400/20 bg-amber-400/5">
        <p className="text-sm text-white/60 leading-relaxed">
          <span className="text-amber-400 font-medium">战略意义：</span>
          由于"胜者全得"制度，总统竞选的资源（时间、资金、广告）高度集中在少数几个摇摆州。候选人在"安全州"增加的选票不会带来额外的选举人票，因此往往对安全州选民"视而不见"。
        </p>
      </div>
    </div>
  );
}
