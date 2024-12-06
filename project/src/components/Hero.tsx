import { motion, useScroll, useTransform } from 'framer-motion';
import { GithubIcon, LinkedinIcon, MailIcon, Code2Icon } from 'lucide-react';
import { GradientText } from './shared/GradientText';
import { Badge } from './shared/Badge';
import { FloatingIcons } from './effects/FloatingIcons';
import { socialLinks } from '../data/socialLinks';
import { personalInfo } from '../data/personalInfo';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <FloatingIcons />
      
      <motion.div style={{ y, opacity }} className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10"
      >
        <motion.div 
          variants={itemVariants} 
          className="mb-6 inline-block"
          whileHover={{ scale: 1.05 }}
        >
          <Badge variant="secondary" className="text-lg px-6 py-2">
            <Code2Icon className="inline-block w-5 h-5 mr-2" />
            {personalInfo.title}
          </Badge>
        </motion.div>

        <motion.h1 
          variants={itemVariants} 
          className="text-6xl md:text-8xl font-bold mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <GradientText>{personalInfo.name}</GradientText>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.description}
        </motion.p>

        <motion.div 
          variants={itemVariants} 
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { Icon: GithubIcon, href: socialLinks.github, label: "GitHub" },
            { Icon: LinkedinIcon, href: socialLinks.linkedin, label: "LinkedIn" },
            { Icon: MailIcon, href: `mailto:${socialLinks.email}`, label: "Email" }
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="p-4 bg-white rounded-full shadow-lg group-hover:shadow-xl transition-all">
                <Icon className="w-8 h-8 text-blue-500" />
              </div>
              <span className="text-sm text-gray-600">{label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conheça meu trabalho
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-8 h-8 text-blue-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}