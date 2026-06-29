// 侧边导航 - 知识图谱设计风格
// 左侧固定章节导航，带颜色标识，显示当前阅读位置
import { useState, useEffect } from 'react';
import { chapters } from '@/lib/data';

interface SideNavProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const categoryLabels: Record<string, string> = {
  structure: '政府结构',
  election: '选举制度',
  party: '政党制度',
  mechanism: '运作机制',
};

export default function SideNav({ activeSection, onNavigate }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const grouped = chapters.reduce((acc, ch) => {
    if (!acc[ch.category]) acc[ch.category] = [];
    acc[ch.category].push(ch);
    return acc;
  }, {} as Record<string, typeof chapters>);

  const navContent = (
    <nav className="flex flex-col gap-1 py-4">
      {Object.entries(grouped).map(([cat, items]) => (
        <div key={cat} className="mb-2">
          <div className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/30 font-['Space_Grotesk']">
            {categoryLabels[cat]}
          </div>
          {items.map((ch) => (
            <button
              key={ch.id}
              onClick={() => { onNavigate(ch.id); setIsOpen(false); }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all duration-200 group
                ${activeSection === ch.id
                  ? 'bg-white/10 text-white'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
                }`}
            >
              <span
                className="w-1 h-5 rounded-full flex-shrink-0 transition-all duration-200"
                style={{
                  backgroundColor: activeSection === ch.id ? ch.color : 'transparent',
                  boxShadow: activeSection === ch.id ? `0 0 8px ${ch.color}80` : 'none',
                }}
              />
              <span className="text-xs font-mono text-white/30 flex-shrink-0">{ch.number}</span>
              <span className="text-sm font-medium truncate font-['Space_Grotesk']">{ch.title}</span>
            </button>
          ))}
        </div>
      ))}
    </nav>
  );

  if (isMobile) {
    return (
      <>
        {/* Mobile: 底部浮动按钮 */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center text-xl"
          style={{ boxShadow: '0 0 20px rgba(59,130,246,0.5)' }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <div className="relative ml-auto w-72 h-full bg-[#0a1020] border-l border-white/10 overflow-y-auto">
              <div className="px-4 pt-6 pb-2">
                <div className="text-sm font-bold text-white/80 font-['Space_Grotesk']">章节导航</div>
              </div>
              {navContent}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-[#080e1a] border-r border-white/8 overflow-y-auto z-30 hidden lg:block">
      <div className="px-4 pt-6 pb-2">
        <div className="text-xs font-bold text-white/40 uppercase tracking-widest font-['Space_Grotesk']">
          美国政治制度
        </div>
        <div className="text-xs text-white/20 mt-1">全解 · 交互指南</div>
      </div>
      {navContent}
      <div className="px-4 py-3 border-t border-white/8">
        <button onClick={() => { window.location.hash = '#/presidents'; }} className="flex items-center gap-2 text-xs text-blue-400/60 hover:text-blue-400 transition-colors">
          <span>🏛️</span><span>历任总统全览</span>
        </button>
      </div>
      <div className="px-4 py-4 border-t border-white/8 space-y-2">
        <div className="text-[10px] text-white/20 uppercase tracking-widest mb-1">其他国家</div>
        <button onClick={() => { window.location.hash = '#/china'; }} className="flex items-center gap-2 text-xs text-white/40 hover:text-white/80 transition-colors">
          <span>🇨🇳</span><span>中国政治制度</span>
        </button>
        <button onClick={() => { window.location.hash = '#/germany'; }} className="flex items-center gap-2 text-xs text-white/40 hover:text-white/80 transition-colors">
          <span>🇩🇪</span><span>德国政治制度</span>
        </button>
        <button onClick={() => { window.location.hash = '#/japan'; }} className="flex items-center gap-2 text-xs text-white/40 hover:text-white/80 transition-colors">
          <span>🇯🇵</span><span>日本政治制度</span>
        </button>
      </div>
    </aside>
  );
}
