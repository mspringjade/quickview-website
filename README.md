# 快览官网 (QuickView Website)

> Android 平台上最便捷的文件预览工具的官方网站

## 📖 项目简介

这是快览（QuickView）应用的官方网站，用于展示产品功能、提供 APK 下载、文档说明等。网站采用现代化的设计风格，提供良好的用户体验。

## ✨ 主要功能

- **首页展示**：产品介绍、核心功能展示、支持的文件格式
- **功能详情**：详细的功能说明和特性介绍
- **下载页面**：APK 下载、安装指南、常见问题解答
- **文档中心**：使用文档和帮助信息
- **更新日志**：版本更新记录
- **关于页面**：项目背景和联系方式

## 🛠️ 技术栈

- **框架**: [Next.js 14](https://nextjs.org/) - React 全栈框架
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全的 JavaScript 超集
- **样式**: [Tailwind CSS](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **图标**: [Lucide React](https://lucide.dev/) - 优雅的开源图标库
- **构建**: 静态导出 (Static Export) - 生成纯静态 HTML 文件

## 📦 项目结构

```
quickview-website/
├── public/                 # 静态资源
│   ├── apk/               # APK 安装包
│   ├── images/            # 图片资源
│   ├── favicon/           # 网站图标
│   └── logo.svg           # Logo 文件
├── src/
│   ├── app/               # Next.js App Router 页面
│   │   ├── (home)/        # 首页
│   │   ├── features/      # 功能介绍页
│   │   ├── download/      # 下载页
│   │   ├── docs/          # 文档页
│   │   ├── changelog/     # 更新日志页
│   │   ├── about/         # 关于页
│   │   └── layout.tsx     # 根布局
│   ├── components/        # React 组件
│   │   ├── common/        # 通用组件
│   │   ├── layout/        # 布局组件 (Header, Footer)
│   │   └── ui/            # UI 组件
│   ├── lib/               # 工具函数和常量
│   │   ├── constants/     # 常量配置
│   │   ├── types/         # TypeScript 类型定义
│   │   └── utils/         # 工具函数
│   └── styles/            # 全局样式
│       └── globals.css    # 全局 CSS 和 Tailwind 配置
├── next.config.js         # Next.js 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目依赖
```

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

启动后终端会显示两个地址：

- **Local**：`http://localhost:3000`（本机浏览器访问）
- **Network**：`http://192.168.x.x:3000`（局域网内其他设备访问，IP 以你电脑实际为准）

页面会在你编辑文件时自动热更新。

#### 手机实时预览

1. 确保手机和电脑连接在**同一个 Wi-Fi** 下
2. 在项目目录运行 `npm run dev`
3. 复制终端里 **Network** 那一行的地址（例如 `http://192.168.1.100:3000`）
4. 用手机浏览器打开该地址即可实时预览，改代码后手机页面会自动刷新

> 如果手机打不开，请在 Windows 防火墙中允许 Node.js 的专用/公用网络访问，或临时关闭防火墙测试。

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

构建完成后，静态文件将生成在 `out/` 目录中。

### 启动生产服务器

```bash
npm run start
# 或
yarn start
```

### 代码检查

```bash
npm run lint
# 或
yarn lint
```

## 📝 配置说明

### 站点配置

在 `src/lib/constants/index.ts` 中修改站点配置：

```typescript
export const SITE_CONFIG = {
  name: '快览',                              // 站点名称
  nameEn: 'QuickView',                       // 英文名称
  description: 'Android平台上最便捷的文件预览工具',  // 站点描述
//   url: 'https://quickview.app',              // 站点 URL
  github: 'https://github.com/mspringjade/quickview-website', // GitHub 仓库
  version: '0.0.0',                          // 当前版本
  apkSize: '~15MB',                          // APK 大小
  minAndroid: 'Android 7.0',                 // 最低支持版本
};
```

### 导航菜单

在同一文件中修改导航链接：

```typescript
export const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '功能', href: '/features' },
  { label: '下载', href: '/download' },
  { label: '文档', href: '/docs' },
  { label: '更新日志', href: '/changelog' },
  { label: '关于', href: '/about' },
];
```

## 🎨 样式定制

项目使用 Tailwind CSS，可以在以下文件中进行样式定制：

- `tailwind.config.js` - Tailwind 主题配置
- `src/styles/globals.css` - 全局样式和自定义类

## 📱 响应式设计

网站完全响应式设计，支持以下断点：

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🌐 部署

### 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. 将代码推送到 GitHub 仓库
2. 在 Vercel 中导入项目
3. Vercel 会自动检测 Next.js 并进行部署

### 部署到 Netlify

1. 构建项目：`npm run build`
2. 将 `out/` 目录部署到 Netlify

### 部署到自定义服务器

1. 构建项目：`npm run build`
2. 将 `out/` 目录中的文件部署到任何静态文件服务器（如 Nginx、Apache）

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目采用 MIT 协议开源。详见 [LICENSE](LICENSE) 文件。

## 📧 联系方式

- GitHub: [快览仓库](https://github.com/mspringjade/quickview-website)
<!-- - 官网: [https://quickview.app](https://quickview.app) -->

## 🙏 致谢

感谢所有为本项目做出贡献的开发者！

---

由 ❤️ 打造，基于 Next.js 和 Tailwind CSS
