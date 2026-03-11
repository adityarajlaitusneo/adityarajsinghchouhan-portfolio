import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCalendar } from 'react-icons/fi'

const certifications = [
  {
    name: 'Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'Oct 2024',
    icon: '☁️',
    color: 'from-blue-500 to-cyan-500',
    credential: 'AZ-900',
  },
  {
    name: 'Python Bootcamp',
    issuer: 'Udemy',
    date: 'Aug 2024',
    icon: '🐍',
    color: 'from-green-500 to-emerald-500',
    credential: 'UC-PYTHON',
  },
  {
    name: 'ITIL 4 Foundation',
    issuer: 'Udemy',
    date: 'Jun 2023',
    icon: '📋',
    color: 'from-purple-500 to-pink-500',
    credential: 'ITIL4',
  },
  {
    name: 'PCI DSS Awareness',
    issuer: 'Udemy',
    date: 'Jun 2023',
    icon: '🔒',
    color: 'from-red-500 to-orange-500',
    credential: 'PCI-DSS',
  },
]

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-32 relative">
      <div className="absolute left-0 bottom-0 w-48 sm:w-96 h-48 sm:h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Credentials</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-3 sm:mb-4 text-gray-900 dark:text-white">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 h-full relative overflow-hidden">
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                {/* Icon */}
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">{cert.icon}</div>
                
                {/* Content */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 group-hover:text-gradient transition-all line-clamp-2">
                  {cert.name}
                </h3>
                
                <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-3">
                  <FiAward className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">{cert.issuer}</span>
                </div>
                
                <div className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
                  <FiCalendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
                
                {/* Credential ID */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-white/10">
                  <span className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">ID: </span>
                  <span className="text-[10px] sm:text-xs text-primary font-mono">{cert.credential}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-12 grid grid-cols-3 gap-3 sm:gap-6"
        >
          {[
            { value: '10+', desc: 'Courses', label: 'Completed' },
            { value: '5+', desc: 'Technologies', label: 'Mastered' },
            { value: '100+', desc: 'Challenges', label: 'Solved' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="glass rounded-lg sm:rounded-xl p-3 sm:p-6 text-center hover-lift"
            >
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gradient mb-0.5 sm:mb-1">{stat.value}</div>
              <div className="text-gray-900 dark:text-white font-medium text-xs sm:text-sm lg:text-base">{stat.desc}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
