import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiCode, FiDatabase, FiTool, FiCloud, FiLayout, FiServer 
} from 'react-icons/fi'
import {
  SiReact, SiAngular, SiTypescript, SiDotnet, SiMicrosoftsqlserver,
  SiMicrosoftazure, SiAmazonaws, SiGit, SiTailwindcss, SiRedux,
  SiPython, SiFigma, SiJavascript, SiHtml5, SiCss3, SiPostman
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    icon: FiLayout,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Backend',
    icon: FiServer,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: '.NET Core', level: 85 },
      { name: 'C#', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'Python', level: 75 },
    ],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'SQL Server', level: 88 },
      { name: 'MySQL', level: 80 },
      { name: 'Query Optimization', level: 85 },
    ],
  },
  {
    title: 'DevOps',
    icon: FiCloud,
    color: 'from-orange-500 to-yellow-500',
    skills: [
      { name: 'Azure DevOps', level: 85 },
      { name: 'AWS', level: 75 },
      { name: 'Git', level: 92 },
      { name: 'CI/CD', level: 80 },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    color: 'from-red-500 to-rose-500',
    skills: [
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 90 },
      { name: 'Figma', level: 75 },
    ],
  },
  {
    title: 'Core',
    icon: FiCode,
    color: 'from-indigo-500 to-violet-500',
    skills: [
      { name: 'Agile/Scrum', level: 90 },
      { name: 'UI/UX Design', level: 80 },
      { name: 'API Integration', level: 92 },
    ],
  },
]

// Tech stack with official icons
const techStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: '.NET', icon: SiDotnet, color: '#512BD4' },
  { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: '#CC2927' },
  { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
  { name: 'AWS', icon: SiAmazonaws, color: '#FF9900' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
]

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute left-0 bottom-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Technical Arsenal</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-[10px] sm:text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-200 dark:bg-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Marquee with Official Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 sm:mt-16 overflow-hidden"
        >
          <div className="flex animate-marquee space-x-3 sm:space-x-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 glass rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap text-sm sm:text-base group hover:scale-105 transition-transform"
              >
                <tech.icon 
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-colors" 
                  style={{ color: tech.color }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {techStack.map((tech) => (
              <div
                key={`${tech.name}-2`}
                className="flex-shrink-0 flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 glass rounded-lg sm:rounded-xl text-gray-700 dark:text-gray-300 font-medium whitespace-nowrap text-sm sm:text-base group hover:scale-105 transition-transform"
              >
                <tech.icon 
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-colors" 
                  style={{ color: tech.color }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
