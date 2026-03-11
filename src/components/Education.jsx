import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCalendar, FiMapPin, FiStar } from 'react-icons/fi'

const education = [
  {
    degree: 'Masters in Information Technology',
    institution: 'Vikram University',
    location: 'Ujjain, MP',
    period: 'Aug 2022 - Aug 2024',
    cgpa: '8.79/10',
    achievement: 'Gold Medalist 🏅',
    highlights: [
      'University Gold Medalist - Highest CGPA',
      'Specialized in Software Engineering',
      'Research in Web Technologies & Cloud',
    ],
    color: 'from-yellow-500 to-amber-500',
  },
  {
    degree: 'Bachelors in Computer Science',
    institution: 'Vikram University',
    location: 'Ujjain, MP',
    period: 'May 2019 - May 2022',
    cgpa: '8.25/10',
    achievement: 'College Topper 🎓',
    highlights: [
      'Topped college with highest performance',
      'Strong DSA foundation',
      'Active in coding competitions',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
]

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="education" ref={ref} className="py-16 sm:py-20 lg:py-32 relative">
      <div className="absolute right-0 top-0 w-48 sm:w-96 h-48 sm:h-96 bg-yellow-500/5 dark:bg-yellow-500/10 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Academic Journey</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-3 sm:mb-4 text-gray-900 dark:text-white">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="glass rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-8 hover-lift h-full relative overflow-hidden">
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color}`} />
                
                {/* Achievement badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.2, type: 'spring' }}
                  className="absolute -top-2 sm:-top-3 right-2 sm:right-4 z-10"
                >
                  <div className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r ${edu.color} text-white font-bold text-[10px] sm:text-sm shadow-lg`}>
                    {edu.achievement}
                  </div>
                </motion.div>

                {/* Header */}
                <div className="mb-4 sm:mb-6 mt-2 sm:mt-0">
                  <div className="flex items-center gap-2 mb-2">
                    <FiAward className="text-lg sm:text-2xl" style={{ color: index === 0 ? '#eab308' : '#3b82f6' }} />
                    <span className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm font-medium">{edu.institution}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">{edu.degree}</h3>
                  
                  {/* Meta info */}
                  <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="text-secondary w-3 h-3 sm:w-4 sm:h-4" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* CGPA */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">CGPA</span>
                    <span className="text-xl sm:text-2xl font-bold text-gradient">{edu.cgpa}</span>
                  </div>
                  <div className="h-2 sm:h-3 bg-gray-200 dark:bg-dark rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${parseFloat(edu.cgpa) * 10}%` } : {}}
                      transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                      className={`h-full rounded-full bg-gradient-to-r ${edu.color}`}
                    />
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 sm:space-y-3">
                  {edu.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <FiStar className="text-yellow-500 mt-0.5 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 text-center"
        >
          <div className="inline-block glass rounded-xl sm:rounded-2xl px-4 sm:px-8 py-3 sm:py-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              <span className="text-xl sm:text-2xl mr-2">🏋️</span>
              Also a <span className="text-orange-500 font-semibold">National Level Powerlifter!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
