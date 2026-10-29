# 孙成一 AI 研究者个人主页 V1 设计规格（中文审阅版）

> 本文件是英文设计规格的完整中文审阅版。你可以直接在本文件中提出修改；后续以你确认后的中文版本为准，并将修改同步到英文规格和网站实现。

> 2026-10-29 更新：中科院实习暂不展示导师姓名；首页以 AI 研究为核心，本科身份与本科院校缩略为页面底部的一行教育信息。

## 1. 目标

在 `https://scy2004.github.io/` 创建孙成一 AI 研究者个人主页的首个公开版本。

虽然目前论文发表记录仍在积累，但主页需要建立可信、清晰的研究者身份。页面首先呈现研究问题和代表性工作，再使用经过核实的研究经历及一个已经完成的早期项目增加内容厚度。不得虚构所属机构、实验结果、投稿或发表会议、链接和个人成就。

## 2. 目标读者与核心信息

主要读者包括 AI 研究者、潜在导师、研究合作者和科研实习评审者。

页面需要传达以下核心信息：

> 孙成一是一名研究递归式自我改进和长程智能体的 AI 研究者，同时关注智能体化多模态交互和视觉语言模型后训练。

主页的核心定位句为：

> 我研究递归式自我改进和长程智能体，重点关注 AI 系统如何训练、评估和改进其他 AI 系统，以及基座模型与模拟器如何在共享基础设施上协同进化。

网站实际展示时使用对应的英文文案：

> I study recursive self-improvement and long-horizon agents, with a focus on how AI systems can train, evaluate, and improve other AI systems, and how foundation models and simulators can co-evolve on shared infrastructure.

## 3. 公开信息边界

第一版允许公开以下信息：

- 姓名：`Chengyi Sun` 和 `孙成一`。
- 页面身份：AI 研究者；学位信息仅在底部的简短教育记录中保留。
- 所在地：北京，中国。
- 学校与研究机构：
  - 北京科技大学（University of Science and Technology Beijing，USTB）。
  - 中国科学院自动化研究所（Institute of Automation, Chinese Academy of Sciences，CASIA）。
  - 西湖大学学习与推理系统实验室（Learning and INference Systems Laboratory，LINs Lab）。
- 研究指导：林涛教授（Prof. Tao Lin），仅关联西湖大学 LINs Lab；中科院导师姓名暂不展示。
- 邮箱：`shengminmail@163.com`。
- GitHub：`https://github.com/scy2004`。
- 用户提供的个人照片。
- 用户提供的三项研究工作标题以及它们的 `Under Review` 状态。用户已确认这些工作不受双盲匿名限制。
- 从用户简历中核实的教育经历和科研实习事实。

第一版不得展示以下信息：

- 手机号码、年龄、性别、政治面貌或籍贯。
- 简历下载链接或嵌入式简历。
- 空白的 Google Scholar 或 LinkedIn 栏目。
- 尚未确认的投稿或发表会议、作者列表、指标、论文链接、代码链接或项目网址。
- 没有实际内容的新闻、奖项、学术服务和研究笔记栏目。
- 可见的空白字段或其他未完成页面提示。

缺少内容的栏目不会出现在导航和页面中，但代码结构应当方便以后添加。

## 4. 页面结构

第一版采用英文单页长滚动结构。英文姓名旁显示中文姓名，但第一版不提供中英文切换功能。

顶部导航为：

`About · Research · Selected Work · Experience`

对应含义为：

`关于我 · 研究方向 · 代表性工作 · 研究经历`

### 4.1 页头与导航

- 左侧：紧凑的 `Chengyi Sun` 文字标识。
- 右侧：页面锚点导航和一个突出显示的邮箱链接。
- 桌面端使用吸顶导航；移动端采用可横向滚动或更加紧凑的布局。
- 不需要汉堡菜单，也不依赖 JavaScript 才能完成导航。

### 4.2 首屏区域

首屏使用双栏布局：左侧展示研究身份，右侧展示用户提供的个人照片。

