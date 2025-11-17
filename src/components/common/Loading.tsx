import React from 'react';

interface LoadingProps {
  size?: number;
  label?: string;
  center?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ size = 36, label, center = false }) => {
  const spinner = (
    <svg className="animate-spin" width={size} height={size} viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.2" fill="none" />
      <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );

  if (center) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        {spinner}
        {label && <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2">
      {spinner}
      {label && <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>}
    </div>
  );
};

export default Loading;
