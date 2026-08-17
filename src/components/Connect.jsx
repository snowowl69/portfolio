import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimations';
import { Mail, Phone, FileText, Link, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const contactLinks = [
  { icon: Mail, label: 'Email Raghav', value: '1011raghavgoyal@gmail.com', href: 'mailto:1011raghavgoyal@gmail.com' },
  { icon: Phone, label: 'Call / WhatsApp', value: '+91 9255539739', href: 'tel:+919255539739' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/raghavgoyall', href: 'https://www.linkedin.com/in/raghavgoyall/' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/snowowl69', href: 'https://github.com/snowowl69' },
  { icon: FileText, label: 'Resume / CV', value: 'Download PDF', href: 'https://drive.google.com/file/d/13tjKFrVp4k6WPhkkGwuAflep5IQ0lwI7/view?usp=sharing' },
];

export default function Connect() {
  const [titleRef, titleInView] = useScrollAnimation({ threshold: 0.3 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // EmailJS integration placeholder
    setTimeout(() => {
      setSending(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent! (Connect EmailJS for production)');
    }, 1500);
  };

  return (
    <section id="connect" style={{ padding: '8rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
      {/* Header */}
      <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 className="font-space" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>LET'S BUILD SOMETHING</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>Whether you want to collaborate, hire, invest, or just geek out — I'm open.</p>
      </motion.div>

      {/* Contact Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '4rem' }}>
        {contactLinks.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            data-magnetic
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="contact-row"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 1.5rem', borderRadius: '12px', textDecoration: 'none', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <link.icon size={20} style={{ color: '#6366F1' }} />
              <div>
                <div className="font-space" style={{ fontWeight: 600, fontSize: '1.05rem' }}>{link.label}</div>
                <div className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>{link.value}</div>
              </div>
            </div>
            <ArrowUpRight size={20} style={{ color: 'rgba(255,255,255,0.3)', transition: 'all 0.3s ease' }} />
          </motion.a>
        ))}
      </div>

      {/* Terminal Form */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass" style={{ padding: '2.5rem', borderRadius: '16px' }}>
        <div className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#F59E0B' }} />
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22C55E' }} />
          <span style={{ marginLeft: '0.5rem' }}>raghav@terminal ~ /contact</span>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label className="font-mono" style={{ fontSize: '0.7rem', color: '#6366F1', letterSpacing: '0.1em' }}>{'>'} NAME</label>
            <input type="text" className="terminal-input" placeholder="Your name..." value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
          </div>
          <div>
            <label className="font-mono" style={{ fontSize: '0.7rem', color: '#6366F1', letterSpacing: '0.1em' }}>{'>'} EMAIL</label>
            <input type="email" className="terminal-input" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
          </div>
          <div>
            <label className="font-mono" style={{ fontSize: '0.7rem', color: '#6366F1', letterSpacing: '0.1em' }}>{'>'} MESSAGE</label>
            <textarea className="terminal-input" placeholder="What do you want to build?" rows={4} style={{ resize: 'vertical', fontFamily: "'JetBrains Mono', monospace" }} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
          </div>
          <button type="submit" data-magnetic disabled={sending} className="font-mono" style={{ padding: '14px 32px', background: sending ? 'rgba(99,102,241,0.3)' : 'linear-gradient(135deg, #6366F1, #8B5CF6)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', transition: 'all 0.3s ease', alignSelf: 'flex-start', boxShadow: '0 4px 20px rgba(99,102,241,0.3)' }}>
            {sending ? '>> SENDING...' : '>> SEND MESSAGE'}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
