import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ValueProposition from './components/ValueProposition'
import SocialProof from './components/SocialProof'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Fixed Header */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-400 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">MRSM+</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">Features</a>
              <a href="#impact" className="text-gray-700 hover:text-primary-600 transition-colors">Impact</a>
              <a href="#early-access" className="btn btn-primary">Get Early Access</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main>
        <HeroSection />
        <ValueProposition />
        <SocialProof />
        <EmailCapture />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App