import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiFolder, FiX, FiCreditCard, FiRefreshCw, FiDollarSign, FiBook, FiShield, FiUser, FiShoppingBag, FiFileText, FiUsers } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Payment Gateway',
    category: 'Fintech',
    icon: FiCreditCard,
    description: 'Robust payment gateway with real-time transaction processing and fraud detection.',
    longDescription: 'Built a comprehensive payment gateway solution processing thousands of transactions daily. Implemented secure payment flows, real-time fraud detection, and merchant dashboard.',
    tech: ['Angular 18', '.NET 8', 'SQL Server', 'Azure'],
    features: ['Multi-currency', 'Real-time alerts', 'Fraud detection', 'PCI Compliant'],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    pattern: 'circles',
  },
  {
    id: 2,
    title: 'Transaction System',
    category: 'Fintech',
    icon: FiRefreshCw,
    description: 'Enterprise transaction management processing millions of daily transactions.',
    longDescription: 'High-performance transaction processing system with automated settlement cycles, real-time reconciliation, and comprehensive reporting.',
    tech: ['Angular 14', '.NET 6', 'SQL Server', 'Azure DevOps'],
    features: ['Batch processing', 'Auto reconciliation', 'Real-time reports', 'Audit trails'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    pattern: 'waves',
  },
  {
    id: 3,
    title: 'Cash Management',
    category: 'Enterprise',
    icon: FiDollarSign,
    description: 'Cash flow tracking and liquidity management across multiple branches.',
    longDescription: 'Modular cash management system with cash forecasting, liquidity management, and branch-wise tracking with real-time dashboards.',
    tech: ['Angular 18', 'React', '.NET', 'AWS'],
    features: ['Cash forecasting', 'Branch management', 'Real-time tracking', 'Analytics'],
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    pattern: 'grid',
  },
  {
    id: 4,
    title: 'School Management',
    category: 'Education',
    icon: FiBook,
    description: 'Full-featured school management with role-based access control.',
    longDescription: 'Comprehensive school management platform with student enrollment, attendance tracking, grade management, and parent communication portal.',
    tech: ['React.js', 'Redux', '.NET', 'Tailwind CSS'],
    features: ['Role-based access', 'Attendance', 'Grade management', 'Parent portal'],
    gradient: 'from-amber-500 via-orange-500 to-red-500',
    pattern: 'dots',
  },
  {
    id: 5,
    title: 'Risk & Compliance',
    category: 'Fintech',
    icon: FiShield,
    description: 'Automated risk assessment and compliance management system.',
    longDescription: 'Risk assessment modules with automated compliance checks, regulatory reporting, and risk scoring algorithms.',
    tech: ['Angular 14', '.NET 6', 'SQL Server'],
    features: ['Risk scoring', 'Compliance checks', 'Regulatory reports', 'Alerts'],
    gradient: 'from-rose-500 via-pink-500 to-red-500',
    pattern: 'hexagon',
  },
  {
    id: 6,
    title: 'Customer Portal',
    category: 'Fintech',
    icon: FiUser,
    description: 'Self-service portal with account management and support system.',
    longDescription: 'Customer-facing portal with account management, transaction history, document uploads, and integrated support system.',
    tech: ['Angular 18', '.NET 8', 'SQL Server', 'Azure'],
    features: ['Account management', 'Transaction history', 'KYC verification', 'Support'],
    gradient: 'from-indigo-500 via-violet-500 to-purple-500',
    pattern: 'triangles',
  },
  {
    id: 7,
    title: 'VPOS System',
    category: 'Fintech',
    icon: FiShoppingBag,
    description: 'Virtual POS enabling multi-channel payment acceptance.',
    longDescription: 'Virtual point of sale system allowing merchants to accept payments through cards, UPI, and wallets with QR code generation.',
    tech: ['Angular 18', '.NET 8', 'REST APIs'],
    features: ['Multi-channel', 'QR codes', 'Payment links', 'Analytics'],
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    pattern: 'squares',
  },
  {
    id: 8,
    title: 'Chargeback System',
    category: 'Fintech',
    icon: FiFileText,
    description: 'Automated chargeback handling reducing resolution time by 40%.',
    longDescription: 'Comprehensive chargeback management with automated case routing, document management, and deadline tracking.',
    tech: ['Angular 14', '.NET 6', 'Azure DevOps'],
    features: ['Case management', 'Auto routing', 'Document handling', 'Tracking'],
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    pattern: 'lines',
  },
  {
    id: 9,
    title: 'Merchant System',
    category: 'Fintech',
    icon: FiUsers,
    description: 'Complete merchant onboarding and management platform.',
    longDescription: 'Merchant management system handling complete lifecycle from onboarding to settlement with KYC verification.',
    tech: ['Angular 18', '.NET 8', 'SQL Server'],
    features: ['Onboarding', 'KYC verification', 'Agreement mgmt', 'Analytics'],
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    pattern: 'mesh',
  },
]

