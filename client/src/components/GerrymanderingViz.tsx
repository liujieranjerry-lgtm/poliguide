// 杰利蝾螈交互式可视化组件
import { useState } from 'react';

type Mode = 'fair' | 'blue' | 'red';

// 4x5网格，蓝色12人，红色8人
const grid = [
  ['B','B','B','R','R'],
  ['B','B','B','R','R'],
  ['B','B','R','R','R'],
  ['B','B','R','R','R'],
];

// 各模式的选区划分（每个选区5个格子）
const districts: Record<Mode, [number, number][][]> = {
  fair: [
    [[0,0],[0,1],[1,0],[1,1],[2,0]],   // 蓝赢
    [[0,2],[0,3],[1,2],[1,3],[2,1]],   // 蓝赢
    [[2,2],[2,3],[3,0],[3,1],[2,4]],   // 蓝赢
    [[0,4],[1,4],[3,2],[3,3],[3,4]],   // 红赢
  ],
  blue: [
    [[0,0],[0,1],[0,2],[1,0],[1,1]],   // 蓝赢
    [[0,3],[0,4],[1,2],[1,3],[1,4]],   // 蓝赢
    [[2,0],[2,1],[2,2],[3,0],[3,1]],   // 蓝赢
    [[2,3],[2,4],[3,2],[3,3],[3,4]],   // 红赢
  ],
  red: [
    [[0,0],[1,0],[2,0],[3,0],[0,1]],   // 蓝赢（蓝色集中）
    [[0,2],[0,3],[0,4],[1,1],[1,2]],   // 红赢
    [[1,3],[1,4],[2,1],[2,2],[2,3]],   // 红赢
    [[2,4],[3,1],[3,2],[3,3],[3,4]],   // 红赢
  ],
};

const districtColors = ['#FFD700', '#00E676', '#FF6D00', '#E040FB'];

const modeInfo: Record<Mode, { label: string; result: string; resultColor: string; desc: string }> = {
  fair: {
    label: '公平划分',
    result: '蓝赢3区，红赢1区',
    resultColor: '#22C55E',
    desc: '公平反映了蓝色选民60%的比例，选举结果与民意基本一致。',
  },
  blue: {
    label: '对蓝色有利',
    result: '蓝赢4区，红赢0区',
    resultColor: '#3B82F6',
    desc: '将红色选民集中打包进一个选区，蓝色选民分散到其余各区，夸大多数派优势。',
  },
  red: {
    label: '对红色有利',
    result: '蓝赢1区，红赢3区',
    resultColor: '#EF4444',
    desc: '将蓝色选民全部集中在一个选区，其余选区红色占多数——少数派控制多数席位！',
  },
};

function getDistrictForCell(r: number, c: number, mode: Mode): number {
  const ds = districts[mode];
  for (let i = 0; i < ds.length; i++) {
    if (ds[i].some(([dr, dc]) => dr === r && dc === c)) return i;
  }
  return -1;
}

export default function GerrymanderingViz() {
  const [mode, setMode] = useState<Mode>('fair');
  const info = modeInfo[mode];

  const CELL = 52;
  const GAP = 4;
  const W = 5 * CELL + 4 * GAP;
  const H = 4 * CELL + 3 * GAP;

  return (
    <div className="space-y-5">
      {/* 模式切换 */}
      <div className="flex flex-wrap gap-2">
        {(['fair', 'blue', 'red'] as Mode[]).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-['Space_Grotesk']`}
            style={{
              backgroundColor: mode === m
                ? (m === 'fair' ? '#22C55E' : m === 'blue' ? '#3B82F6' : '#EF4444') + 'cc'
                : 'rgba(255,255,255,0.05)',
              color: mode === m ? '#fff' : '#94A3B8',
              border: `1px solid ${(m === 'fair' ? '#22C55E' : m === 'blue' ? '#3B82F6' : '#EF4444')}40`,
            }}
          >
            {modeInfo[m].label}
          </button>
        ))}
      </div>

      {/* 网格可视化 */}
      <div className="flex justify-center">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          {grid.map((row, r) =>
            row.map((cell, c) => {
              const x = c * (CELL + GAP);
              const y = r * (CELL + GAP);
              const dIdx = getDistrictForCell(r, c, mode);
              const dColor = dIdx >= 0 ? districtColors[dIdx] : '#fff';
              return (
                <g key={`${r}-${c}`}>
                  <rect
                    x={x} y={y} width={CELL} height={CELL}
                    rx={6}
                    fill={cell === 'B' ? '#3B82F6' : '#EF4444'}
                    opacity={0.75}
                  />
                  {/* 选区边框 */}
                  <rect
                    x={x + 2} y={y + 2} width={CELL - 4} height={CELL - 4}
                    rx={4}
                    fill="none"
                    stroke={dColor}
                    strokeWidth={2.5}
                    opacity={0.9}
                  />
                  {/* 选民图标 */}
                  <circle cx={x + CELL/2} cy={y + CELL/2} r={8} fill="white" opacity={0.9} />
                </g>
              );
            })
          )}
        </svg>
      </div>

      {/* 图例 */}
      <div className="flex flex-wrap gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-500 opacity-75" />
          <span className="text-white/60">蓝色选民（12人，60%）</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-500 opacity-75" />
          <span className="text-white/60">红色选民（8人，40%）</span>
        </div>
        {districtColors.map((c, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border-2" style={{ borderColor: c, backgroundColor: 'transparent' }} />
            <span className="text-white/40 text-xs">选区{i+1}</span>
          </div>
        ))}
      </div>

      {/* 结果展示 */}
      <div
        className="rounded-xl p-4 border transition-all duration-300"
        style={{ borderColor: info.resultColor + '40', backgroundColor: info.resultColor + '08' }}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="font-bold text-white font-['Space_Grotesk']">选举结果：</span>
          <span className="font-bold" style={{ color: info.resultColor }}>{info.result}</span>
        </div>
        <p className="text-sm text-white/60">{info.desc}</p>
      </div>

      <div className="p-4 rounded-xl border border-rose-400/20 bg-rose-400/5">
        <div className="text-sm font-bold text-rose-400 mb-2 font-['Space_Grotesk']">两种操纵策略</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/60">
          <div>
            <span className="text-rose-400 font-medium">打包（Packing）：</span>
            将对手选民集中在少数选区，让他们以压倒性优势赢那几个区，但在其他区失去影响力。
          </div>
          <div>
            <span className="text-rose-400 font-medium">分裂（Cracking）：</span>
            将对手选民分散到多个选区，使其在每个选区都成为少数，无法赢得任何席位。
          </div>
        </div>
      </div>
    </div>
  );
}
