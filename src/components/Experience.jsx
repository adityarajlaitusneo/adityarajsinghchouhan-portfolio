import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi'

const experiences = [
  {
    company: 'Laitusneo Technologies Pvt Ltd',
    role: 'Software Engineer',
    location: 'Etawah, Uttar Pradesh',
    period: 'Sep 2025 - Present',
    current: true,
    description: 'Leading frontend development for enterprise-scale applications using Angular 18 & React.js.',
    highlights: [
      'Architecting reusable components and state management (Redux), optimizing performance by 30%',
      'Developing Cash Management Services (CMS) using Angular 18 with modular components',
      'Building School Management Platform in React.js with role-based access control',
      'Creating Payment Gateway integrations with seamless API connectivity',
      'Mentoring junior developers and enforcing code quality via Git and AWS',
    ],
    tech: ['React.js', 'Angular 18', 'Redux', '.NET', 'SQL Server', 'AWS'],
  },
  {
    company: 'PayG Digitals Private Limited',
    role: 'Software Engineer',
    location: 'Hyderabad, Telangana',
    period: 'May 2023 - Aug 2025',
    current: false,
    description: 'Delivered 500+ work items across fintech projects using Angular, .NET, and SQL Server.',
    highlights: [
      'Developed REST APIs and backend modules in .NET; optimized database performance',
      'Designed full-stack solutions integrating Angular frontends with .NET backends',
      'Enhanced PayG PIMS, MMS, VPOS, Compliances and Risk modules',
      'Built Transaction & Settlement System handling millions of daily transactions',
      'Implemented Chargeback Management System reducing dispute resolution by 40%',
      'Created Customer Portal with improved UI/UX and seamless API integration',
    ],
    tech: ['Angular 14/18', '.NET 6/8', 'SQL Server', 'Azure DevOps', 'Postman'],
  },
]

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-20 lg:py-32 relative">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Career Journey</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-4 sm:gap-8 mb-8 sm:mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 sm:left-0 md:left-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-primary rounded-full transform -translate-x-1/2 border-2 sm:border-4 border-light dark:border-dark z-10 top-2">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'} pl-10 sm:pl-12 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover-lift relative overflow-hidden group"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Header */}
                  <div className="mb-3 sm:mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <FiBriefcase className="text-primary w-4 h-4" />
                      <span className="text-primary font-medium text-sm sm:text-base">{exp.role}</span>
                      {exp.current && (
                        <span className="px-2 py-0.5 bg-green-500/20 text-green-600 dark:text-green-400 text-[10px] sm:text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3 sm:mb-4">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-accent w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="text-secondary w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {exp.highlights.slice(0, 4).map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400"
                      >
                        <FiChevronRight className="text-primary mt-0.5 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="line-clamp-2 sm:line-clamp-none">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for timeline alignment */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
