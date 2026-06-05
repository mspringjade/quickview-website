interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 32, className = '' }: LogoProps) {
  const uniqueId = `logo-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* 主渐变 - 深邃的蓝紫色 */}
        <linearGradient id={`${uniqueId}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#667EEA', stopOpacity:1}} />
          <stop offset="50%" style={{stopColor:'#4F46E5', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#4338CA', stopOpacity:1}} />
        </linearGradient>
        
        {/* 光泽渐变 */}
        <linearGradient id={`${uniqueId}-shine`} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" style={{stopColor:'#FFFFFF', stopOpacity:0.4}} />
          <stop offset="100%" style={{stopColor:'#FFFFFF', stopOpacity:0}} />
        </linearGradient>
        
        {/* 闪电渐变 */}
        <linearGradient id={`${uniqueId}-bolt`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#FBBF24', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#F59E0B', stopOpacity:1}} />
        </linearGradient>
        
        {/* 阴影 */}
        <filter id={`${uniqueId}-shadow`}>
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5"/>
          <feOffset dx="0" dy="1" result="offsetblur"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* 背景圆角矩形 - 更大的圆角 */}
      <rect width="48" height="48" rx="12" fill={`url(#${uniqueId}-bg)`}/>
      
      {/* 顶部光泽效果 */}
      <rect width="48" height="24" rx="12" fill={`url(#${uniqueId}-shine)`}/>
      
      {/* Q字母设计 - 简约现代 */}
      <g filter={`url(#${uniqueId}-shadow)`}>
        {/* 外圆 */}
        <circle cx="24" cy="22" r="10" fill="none" stroke="white" strokeWidth="2.5" opacity="0.95"/>
        
        {/* 内部闪电 - 代表Quick */}
        <path 
          d="M 26 17 L 22 22 L 24.5 22 L 21 27 L 25 22 L 22.5 22 Z" 
          fill={`url(#${uniqueId}-bolt)`}
          opacity="0.95"
        />
        
        {/* Q的尾巴 - 优雅的曲线 */}
        <path 
          d="M 30 28 Q 32 30, 34 32" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round"
          opacity="0.95"
        />
      </g>
      
      {/* 底部装饰点 - 增加细节 */}
      <circle cx="14" cy="38" r="1.5" fill="white" opacity="0.3"/>
      <circle cx="34" cy="38" r="1.5" fill="white" opacity="0.3"/>
    </svg>
  );
}
