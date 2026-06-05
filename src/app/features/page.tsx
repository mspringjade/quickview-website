import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: '功能介绍',
  description: '了解快览的全部功能特性',
};

const FEATURE_DETAILS = [
  {
    category: '文件获取',
    items: [
      {
        title: '分享接收器',
        desc: '注册为Android分享目标，从微信、QQ、钉钉、飞书等应用直接分享文件到快览预览',
        tags: ['微信分享', 'QQ分享', '钉钉分享', '飞书分享'],
      },
      {
        title: '来源追踪',
        desc: '自动记录文件来源应用，方便后续查找和管理',
        tags: ['来源记录', '微信', 'QQ', '钉钉', '飞书'],
      },
      {
        title: '文件历史',
        desc: '记录最近预览的文件，支持按来源和类型筛选，数据保存在本地',
        tags: ['历史记录', '本地存储', '筛选功能'],
      },
    ],
  },
  {
    category: '文件预览',
    items: [
      {
        title: 'Markdown渲染器',
        desc: '将Markdown文件渲染为美观的格式化文档，支持标题、列表、代码块、表格等语法',
        tags: ['CommonMark', 'GFM', '代码高亮'],
      },
      {
        title: 'HTML预览器',
        desc: '安全地预览HTML文件，支持CSS样式渲染',
        tags: ['HTML渲染', 'CSS支持'],
      },
      {
        title: '纯文本阅读器',
        desc: '显示纯文本文件，支持多种编码格式',
        tags: ['TXT', '多编码', '流畅阅读'],
      },
      {
        title: 'JSON格式化器',
        desc: '自动解析JSON文件并以格式化方式展示，方便阅读和调试',
        tags: ['JSON解析', '格式化', '语法高亮'],
      },
    ],
  },
  {
    category: '用户体验',
    items: [
      {
        title: '简约界面',
        desc: '采用现代简约设计风格，清爽耐看，专注内容本身',
        tags: ['简约设计', '现代UI', 'TailwindCSS'],
      },
      {
        title: '快速响应',
        desc: '基于 React 19 + Vite 构建，启动迅速，操作流畅',
        tags: ['React 19', 'Vite', '高性能'],
      },
      {
        title: '隐私保护',
        desc: '所有文件处理均在本地完成，不上传任何用户数据',
        tags: ['本地处理', '无上传', '隐私安全'],
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            功能介绍
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            全面了解快览的每一个功能，发现它如何提升你的文件预览体验
          </p>
        </div>

        <div className="space-y-16">
          {FEATURE_DETAILS.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  {catIndex + 1}
                </span>
                {category.category}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="bg-white rounded-xl border border-gray-100 p-6 hover:border-primary-200 hover:shadow-lg transition-all"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-4">
                      {item.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