展示内容：

- 小标题：`AI Researcher · Beijing, China`
- 主标题：`Chengyi Sun`
- 中文姓名：`孙成一`
- 身份描述：`AI researcher working on recursive self-improvement and long-horizon agents.`
- 第 2 节中的核心定位句。
- 机构信息：`CASIA · LINs Lab, Westlake University`
- 链接：仅显示 `Email` 和 `GitHub`。

个人照片不进行生成式修改。页面通过 CSS 和 `object-fit: cover` 将原图裁切到克制的编辑式相框中，原始照片仍作为源文件保存。

### 4.3 关于我

网站使用以下英文文案：

> My research spans recursive self-improvement, long-horizon agents, real-time multimodal interaction, and vision-language model post-training. I am especially interested in systems that improve not only what an agent can do, but also how it decides when to continue, verify, revise direction, or stop.

> I conduct research with LINs Lab at Westlake University under the guidance of Prof. Tao Lin, and with the Institute of Automation, Chinese Academy of Sciences. My broader goal is to study how foundation models, simulators, and research infrastructure can support the continual improvement of AI systems.

中文含义为：

> 我的研究涵盖递归式自我改进、长程智能体、实时多模态交互和视觉语言模型后训练。我尤其关注这样一类系统：它们不仅能够提升智能体的执行能力，还能改进智能体关于何时继续、验证、调整方向或停止的判断。

> 我在西湖大学 LINs Lab 接受林涛教授指导，并在中国科学院自动化研究所开展研究。我的长期目标是研究基座模型、模拟器和研究基础设施如何共同支持 AI 系统的持续改进。

页面不展示缺乏依据的论文数量、引用数量或宽泛能力声明。

### 4.4 研究议程

这是主页的核心部分，只设置三个带编号的研究方向。

#### 01. 面向递归式自我改进的判断能力

研究问题：

> 长程智能体如何在采取进一步行动之前，判断自己应该继续、验证、调整方向、寻求帮助还是停止？

英文展示文案：

> How can long-horizon agents judge whether to continue, verify, revise direction, ask for help, or stop before taking further action?

研究介绍：

> 我研究可复用的判断程序和由宿主系统集成的干预循环，使智能体的中间决策能够被明确表示和测量。目标是在单纯增加智能体执行能力之前，先提升它的方向判断和控制能力。

英文展示文案：

> I study reusable judgment procedures and host-integrated intervention loops that make intermediate decisions explicit and measurable. The goal is to improve an agent's direction and control before simply giving it more execution capacity.

相关工作：`DIVE` 以及 Bravehub 系统（`bravejev-harness`、`jevbrave-research`）。

#### 02. 智能体化多模态交互

研究问题：

> 生成模型如何成为能够实时整合视频、语音和不断变化的人类情境的自适应智能体？

英文展示文案：

> How can generative models become adaptive agents that integrate video, audio, and evolving human context in real time?

研究介绍：

> 我关注智能体化生成、自我改进的生成模型，以及能够在不同环境和任务中自适应行为的交互式世界模型，同时探索系统如何推断接下来与交互相关的人类状态或意图。

英文展示文案：

> I am interested in agentic generation, self-improving generative models, and interactive world models that can adapt their behavior across environments and tasks while reasoning about the next relevant human state or intent.

相关工作：`Attachment-Inspired Inherent Formation of Social Tendencies for LLM Agents`。

#### 03. 视觉语言模型后训练

研究问题：

> 后训练如何在不削弱视觉理解、检索和有依据推理能力的前提下提升生成能力？

英文展示文案：

> How can post-training improve generation without weakening visual understanding, retrieval, and grounded reasoning?

研究介绍：

> 我研究视觉语言模型中理解与生成之间的平衡，包括将视觉感知、搜索和语言表达连接到统一系统中的训练路径。

英文展示文案：

> I study the balance between understanding and generation in vision-language models, including training paths that connect seeing, search, and speaking in a unified system.

