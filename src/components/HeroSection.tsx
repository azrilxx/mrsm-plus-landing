import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, Target, ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const stats = [
    { value: '65%', label: 'Learning Efficiency Improvement' },
    { value: '92%', label: 'Career Pathway Discovery' },
    { value: '55', label: 'MRSM Campuses Ready' },
    { value: 'RM 50M', label: 'Additional Lifetime Earnings Per Class' }
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-pattern-subtle pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="grid-container relative z-10">
        <motion.div
          className="grid-16 items-center min-h-[80vh]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <div className="col-span-full lg:col-span-10 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                Malaysia's First AI-Native Educational Ecosystem
              </div>

              {/* Main Headline */}
              <h1 className="text-hero font-bold leading-tight">
                <span className="block">MRSM+ AI Talent</span>
                <span className="block text-gradient">Optimization Platform</span>
              </h1>

              {/* Subheading */}
              <p className="text-body-large max-w-2xl mx-auto lg:mx-0">
                Transform every student's potential with intelligent learning that adapts, 
                discovers, and optimizes. The comprehensive platform that revolutionizes 
                education for students, parents, teachers, and administrators.
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="flex items-center text-gray-700">
                  <Brain className="w-5 h-5 mr-2 text-primary-500" />
                  AI-Powered Study Mode
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 mr-2 text-accent-500" />
                  Career Discovery Engine
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <motion.button
                  className="btn btn-accent group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="col-span-full lg:col-span-6 mt-12 lg:mt-0">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="card card-hover text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-h2 font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-small text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection