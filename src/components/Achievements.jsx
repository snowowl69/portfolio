import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimations';

const certificates = [
  {
    id: 1,
    title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    issuer: 'Oracle',
    date: 'June 22, 2026',
    validUntil: 'June 22, 2028',
    credentialId: '328497315OCI25GAIOCP',
    color: '#F80000',
    icon: '☁️',
    link: 'https://drive.google.com/file/d/1Ht6S5KzaXfpIYd42-Jw-Zdcp7oI31MQL/view',
  },
  {
    id: 2,
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'May 29, 2026',
    credentialId: '328497315OCI25AICFA',
    color: '#F80000',
    icon: '🤖',
    link: 'https://drive.google.com/file/d/16-ja1EaFT9yQUeu7U7_T598GMdyxF0tw/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'May 29, 2026',
    credentialId: '328497315OCI25FNDCFA',
    color: '#F80000',
    icon: '☁️',
    link: 'https://drive.google.com/file/d/1QDjeglDR66jN70FgJC2pyx0tFadgayIA/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Google Analytics Certification',
    issuer: 'Google',
    date: 'May 17, 2026',
    validUntil: 'May 17, 2027',
    credentialId: '182623822',
    color: '#4285F4',
    icon: '📊',
    link: 'https://drive.google.com/file/d/1hW6AwcQvE9pwGxwH1XtBbj9vKNtSByGL/view',
  },
  {
    id: 5,
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'May 17, 2026',
    color: '#00BCEB',
    icon: '📈',
    link: 'https://drive.google.com/file/d/1IugCH7XuiPlv3ccvzisD4zoAI2VH-f9Y/view',
  }
];

export default function Achievements() {
  const [titleRef, titleInView] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="achievements" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      {/* Section header */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <span className="font-mono" style={{ fontSize: '0.75rem', color: '#10B981', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
          PROVEN EXPERTISE
        </span>
        <h2 className="font-space" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1 }}>
          <span style={{ background: 'linear-gradient(135deg, #10B981, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Achievements
          </span>{' '}
          & Certifications
        </h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute',
          left: 'calc(50% - 1px)',
          top: 0,
          bottom: 0,
          width: '2px',
          background: 'linear-gradient(to bottom, #F80000, #4285F4, #00BCEB)',
          opacity: 0.3,
        }} className="timeline-vertical-line" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                position: 'relative',
              }}
              className="achievement-timeline-item"
            >
              {/* Center dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 + 0.3 }}
                style={{
                  position: 'absolute',
                  left: 'calc(50% - 9px)',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: cert.color,
                  boxShadow: `0 0 20px ${cert.color}66`,
                  zIndex: 2,
                  border: '3px solid #0A0A0F',
                }}
                className="timeline-center-dot"
              />

              {/* Card */}
              <div
                style={{
                  width: 'calc(50% - 3rem)',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${cert.color}33`,
                  borderRadius: '20px',
                  padding: '2rem',
                  position: 'relative',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
                className="achievement-timeline-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = `${cert.color}88`;
                  e.currentTarget.style.boxShadow = `0 12px 40px ${cert.color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = `${cert.color}33`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.5rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `${cert.color}1A`,
                      border: `1px solid ${cert.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem',
                    }}>
                      {cert.icon}
                    </div>
                    <div>
                      <span className="font-mono" style={{ fontSize: '0.7rem', color: cert.color, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
                        {cert.issuer}
                      </span>
                    </div>
                  </div>

                  {/* Date badge */}
                  <div style={{
                    padding: '6px 16px',
                    borderRadius: '100px',
                    background: `${cert.color}1A`,
                    border: `1px solid ${cert.color}44`,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: cert.color,
                  }}>
                    {cert.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-space" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
                  {cert.title}
                </h3>

                {/* Info row */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
                  {cert.validUntil && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span className="font-mono" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Valid Until</span>
                      <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>{cert.validUntil}</span>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <span className="font-mono" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Credential ID</span>
                      <span className="font-mono" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Certificate Link Button */}
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-magnetic
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        background: `${cert.color}1A`,
                        border: `1px solid ${cert.color}44`,
                        color: cert.color,
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        fontFamily: "'Space Grotesk', sans-serif",
                        textDecoration: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${cert.color}33`;
                        e.currentTarget.style.borderColor = cert.color;
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${cert.color}1A`;
                        e.currentTarget.style.borderColor = `${cert.color}44`;
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      View Certificate <span>↗</span>
                    </a>
                  ) : (
                    <button
                      disabled
                      style={{
                        padding: '8px 16px',
                        borderRadius: '8px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '0.8rem',
                        fontFamily: "'Space Grotesk', sans-serif",
                        cursor: 'not-allowed',
                      }}
                    >
                      View Certificate
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-vertical-line {
            left: 1rem !important;
          }
          .achievement-timeline-item {
            justify-content: flex-end !important;
          }
          .timeline-center-dot {
            left: 1rem !important;
            transform: translate(-50%, -50%) !important;
          }
          .achievement-timeline-card {
            width: calc(100% - 3rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