相关工作：`CALLOSUM: One Path between Seeing, Search, and Speaking`。

### 4.5 代表性工作

采用纵向编辑式列表，而不是密集的论文卡片墙。每一项包含编号、状态、标题和简短介绍。在用户提供并核实之前，不展示会议或期刊、作者列表、论文链接、代码链接和定量结果。

#### DIVE: Making Judgment a First-Class Capability in Long-Horizon Agents

- 状态：`Under Review`。
- 中文介绍：`该框架将可复用的智能体判断表示为 Cognitive Judgment Skills，并通过 Detect-Invoke-Verify 循环将其连接到智能体执行，使中间决策、实现成本和行动后果能够被分别测量。`
- 英文展示文案：`A framework that represents reusable agent judgment as Cognitive Judgment Skills and connects them to execution through a Detect-Invoke-Verify loop, making intermediate decisions, implementation costs, and action consequences separately measurable.`
- 相关系统：`Bravehub · bravejev-harness · jevbrave-research`。

#### Attachment-Inspired Inherent Formation of Social Tendencies for LLM Agents

- 状态：`Under Review`。
- 中文介绍：`探索依恋理论启发的机制如何支持大语言模型智能体社会倾向的形成与适应。`
- 英文展示文案：`An exploration of how attachment-inspired mechanisms can support the formation and adaptation of social tendencies in LLM agents.`

#### CALLOSUM: One Path between Seeing, Search, and Speaking

- 状态：`Under Review`。
- 中文介绍：`一项视觉语言模型后训练研究，将视觉理解、搜索和语言生成连接起来，并考察检索与生成之间的平衡。`
- 英文展示文案：`A vision-language post-training study connecting visual understanding, search, and language generation while examining the balance between retrieval and generation.`

所有审稿中的工作只标记为 `Under Review`，不显示尚未确认的投稿会议。

### 4.6 研究经历

采用紧凑时间线，只展示已经核实的角色。

#### 中国科学院自动化研究所

- 英文名称：`Institute of Automation, Chinese Academy of Sciences`。
- 角色：`Research Intern`。
- 时间：`Nov 2025 - Present`。
- 导师姓名：暂不展示。
- 研究重点：`Long-horizon agents, multimodal agents, and agent evaluation.`
- 中文含义：长程智能体、多模态智能体和智能体评估。

#### 上海人工智能实验室

- 英文名称：`Shanghai AI Laboratory`。
- 角色：`Research Intern`。
- 时间：`Jan 2026 - May 2026`。
- 研究重点：`Vision-language model adaptation and post-training.`
- 中文含义：视觉语言模型适应与后训练。

LINs Lab 的关系显示在首屏和“关于我”部分。由于目前没有提供准确的角色和起止时间，暂不单独添加时间线条目。

### 4.7 早期项目

加入一个克制的项目卡片，用经过核实的早期工作增加内容厚度，同时避免分散当前研究议程。

#### 基于多智能体 Graph RAG 的电子病历风险评估

- 英文名称：`Electronic Medical Record Risk Assessment with Multi-Agent Graph RAG`。
- 时间：`Jan 2024 - Aug 2025`。
- 中文介绍：`构建了一个医疗风险评估原型，将领域知识图谱、Graph RAG、思维链推理和多智能体验证流程结合起来，用于分析电子病历。`
- 英文展示文案：`Built a medical risk-assessment prototype combining a domain knowledge graph, Graph RAG, chain-of-thought reasoning, and a multi-agent verification pipeline for electronic medical records.`
- 第一版不展示竞赛奖项和定量数据集声明，因为用户要求奖项栏目暂时留空，并且尚未提供可公开访问的项目链接。

### 4.8 教育经历

仅在页面底部用一行小字展示，不设置导航入口、大标题或学校标识：

- `USTB · B.Eng. in Intelligent Construction`
- `2023 — 2027 (expected)`

对应中文为：

