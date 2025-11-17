import React from 'react';

type AlertVariant = 'info' | 'success' | 'error' | 'warning';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

const VARIANT_BG: Record<AlertVariant, string> = {
  info: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200',
  success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200',
  error: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200',
  warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200',
};

const Alert: React.FC<AlertProps> = ({ variant = 'info', title, children, onClose, ...rest }) => {
  return (
    <div role="status" {...rest} className={`rounded-lg p-3 border ${VARIANT_BG[variant]} flex items-start justify-between gap-3`}>
      <div>
        {title && <div className="font-semibold">{title}</div>}
        {children && <div className="text-sm mt-1">{children}</div>}
      </div>
      {onClose && (
        <div>
          <button onClick={onClose} aria-label="Close alert" className="text-sm opacity-70 hover:opacity-100">✕</button>
        </div>
      )}
    </div>
  );
};

export default Alert;
