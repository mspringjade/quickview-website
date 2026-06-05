export const SITE_CONFIG = {
  name: '快览',
  nameEn: 'QuickView',
  description: 'Android平台上最便捷的文件预览工具',
  url: 'https://quickview.app',
  github: 'https://github.com/mspringjade/quickview-website',
  twitter: 'https://x.com/MarcusJieJie',
  version: '0.0.0',
  apkSize: '~15MB',
  minAndroid: 'Android 7.0',
};

export const NAV_LINKS = [
  { label: '首页', href: '/' },
  { label: '功能', href: '/features' },
  { label: '下载', href: '/download' },
  { label: '文档', href: '/docs' },
  { label: '更新日志', href: '/changelog' },
  { label: '关于', href: '/about' },
];

export const FEATURES = [
  {
    icon: 'Zap',
    title: '秒级打开',
    description: '无需等待，打开即预览，极致的文件加载速度',
  },
  {
    icon: 'FileText',
    title: '多格式支持',
    description: '支持 Markdown、HTML、TXT、JSON 等多种常见文件格式',
  },
  {
    icon: 'Feather',
    title: '轻量运行',
    description: '基于 Capacitor 混合开发，安装包小，运行流畅',
  },
  {
    icon: 'Shield',
    title: '隐私保护',
    description: '所有文件本地处理，不上传任何用户数据',
  },
  {
    icon: 'Smartphone',
    title: '分享即开',
    description: '从微信、QQ、钉钉、飞书等应用直接分享文件到快览预览',
  },
  {
    icon: 'Palette',
    title: '来源追踪',
    description: '记录文件来源，支持按来源和类型筛选历史记录',
  },
];

export const SUPPORTED_FORMATS = [
  { ext: '.md', name: 'Markdown', icon: 'Markdown' },
  { ext: '.html', name: 'HTML', icon: 'Html' },
  { ext: '.txt', name: '纯文本', icon: 'Txt' },
  { ext: '.json', name: 'JSON', icon: 'Json' },
];
