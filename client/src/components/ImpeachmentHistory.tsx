// 弹劾历史组件
import { impeachmentHistory } from '@/lib/data';

export default function ImpeachmentHistory() {
  return (
    <div className="space-y-4">
      {/* 弹劾程序说明 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl p-4 border border-blue-500/30 bg-blue-500/8">
          <div className="text-blue-400 font-bold mb-2 font-['Space_Grotesk']">第一阶段：众议院弹劾</div>
          <div className="text-sm text-white/60 space-y-1">
            <div>• 司法委员会调查并起草弹劾条款</div>
            <div>• 全院表决，<strong className="text-white">简单多数</strong>通过即可弹劾</div>
            <div>• 相当于"起诉"，不等于定罪</div>
          </div>
        </div>
        <div className="rounded-xl p-4 border border-amber-500/30 bg-amber-500/8">
          <div className="text-amber-400 font-bold mb-2 font-['Space_Grotesk']">第二阶段：参议院审判</div>
          <div className="text-sm text-white/60 space-y-1">
            <div>• 参议院作为陪审团进行审判</div>
            <div>• 首席大法官主持（总统弹劾案）</div>
            <div>• 需要 <strong className="text-white">2/3 多数（67票）</strong> 才能定罪免职</div>
          </div>
        </div>
      </div>

      {/* 历史案例 */}
      <div className="text-xs text-white/40 uppercase tracking-widest mb-2 font-['Space_Grotesk']">历史上的总统弹劾案（共5次）</div>
      <div className="space-y-3">
        {impeachmentHistory.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-4 border border-white/8 bg-white/3 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white font-['Space_Grotesk']">{item.president}</span>
                  <span className="text-xs font-mono text-white/40">{item.year}</span>
                </div>
                <div className="text-sm text-white/60 mb-2">{item.reason}</div>
                <div className="text-xs text-white/40">{item.result}</div>
              </div>
              <div
                className="flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: item.outcome === 'resigned' ? '#F97316' + '20' : '#22C55E' + '20',
                  color: item.outcome === 'resigned' ? '#F97316' : '#22C55E',
                }}
              >
                {item.outcome === 'resigned' ? '主动辞职' : '未定罪'}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-xl border border-green-400/20 bg-green-400/5">
        <p className="text-sm text-white/60">
          <span className="text-green-400 font-medium">★ 结论：</span>
          迄今为止，没有任何美国总统在弹劾审判中被参议院定罪免职。弹劾制度更多地作为一种政治压力工具，而非实际的罢免手段。
        </p>
      </div>
    </div>
  );
}
