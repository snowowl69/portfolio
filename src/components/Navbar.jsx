import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Patents', href: '#patents' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Connect', href: '#connect' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
      className="glass-strong"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        transition: 'padding 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a
          href="#"
          data-magnetic
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: scrolled ? '1.2rem' : '1.5rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#fff',
            textDecoration: 'none',
            transition: 'font-size 0.4s ease',
          }}
        >
          R<span style={{ color: '#6366F1' }}>∆</span>GHAV
        </a>

        {/* Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-magnetic
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                letterSpacing: '0.05em',
                fontFamily: "'Space Grotesk', sans-serif",
                transition: 'color 0.3s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => e.target.style.color = '#fff'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.7)'}
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#connect"
            data-magnetic
            style={{
              padding: '10px 24px',
              background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
              color: '#fff',
              borderRadius: '100px',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: "'Space Grotesk', sans-serif",
              textDecoration: 'none',
              letterSpacing: '0.03em',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 25px rgba(99,102,241,0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(99,102,241,0.3)';
            }}
          >
            Let's Build Something
          </a>
        </div>

        {/* Mobile menu button */}
        <MobileMenu />
      </div>
    </motion.nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '1.5rem',
          padding: '8px',
        }}
        className="mobile-menu-btn"
      >
        {open ? '✕' : '☰'}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="glass-strong mobile-nav-dropdown"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            padding: '1.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
              }}
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          nav > div > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </>
  );
}
