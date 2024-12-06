import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Smartphone, Terminal } from 'lucide-react';

const icons = [
  { Icon: Code2, color: 'text-blue-500' },
  { Icon: Globe, color: 'text-green-500' },
  { Icon: Database, color: 'text-purple-500' },
  { Icon: Layout, color: 'text-pink-500' },
  { Icon: Terminal, color: 'text-yellow-500' },
  { Icon: Smartphone, color: 'text-red-500' },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((IconData, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <IconData.Icon className={`w-8 h-8 ${IconData.color} opacity-20`} />
        </motion.div>
      ))}
    </div>
  );
}