import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="grid-container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-400 rounded-lg"></div>
              <span className="text-xl font-bold">MRSM+</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Malaysia's first AI-native educational ecosystem, transforming learning 
              for students, parents, teachers, and administrators across 55 MRSM campuses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:info@muvonenergy.com" className="hover:text-accent-400 transition-colors">
                  info@muvonenergy.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3" />
                <span>+60 3-XXXX XXXX</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3" />
                <span>Kuala Lumpur, Malaysia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-300 hover:text-accent-400 transition-colors">Features</a></li>
              <li><a href="#impact" className="text-gray-300 hover:text-accent-400 transition-colors">Impact</a></li>
              <li><a href="#early-access" className="text-gray-300 hover:text-accent-400 transition-colors">Early Access</a></li>
              <li><span className="text-gray-400">Demo (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Documentation</span></li>
              <li><span className="text-gray-400">API Reference</span></li>
              <li><span className="text-gray-400">Training Materials</span></li>
              <li><span className="text-gray-400">Support Center</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} MRSM+ by Muvon Digital. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Cookie Policy</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-xs text-gray-500">
            <p>
              MRSM+ is powered by advanced AI technology and designed specifically 
              for Malaysia's educational excellence. Ready for national deployment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer