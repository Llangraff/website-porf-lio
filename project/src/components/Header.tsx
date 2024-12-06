import { motion } from 'framer-motion';
import { Code2, Mail, Github, Linkedin } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/10 backdrop-blur-sm z-40">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Code2 className="w-8 h-8" />
          <span className="text-xl font-bold">Lucas</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <a href="mailto:your.email@example.com" className="hover:text-blue-500 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </motion.div>
      </nav>
    </header>
  );
}