// 三权分立交互式图表
// 点击各分支节点，高亮显示其制衡关系
import { useState } from 'react';
import { separationOfPowers } from '@/lib/data';

type Branch = 'legislative' | 'executive' | 'judicial' | null;

export default function SeparationChart() {
  const [active, setActive] = useState<Branch>(null);

  const branches = [
    { key: 'legislative' as Branch, label: '立法分支', sub: '国会', color: '#3B82F6', x: 150, y: 80 },
    { key: 'executive' as Branch, label: '行政分支', sub: '总统', color: '#EF4444', x: 450, y: 80 },
    { key: 'judicial' as Branch, label: '司法分支', sub: '联邦法院', color: '#22C55E', x: 300, y: 300 },
  ];

  const arrows = [
    { from: 'legislative', to: 'executive', label: '推翻否决 / 弹劾 / 控制预算', cx: 300, cy: 50 },
    { from: 'executive', to: 'legislative', label: '否决法案 / 行政命令', cx: 300, cy: 110 },
    { from: 'legislative', to: 'judicial', label: '弹劾法官 / 批准任命', cx: 170, cy: 220 },
    { from: 'judicial', to: 'legislative', label: '宣布法律违宪', cx: 130, cy: 260 },
    { from: 'executive', to: 'judicial', label: '提名法官 / 赦免权', cx: 430, cy: 220 },
    { from: 'judicial', to: 'executive', label: '宣布行政命令违宪', cx: 470, cy: 260 },
  ];

  const activeBranch = active ? separationOfPowers[active] : null;

  return (
    <div className="space-y-6">
      <div className="relative w-full" style={{ paddingBottom: '70%' }}>
        <svg
          viewBox="0 0 600 400"
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <marker id="arrow-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#3B82F6" />
            </marker>
            <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#EF4444" />
            </marker>
            <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#22C55E" />
            </marker>
            <marker id="arrow-gray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="#4B5563" />
            </marker>
            <filter id="glow-blue">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow-red">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow-green">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          {/* 连接线 */}
          {/* 立法 ↔ 行政 */}
          <path d="M 220 75 Q 300 40 380 75" stroke={active === 'legislative' || active === 'executive' ? '#3B82F6' : '#1F2937'} strokeWidth="2" fill="none" markerEnd={active === 'legislative' ? 'url(#arrow-blue)' : 'url(#arrow-gray)'} strokeDasharray={active ? '0' : '5,3'} />
          <path d="M 380 95 Q 300 130 220 95" stroke={active === 'legislative' || active === 'executive' ? '#EF4444' : '#1F2937'} strokeWidth="2" fill="none" markerEnd={active === 'executive' ? 'url(#arrow-red)' : 'url(#arrow-gray)'} strokeDasharray={active ? '0' : '5,3'} />

          {/* 立法 ↔ 司法 */}
          <path d="M 155 140 Q 120 220 250 285" stroke={active === 'legislative' || active === 'judicial' ? '#3B82F6' : '#1F2937'} strokeWidth="2" fill="none" markerEnd={active === 'legislative' ? 'url(#arrow-blue)' : 'url(#arrow-gray)'} strokeDasharray={active ? '0' : '5,3'} />
          <path d="M 265 280 Q 120 250 140 140" stroke={active === 'legislative' || active === 'judicial' ? '#22C55E' : '#1F2937'} strokeWidth="2" fill="none" markerEnd={active === 'judicial' ? 'url(#arrow-green)' : 'url(#arrow-gray)'} strokeDasharray={active ? '0' : '5,3'} />

          {/* 行政 ↔ 司法 */}
          <path d="M 445 140 Q 480 220 350 285" stroke={active === 'executive' || active === 'judicial' ? '#EF4444' : '#1F2937'} strokeWidth="2" fill="none" markerEnd={active === 'executive' ? 'url(#arrow-red)' : 'url(#arrow-gray)'} strokeDasharray={active ? '0' : '5,3'} />
          <path d="M 335 280 Q 480 250 460 140" stroke={active === 'executive' || active === 'judicial' ? '#22C55E' : '#1F2937'} strokeWidth="2" fill="none" markerEnd={active === 'judicial' ? 'url(#arrow-green)' : 'url(#arrow-gray)'} strokeDasharray={active ? '0' : '5,3'} />

          {/* 节点 */}
          {branches.map((b) => {
            const isActive = active === b.key;
            const isRelated = active !== null && active !== b.key;
            return (
              <g
                key={b.key}
                transform={`translate(${b.x}, ${b.y})`}
                onClick={() => setActive(active === b.key ? null : b.key)}
                style={{ cursor: 'pointer' }}
              >
                <circle
                  r="55"
                  fill={isActive ? b.color + '22' : '#0F172A'}
                  stroke={b.color}
                  strokeWidth={isActive ? 2.5 : 1.5}
                  filter={isActive ? `url(#glow-${b.key === 'legislative' ? 'blue' : b.key === 'executive' ? 'red' : 'green'})` : undefined}
                  opacity={active && !isActive ? 0.4 : 1}
                  style={{ transition: 'all 0.3s ease' }}
                />
                <text y="-12" textAnchor="middle" fill={isActive ? b.color : '#E2E8F0'} fontSize="13" fontWeight="bold" fontFamily="Space Grotesk, sans-serif" opacity={active && !isActive ? 0.4 : 1}>
                  {b.label}
                </text>
                <text y="8" textAnchor="middle" fill={b.color} fontSize="11" opacity={active && !isActive ? 0.3 : 0.8} fontFamily="Noto Serif SC, serif">
                  {b.sub}
                </text>
                <text y="24" textAnchor="middle" fill={isActive ? '#FFF' : '#94A3B8'} fontSize="9" opacity={active && !isActive ? 0.3 : 1} fontFamily="Space Grotesk, sans-serif">
                  点击查看
                </text>
              </g>
            );
          })}

          {/* 中心文字 */}
          {!active && (
            <text x="300" y="195" textAnchor="middle" fill="#475569" fontSize="12" fontFamily="Noto Serif SC, serif">
              点击任意分支查看制衡关系
            </text>
          )}
        </svg>
      </div>

      {/* 详情面板 */}
      {activeBranch && (
        <div
          className="rounded-xl p-5 border transition-all duration-300"
          style={{
            borderColor: activeBranch.color + '40',
            backgroundColor: activeBranch.color + '10',
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: activeBranch.color, boxShadow: `0 0 8px ${activeBranch.color}` }} />
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk']">{activeBranch.name} — 核心权力</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
            {activeBranch.powers.map((p) => (
              <div key={p} className="text-center py-2 px-3 rounded-lg text-sm font-medium" style={{ backgroundColor: activeBranch.color + '20', color: activeBranch.color }}>
                {p}
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="text-sm font-semibold text-white/60 uppercase tracking-wider font-['Space_Grotesk']">制衡其他分支</div>
            {activeBranch.checks.map((c) => (
              <div key={c.target} className="flex gap-3 items-start">
                <span className="text-xs px-2 py-1 rounded font-mono flex-shrink-0" style={{ backgroundColor: activeBranch.color + '30', color: activeBranch.color }}>
                  → {c.target}
                </span>
                <span className="text-sm text-white/70">{c.action}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
