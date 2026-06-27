// 选举人团可视化组件
import { useState } from 'react';
import { electoralCollegeData } from '@/lib/data';
import { useIntersectionObserver } from '@/hooks/useCountUp';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const partyColors: Record<string, string> = {
  dem: '#3B82F6',
  rep: '#EF4444',
  swing: '#F59E0B',
};
const partyLabels: Record<string, string> = {
  dem: '民主党倾向',
  rep: '共和党倾向',
  swing: '摇摆州',
};

export default function ElectoralCollegeViz() {
  const [filter, setFilter] = useState<'all' | 'dem' | 'rep' | 'swing'>('all');
  const { ref, isVisible } = useIntersectionObserver(0.2);

  const filtered = filter === 'all' ? electoralCollegeData : electoralCollegeData.filter(d => d.party === filter);

  const demTotal = electoralCollegeData.filter(d => d.party === 'dem').reduce((s, d) => s + d.votes, 0);
  const repTotal = electoralCollegeData.filter(d => d.party === 'rep').reduce((s, d) => s + d.votes, 0);
  const swingTotal = electoralCollegeData.filter(d => d.party === 'swing').reduce((s, d) => s + d.votes, 0);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className="bg-[#0F172A] border border-white/20 rounded-lg p-3 text-sm">
          <div className="font-bold text-white">{d.state}</div>
          <div style={{ color: partyColors[d.party] }}>{partyLabels[d.party]}</div>
          <div className="text-white/70">{d.votes} 张选举人票</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div ref={ref} className="space-y-6">
      {/* 关键数字 */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: '总选举人票', value: '538', color: '#60A5FA' },
          { label: '当选所需', value: '270', color: '#F59E0B' },
          { label: '历史上普选多却落选', value: '5次', color: '#EF4444' },
        ].map((s) => (
          <div key={s.label} className="text-center p-4 rounded-xl border border-white/10 bg-white/5">
            <div className="stat-number text-3xl md:text-4xl" style={{ color: s.color }}>{s.value}</div>
            <div className="text-xs text-white/50 mt-1 font-['Noto_Serif_SC']">{s.label}</div>
          </div>
        ))}
      </div>

      {/* 过滤按钮 */}
      <div className="flex flex-wrap gap-2">
        {(['all', 'dem', 'rep', 'swing'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 font-['Space_Grotesk']`}
            style={{
              backgroundColor: filter === f
                ? (f === 'all' ? '#475569' : partyColors[f]) + 'cc'
                : 'transparent',
              color: filter === f ? '#fff' : '#94A3B8',
              border: `1px solid ${f === 'all' ? '#475569' : partyColors[f]}40`,
            }}
          >
            {f === 'all' ? '全部州' : partyLabels[f]}
            {f !== 'all' && (
              <span className="ml-1.5 text-xs opacity-70">
                ({f === 'dem' ? demTotal : f === 'rep' ? repTotal : swingTotal}票)
              </span>
            )}
          </button>
        ))}
      </div>

      {/* 柱状图 */}
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={filtered} layout="vertical" margin={{ left: 80, right: 40, top: 5, bottom: 5 }}>
            <XAxis type="number" tick={{ fill: '#64748B', fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis type="category" dataKey="state" tick={{ fill: '#94A3B8', fontSize: 11, fontFamily: 'Noto Serif SC' }} axisLine={false} tickLine={false} width={75} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            <Bar dataKey="votes" radius={[0, 4, 4, 0]} maxBarSize={24}>
              {filtered.map((entry) => (
                <Cell key={entry.state} fill={partyColors[entry.party]} opacity={isVisible ? 1 : 0} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 胜者全得说明 */}
      <div className="rounded-xl p-5 border border-amber-400/20 bg-amber-400/5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-amber-400 text-lg">⚡</span>
          <span className="font-bold text-white font-['Space_Grotesk']">"胜者全得"规则</span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">
          除缅因州和内布拉斯加州外，其余 48 州均实行"胜者全得"制度。
          在该州普选中获得最多票数的候选人，获得该州<strong className="text-amber-400">全部</strong>选举人票。
          这意味着在宾夕法尼亚州以 51% 对 49% 获胜，与以 99% 对 1% 获胜的结果完全相同——都是获得全部 19 张选举人票。
        </p>
        <div className="mt-3 p-3 rounded-lg bg-white/5 text-sm">
          <span className="text-red-400 font-medium">⚠ 历史警示：</span>
          <span className="text-white/60 ml-2">2000年小布什和2016年特朗普均在全国普选票数落后的情况下，凭借选举人票优势当选总统。</span>
        </div>
      </div>
    </div>
  );
}
