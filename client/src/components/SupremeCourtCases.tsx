// 最高法院历史判决组件
import { supremeCourtCases } from '@/lib/data';

export default function SupremeCourtCases() {
  return (
    <div className="space-y-4">
      {/* 最高法院基本信息 */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { value: '9', label: '名大法官', sub: '1名首席 + 8名' },
          { value: '终身', label: '任职期限', sub: '总统提名，参议院批准' },
          { value: '~100', label: '年受理案件', sub: '从7000+申请中筛选' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl p-3 border border-green-500/20 bg-green-500/5 text-center">
            <div className="stat-number text-2xl text-green-400">{s.value}</div>
            <div className="text-xs text-white/60 mt-0.5">{s.label}</div>
            <div className="text-xs text-white/30 mt-0.5">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* 历史判决 */}
      <div className="text-xs text-white/40 uppercase tracking-widest mb-2 font-['Space_Grotesk']">改变美国的历史性判决</div>
      <div className="space-y-3">
        {supremeCourtCases.map((c, i) => (
          <div
            key={i}
            className="rounded-xl p-4 border border-white/8 bg-white/3 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold flex-shrink-0 mt-0.5"
                style={{ backgroundColor: '#22C55E20', color: '#22C55E' }}
              >
                {c.year.slice(0, 2)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white text-sm font-['Space_Grotesk']">{c.case}</span>
                  <span className="text-xs font-mono text-white/30">{c.year}</span>
                </div>
                <p className="text-sm text-white/60">{c.impact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 司法审查说明 */}
      <div className="p-4 rounded-xl border border-green-400/20 bg-green-400/5">
        <div className="text-sm font-bold text-green-400 mb-2 font-['Space_Grotesk']">司法审查：最重要的隐性权力</div>
        <p className="text-sm text-white/60 leading-relaxed">
          司法审查权并非宪法明文规定，而是由最高法院在 1803 年的"马伯里诉麦迪逊案"中自行确立的。这一权力允许法院审查立法和行政行为是否符合宪法，使最高法院成为美国政治中不可忽视的重要力量。
        </p>
      </div>
    </div>
  );
}
