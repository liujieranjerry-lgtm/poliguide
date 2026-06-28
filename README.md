# 🌐 PoliGuide — 四国政治制度交互式学习指南

> 深度解析美国、中国、德国、日本的政治选举与运转制度，事无巨细，图文并茂。

**在线访问：** [https://liujieranjerry-lgtm.github.io/poliguide/](https://liujieranjerry-lgtm.github.io/poliguide/)

---

## 📖 项目简介

PoliGuide 是一个交互式政治制度学习网站，用深色知识图谱风格呈现四个主要国家的政治体制，从宪法哲学到基层选举，从权力架构到制衡机制，力求**内容深度**与**理解难度低**兼顾。

每个国家页面均包含：
- 可点击展开的交互式组织结构图
- 动态流程图（立法程序、选举流程等）
- 数据可视化图表（选举人团、政党席位等）
- 制度对比表格

---

## 🗺️ 内容覆盖

| 国家 | 路由 | 章节数 | 特色模块 |
|------|------|--------|---------|
| 🇺🇸 美国 | `/` | 17章 | 三权分立图、选举人团可视化、杰利蝾螈示意图、弹劾历史 |
| 🇨🇳 中国 | `/china` | 16章 | 党的金字塔体系、全国人大立法流程、多党合作制度 |
| 🇩🇪 德国 | `/germany` | 14章 | 两票制可视化、联合政府切换器、建设性不信任投票 |
| 🇯🇵 日本 | `/japan` | 14章 | 众参两院对比、首相产生流程、自民党派阀体系 |
| 🏛️ 历任总统 | `/presidents` | — | 全部47位美国总统档案，支持党派/时代/关键词筛选 |

---

## 🛠️ 技术栈

- **框架：** React 19 + TypeScript
- **样式：** Tailwind CSS 4 + shadcn/ui
- **动画：** Framer Motion
- **图表：** Recharts
- **路由：** Wouter
- **构建：** Vite 7
- **部署：** GitHub Pages（GitHub Actions 自动部署）

---

## 🚀 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/liujieranjerry-lgtm/poliguide.git
cd poliguide

# 2. 安装依赖（需要 Node.js 18+ 和 pnpm）
pnpm install

# 3. 启动开发服务器
pnpm dev
# 访问 http://localhost:3000
```

---

## 📦 构建与部署

```bash
# 构建 GitHub Pages 版本（base 路径为 /poliguide/）
pnpm build:pages

# 构建产物在 dist/public/ 目录
```

每次推送到 `main` 分支，GitHub Actions 会自动触发构建并部署到 GitHub Pages，无需手动操作。

---

## 📁 项目结构

```
poliguide/
├── client/
│   ├── index.html
│   └── src/
│       ├── App.tsx                    # 路由配置
│       ├── index.css                  # 全局深色主题
│       ├── pages/
│       │   ├── Home.tsx               # 美国政治制度
│       │   ├── ChinaHome.tsx          # 中国政治制度
│       │   ├── GermanyHome.tsx        # 德国政治制度
│       │   ├── JapanHome.tsx          # 日本政治制度
│       │   └── Presidents.tsx         # 历任美国总统
│       ├── components/                # 交互可视化组件（20+个）
│       └── lib/                       # 各国数据文件
├── .github/workflows/deploy.yml       # 自动部署配置
├── vite.config.ts                     # 开发环境配置
└── vite.config.pages.ts               # GitHub Pages 构建配置
```

---

## 🔧 自定义域名

如需绑定自定义域名（如 `poliguide.com`）：

1. 修改 `vite.config.pages.ts`，将 `base: "/poliguide/"` 改为 `base: "/"`
2. 在 `client/public/` 下新建 `CNAME` 文件，内容填写你的域名
3. 在 DNS 服务商添加 CNAME 记录指向 `liujieranjerry-lgtm.github.io`
4. 推送代码，等待 GitHub Actions 自动重新部署

---

## 📄 许可证

MIT License — 欢迎 Fork 和二次开发。
