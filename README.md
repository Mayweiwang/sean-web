# 🦔 Sean's World - 个人主页

一个超酷炫的个人主页，采用深蓝色 Sonic 主题设计，充满动感和活力！

## ✨ 特性

- 🎨 **深蓝色 Sonic 主题**：采用 Sonic 经典配色方案，搭配渐变背景和炫光效果
- ⚡ **动感动画**：速度线条、脉冲动画、悬浮效果等多种 Sonic 风格动画
- 💬 **智能聊天助手**：预设的智能回复系统，可以和 Sean 的虚拟小助手聊天
- ⚽ **3D 足球卡片**：独特的 3D 透视效果，鼠标悬停时有立体旋转动画
- 📱 **响应式设计**：完美适配手机、平板和桌面设备
- 🚀 **现代技术栈**：使用 Next.js 16 + TypeScript + Tailwind CSS 4.0

## 🎯 功能亮点

### 个人介绍
- 展示 Sean 的爱好：国际象棋、足球、Sonic、奥特曼、疯狂动物城
- 每个爱好卡片都有独特的颜色主题和悬浮效果

### 智能聊天助手
- 点击浮动聊天按钮开启对话
- 助手了解 Sean 的所有兴趣爱好
- 友好、活泼、充满能量的对话风格
- 预设智能回复，即时响应
- 可以询问关于国际象棋、足球、Sonic、奥特曼、疯狂动物城等话题

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看效果！

## 🛠️ 技术栈

- **框架**: [Next.js 16](https://nextjs.org/) - React 全栈框架
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全
- **样式**: [Tailwind CSS 4.0](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **动画**: CSS Keyframes + Tailwind - 流畅的动画效果

## 📁 项目结构

```
sean-web/
├── app/
│   ├── components/
│   │   └── ChatBox.tsx           # 聊天框组件（预设回复系统）
│   ├── globals.css               # 全局样式、主题配置和动画
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 主页面
├── public/                       # 静态资源
├── next.config.ts                # Next.js 配置
└── package.json                  # 依赖配置
```

## 🎨 主题定制

在 `app/globals.css` 中可以自定义 Sonic 主题颜色：

```css
:root {
  --sonic-blue: #0054b2;      /* Sonic 蓝色 */
  --sonic-dark: #003d82;      /* 深蓝色 */
  --sonic-light: #0066d9;     /* 亮蓝色 */
  --sonic-accent: #ffd700;    /* 金色强调 */
  --sonic-speed: #00d9ff;     /* 速度蓝 */
}
```

## 🌟 部署

### 部署到 Vercel

最简单的部署方式是使用 [Vercel 平台](https://vercel.com/new)：

1. 将代码推送到 GitHub
2. 在 Vercel 导入你的仓库
3. 点击部署

就是这么简单！无需任何额外配置，即可上线。

查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多详情。

## 📝 待办事项

- [ ] 添加更多动画效果
- [ ] 集成项目展示页面
- [ ] 添加音乐播放器
- [ ] 支持深色/浅色主题切换
- [ ] 添加 Sonic 小游戏彩蛋

## 📄 许可证

Built with ❤️ and ⚡ for Sean

---

**Gotta go fast! 🦔💨**
