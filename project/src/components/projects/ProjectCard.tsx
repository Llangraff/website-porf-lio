import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '../shared/Badge';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    demo?: string;
    featured?: boolean;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${project.featured ? 'h-72' : 'h-48'}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 mix-blend-multiply opacity-0 group-hover:opacity-70 transition-opacity duration-300"
          whileHover={{ scale: 1.1 }}
        />
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white rounded-full hover:scale-110 transition-transform shadow-lg"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6 text-blue-500" />
          </motion.a>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white rounded-full hover:scale-110 transition-transform shadow-lg"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ExternalLink className="w-6 h-6 text-blue-500" />
            </motion.a>
          )}
        </div>
      </div>

      <div className="p-8">
        {project.featured && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <Badge variant="secondary" className="text-sm px-4 py-1">
              Projeto em Destaque ✨
            </Badge>
          </motion.div>
        )}
        <motion.h3
          className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          whileHover={{ scale: 1.02 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.div
              key={tagIndex}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge>{tag}</Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}