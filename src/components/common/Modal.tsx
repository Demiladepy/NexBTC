import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  closeOnBackdrop?: boolean;
}

const SIZE_CLASSES: Record<NonNullable<ModalProps['size']>, string> = {
  sm: 'max-w-md',
  md: 'max-w-2xl',
  lg: 'max-w-4xl',
};

const Modal: React.FC<ModalProps> = ({ open, onClose, title, description, children, size = 'md', closeOnBackdrop = true }) => {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <motion.div
            className="fixed inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => closeOnBackdrop && onClose()}
          />

          <motion.div
            className={`relative z-50 w-full px-4 ${SIZE_CLASSES[size]}`}
            initial={{ y: 20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <div className="bg-white dark:bg-[#0F1724] rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {title && <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>}
                    {description && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>}
                  </div>
                  <div>
                    <button aria-label="Close modal" onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300">
                      ✕
                    </button>
                  </div>
                </div>

                <div className="mt-4">{children}</div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
