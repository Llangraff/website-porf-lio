import { motion } from 'framer-motion';
import { Code2, Database, Globe, Layout, Server, Terminal } from 'lucide-react';
import { GradientText } from './shared/GradientText';

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React","Electron", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "NestJS", "Python", "Java"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Firebase"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "DevOps",
    icon: Terminal,
    items: ["Docker", "AWS", "CI/CD", "Linux", "Kubernetes"],
    color: "from-orange-500 to-red-500"
  }
];

export function Skills() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText>Minhas Habilidades</GradientText>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino e utilizo para criar soluções inovadoras
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-lg inline-block mb-4`}>
                <skill.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4 text-blue-500" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}