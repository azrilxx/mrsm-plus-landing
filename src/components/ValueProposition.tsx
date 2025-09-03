import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Heart, Settings, BookOpen, TrendingUp, Award, Globe } from 'lucide-react'

const ValueProposition: React.FC = () => {
  const ecosystemUsers = [
    {
      icon: GraduationCap,
      title: 'Students',
      subtitle: 'Personalized Learning & Career Clarity',
      features: [
        'AI tutor that adapts to your learning style',
        'Real-time academic performance analytics',
        'Interactive career pathway discovery',
        'Personalized skill development recommendations'
      ],
      color: 'primary'
    },
    {
      icon: Heart,
      title: 'Parents',
      subtitle: 'Data-Driven Family Decisions',
      features: [
        'Learning insights dashboard for your child',
        'Evidence-based career recommendations',
        'Real-time progress monitoring',
        'Financial planning tools and ROI projections'
      ],
      color: 'accent'
    },
    {
      icon: BookOpen,
      title: 'Teachers',
      subtitle: 'Enhanced Instruction & Student Support',
      features: [
        'Classroom analytics and learning patterns',
        'AI recommendations for optimal teaching',
        'Intelligent assessment tools',
        'Early intervention alerts for struggling students'
      ],
      color: 'blue'
    },
    {
      icon: Settings,
      title: 'Administrators',
      subtitle: 'Strategic Institution Management',
      features: [
        'Institution-wide analytics and trends',
        'Data-driven curriculum and staffing decisions',
        'Student success tracking and outcomes',
        'Predictive modeling for resource planning'
      ],
      color: 'primary'
    }
  ]

  const showcaseFunctions = [
    {
      icon: TrendingUp,
      title: 'AI-Powered Study Mode',
      description: 'Adapts to each student\'s learning style in real-time',
      metrics: ['65% improvement in concept mastery speed', '40% reduction in study time'],
      features: [
        'Personalized difficulty progression based on comprehension patterns',
        'Socratic questioning that develops critical thinking',
        'Instant knowledge gap identification and remediation',
        'Multi-intelligence learning pathway optimization'
      ]
    },
    {
      icon: Award,
      title: 'Intelligent Career Discovery Engine',
      description: 'Maps learning patterns to optimal career pathways using 6+ months of behavioral data',
      metrics: ['92% of students discover previously unknown suitable careers', '78% of families modify educational planning'],
      features: [
        'Analyzes 50+ learning indicators to identify natural aptitudes',
        'Matches against 100+ career paths with salary projections',
        'Generates evidence-based recommendations with parent-friendly explanations',
        'Provides actionable development plans for skill enhancement'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="features" className="py-20 bg-white">
      <div className="grid-container">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display mb-6">
            Complete Ecosystem <span className="text-gradient">Transformation</span>
          </h2>
          <p className="text-body-large max-w-3xl mx-auto text-gray-600">
            MRSM+ transforms every stakeholder's experience with intelligent, data-driven insights 
            that optimize learning, career discovery, and institutional excellence.
          </p>
        </motion.div>

        {/* Core Showcase Functions */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {showcaseFunctions.map((func, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card card-gradient card-hover p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mr-4">
                    <func.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-gray-900">{func.title}</h3>
                    <p className="text-gray-600">{func.description}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {func.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-primary-50 rounded-lg p-3">
                      <div className="text-small font-semibold text-primary-700">
                        {metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {func.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4-User Ecosystem */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-h2 font-bold text-gray-900 mb-4">
              4-User Ecosystem Architecture
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Every stakeholder gets personalized insights and tools designed for their unique role in the educational journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemUsers.map((user, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card card-hover group"
                whileHover={{ y: -8 }}
              >
                <div className={`w-12 h-12 bg-${user.color}-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <user.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-h3 font-semibold text-gray-900 mb-2">
                  {user.title}
                </h4>
                <p className="text-small font-medium text-gray-600 mb-4">
                  {user.subtitle}
                </p>
                
                <div className="space-y-2">
                  {user.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className={`w-1.5 h-1.5 bg-${user.color}-500 rounded-full mt-2 mr-2 flex-shrink-0`}></div>
                      <span className="text-xs text-gray-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* National Impact Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-500 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Globe className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-h2 font-bold mb-4">National Impact Vision</h3>
          <p className="text-body mb-6 opacity-90">
            Position Malaysia as global leader in AI-powered education while generating 
            RM 5B+ contribution to GDP through optimized human capital development.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="font-bold text-xl">55</div>
              <div className="opacity-80">MRSM Campuses</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl">RM 2.0M</div>
              <div className="opacity-80">Total Investment</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl">6 Months</div>
              <div className="opacity-80">Implementation</div>
            </div>
            <div className="text-center">
              <div className="font-bold text-xl">12 Months</div>
              <div className="opacity-80">ROI Timeline</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ValueProposition