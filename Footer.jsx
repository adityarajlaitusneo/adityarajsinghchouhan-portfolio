import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import LogoDark from '../assets/Logo dark.png'
import LogoLight from '../assets/Logo light.png'

const Footer = () => {
  const { isDark } = useTheme()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: FiLinkedin, href: 'https://linkedin.com/in/adii1901', label: 'LinkedIn' },
    { icon: FiGithub, href: 'https://github.com/codewithadityaraj', label: 'GitHub' },
    { icon: FiMail, href: 'mailto:adiirajsinghchouhan@gmail.com', label: 'Email' },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="relative pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 overflow-hidden safe-bottom">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-dark via-transparent to-transparent" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <motion.a
              href="#home"
              className="inline-block mb-3 sm:mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={isDark ? LogoDark : LogoLight} 
                alt="Aditya Logo" 
                className="h-8 sm:h-10 w-auto mx-auto sm:mx-0"
              />
            </motion.a>
            <p className="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              Software Engineer crafting exceptional digital experiences.
            </p>
            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 sm:p-3 glass rounded-lg sm:rounded-xl text-gray-500 dark:text-gray-400 hover:text-primary hover:neon-border transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 sm:group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="text-gray-900 dark:text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Get In Touch</h4>
            <ul className="space-y-2 sm:space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FiMail className="text-primary w-4 h-4 flex-shrink-0" />
                <a href="mailto:adiirajsinghchouhan@gmail.com" className="hover:text-primary transition-colors text-sm sm:text-base truncate">
                  adiirajsinghchouhan@gmail.com
                </a>
              </li>
              <li className="text-sm sm:text-base">
                Ujjain, Madhya Pradesh, India
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm">Open to opportunities</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent mb-6 sm:mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 text-center sm:text-left">
            © {new Date().getFullYear()} Aditya Raj Singh Chouhan. Built with
            <FiHeart className="text-red-500 animate-pulse w-3 h-3 sm:w-4 sm:h-4 mx-1" />
            <span className="hidden xs:inline">using React & Tailwind</span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 sm:p-3 glass rounded-lg sm:rounded-xl text-gray-500 dark:text-gray-400 hover:text-primary hover:neon-border transition-all group"
            aria-label="Back to top"
          >
            <FiArrowUp className="group-hover:-translate-y-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </div>
      </div>

      {/* Large background text - hidden on mobile */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none hidden lg:block">
        <span className="font-display text-[15vw] font-bold text-gray-200/30 dark:text-white/[0.02] whitespace-nowrap">
          ADITYA
        </span>
      </div>
    </footer>
  )
}

export default Footer
