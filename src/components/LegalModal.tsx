import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-lb-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-3xl bg-lb-charcoal border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[85vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-lb-black/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lb-gold/10 border border-lb-gold/20 flex items-center justify-center text-lb-gold">
                {isPrivacy ? <ShieldCheck size={22} /> : <FileText size={22} />}
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-wide">
                  {isPrivacy ? 'Data Privacy Policy' : 'Terms and Conditions'}
                </h2>
                <p className="text-xs text-gray-400">LOGIC BREAK SOLUTION</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-300 text-sm leading-relaxed custom-scrollbar">
            {isPrivacy ? (
              /* Privacy Policy 10 Sections */
              <div className="space-y-6">
                <section>
                  <h3 className="text-base font-semibold text-white mb-2">1. Introduction</h3>
                  <p>Welcome to LOGIC BREAK SOLUTION. We value your privacy and are committed to protecting the personal information you share with us when using our website and freelancing services.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">2. Information We Collect</h3>
                  <p>We collect information directly provided by you when filling out project inquiry forms, contacting us via email, or communicating regarding freelance project requirements.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">3. Personal Information</h3>
                  <p>The personal information we collect may include your full name, email address, contact number, budget estimates, and specific project description details.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">4. How We Use Your Information</h3>
                  <p>Your information is strictly used to respond to your project inquiries, communicate regarding ongoing freelancing projects, deliver custom software and web solutions, and enhance our overall client service experience.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">5. Data Sharing and Third-Party Services</h3>
                  <p>We do not sell, rent, or trade your personal data. Information is shared only with necessary service providers essential for delivering our freelancing solutions or when required by legal regulations.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">6. Data Storage and Security</h3>
                  <p>We employ standard technical and administrative safeguards to store and protect your data from unauthorized access, disclosure, or alteration.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">7. Data Retention</h3>
                  <p>We retain client project information for as long as necessary to fulfill project requirements, legal obligations, and maintain business records.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">8. User Rights and Data Correction or Deletion Requests</h3>
                  <p>You have the right to request access to, correction of, or deletion of your personal information held by LOGIC BREAK SOLUTION by reaching out to us at our official contact email.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">9. External Links</h3>
                  <p>Our website may contain links to third-party platforms. We are not responsible for the privacy practices or content of external websites.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">10. Contact Information</h3>
                  <p>For questions regarding this Privacy Policy or your personal data, contact LOGIC BREAK SOLUTION at:</p>
                  <p className="mt-2 text-lb-gold font-medium">Email: hello@logicbreaksolution.com | Phone: +91 99940 49254</p>
                </section>
              </div>
            ) : (
              /* Terms & Conditions 13 Sections */
              <div className="space-y-6">
                <section>
                  <h3 className="text-base font-semibold text-white mb-2">1. Introduction</h3>
                  <p>These Terms and Conditions govern your use of the LOGIC BREAK SOLUTION website and freelancing software development services.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">2. Website Usage</h3>
                  <p>By accessing our website, you agree to comply with these terms. You must not use our website for illegal activities or introduce harmful code.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">3. Freelancing Services</h3>
                  <p>LOGIC BREAK SOLUTION provides custom web development, mobile applications, AI/ML engineering, data analytics, and digital transformation consulting services.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">4. Project Requirements and Scope</h3>
                  <p>Project deliverables, milestones, and technical specifications are agreed upon in writing prior to initiating project development.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">5. Pricing, Budget, and Payments</h3>
                  <p>All prices and budgets are quoted in Indian Rupees (₹) unless explicitly specified. Milestone payments must be made according to the agreed schedule.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">6. Project Timelines and Delivery</h3>
                  <p>Estimated completion timelines are provided in good faith. Delays resulting from missing client feedback or scope changes may adjust delivery dates.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">7. Client Responsibilities</h3>
                  <p>Clients agree to provide timely feedback, necessary credentials, branding assets, and project requirements required for project execution.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">8. Intellectual Property and Ownership</h3>
                  <p>Upon full payment of project fees, ownership rights of custom deliverables are transferred to the client, retaining pre-existing frameworks and tools owned by LOGIC BREAK SOLUTION.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">9. Revisions, Cancellations, and Refunds</h3>
                  <p>Project scope revisions outside the initial agreement may incur additional charges. Refund requests are evaluated based on work completed prior to cancellation.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">10. Limitation of Liability</h3>
                  <p>LOGIC BREAK SOLUTION is not liable for indirect, incidental, or consequential damages arising from the use of our services or website.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">11. Third-Party Services and External Links</h3>
                  <p>We may integrate third-party APIs or hosting platforms. LOGIC BREAK SOLUTION is not responsible for third-party outage or policy changes.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">12. Changes to These Terms</h3>
                  <p>We reserve the right to update these terms at any time. Continued use of our website constitutes acceptance of updated terms.</p>
                </section>

                <section>
                  <h3 className="text-base font-semibold text-white mb-2">13. Contact Information</h3>
                  <p>For inquiries regarding these Terms and Conditions, please contact us:</p>
                  <p className="mt-2 text-lb-gold font-medium">Email: hello@logicbreaksolution.com | Phone: +91 99940 49254</p>
                </section>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 px-6 border-t border-white/10 bg-lb-black/40 flex justify-end">
            <button
              onClick={onClose}
              className="bg-lb-gold text-lb-black font-semibold px-6 py-2 rounded-xl hover:bg-lb-gold-light transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LegalModal;
