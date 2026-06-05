import Link from 'next/link';
import { FEATURES, SUPPORTED_FORMATS, SITE_CONFIG } from '@/lib/constants';

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    Zap: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    FileText: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    Feather: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </svg>
    ),
    Shield: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    Smartphone: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    Palette: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  };
  return <>{icons[name] || null}</>;
}

function FormatIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    Markdown: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 15V9l2.5 3L12 9v6" />
        <path d="M17 9v6" />
        <path d="M15 12h4" />
      </svg>
    ),
    Html: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l1.5 15L12 21l6.5-2L20 4H4z" />
        <path d="M8 8h8l-.5 5-3.5 1-3.5-1-.2-2" />
        <path d="M7.5 11h5" />
      </svg>
    ),
    Txt: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    Json: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
        <path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
      </svg>
    ),
  };
  return <>{icons[name] || null}</>;
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-800 text-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />
        <div className="container-custom relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              v{SITE_CONFIG.version} 已发布
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              打开即预览
              <br />
              <span className="text-primary-200">无需等待</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-100 leading-relaxed max-w-2xl mx-auto">
              快览是Android平台上最便捷的文件预览工具，支持 Markdown、HTML、TXT、JSON 等多种格式，
              让你在微信、QQ、钉钉、飞书中收到文件后秒速预览。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/download"
                className="bg-white text-primary-600 font-bold py-3.5 px-8 rounded-xl hover:bg-gray-50 transition-all shadow-xl shadow-black/10 text-base"
              >
                下载 APK — 免费
              </Link>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white font-semibold py-3.5 px-8 rounded-xl hover:bg-white/20 transition-all border border-white/20 text-base"
              >
                GitHub ⭐
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-primary-200">
              <span>{SITE_CONFIG.apkSize}</span>
              <span className="w-1 h-1 bg-primary-300 rounded-full" />
              <span>{SITE_CONFIG.minAndroid}+</span>
              <span className="w-1 h-1 bg-primary-300 rounded-full" />
              <span>无需注册</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 0C1440 0 1080 60 720 60C360 60 0 0 0 0L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">为什么选择快览</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              专为即时通讯场景设计，解决文件预览的每一个痛点
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <FeatureIcon name={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">支持多种文件格式</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              覆盖日常工作中最常见的文件类型
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SUPPORTED_FORMATS.map((format, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="text-primary-500 mb-3 flex justify-center">
                  <FormatIcon name={format.icon} />
                </div>
                <div className="font-semibold text-gray-900">{format.name}</div>
                <div className="text-sm text-gray-400 mt-1">{format.ext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">三步开始使用</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              简单到不需要学习
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: '下载安装',
                desc: '从官网下载APK，一键安装到手机',
              },
              {
                step: '02',
                title: '分享文件',
                desc: '在微信、QQ、钉钉、飞书中分享文件到快览',
              },
              {
                step: '03',
                title: '即时预览',
                desc: '文件自动打开，无需等待下载',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            准备好了吗？
          </h2>
          <p className="text-lg text-primary-100 mb-10 max-w-xl mx-auto">
            立即下载快览，体验秒级文件预览
          </p>
          <Link
            href="/download"
            className="inline-block bg-white text-primary-600 font-bold py-3.5 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-xl text-lg"
          >
            免费下载
          </Link>
        </div>
      </section>
    </>
  );
}
