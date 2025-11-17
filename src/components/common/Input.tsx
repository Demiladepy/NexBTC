import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
  helper?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, error, helper, className = '', ...rest }) => {
  const hasError = Boolean(error);
  return (
    <label className="block text-sm">
      {label && <div className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">{label}</div>}
      <input
        {...rest}
        className={`w-full px-3 py-2 rounded-md border ${hasError ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
      />
      {helper && !hasError && <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{helper}</div>}
      {hasError && <div role="alert" className="mt-1 text-xs text-red-500">{typeof error === 'string' ? error : 'Invalid input'}</div>}
    </label>
  );
};

export default Input;
