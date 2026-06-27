// 中国政治制度 - 侧边导航组件
// 设计：深石板背景 + 中国红高亮 + 金色强调

import { useEffect, useState } from "react";
import { cnNavSections } from "@/lib/cnData";

export default function CnSideNav() {
  const [activeId, setActiveId] = useState("foundation");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    cnNavSections.flatMap((s) => s.items).forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-56 z-40 flex flex-col overflow-y-auto"
      style={{
        background: "linear-gradient(180deg, #0D1117 0%, #110A0A 100%)",
        borderRight: "1px solid rgba(196,30,58,0.2)",
      }}
    >
      {/* Logo区域 */}
      <div className="px-4 py-5 border-b" style={{ borderColor: "rgba(196,30,58,0.25)" }}>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">🇨🇳</span>
          <span className="font-bold text-sm" style={{ color: "#D4AF37", fontFamily: "'Noto Serif SC', serif" }}>
            中国政治制度
          </span>
        </div>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
          全解 · 交互指南
        </p>
      </div>

      {/* 导航项 */}
      <nav className="flex-1 px-3 py-4 space-y-5">
        {cnNavSections.map((section) => (
          <div key={section.title}>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-2 px-1"
              style={{ color: "rgba(212,175,55,0.6)" }}
            >
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map(({ id, label, num }) => {
                const isActive = activeId === id;
                return (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded text-left transition-all duration-200"
                    style={{
                      background: isActive ? "rgba(196,30,58,0.18)" : "transparent",
                      borderLeft: isActive ? "2px solid #C41E3A" : "2px solid transparent",
                    }}
                  >
                    <span
                      className="text-xs font-mono"
                      style={{ color: isActive ? "#C41E3A" : "rgba(255,255,255,0.3)" }}
                    >
                      {num}
                    </span>
                    <span
                      className="text-sm"
                      style={{
                        color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                        fontFamily: "'Noto Sans SC', sans-serif",
                      }}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* 底部切换链接 */}
      <div className="px-4 py-4 border-t space-y-2" style={{ borderColor: "rgba(196,30,58,0.2)" }}>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>其他国家</div>
        {[
          { href: '/', flag: '🇺🇸', label: '美国政治制度' },
          { href: '/germany', flag: '🇩🇪', label: '德国政治制度' },
          { href: '/japan', flag: '🇯🇵', label: '日本政治制度' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-2 text-xs transition-colors"
            style={{ color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            <span>{item.flag}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}
