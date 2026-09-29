import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    budget: '',
    message: ''
  });
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Website",
    "Web Application",
    "AI / ML",
    "Data Analytics",
    "Automation",
    "Chatbot",
    "Mobile App",
    "Custom Software",
    "Not Sure"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'phone') {
      setPhoneError('');
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) {
      return 'Contact number is required.';
    }
    // Allow +, numbers, spaces, dashes, parentheses (length 7 to 20)
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;
    if (!phoneRegex.test(phone.trim())) {
      return 'Please enter a valid contact number (e.g. +91 99940 49254).';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneValError = validatePhone(formData.phone);
    if (phoneValError) {
      setPhoneError(phoneValError);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3001/api/book-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', service: '', budget: '', message: '' });
        setPhoneError('');
      } else {
        alert('Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please check if the server is running and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-lb-charcoal/30 overflow-hidden">
      <BackgroundEffects section="contact" />
      <div className="container mx-auto px-6 md:px-12">
        
        {/* CTA Banner */}
        <div className="bg-lb-gold rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-24">
          <div className="max-w-2xl text-lb-black">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Have an Idea? Let's Build It.</h2>
            <p className="text-lb-black/80 text-lg font-medium">
              You don't need to know exactly what technology you need. Just tell us your idea or problem, and we'll help you figure out the solution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <a href="#contact-form" className="bg-lb-black text-white font-bold px-8 py-4 rounded-full text-center hover:bg-gray-900 transition-colors">
              Start a Project
            </a>
            <a href="https://www.instagram.com/logicbreaksolution/" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-lb-black text-lb-black font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-lb-black/10 transition-colors">
              <Camera size={20} />
              Instagram
            </a>
          </div>
        </div>

        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's start a conversation.</h2>
            <p className="text-gray-400 text-lg mb-12">
              Fill out the form to let us know what you're looking for, or reach out to us directly through our social channels.
            </p>

            <div className="space-y-6">
              <a href="https://www.instagram.com/logicbreaksolution/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-lb-gold/50 transition-colors group">
                <div className="w-12 h-12 bg-lb-black rounded-full flex items-center justify-center group-hover:bg-lb-gold group-hover:text-lb-black transition-colors">
                  <Camera size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Instagram</h4>
                  <p className="text-gray-400 text-sm">@logicbreaksolution</p>
                </div>
              </a>

              <a href="https://wa.me/919994049254" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-lb-gold/50 transition-colors group">
                <div className="w-12 h-12 bg-lb-black rounded-full flex items-center justify-center group-hover:bg-lb-gold group-hover:text-lb-black transition-colors text-lb-gold">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">WhatsApp / Call</h4>
                  <p className="text-gray-400 text-sm font-semibold">+91 99940 49254</p>
                </div>
              </a>

              <a href="mailto:hello@logicbreaksolution.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-lb-gold/50 transition-colors group">
                <div className="w-12 h-12 bg-lb-black rounded-full flex items-center justify-center group-hover:bg-lb-gold group-hover:text-lb-black transition-colors text-lb-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-gray-400 text-sm">hello@logicbreaksolution.com</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-lb-charcoal p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <AnimatePresence>
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 bg-lb-charcoal flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-20 h-20 bg-lb-gold/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-lb-gold" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
                  <p className="text-gray-400 mb-8 max-w-sm">
                    We've received your project inquiry. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-lb-gold hover:text-lb-gold-light font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-lb-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lb-gold transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-300">Contact Number <span className="text-red-400">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full bg-lb-black border ${phoneError ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lb-gold transition-colors`}
                  placeholder="Enter your contact number (e.g. +91 99940 49254)"
                />
                {phoneError && (
                  <p className="text-xs text-red-400 mt-1">{phoneError}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email <span className="text-red-400">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-lb-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lb-gold transition-colors"
                  placeholder="Your email address"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-300">What do you need?</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-lb-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lb-gold transition-colors appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  {services.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <AnimatePresence>
                {formData.service === 'Not Sure' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-lb-gold/10 border border-lb-gold/20 rounded-xl text-sm text-lb-gold-light">
                      No problem! Tell us about your idea or problem and we'll help you decide what solution would work best.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm font-medium text-gray-300">Budget Range (Optional in ₹)</label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-lb-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lb-gold transition-colors"
                  placeholder="e.g. ₹25,000 - ₹500,000"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-lb-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lb-gold transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lb-gold text-lb-black font-bold px-8 py-4 rounded-xl hover:bg-lb-gold-light transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Project Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
