import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiLayers, FiAward, FiTarget, FiZap } from 'react-icons/fi'
import ProfilePhoto from '../assets/Media (1).jpg'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const highlights = [
    { icon: FiCode, label: '2.5+ Years', desc: 'Experience' },
    { icon: FiLayers, label: '750+', desc: 'Work Items' },
    { icon: FiDatabase, label: '25+', desc: 'Projects' },
    { icon: FiAward, label: 'Gold', desc: 'Medalist' },
  ]

  const traits = [
    { icon: FiTarget, title: 'Problem Solver', desc: 'Breaking down complex challenges into elegant solutions' },
    { icon: FiZap, title: 'Performance Focused', desc: 'Optimizing applications for speed and scalability' },
    { icon: FiLayers, title: 'Full Stack Capable', desc: 'From pixel-perfect UIs to robust backend systems' },
  ]

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">About Me</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Turning <span className="text-gradient">Vision</span> Into Reality
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-1"
          >
            <div className="relative z-10">
              {/* Profile card */}
              <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-accent/20 rounded-full blur-3xl" />
                
                {/* Profile Photo */}
                <div className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1 overflow-hidden">
                  <img 
                    src={ProfilePhoto} 
                    alt="Aditya Raj Singh Chouhan" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2 text-gray-900 dark:text-white">Aditya Raj Singh Chouhan</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-4 sm:mb-6 text-sm sm:text-base">Software Engineer</p>
                
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="glass rounded-lg sm:rounded-xl p-2.5 sm:p-4 text-center hover-lift"
                    >
                      <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary mx-auto mb-1 sm:mb-2" />
                      <div className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">{item.label}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">{item.desc}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative elements - hidden on mobile */}
            <div className="absolute -top-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 border-2 border-primary/30 rounded-2xl sm:rounded-3xl -z-10 hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-20 sm:w-32 h-20 sm:h-32 border-2 border-accent/30 rounded-2xl sm:rounded-3xl -z-10 hidden sm:block" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 lg:order-2"
          >
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Hey there! I'm a passionate <span className="text-primary font-medium">Software Engineer</span> from 
                <span className="text-accent"> Ujjain, Madhya Pradesh</span>, currently based in Etawah, Uttar Pradesh. 
                With over 2.5 years of hands-on experience, I specialize in building scalable, high-performance 
                web applications.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                My journey in tech started in May 2023, and since then, I've worked on 
                cutting-edge <span className="text-secondary font-medium">fintech solutions</span> and enterprise 
                applications. From payment gateways to compliance systems, I've delivered 750+ work items 
                ensuring reliability and exceptional user experiences.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                Beyond coding, I'm a <span className="text-yellow-500 font-medium">Gold Medalist</span> from 
                Vikram University and a former <span className="text-orange-500 font-medium">National Level Powerlifter</span>. 
                I believe in pushing limits, whether it's in the gym or in code!
              </p>

              {/* Traits */}
              <div className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                {traits.map((trait, index) => (
                  <motion.div
                    key={trait.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4 glass rounded-lg sm:rounded-xl p-3 sm:p-4 hover-lift"
                  >
                    <div className="p-1.5 sm:p-2 bg-primary/20 rounded-lg flex-shrink-0">
                      <trait.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{trait.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{trait.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
