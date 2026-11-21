import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimations';

const internshipData = [
  {
    company: 'Virtusa',
    role: 'Digital Engineer Intern',
    client: 'British Telecom (BT)',
    period: 'Jun 2026 – Aug 2026',
    location: 'Enterprise AI Division',
    color: '#6366F1',
    accentColor: '#22D3EE',
    summary:
      'Worked directly on an enterprise-grade AI/ML implementation project for British Telecom (BT), bridging the gap between cutting-edge machine learning and production architecture.',
    contributions: [
      {
        title: 'Enterprise AI/ML Integration',
        desc: 'Contributed to an AI/ML implementation project for British Telecom (BT), seamlessly integrating AI capabilities into an enterprise application using Python and PostgreSQL.',
      },
      {
        title: 'Collaborative Engineering',
        desc: 'Collaborated with developers to integrate AI functionality with existing application components, diagnosing and resolving architectural and implementation issues.',
      },
      {
        title: 'Model Validation & Optimization',
        desc: 'Tested, validated, and troubleshot machine learning models to continuously improve the reliability, precision, and performance of model outputs.',
      },
    ],
    techStack: [
      'Python',
      'Machine Learning',
      'PostgreSQL',
      'Data Analysis',
      'AI Integration',
      'British Telecom (BT)',
    ],
    highlights: [
      { label: 'Role', value: 'Digital Engineer Intern' },
      { label: 'Client', value: 'British Telecom (BT)' },
      { label: 'Focus', value: 'AI/ML & Enterprise Data' },
    ],
    certificateUrl: 'https://drive.google.com/file/d/1kJnnk-oDYmZyJK5a5e1Kx3V9hLvQrGe9/view?usp=sharing',
  },
];

export default function Experience() {
  const [titleRef, titleInView] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="experience"
      style={{
        padding: '8rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Background ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Section Header */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: '4.5rem', position: 'relative', zIndex: 1 }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '0.75rem',
            color: '#6366F1',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '1rem',
          }}
        >
          REAL-WORLD INDUSTRY IMPACT
        </span>
        <h2
          className="font-space"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '0.75rem',
          }}
        >
          Internship{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #6366F1, #22D3EE)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Experience
          </span>
        </h2>
        <p
          className="font-mono"
          style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.85rem',
            letterSpacing: '0.04em',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Applying machine learning, robust databases, and enterprise software engineering in production environments.
        </p>
      </motion.div>

      {/* Internship Cards Container */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative', zIndex: 1 }}>
        {internshipData.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'relative',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 3.5vw, 3rem)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
              transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.6)';
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 24px 70px rgba(99, 102, 241, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.25)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)';
            }}
          >
            {/* Top row: Company, Role & Duration Badge */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '1.5rem',
              }}
            >
              {/* Company & Role */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25), rgba(34, 211, 238, 0.15))',
                    border: '1px solid rgba(99, 102, 241, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <h3
                      className="font-space"
                      style={{
                        fontSize: '1.6rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {exp.company}
                    </h3>
                    <span
                      style={{
                        padding: '4px 12px',
                        borderRadius: '100px',
                        background: 'rgba(34, 211, 238, 0.12)',
                        border: '1px solid rgba(34, 211, 238, 0.35)',
                        color: '#22D3EE',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: '0.04em',
                      }}
                    >
                      Client: {exp.client}
                    </span>
                  </div>
                  <p
                    className="font-space"
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.85)',
                      marginTop: '0.2rem',
                    }}
                  >
                    {exp.role}
                  </p>
                </div>
              </div>

              {/* Date & Location Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                <div
                  style={{
                    padding: '6px 16px',
                    borderRadius: '100px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.4)',
                    color: '#818CF8',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.02em',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  {exp.period}
                </div>
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.75rem',
                    color: 'rgba(255, 255, 255, 0.45)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Summary description */}
            <p
              style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              {exp.summary}
            </p>

            {/* Bullet points / Key Contributions */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              {exp.contributions.map((c, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(99, 102, 241, 0.2)',
                      border: '1px solid rgba(99, 102, 241, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#818CF8',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <div>
                    <h4
                      className="font-space"
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#FFFFFF',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {c.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'rgba(255, 255, 255, 0.65)',
                        lineHeight: 1.6,
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div style={{ marginTop: '1.5rem' }}>
              <span
                className="font-mono"
                style={{
                  fontSize: '0.7rem',
                  color: 'rgba(255, 255, 255, 0.45)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '0.75rem',
                }}
              >
                TECH STACK & TOOLS
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {exp.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '5px 14px',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      color: '#A5B4FC',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Verification / Documentation */}
            {exp.certificateUrl && (
              <div
                style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'rgba(34, 211, 238, 0.12)',
                      border: '1px solid rgba(34, 211, 238, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#22D3EE',
                      flexShrink: 0,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <div>
                    <div style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                      Internship Certificate &amp; Technical Report
                    </div>
                    <div style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace" }}>
                      Virtusa Consulting Services · British Telecom (BT) · Verified PDF
                    </div>
                  </div>
                </div>

                <a
                  href={exp.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '10px 22px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.9), rgba(34, 211, 238, 0.9))',
                    color: '#FFFFFF',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    fontFamily: "'Space Grotesk', sans-serif",
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(99, 102, 241, 0.3)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 22px rgba(34, 211, 238, 0.45)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(99, 102, 241, 0.3)';
                  }}
                >
                  <span>View Certificate (PDF)</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
