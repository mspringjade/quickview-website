import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: '下载',
  description: `下载${SITE_CONFIG.name}最新版本APK安装包`,
};

const INSTALL_STEPS = [
  {
    step: 1,
    title: '下载APK',
    desc: '点击上方下载按钮，将APK文件下载到手机',
  },
  {
    step: 2,
    title: '允许安装',
    desc: '在手机设置中允许"安装未知来源应用"（Android 8.0+需要在安装时确认）',
  },
  {
    step: 3,
    title: '安装应用',
    desc: '打开下载的APK文件，按照提示完成安装',
  },
  {
    step: 4,
    title: '开始使用',
    desc: '安装完成后，从微信或文件管理器分享文件到快览即可预览',
  },
];

const FAQ_ITEMS = [
  {
    q: '快览安全吗？',
    a: '快览所有文件处理均在本地完成，不上传任何用户数据。APK包经过代码混淆和安全审计。',
  },
  {
    q: '支持哪些Android版本？',
    a: `最低支持${SITE_CONFIG.minAndroid}（API 24），推荐Android 10+以获得最佳体验。`,
  },
  {
    q: '为什么不在应用商店上架？',
    a: '目前快览处于初期阶段，我们优先通过官网提供下载。未来计划上架国内主流应用商店。',
  },
  {
    q: '安装时提示"未知来源"怎么办？',
    a: '这是Android的安全机制。请在手机设置中允许安装未知来源应用，或在安装弹窗中点击"允许"即可。',
  },
];

export default function DownloadPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            下载快览
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            免费下载最新版本，开始你的极速预览体验
          </p>
        </div>

        {/* Download Card */}
        <div className="max-w-lg mx-auto mb-20">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">快览 QuickView</h2>
              <p className="text-primary-100 mt-1">v{SITE_CONFIG.version}</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">文件大小</div>
                  <div className="font-semibold text-gray-900">{SITE_CONFIG.apkSize}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-500">系统要求</div>
                  <div className="font-semibold text-gray-900">{SITE_CONFIG.minAndroid}+</div>
                </div>
              </div>

              <a
                href="/apk/quickview.apk"
                className="block w-full btn-primary text-center text-lg py-4"
                download
              >
                下载 APK
              </a>

              <p className="text-center text-sm text-gray-400 mt-4">
                下载即表示您同意我们的隐私政策和用户协议
              </p>
            </div>
          </div>
        </div>

        {/* Installation Guide */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            安装指南
          </h2>
          <div className="space-y-6">
            {INSTALL_STEPS.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            常见问题
          </h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
