# 美国政治制度网站设计方案

## 三种设计方向

<response>
<probability>0.07</probability>
<idea>
**设计方向一：新闻档案室（Editorial Archive）**

- **Design Movement**: 1940s-1960s美国政治报纸排版风格，融合现代数字媒体的清晰度
- **Core Principles**:
  1. 强烈的排版层次感——标题用衬线体，正文用无衬线体
  2. 黑白灰为主色，以深红/深蓝作为政治色彩点缀
  3. 网格化布局，模拟报纸版面的分栏结构
  4. 信息密度高但有序，每个区块都有明确的视觉重量
- **Color Philosophy**: 纸张米白(#F5F0E8)为背景，碳黑(#1A1A1A)为主文字，深红(#8B0000)和深蓝(#003366)作为党派色彩标识
- **Layout Paradigm**: 不对称多栏布局，左侧固定导航栏，右侧内容区采用报纸分栏
- **Signature Elements**: 报纸风格的分割线、章节标题用大写字母+字母间距、数据用粗体衬线字体展示
- **Interaction Philosophy**: 悬停时出现"划线"效果，点击展开详情如翻阅档案
- **Animation**: 页面切换用纸张翻转效果，数字计数动画
- **Typography System**: Playfair Display（标题）+ Source Serif 4（正文）+ JetBrains Mono（数据）
</idea>
</response>

<response>
<probability>0.08</probability>
<idea>
**设计方向二：政府机构蓝（Institutional Navy）**

- **Design Movement**: 现代政府机构设计语言，参考美国国务院、白宫官网的庄重感，但注入现代活力
- **Core Principles**:
  1. 深海军蓝为主色调，营造权威感与可信度
  2. 大量留白，内容呼吸感强
  3. 卡片式信息架构，每个知识点独立成块
  4. 数据可视化作为核心叙事工具
- **Color Philosophy**: 海军蓝(#0A1628)背景，金色(#C9A84C)作为强调色，白色文字，红色(#CC0000)用于警示/重要信息
- **Layout Paradigm**: 全宽英雄区+固定侧边导航，内容区用不规则卡片网格
- **Signature Elements**: 美国国旗星条纹的抽象几何图案、官方印章风格的章节标识
- **Interaction Philosophy**: 点击展开详情，数据图表有hover交互，时间轴可拖拽
- **Animation**: 元素从底部滑入，数字滚动计数
- **Typography System**: Oswald（标题）+ Lato（正文）
</idea>
</response>

<response>
<probability>0.06</probability>
<idea>
**设计方向三：知识图谱（Knowledge Atlas）**✅ 选定方向

- **Design Movement**: 学术地图集与信息设计的融合，参考《经济学人》的数据叙事风格
- **Core Principles**:
  1. 以"地图/图谱"为核心隐喻——导航即探索，内容即地形
  2. 深色背景（深石板色）配高对比度的彩色数据层
  3. 每个章节有独特的颜色标识，形成视觉记忆锚点
  4. 大量使用SVG动画图表和交互式示意图
- **Color Philosophy**: 深石板(#0F172A)为基础，每个章节有专属颜色：立法(蓝#3B82F6)、行政(红#EF4444)、司法(绿#22C55E)、选举(金#F59E0B)
- **Layout Paradigm**: 左侧固定章节导航（带颜色标识），右侧内容区全宽展示，章节间有视觉过渡
- **Signature Elements**: 
  1. 章节颜色标识条（左侧竖线）
  2. 关键数字用超大字体展示（如"270"、"538"、"100"）
  3. 交互式流程图和关系图
- **Interaction Philosophy**: 滚动驱动动画，数据随滚动逐步揭示；图表可点击展开详情
- **Animation**: 数字计数动画、进度条动画、节点连线动画、章节切换淡入
- **Typography System**: Space Grotesk（标题，现代几何感）+ Noto Serif SC（中文正文，学术感）
</idea>
</response>

---

## 选定方案：知识图谱（Knowledge Atlas）

选择第三种方案。深色背景配彩色数据层，以"探索地图"为隐喻，每个章节有专属颜色标识，大量使用交互式图表和动画，营造沉浸式学习体验。
