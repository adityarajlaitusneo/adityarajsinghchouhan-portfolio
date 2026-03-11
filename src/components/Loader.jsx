import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-light dark:bg-darker"
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="w-32 h-32 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: '#6366f1',
            borderRightColor: '#8b5cf6',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Inner ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-4 border-transparent"
          style={{
            borderBottomColor: '#06b6d4',
            borderLeftColor: '#10b981',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Center text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="font-display text-2xl font-bold text-gradient">A</span>
        </motion.div>
        
        {/* Glowing dots */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{
              top: '50%',
              left: '50%',
              transformOrigin: '0 0',
            }}
            animate={{
              rotate: [i * 45, i * 45 + 360],
              x: [0, 60 * Math.cos((i * 45 * Math.PI) / 180)],
              y: [0, 60 * Math.sin((i * 45 * Math.PI) / 180)],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>
      
      {/* Loading text */}
      <motion.p
        className="absolute bottom-20 text-gray-500 dark:text-gray-400 font-light tracking-widest"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        INITIALIZING...
      </motion.p>
    </motion.div>
  )
}

export default Loader
