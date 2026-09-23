# SIS 学校官网重设计

[English](README.md) · **中文**

[SIS Group of Schools](https://sisschools.org/) 官网的非官方概念重设计。用 [Open Design](https://github.com/nexu-io/open-design) 做的，Open Design 是个开源的本地设计工具，让 coding agent 直接出设计稿。

> 跟 SIS 官方没有任何关系。校名、校徽、照片、数据都是从 sisschools.org 拿的，只用在这个概念稿里。表单有前端校验但不会真的发数据。

**在线预览：** https://sis-website-redesign.vercel.app

喜欢的话给个 ⭐

![首页首屏](docs/hero.png)

| 核心价值观 | PACE | 升学 |
|---|---|---|
| ![](docs/values.png) | ![](docs/pace.png) | ![](docs/university.png) |

## 前后对比

三张截图分别是现在的 sisschools.org、第一版（v1）和最终版（v2），2026 年 9 月 23 日截的，1440px 宽。

| SIS 现在 | v1 | v2 |
|---|---|---|
| ![](docs/compare/sis-current-desktop.jpg) | ![](docs/compare/v1-desktop.jpg) | ![](docs/compare/v2-desktop.jpg) |

手机端（390px）：

| SIS 现在 | v1 | v2 |
|---|---|---|
| ![](docs/compare/sis-current-mobile.jpg) | ![](docs/compare/v1-mobile.jpg) | ![](docs/compare/v2-mobile.jpg) |

<details>
<summary>整个首页并排对比</summary>

![整页对比](docs/compare/long-scroll.jpg)

</details>

**现在的 SIS 官网**：顶上一个横幅轮播，下面居中的青绿色标题配大段小字，非常模板。价值观、PACE、校园壁画这些最能代表 SIS 的东西全藏在内页里。

**v1**：AI Slop

**v2**：视觉语言直接从 SIS 校园里长出来的。价值观色竖幅、单色调照片、胶囊标题、一套圆润的无衬线字体。它看起来像 SIS，因为素材本来就是 SIS 的。

## 怎么做出来的

整个网站是一次 Open Design 会话的产物，一段对话，大概 90 分钟，来回改了 15 轮。下面说几个关键节点。

### v1：AI Slop

第一句提示词大意是"帮 SIS 重设计官网，现在太土了，去了解一下 core values 和 PACE，参考 jisedu.or.id 的叙事逻辑但别抄 UI"。

AI 确实把素材都找到了：五个 FRICC 价值观、四项 PACE 能力、校徽、30 年校史照片。叙事顺序借了 JIS 的思路（愿景 → 品格 → 学习 → 证据 → 入学），这个顺序一直沿用到最终版。

但视觉上没到位。v1（存在 [`archive/v1.html`](archive/v1.html)）用了 Fraunces 衬线、盾形裁图、满屏小号大写标签，做得挺精致，但跟 SIS 没什么关系。我当时就回了一句"有点不太像，而且有点 AI 感"。

### 转折：两张手机照片

真正改变方向的是我在 SIS 校园里随手拍的两张照片（放在 [`design-references/`](design-references/) 里）：一张是"Feelings are Part of You"情绪墙，一张是校门口的 Core Values 立面竖幅。

| "Feelings are Part of You" 情绪墙 | Core Values 立面竖幅 |
|---|---|
| ![](design-references/feelings-wall.png) | ![](design-references/campus-core-values-facade.png) |

AI 看到这两张照片之后，放弃了自己发挥的那套审美，转而从墙上直接提取设计语言：

每个价值观一种颜色的高竖幅（青绿、蓝、芥末黄、橙、红），竖排文字首字母加粗，跟校门口的立面一模一样，变成了首屏主视觉。照片染成所在竖幅的颜色，用 SVG 的 `feColorMatrix` + `feComponentTransfer` 滤镜做的单色调效果，随便换一张 SIS 的真实照片都能融进去。情绪墙上 "Joy · Helps · You · Connect" 那种实心描边交替的胶囊写法，成了全站的标题语言。字体只用一套圆润的人文无衬线（Ubuntu），底色纯白，不搞米色也不搞渐变。

回过头看，给 AI 喂真实的校园物件比给它喂形容词管用太多了。

### 之后就是一轮轮小修

每次反馈一两句，都很具体：

"Compassion 那行字被图片挡住了" → 字号改成跟容器走。"右栏和胶囊没对齐" → 顶部对齐，导航加 `white-space: nowrap`，1240px 以下收汉堡菜单。"给横幅加点彩蛋" → 鼠标划过时横幅会晃，悬停恢复原色，在页面上打 `fricc` 五条横幅会依次跳起来像人浪。"校区那块太臃肿" → 删掉地图和 16 张卡片，换成按国家分组的轻量名录。

做下来觉得比较有效的方式是：直接指出哪个元素有问题（Open Design 可以点选），说哪里不对而不是教它怎么改，审美决定自己拿。

### 上线前用 Claude Code 收尾

Open Design 导出的是纯静态 HTML/CSS/JS，带交接文档（`DESIGN-HANDOFF.md`、`DESIGN-MANIFEST.json`）。部署前让 Claude Code 用无头 Chromium 在 1440 / 390 / 360px 三个宽度把每页跑了一遍，修了几个问题：`stories.html` 报 `moreLabel is not defined` 导致学生故事墙整个不显示；手机上页头比屏幕宽出 60–73px，汉堡菜单被挤出去了；加了页脚的非官方声明、设计署名和 `noindex`。

修完之后 27 个内部链接都正常，没有 JS 报错，手机菜单能展开，表单校验也没问题。

## 目录结构

```
index.html            首页
admissions.html       入学流程、表单、FAQ
news.html / article.html?a=…
stories.html          8 个学生故事，可筛选
campus.html?c=…       16 个校区共用一个模板
scholarships.html / careers.html / contact.html
assets/               样式、脚本、图片
archive/              v1 和迭代中删掉的页面
design-references/    决定了 v2 风格的两张校园照片
docs/                 截图和对比图
```

不需要构建，直接开 `index.html` 或者起个静态服务器：

```bash
python3 -m http.server 8000
```

## 致谢

设计：[Sol](https://github.com/sol1560)，用 nexu-io 的 [Open Design](https://github.com/nexu-io/open-design) 完成。内容、校徽和照片来自 [SIS Group of Schools](https://sisschools.org/)，价值观和 PACE 的说明文字是草稿。部署在 Vercel。
