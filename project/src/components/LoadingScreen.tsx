import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="relative"
      >
        <Code2 className="w-16 h-16 text-blue-500" />
        <motion.div
          className="absolute inset-0 border-2 border-blue-500 rounded-lg"
          initial={{ scale: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </motion.div>
  );
}