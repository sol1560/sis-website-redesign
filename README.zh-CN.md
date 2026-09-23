# SIS 学校官网重设计（v2）

[English](README.md) · **中文**

这是 [SIS Group of Schools](https://sisschools.org/) 官网的非官方概念重设计，**由 [Sol](https://github.com/sol1560) 用 [Open Design](https://github.com/nexu-io/open-design) 设计**。Open Design 是一个开源、本地优先的设计工具，直接让你的 coding agent 来做设计。

> 本项目与 SIS Group of Schools 无关。学校名称、校徽、照片和各项数据都属于 SIS，取自 sisschools.org，仅用于这个概念稿。表单只在前端校验，不会发送任何数据。

**在线预览：** https://sis-website-redesign.vercel.app。喜欢的话，欢迎给这个 repo 点个 ⭐

![首页首屏](docs/hero.png)

| 核心价值观 | PACE | 升学 |
|---|---|---|
| ![](docs/values.png) | ![](docs/pace.png) | ![](docs/university.png) |

## 前后对比

三张图分别是现在的 sisschools.org、第一版（v1）和最终版（v2），都在 2026 年 9 月 23 日以 1440px 宽截取。

| SIS 现在 | v1 · 第一版 | v2 · 最终版 |
|---|---|---|
| ![](docs/compare/sis-current-desktop.jpg) | ![](docs/compare/v1-desktop.jpg) | ![](docs/compare/v2-desktop.jpg) |

手机上（390px）：

| SIS 现在 | v1 | v2 |
|---|---|---|
| ![](docs/compare/sis-current-mobile.jpg) | ![](docs/compare/v1-mobile.jpg) | ![](docs/compare/v2-mobile.jpg) |

<details>
<summary>整个首页并排对比</summary>

![整页对比](docs/compare/long-scroll.jpg)

</details>

- **SIS 现在**：顶部是横幅轮播，下面是居中的青绿色标题，小字很多，整体很模板化。价值观、PACE、校园壁画这些最有辨识度的品牌素材，都藏在内页里。
- **v1**：更干净，也更有杂志感，但衬线字、盾形裁图、小号大写标签放到任何一所学校都成立。这种通用的精致就是"AI 感"的来源。
- **v2**：直接从 SIS 校园的墙上长出来，用了价值观色竖幅、单色调照片、胶囊标题和一套圆润的无衬线字体。它看起来像 SIS，是因为它本来就取材于 SIS。

---

## 制作过程

整个网站来自一次 Open Design 会话：一段对话，大约 90 分钟，来回改了 15 轮左右。下面讲的是它从"普通"变成"好看"的关键几步。

### 1. v1 看着不错，但没打中

第一句提示词大概是：*"帮 SIS 重新设计官网，现在的太土了。多了解一下 SIS core values 和 PACE，参考 jisedu.or.id 的叙事逻辑（不是抄它的 UI）。"*

AI 读了这两个网站，找到了真实的素材，包括五个 FRICC 价值观、四项 PACE 能力、校徽和 30 年的校史照片。它借用了 **JIS 的叙事顺序**：愿景 → 品格 → 学习 → 证明（校史、校友）→ 入学。这个顺序一直保留到最终版。

视觉上却没打中。v1（保存在 [`archive/v1.html`](archive/v1.html)）用了 Fraunces 衬线字、盾形照片裁切，到处都是小号大写标签。做得很精致，但放到哪所学校都行，这正是"AI 感"。当时的反馈就一句话：*"有点不太像，而且有点 AI 感。"*

### 2. 转折点：拍了两张校园照片

关键是两张在 SIS 校园里用手机拍的照片，现在放在 [`design-references/`](design-references/)：

| "Feelings are Part of You" 情绪墙 | Core Values 立面竖幅 |
|---|---|
| ![](design-references/feelings-wall.png) | ![](design-references/campus-core-values-facade.png) |

AI 放下了自己的审美，**直接从这两面墙上提取设计语言**：

- **一个价值观一种颜色的高竖幅**：青绿、蓝、芥末黄、橙、红，竖排文字，首字母加粗，和校门口的立面一模一样，最后成了首屏的主视觉。
- **单色调学生照片**：照片染成所在竖幅的颜色，用 SVG 的 `feColorMatrix` + `feComponentTransfer` 滤镜实现（见 `index.html` 里的 `#duo-fairness` 等），任何一张真实的 SIS 照片都能融进配色里。
- **几何三角纹理**：从每个色块顶部往下渐渐淡成白色。
- **胶囊词句标题**：情绪墙把 "Joy · Helps · You · Connect" 写成一个个胶囊，实心和描边交替。这成了全站的标题语言，比如 *SIS Roots · Help · Every Child · Grow · World-Ready*。
- **PACE 墙**：照着壁画做成四列 "Perseverance Helps You Keep Going" 这样的句子，中间一列是 "Learning is Part of You"。
- **只用一套圆润的人文无衬线字体**（Ubuntu），接近海报上的字形，底色纯白。不用米色，不用渐变，也不用衬线字。

**心得：** 最有用的设计输入不是形容词，而是品牌在现实世界里的真实物件。让 AI 去照搬品牌自己的视觉语法，比让它凭空发明好得多。

### 3. 很多轮小而具体的反馈

之后就是一轮轮简短具体的修改，每次只说一两句：

- *"Compassion 那行字被图片挡住了"* → 字号改为跟随容器宽度，不再跟随整个窗口。
- *"右栏和胶囊没对齐，导航在这个宽度下折行了"* → 改成顶部对齐，导航项加 `white-space: nowrap`，1240px 以下收成汉堡菜单。
- *"给横幅加点小巧思、彩蛋"* → 鼠标划过时横幅像被风吹一样摆动；停在上面，照片会恢复原色；在页面上打 **`fricc`**，五条横幅会依次跳起来，像人浪一样。
- *"孤零零两个 logo 放在竖图里很奇怪"* / *"是不是缺了升学部分？"* / *"Where SIS alumni study 没有设计感"* → 这几块都用同一套语言重做成了色块海报。
- *"Integrity 和 Compassion 变成黑字了，改回白色"* → 有意推翻了原来的对比度规则，加一层很淡的文字阴影作为折中。
- *"校区那块无聊又臃肿"* → 删掉地图、筛选和 16 张卡片，换成按国家分组的轻量名录。
- *"跟首页重复的菜单项删掉"* → 顶部导航只剩 Home · Admissions · News。

有用的做法：直接点选出问题的具体元素（Open Design 可以点选页面元素）；说哪里不对，而不是教它怎么改；审美上的决定自己拿，就算 AI 有不同意见也一样（比如"改回白色"）。

### 4. 上线前的收尾（Claude Code）

Open Design 导出的就是纯静态 HTML/CSS/JS，还附带交接文档（`DESIGN-HANDOFF.md`、`DESIGN-MANIFEST.json`）。部署之前，Claude Code 用无头 Chromium 在 1440 / 390 / 360px 三种宽度下把每个页面跑了一遍，修掉了发现的问题：

- `stories.html` 报 `moreLabel is not defined` 错误，学生故事墙完全显示不出来。
- 手机上页头比屏幕宽了 60–73px，每个页面的**汉堡菜单都被挤出了屏幕**。现在 480px 以下改用更紧凑的页头。
- 加了页脚的非官方声明、设计署名，以及 `noindex`，因为这是概念稿，不是官方网站。

修完以后，27 个内部链接都能正常打开，没有 JS 报错，手机菜单能展开，表单校验也正常。

## 目录结构

```
index.html            首页（首屏、价值观、PACE、课程、升学、校区、校史、学生故事、预约表单）
admissions.html       入学步骤、参观/咨询表单、家长常见问题
news.html, article.html?a=…
stories.html          8 位学生的故事，可筛选，点开是详情弹层
campus.html?c=…       一个模板覆盖 16 个校区
scholarships.html, careers.html, contact.html
assets/               sis.css / home.css / pages.css，sis.js / home.js，data.js，图片
archive/              v1 和迭代中删掉的页面，留作对比
design-references/    决定了 v2 风格的两张校园照片
docs/                 截图和前后对比图
```

不需要构建，直接打开 `index.html`，或者用任意静态服务器：

```bash
python3 -m http.server 8000
```

## 致谢

- 设计：[Sol](https://github.com/sol1560)，使用 nexu-io 的 **[Open Design](https://github.com/nexu-io/open-design)** 完成。
- 内容、校徽与照片：[SIS Group of Schools](https://sisschools.org/)。价值观和 PACE 的说明文字是草稿。
- 部署在 Vercel。
