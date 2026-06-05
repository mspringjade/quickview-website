import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import Logo from '@/components/common/Logo';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo size={32} />
              <span className="text-xl font-bold text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              {SITE_CONFIG.description}，提供"打开即预览"的极致体验。
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">产品</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features" className="hover:text-white transition-colors">功能介绍</Link></li>
              <li><Link href="/download" className="hover:text-white transition-colors">下载中心</Link></li>
              <li><Link href="/changelog" className="hover:text-white transition-colors">更新日志</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">支持</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="hover:text-white transition-colors">使用文档</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">关于我们</Link></li>
              <li>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.nameEn} Team. MIT License.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/about" className="hover:text-white transition-colors">隐私政策</Link>
            <Link href="/about" className="hover:text-white transition-colors">用户协议</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
