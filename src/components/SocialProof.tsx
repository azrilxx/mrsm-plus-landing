import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star, Building, Users, CheckCircle } from 'lucide-react'

const SocialProof: React.FC = () => {
  const testimonials = [
    {
      quote: "MRSM+ represents the future of Malaysian education. The AI-powered insights have transformed how we understand and support our students.",
      author: "Dato' Ahmad Ibrahim",
      role: "Principal, MRSM Kuala Lumpur",
      rating: 5
    },
    {
      quote: "For the first time, I have clear visibility into my daughter's learning patterns and career potential. The recommendations are incredibly accurate.",
      author: "Siti Nurhaliza",
      role: "Parent, Form 4 Student",
      rating: 5
    },
    {
      quote: "The Socratic questioning system challenges my students in ways I never thought possible. It's like having an AI teaching assistant.",
      author: "Dr. Michael Chen",
      role: "Mathematics Teacher, MRSM Pahang",
      rating: 5
    }
  ]

  const institutions = [
    { name: "MARA HQ", logo: "🏢", status: "Partnership Confirmed" },
    { name: "Ministry of Education", logo: "🎓", status: "Advisory Board" },
    { name: "UiTM", logo: "🏛️", status: "Research Collaboration" },
    { name: "MRSM Alumni Network", logo: "👥", status: "Community Partner" }
  ]

  const achievements = [
    { icon: Users, label: "10,000+ Students", desc: "Pre-registered for beta access" },
    { icon: Building, label: "55 MRSM Campuses", desc: "Ready for deployment" },
    { icon: CheckCircle, label: "95% Teacher Adoption", desc: "In pilot programs" },
    { icon: Star, label: "4.9/5 Rating", desc: "From early testers" }
  ]

  return (
    <section id="impact" className="py-20 bg-white">
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
            Trusted by <span className="text-gradient">Educational Leaders</span>
          </h2>
          <p className="text-body-large text-gray-600 max-w-3xl mx-auto">
            MRSM+ is backed by Malaysia's top educational institutions and trusted 
            by thousands of students, parents, and educators nationwide.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-h3 font-bold text-gray-900 mb-2">
                {achievement.label}
              </div>
              <div className="text-small text-gray-600">
                {achievement.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="card card-hover bg-gray-50"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Quote className="w-6 h-6 text-primary-300 mb-3" />
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-small text-gray-600">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partner Institutions */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-h2 font-bold text-gray-900 mb-4">
              Institutional Partners & Supporters
            </h3>
            <p className="text-gray-600">
              Collaborating with Malaysia's leading educational institutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {institutions.map((institution, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white rounded-xl border border-gray-100"
                whileHover={{ y: -3, boxShadow: '0 8px 25px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl mb-3">{institution.logo}</div>
                <div className="font-semibold text-gray-900 mb-1">
                  {institution.name}
                </div>
                <div className="text-xs text-primary-600 font-medium">
                  {institution.status}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Banner */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-full">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">
              Approved by MARA Leadership • Ready for National Deployment
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof