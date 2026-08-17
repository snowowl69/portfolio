import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
const ParticleField = lazy(() => import('./ParticleField'));
import TechMarquee from './TechMarquee';

function TypewriterText({ text, delay = 0, speed = 1 }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [started, text, speed]);

  return (
    <span>
      {displayed}
      {started && <span className="typewriter-cursor" />}
    </span>
  );
}

const stats = [
  { value: '20+', label: 'Projects Built' },
  { value: '2', label: 'Patents Granted' },
  { value: '1', label: 'Patent In Progress' },
];

const floatingCards = [
  { name: 'Chess Engine', domain: 'AI', color: '#6366F1' },
  { name: 'WatchGuard', domain: 'Security', color: '#A855F7' },
  { name: 'algo_trading', domain: 'Finance', color: '#6B7280' },
  { name: 'KneeSync', domain: 'IoT', color: '#EF4444' },
];

export default function Hero() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const isDesktop = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(min-width: 1024px)').matches;
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShowParticles(isDesktop && !prefersReduced);
  }, []);
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Circuit pattern */}
      <div className="circuit-bg" />

      {/* Main content */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* LEFT SIDE — 60% */}
        <div style={{ flex: '0 0 55%', position: 'relative', zIndex: 3 }}>
          {/* Headlines */}
          <div style={{ marginBottom: '1.5rem' }}>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-space"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: '#fff',
              }}
            >
              I BUILD
            </motion.h1>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-space"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              THINGS THAT
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.9 }}
              className="font-space"
              style={{
                fontSize: 'clamp(3rem, 7vw, 6rem)',
                fontWeight: 700,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #6366F1, #F59E0B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              <TypewriterText text="DON'T EXIST YET." delay={1900} speed={70} />
            </motion.h1>
          </div>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.9, delay: 2.0, ease: 'easeOut' }}
            style={{
              fontSize: 'clamp(0.9rem, 1.2vw, 1.15rem)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '550px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Raghav Goyal · Engineer · Inventor · 2× Patent Holder · 1 Patent Undergoing · Builder of 20+ Systems
          </motion.p>

          {/* Stat pills */}
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 4 + i * 0.15 }}
                className="glass"
                style={{
                  padding: '10px 20px',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.85rem',
                }}
              >
                <span className="font-mono" style={{ color: '#6366F1', fontWeight: 700 }}>
                  {stat.value}
                </span>
                <span style={{ color: 'rgba(255,255,255,0.7)' }}>{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4.5 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="#work"
              data-magnetic
              style={{
                padding: '14px 32px',
                background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                color: '#fff',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(99,102,241,0.35)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(99,102,241,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.35)';
              }}
            >
              View My Work <span style={{ fontSize: '1.2em' }}>→</span>
            </a>

            <a
              href="https://drive.google.com/file/d/13tjKFrVp4k6WPhkkGwuAflep5IQ0lwI7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#fff',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6366F1';
                e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Download Resume <span style={{ fontSize: '1.2em' }}>↓</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE — 40% with particle field */}
        <div style={{ flex: '0 0 45%', position: 'relative', height: '600px' }}>
          {showParticles && (
            <Suspense fallback={null}>
              <ParticleField />
            </Suspense>
          )}

          {/* Floating project cards */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { delay: 4.5 + i * 0.2, duration: 0.5 },
                y: { delay: 5 + i * 0.3, duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="glass"
              style={{
                position: 'absolute',
                padding: '10px 16px',
                borderRadius: '10px',
                fontSize: '0.75rem',
                fontFamily: "'JetBrains Mono', monospace",
                pointerEvents: 'none',
                ...(i === 0 ? { top: '10%', right: '15%' } :
                  i === 1 ? { top: '35%', right: '5%' } :
                    i === 2 ? { bottom: '30%', right: '20%' } :
                      { bottom: '15%', right: '8%' }),
              }}
            >
              <span style={{ color: '#fff', fontWeight: 600 }}>{card.name}</span>
              <span
                style={{
                  display: 'inline-block',
                  marginLeft: '8px',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '0.65rem',
                  background: `${card.color}22`,
                  color: card.color,
                  border: `1px solid ${card.color}44`,
                }}
              >
                {card.domain}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Marquee at bottom */}
      <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto', paddingBottom: '2rem' }}>
        <TechMarquee />
      </div>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          #hero > div:first-of-type + div {
            flex-direction: column !important;
          }
          #hero > div:first-of-type + div > div:first-child {
            flex: 1 1 auto !important;
          }
          #hero > div:first-of-type + div > div:last-child {
            flex: 1 1 auto !important;
            height: 350px !important;
            width: 100% !important;
          }
        }
        @media (max-width: 640px) {
          #hero > div:first-of-type + div > div:last-child {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
