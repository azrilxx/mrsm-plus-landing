import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, CheckCircle, AlertCircle, Send } from 'lucide-react'

const EmailCapture: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateEmail(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    
    try {
      // For now, we'll simulate a successful submission
      // In production, this would hit your email service API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate success
      setStatus('success')
      setMessage('Thank you! You\'ve been added to our early access list. We\'ll be in touch soon!')
      setEmail('')
      
      // You would replace this with actual email service integration:
      // const response = await fetch('/api/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, source: 'landing-page' })
      // })
      
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="early-access" className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="grid-container">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="mb-12">
            <motion.div
              className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-full mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            
            <h2 className="text-display mb-4">
              Ready for <span className="text-gradient">National Deployment</span>
            </h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              Join the exclusive early access list to be among the first educators, students, 
              and parents to experience Malaysia's educational revolution.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Priority Access', desc: 'Be first to experience MRSM+ features' },
              { title: 'Exclusive Updates', desc: 'Get behind-the-scenes development insights' },
              { title: 'Special Pricing', desc: 'Early adopter discounts and benefits' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="card bg-white/80 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-small text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Email Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="input text-center sm:text-left"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <motion.button
                type="submit"
                className="btn btn-primary flex items-center justify-center min-w-[120px]"
                disabled={isSubmitting || !email}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Joining...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Join Waitlist
                  </>
                )}
              </motion.button>
            </div>

            {/* Status Messages */}
            {status !== 'idle' && (
              <motion.div
                className={`mt-4 p-4 rounded-xl flex items-center ${
                  status === 'success' 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {status === 'success' ? (
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                )}
                <span className="text-sm">{message}</span>
              </motion.div>
            )}

            <p className="text-xs text-gray-500 mt-4">
              By joining our waitlist, you agree to receive updates about MRSM+. 
              No spam, unsubscribe anytime.
            </p>
          </motion.form>

          {/* Launch Timeline */}
          <motion.div
            className="mt-16 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-h3 font-semibold text-gray-900 mb-4">Launch Timeline</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-primary-600 font-bold">Month 1-2</div>
                <div className="text-gray-600">Platform finalization & pilot testing</div>
              </div>
              <div className="text-center">
                <div className="text-accent-600 font-bold">Month 3-4</div>
                <div className="text-gray-600">Teacher training & system integration</div>
              </div>
              <div className="text-center">
                <div className="text-blue-600 font-bold">Month 5-6</div>
                <div className="text-gray-600">Full national rollout & optimization</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EmailCapture