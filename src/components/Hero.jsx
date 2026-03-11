import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiArrowDown } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com/in/adii1901', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/Adii1901', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:adiirajsinghchouhan@gmail.com', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-8"
    >
      {/* Gradient orbs - smaller on mobile */}
      <div className="absolute top-1/4 -left-16 sm:-left-32 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 dark:bg-primary/30 rounded-full blur-[80px] sm:blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-16 sm:-right-32 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/20 dark:bg-secondary/30 rounded-full blur-[80px] sm:blur-[128px] animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 dark:bg-accent/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-3 sm:mb-4">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-full text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <span className="inline-block animate-bounce mr-1.5 sm:mr-2">👋</span>
            Welcome to my digital space
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-3 sm:mb-4 leading-tight"
        >
          <span className="text-gray-900 dark:text-white">I'm </span>
          <span className="text-gradient">Aditya Raj</span>
          <br />
          <span className="text-gray-900 dark:text-white">Singh Chouhan</span>
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
            <span className="text-primary font-medium">Software Engineer</span>
            <span className="hidden xs:inline mx-2 sm:mx-3 text-gray-400 dark:text-gray-600">|</span>
            <br className="xs:hidden" />
            <span className="text-sm sm:text-xl md:text-2xl lg:text-3xl">Full Stack Engineer</span>
          </h2>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col xs:flex-row items-center justify-center gap-1 xs:gap-2 text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <div className="flex items-center gap-1.5">
            <FiMapPin className="text-accent" size={16} />
            <span>Etawah, Uttar Pradesh, India</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="hidden xs:inline text-gray-300 dark:text-gray-600">•</span>
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-500 dark:text-green-400 text-xs sm:text-sm">Open to opportunities</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 leading-relaxed px-2"
        >
          Crafting high-performance web applications with{' '}
          <span className="text-primary font-medium">2.5+ years</span> of expertise in{' '}
          <span className="text-secondary font-medium">Angular</span>,{' '}
          <span className="text-accent font-medium">React</span>, and{' '}
          <span className="text-green-500 font-medium">.NET</span>. 
          <br className="hidden sm:block" />
          Gold Medalist 🏅 | National Level Powerlifter 🏋️
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-shadow text-sm sm:text-base"
          >
            Let's Connect
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full xs:w-auto px-6 sm:px-8 py-3 sm:py-4 glass rounded-xl font-semibold text-gray-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors neon-border text-sm sm:text-base"
          >
            View My Work
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3 sm:gap-4"
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 sm:p-3 glass rounded-xl text-gray-500 dark:text-gray-400 hover:text-primary hover:neon-border transition-all"
              aria-label={social.label}
            >
              <social.icon size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator - hidden on very small screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-4 sm:bottom-10 left-1/2 -translate-x-1/2 hidden xs:block"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-primary transition-colors"
          >
            <span className="text-xs mb-1 sm:mb-2">Scroll Down</span>
            <FiArrowDown size={16} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating elements - hidden on mobile */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-32 right-10 lg:right-20 hidden md:block"
      >
        <div className="w-14 lg:w-20 h-14 lg:h-20 glass rounded-2xl flex items-center justify-center text-2xl lg:text-4xl">
          ⚛️
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-10 lg:left-20 hidden md:block"
      >
        <div className="w-12 lg:w-16 h-12 lg:h-16 glass rounded-2xl flex items-center justify-center text-xl lg:text-3xl">
          🅰️
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute top-1/2 right-10 lg:right-32 hidden lg:block"
      >
        <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-2xl">
          💻
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
