import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiMail, FiPhone, FiMapPin, FiLinkedin, 
  FiSend, FiCheck, FiLoader, FiAlertCircle
} from 'react-icons/fi'
import { SiWhatsapp } from 'react-icons/si'
import emailjs from '@emailjs/browser'

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'adiirajsinghchouhan@gmail.com',
    shortValue: 'adiirajsingh...@gmail.com',
    href: 'mailto:adiirajsinghchouhan@gmail.com',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 6263927615',
    shortValue: '+91 6263927615',
    href: 'tel:+916263927615',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: SiWhatsapp,
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    shortValue: 'WhatsApp',
    href: 'https://wa.me/916263927615',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Ujjain, Madhya Pradesh',
    shortValue: 'Ujjain, MP',
    href: 'https://maps.app.goo.gl/hjg6bvr5q98h4Coa6',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/adii1901',
    shortValue: 'adii1901',
    href: 'https://linkedin.com/in/adii1901',
    color: 'from-blue-600 to-blue-400',
  },
]

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const formRef = useRef()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle, sending, sent, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // EmailJS Configuration
    // You need to sign up at https://www.emailjs.com/ (FREE)
    // 1. Create an account
    // 2. Add an email service (Gmail, Outlook, etc.)
    // 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
    // 4. Get your Service ID, Template ID, and Public Key
    
    const serviceId = 'YOUR_SERVICE_ID' // Replace with your EmailJS service ID
    const templateId = 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key

    // Check if EmailJS is configured
    if (serviceId === 'YOUR_SERVICE_ID') {
      // If not configured, open WhatsApp with the message
      const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Subject:* ${formState.subject}%0A*Message:* ${formState.message}`
      window.open(`https://wa.me/916263927615?text=${whatsappMessage}`, '_blank')
      setStatus('sent')
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('sent')
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const handleChange = (e) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Send via WhatsApp directly
  const sendViaWhatsApp = () => {
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill in Name, Email, and Message fields')
      return
    }
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formState.name}%0A*Email:* ${formState.email}%0A*Subject:* ${formState.subject || 'No Subject'}%0A*Message:* ${formState.message}`
    window.open(`https://wa.me/916263927615?text=${whatsappMessage}`, '_blank')
  }

  return (
    <section id="contact" ref={ref} className="py-16 sm:py-20 lg:py-32 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute left-1/4 top-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] sm:blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Get In Touch</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-2 mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Have a project in mind? I'd love to hear from you!
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-3 sm:mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Contact Information</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
              Feel free to reach out through any of these channels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 sm:gap-4 glass rounded-lg sm:rounded-xl p-3 sm:p-4 group hover-lift"
                >
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${info.color} flex-shrink-0`}>
                    <info.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">{info.label}</div>
                    <div className="text-gray-900 dark:text-white font-medium group-hover:text-primary transition-colors text-sm sm:text-base truncate">
                      <span className="hidden sm:inline">{info.value}</span>
                      <span className="sm:hidden">{info.shortValue}</span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 sm:mt-8 glass rounded-lg sm:rounded-xl p-4 sm:p-6"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">Available for opportunities</span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                Open to full-time positions, freelance projects, and collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">Send a Message</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1.5 sm:mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-dark/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1.5 sm:mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-dark/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1.5 sm:mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-dark/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm sm:text-base"
                    placeholder="Project Discussion"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1.5 sm:mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white dark:bg-dark/50 border border-gray-200 dark:border-white/10 rounded-lg sm:rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex-1 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 transition-all text-sm sm:text-base ${
                      status === 'sent'
                        ? 'bg-green-500 text-white'
                        : status === 'error'
                        ? 'bg-red-500 text-white'
                        : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25'
                    }`}
                  >
                    {status === 'idle' && (
                      <>
                        <FiSend className="w-4 h-4" /> Send Message
                      </>
                    )}
                    {status === 'sending' && (
                      <>
                        <FiLoader className="animate-spin w-4 h-4" /> Sending...
                      </>
                    )}
                    {status === 'sent' && (
                      <>
                        <FiCheck className="w-4 h-4" /> Message Sent!
                      </>
                    )}
                    {status === 'error' && (
                      <>
                        <FiAlertCircle className="w-4 h-4" /> Failed, Try Again
                      </>
                    )}
                  </motion.button>

                  {/* WhatsApp Button */}
                  <motion.button
                    type="button"
                    onClick={sendViaWhatsApp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl font-semibold flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white transition-all text-sm sm:text-base"
                  >
                    <SiWhatsapp className="w-4 h-4" /> WhatsApp
                  </motion.button>
                </div>

                <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 text-center">
                  Or click WhatsApp to send message directly
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