- 智能建造专业工学学士
- 北京科技大学
- 2023 年 9 月至 2027 年 6 月（预计）

由于用户没有提供具体内容，GPA、排名、毕业设计和课程暂不展示。

### 4.9 页脚

- `Chengyi Sun · Beijing, China`
- 邮箱与 GitHub 链接。
- `Last updated October 2026`。
- 不展示手机号码、CV链接、Google Scholar、网站分析或访问计数器。

## 5. 视觉方向

设计主要参考 Yi-Fan Zhang 主页的“研究优先”学术编辑风，并少量吸收 Renwei Meng 主页中结构化展示研究项目的方法。

- 背景：类似纸张的暖白色，约为 `#f8f1e7`。
- 正文：炭灰色，约为 `#2f3335`。
- 强调色：克制的靛蓝或学术蓝，约为 `#2d50cc`。
- 标题：使用系统安全的 Georgia 衬线字体栈。
- 正文：使用系统无衬线字体栈。
- 内容最大宽度：约 `1080px`。
- 使用充足的纵向留白和细分隔线，不使用厚重的卡片边框。
- 首屏采用不对称的文字与照片双栏结构。
- 桌面端三个研究方向使用三张编号卡片；移动端改为单列。
- 代表性工作使用带状态标签的纵向列表，而不是密集论文网格。
- 研究经历采用时间线，桌面端将日期单独对齐。
- 不使用粒子特效、3D背景、自动播放媒体、轮播图、大面积动态渐变、技能百分比或装饰性图库图片。

## 6. 响应式与无障碍行为

- 支持从 `320px` 宽的手机屏幕到大型桌面显示器。
- 窄屏下首屏和研究方向卡片均改为单列。
- 正文字号不低于 `16px`，并控制易读的行宽。
- 提供清晰的键盘焦点状态和语义化章节标题。
- 照片使用有意义的替代文字：`Portrait of Chengyi Sun`。
- 尊重用户的 `prefers-reduced-motion` 设置。
- 外部链接正常打开，不强制新标签页。
- 即使个人照片加载失败，页面文字内容仍然完整可读。

## 7. 技术架构

使用不依赖第三方框架的静态 GitHub Pages 网站：

- `index.html`：语义化页面结构和第一版全部内容。
- `styles.css`：视觉系统和响应式样式。
- `assets/profile.jpg`：用户提供照片的副本。
- `favicon.svg`：简洁的 `CS` 字母组合站点图标。
- `.nojekyll`：跳过 Jekyll 处理。
- `tests/site.test.mjs`：使用 Node 内置测试功能，检查必需内容、链接、状态标签、网页元数据、图片引用和隐私排除项。

不使用前端框架、包管理器、数据库、后端、表单、网站分析服务或客户端状态系统。

## 8. 验证与发布

发布前需要完成：

- 核对必要文字、网页元数据、邮箱、GitHub 地址、图片路径和所有章节锚点。
- 确认被排除的隐私信息和暂不可用的链接没有出现在页面中。
- 确认三项工作均标记为 `Under Review`，且没有会议或期刊声明。
- 在手机和桌面宽度下检查裁切、溢出、对比度和照片构图。
- 确认本地网站可以正常加载，没有缺失资源。

发布目标：

- 公开仓库：`scy2004/scy2004.github.io`。
- 默认分支：`main`。
- GitHub Pages 来源：仓库根目录。
- 公开网址：`https://scy2004.github.io/`。
- 部署后必须返回 HTTP 200，并确认线上 HTML 包含 `Chengyi Sun` 和三个研究方向。

## 9. 明确推迟的内容

以下内容等用户提供并核实后再添加：

- 完整的论文信息，以及论文、代码和项目链接。
- Google Scholar。
- LINs Lab 的具体身份和起止时间。
- 更多项目、新闻、奖项、学术服务、报告和研究笔记。
- 中文版网站。
- 自定义域名。

未来添加这些内容时，应当扩展现有页面结构，而不是在第一版中创建可见的空栏目。
