'use client';
import { motion } from 'framer-motion';

export function AnimatedPage({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <motion.div
      key={typeof window !== 'undefined' ? window.location.pathname : 'page'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
