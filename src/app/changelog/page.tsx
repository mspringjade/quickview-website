import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '更新日志',
  description: '快览版本更新历史',
};

const CHANGELOG = [
  {
    version: '0.0.0',
    date: '2025-06-05',
    tag: '初始版本',
    changes: [
      '新增：Markdown文件渲染预览，支持CommonMark和GFM语法',
      '新增：HTML文件安全预览，支持CSS样式渲染',
      '新增：纯文本文件阅读器',
      '新增：JSON文件格式化预览，语法高亮显示',
      '新增：分享接收器，从微信/QQ/钉钉/飞书直接分享预览',
      '新增：文件来源追踪，自动记录文件来源应用',
      '新增：文件历史记录，支持按来源和类型筛选',
      '新增：基于 React 19 + Capacitor 8 的混合应用架构',
      '新增：TailwindCSS 4 现代化UI设计',
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            更新日志
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            了解快览的每一次更新和改进
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {CHANGELOG.map((release) => (
            <div key={release.version} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold">
                  v{release.version.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    v{release.version}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-500">{release.date}</span>
                    {release.tag && (
                      <span className="text-xs bg-primary-50 text-primary-600 px-2 py-0.5 rounded-full font-medium">
                        {release.tag}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="ml-6 border-l-2 border-gray-100 pl-8 space-y-3">
                {release.changes.map((change, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary-400 rounded-full mt-2" />
                    <span className="text-gray-600">{change}</span>
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
