import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: '关于',
  description: `了解${SITE_CONFIG.name}项目、技术栈和团队`,
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            关于快览
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            了解快览的故事、技术栈和愿景
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          {/* Project Intro */}
          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">项目介绍</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              快览（QuickView）是一个开源的Android文件预览工具，旨在解决用户在即时通讯场景中无法直接预览文件的痛点。
            </p>
            <p className="text-gray-600 leading-relaxed">
              我们相信，预览文件不应该是一个复杂的操作。打开即预览，这就是快览的核心体验。
            </p>
          </section>

          {/* Vision */}
          <section className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">核心价值</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '快', desc: '秒级打开，无需等待' },
                { label: '全', desc: '支持多种常见文件格式' },
                { label: '轻', desc: '安装包小，运行流畅' },
                { label: '安', desc: '本地处理，保护隐私' },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                  <div className="text-2xl font-bold mb-1">{item.label}</div>
                  <div className="text-sm text-primary-100">{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">技术栈</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">移动应用</h3>
                <div className="flex flex-wrap gap-2">
                  {['React 19', 'TypeScript 6', 'Capacitor 8', 'Vite 8', 'TailwindCSS 4'].map((tech) => (
                    <span key={tech} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">核心依赖</h3>
                <div className="flex flex-wrap gap-2">
                  {['react-markdown', 'prismjs', 'lucide-react', 'remark-gfm'].map((tech) => (
                    <span key={tech} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-3">项目官网</h3>
                <div className="flex flex-wrap gap-2">
                  {['Next.js 14', 'Tailwind CSS', 'TypeScript', 'Vercel'].map((tech) => (
                    <span key={tech} className="text-sm bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Open Source */}
          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">开源协议</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              快览采用 MIT 开源协议，欢迎社区贡献。
            </p>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-6"
              >
                GitHub 仓库
              </a>
              <Link
                href="/docs"
                className="btn-secondary text-sm py-2 px-6"
              >
                贡献指南
              </Link>
            </div>
          </section>

          {/* Privacy */}
          <section className="bg-white rounded-2xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">隐私保护</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                不收集用户文件内容
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                不上传用户隐私数据
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                所有文件处理均在本地完成
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                匿名化使用统计（可选）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                明确的隐私政策
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
