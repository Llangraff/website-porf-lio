import { motion } from 'framer-motion';
import { ProjectCard } from './projects/ProjectCard';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma seleção dos meus melhores trabalhos, demonstrando minhas habilidades
            e experiência em desenvolvimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}