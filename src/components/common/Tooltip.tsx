import React, { useState, useRef } from 'react';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top', delay = 100, className = '' }) => {
  const [visible, setVisible] = useState(false);
  const timer = useRef<number | null>(null);

  function show() {
    timer.current = window.setTimeout(() => setVisible(true), delay);
  }
  function hide() {
    if (timer.current) window.clearTimeout(timer.current);
    setVisible(false);
  }

  const posClass =
    position === 'top'
      ? 'bottom-full mb-2 left-1/2 -translate-x-1/2'
      : position === 'bottom'
      ? 'top-full mt-2 left-1/2 -translate-x-1/2'
      : position === 'left'
      ? 'right-full mr-2 top-1/2 -translate-y-1/2'
      : 'left-full ml-2 top-1/2 -translate-y-1/2';

  return (
    <span className="relative inline-block" onMouseEnter={show} onFocus={show} onMouseLeave={hide} onBlur={hide}>
      {children}
      {visible && (
        <div className={`absolute z-50 ${posClass}`}>
          <div className={`px-3 py-1.5 rounded-md text-sm bg-gray-900 text-white shadow-sm ${className}`} role="tooltip">
            {content}
          </div>
        </div>
      )}
    </span>
  );
};

export default Tooltip;
