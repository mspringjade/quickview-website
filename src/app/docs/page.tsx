import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '使用文档',
  description: '快览使用文档 - 快速开始、使用指南、常见问题',
};

const DOCS = [
  {
    id: 'quickstart',
    title: '快速开始',
    sections: [
      {
        title: '安装应用',
        content: `1. 从[下载页面](/download)获取最新版APK
2. 在手机上打开下载的APK文件
3. 允许安装未知来源应用（Android 8.0+）
4. 按照提示完成安装`,
      },
      {
        title: '首次使用',
        content: `1. 打开快览应用
2. 点击"打开文件"按钮选择本地文件
3. 或从微信/钉钉分享文件到快览
4. 文件将自动打开预览`,
      },
    ],
  },
  {
    id: 'guide',
    title: '使用指南',
    sections: [
      {
        title: '文件选择器',
        content: `点击首页"打开文件"按钮，调用系统文件选择器。支持选择多个文件（最多10个），仅显示支持的文件格式。`,
      },
      {
        title: '分享预览',
        content: `在任何应用中（如微信、钉钉），选择文件后点击"分享"或"用其他应用打开"，选择"快览"即可直接预览。这是最便捷的使用方式。`,
      },
      {
        title: 'URL下载',
        content: `点击首页"URL下载"按钮，输入文件的HTTP/HTTPS链接，点击下载。支持最大100MB的文件，下载完成后自动打开预览。`,
      },
      {
        title: 'Markdown预览',
        content: `Markdown文件将被渲染为格式化文档，支持标题、列表、代码块、表格、引用等语法。可在设置中调整字体大小。`,
      },
      {
        title: 'HTML预览',
        content: `HTML文件在WebView中预览，默认禁用JavaScript以确保安全。可在设置中调整安全级别。`,
      },
      {
        title: 'ZIP预览',
        content: `ZIP文件将显示文件树视图，可以预览其中的文本文件和图片。支持选择性解压单个文件或解压全部。`,
      },
    ],
  },
  {
    id: 'settings',
    title: '设置说明',
    sections: [
      {
        title: '主题设置',
        content: `支持日间模式、夜间模式和自动模式。自动模式会跟随系统主题设置切换。`,
      },
      {
        title: '预览设置',
        content: `- Markdown字体大小：12-24pt
- HTML安全级别：严格（禁用JS）/ 适中 / 宽松
- 文本阅读器：行号显示、字体调整`,
      },
      {
        title: '隐私设置',
        content: `- 清除浏览历史
- 清除缓存文件
- 匿名使用统计开关`,
      },
    ],
  },
  {
    id: 'faq',
    title: '常见问题',
    sections: [
      {
        title: '为什么有些文件无法预览？',
        content: `快览目前仅支持 .md、.html、.txt、.zip 和常见图片格式。其他格式会尝试以纯文本方式打开。`,
      },
      {
        title: 'ZIP文件解压失败怎么办？',
        content: `请确认ZIP文件未损坏，且大小不超过500MB。密码保护的ZIP暂不支持。`,
      },
      {
        title: '如何清除缓存？',
        content: `进入 设置 → 隐私 → 清除缓存文件，即可清空所有缓存数据。`,
      },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            使用文档
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            从快速开始到高级设置，全面了解快览的使用方法
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table of Contents */}
          <nav className="bg-gray-50 rounded-xl p-6 mb-12">
            <h2 className="font-semibold text-gray-900 mb-4">目录</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {DOCS.map((doc) => (
                <a
                  key={doc.id}
                  href={`#${doc.id}`}
                  className="text-primary-500 hover:text-primary-600 text-sm py-1 transition-colors"
                >
                  📖 {doc.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Docs Content */}
          <div className="space-y-16">
            {DOCS.map((doc) => (
              <section key={doc.id} id={doc.id}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                  {doc.title}
                </h2>
                <div className="space-y-8">
                  {doc.sections.map((section, index) => (
                    <div key={index} className="bg-white rounded-xl border border-gray-100 p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {section.title}
                      </h3>
                      <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
