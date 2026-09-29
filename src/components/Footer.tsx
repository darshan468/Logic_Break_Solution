import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import LegalModal from './LegalModal';

const Footer = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <>
      <footer className="bg-lb-black/80 backdrop-blur-md border-t border-white/10 text-gray-300 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Top Section - 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Column 1 */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 tracking-wide">For Clients</h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-lb-gold transition-colors">Web Application Development</a></li>
                <li><a href="#services" className="hover:text-lb-gold transition-colors">AI & Machine Learning Solutions</a></li>
                <li><a href="#services" className="hover:text-lb-gold transition-colors">Custom Software & Automation</a></li>
                <li><a href="#services" className="hover:text-lb-gold transition-colors">Mobile App Development</a></li>
                <li><a href="#services" className="hover:text-lb-gold transition-colors">Data Analytics & Dashboards</a></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 tracking-wide">For Enterprise & Startups</h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#contact" className="hover:text-lb-gold transition-colors">Dedicated Developer Teams</a></li>
                <li><a href="#contact" className="hover:text-lb-gold transition-colors">Digital Transformation</a></li>
                <li><a href="#contact" className="hover:text-lb-gold transition-colors">Cloud Architecture & Scaling</a></li>
                <li><a href="#contact" className="hover:text-lb-gold transition-colors">Enterprise API Integrations</a></li>
                <li><a href="#contact" className="hover:text-lb-gold transition-colors">Consulting & Tech Strategy</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 tracking-wide">Help and Support</h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#process" className="hover:text-lb-gold transition-colors">FAQ</a></li>
                <li>
                  <a
                    href="https://wa.me/919994049254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-lb-gold transition-colors font-medium text-white flex items-center gap-1.5"
                  >
                    <Phone size={14} className="text-lb-gold" /> +91 99940 49254
                  </a>
                </li>
                <li><a href="#contact" className="hover:text-lb-gold transition-colors">Contact Support</a></li>
                <li><a href="#projects" className="hover:text-lb-gold transition-colors">Case Studies</a></li>
                <li><a href="#about" className="hover:text-lb-gold transition-colors">Company Directory</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="text-white font-bold text-base mb-4 tracking-wide">About LOGIC BREAK SOLUTION</h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-lb-gold transition-colors">About Us</a></li>
                <li><a href="#projects" className="hover:text-lb-gold transition-colors">Client Testimonials</a></li>
                <li><a href="#process" className="hover:text-lb-gold transition-colors">Our Working Process</a></li>
                <li><a href="#contact" className="hover:text-lb-gold transition-colors">Career Opportunities</a></li>
                <li><a href="mailto:hello@logicbreaksolution.com" className="hover:text-lb-gold transition-colors">hello@logicbreaksolution.com</a></li>
              </ul>
            </div>
          </div>

          {/* Social Icons Bar: Instagram, WhatsApp, LinkedIn, Facebook */}
          <div className="flex justify-center items-center gap-6 py-8 border-b border-white/10">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/logicbreaksolution/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-lb-gold hover:border-lb-gold/50 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919994049254"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-lb-gold hover:border-lb-gold/50 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/logicbreaksolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-lb-gold hover:border-lb-gold/50 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/logicbreaksolution"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-lb-gold hover:border-lb-gold/50 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
              </svg>
            </a>
          </div>

          {/* Bottom Row - Logo, Exact Copyright & Legal Links */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded overflow-hidden border border-lb-gold/40">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span>© 2026 LOGIC BREAK SOLUTION, All rights reserved.</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-white underline underline-offset-4 transition-colors focus:outline-none"
              >
                Data Privacy
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-white underline underline-offset-4 transition-colors focus:outline-none"
              >
                Terms and Conditions
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Popup */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
};

export default Footer;