// Animated pattern components
const PatternCircles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-white/20"
        style={{
          width: `${(i + 1) * 60}px`,
          height: `${(i + 1) * 60}px`,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
      />
    ))}
  </div>
)

const PatternWaves = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-full h-8 border-t border-white/20"
        style={{ top: `${20 + i * 25}%` }}
        animate={{ x: ['-10%', '10%', '-10%'] }}
        transition={{ duration: 4, delay: i * 0.3, repeat: Infinity }}
      />
    ))}
  </div>
)

const PatternGrid = () => (
  <div className="absolute inset-0 overflow-hidden opacity-30">
    <div className="absolute inset-0" style={{
      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
      backgroundSize: '20px 20px'
    }} />
    <motion.div
      className="absolute w-20 h-20 bg-white/10 rounded"
      animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
  </div>
)

const PatternDots = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2 + Math.random() * 2, delay: Math.random() * 2, repeat: Infinity }}
      />
    ))}
  </div>
)

const PatternHexagon = () => (
  <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
    <motion.div
      className="w-32 h-32 border-2 border-white/20"
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    />
    <motion.div
      className="absolute w-20 h-20 border border-white/30"
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    />
  </div>
)

const PatternTriangles = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-white/20"
        style={{
          left: `${15 + (i % 3) * 30}%`,
          top: `${20 + Math.floor(i / 3) * 40}%`,
        }}
        animate={{ y: [0, -10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
      />
    ))}
  </div>
)

const PatternSquares = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-12 h-12 border border-white/20 rounded-lg"
        style={{
          left: `${20 + (i % 2) * 50}%`,
          top: `${20 + Math.floor(i / 2) * 45}%`,
        }}
        animate={{ rotate: [0, 90, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
      />
    ))}
  </div>
)

const PatternLines = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
        style={{
          width: '120%',
          left: '-10%',
          top: `${10 + i * 12}%`,
          transform: `rotate(${-15 + i * 4}deg)`,
        }}
        animate={{ x: ['-20%', '20%', '-20%'] }}
        transition={{ duration: 6, delay: i * 0.2, repeat: Infinity }}
      />
    ))}
  </div>
)

const PatternMesh = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute inset-0"
      style={{
        background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 50%),
                     radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1) 0%, transparent 50%),
                     radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)`
      }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 5, repeat: Infinity }}
    />
  </div>
)

const patterns = {
  circles: PatternCircles,
  waves: PatternWaves,
  grid: PatternGrid,
  dots: PatternDots,
  hexagon: PatternHexagon,
  triangles: PatternTriangles,
  squares: PatternSquares,
  lines: PatternLines,
  mesh: PatternMesh,
}

const categories = ['All', 'Fintech', 'Enterprise', 'Education']

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Portfolio</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium transition-all text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'glass text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Pattern = patterns[project.pattern]
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="glass rounded-xl sm:rounded-2xl overflow-hidden hover-lift h-full">
                    {/* Animated Gradient Header */}
                    <div className={`h-36 sm:h-44 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                      {/* Animated Pattern */}
                      <Pattern />
                      
                      {/* Floating Icon */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                          <project.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                      </motion.div>
                      
                      {/* Category badge */}
                      <span className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-0.5 sm:py-1 bg-black/20 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-medium text-white">
                        {project.category}
                      </span>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-white font-semibold text-sm sm:text-base px-4 py-2 border-2 border-white rounded-full">
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-[10px] sm:text-xs bg-primary/10 text-primary rounded font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-0.5 text-[10px] sm:text-xs bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-dark rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-hidden shadow-2xl"
              >
                {/* Modal Header */}
                <div className={`h-40 sm:h-52 relative overflow-hidden bg-gradient-to-br ${selectedProject.gradient}`}>
                  {(() => {
                    const Pattern = patterns[selectedProject.pattern]
                    return <Pattern />
                  })()}
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-5 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <selectedProject.icon className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 bg-black/20 backdrop-blur-md rounded-full hover:bg-black/30 transition-colors text-white"
                  >
                    <FiX size={20} />
                  </button>
                  
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                    <span className="px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs font-medium mb-2 inline-block text-white">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-5 sm:p-6 lg:p-8 overflow-y-auto max-h-[45vh]">
                  <p className="text-gray-600 dark:text-gray-300 mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-5 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                          <FiFolder className="text-primary w-4 h-4 flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
