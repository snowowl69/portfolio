import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimations';
import { patents } from '../data/projects';

function PatentCard({ patent, index }) {
  const [ref, isInView] = useScrollAnimation({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="gradient-border"
        style={{
          padding: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.4s cubic-bezier(0.23,1,0.32,1), box-shadow 0.4s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-12px)';
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(99,102,241,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Animated background pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `repeating-conic-gradient(from 0deg, #6366F1 0deg 10deg, transparent 10deg 20deg)`,
          backgroundSize: '60px 60px',
          animation: 'noise-shift 8s linear infinite',
        }} />

        {/* Top row: status + patent number */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.5rem',
          position: 'relative',
          zIndex: 1,
        }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '0.7rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'rgba(168,85,247,0.15)',
              color: '#C084FC',
              border: '1px solid rgba(168,85,247,0.3)',
            }}>
              {patent.domain}
            </span>
            <span style={{
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '0.7rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              background: 'rgba(99,102,241,0.15)',
              color: '#818CF8',
              border: '1px solid rgba(99,102,241,0.3)',
            }}>
              IP Protected
            </span>
            {patent.status === 'In Progress' && (
              <span style={{
                padding: '4px 12px',
                borderRadius: '6px',
                fontSize: '0.7rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'rgba(245,158,11,0.15)',
                color: '#FBBF24',
                border: '1px solid rgba(245,158,11,0.3)',
                animation: 'logo-pulse 2s ease-in-out infinite',
              }}>
                🔬 In Progress
              </span>
            )}
            {patent.status === 'Filed' && (
              <span style={{
                padding: '4px 12px',
                borderRadius: '6px',
                fontSize: '0.7rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                background: 'rgba(34,197,94,0.15)',
                color: '#4ADE80',
                border: '1px solid rgba(34,197,94,0.3)',
              }}>
                📄 Filed
              </span>
            )}
          </div>

          <span className="font-mono" style={{
            fontSize: '0.7rem',
            color: 'rgba(255,255,255,0.4)',
            background: 'rgba(255,255,255,0.05)',
            padding: '4px 10px',
            borderRadius: '6px',
          }}>
            {patent.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-space" style={{
          fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '1rem',
          lineHeight: 1.3,
          position: 'relative',
          zIndex: 1,
        }}>
          {patent.title}
        </h3>

        {/* Abstract */}
        <p style={{
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.6)',
          lineHeight: 1.7,
          marginBottom: '2rem',
          position: 'relative',
          zIndex: 1,
        }}>
          {patent.abstract}
        </p>

        {/* Timeline */}
        <div className="patent-timeline" style={{ position: 'relative', zIndex: 1 }}>
          {patent.stages.map((stage, i) => (
            <div
              key={stage}
              className={`timeline-step ${i <= patent.currentStage ? 'active' : ''}`}
            >
              <div
                className={`timeline-dot ${i <= patent.currentStage ? 'active' : ''} ${i === patent.currentStage ? 'current' : ''}`}
              >
                {i <= patent.currentStage && (
                  <span style={{ fontSize: '10px', color: '#fff' }}>✓</span>
                )}
              </div>
              <span className="font-mono" style={{
                fontSize: '0.65rem',
                color: i <= patent.currentStage ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)',
                letterSpacing: '0.05em',
              }}>
                {stage}
              </span>
            </div>
          ))}
        </div>

        {/* Year */}
        <div style={{
          marginTop: '1.5rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.3)',
          fontFamily: "'JetBrains Mono', monospace",
          position: 'relative',
          zIndex: 1,
        }}>
          Year: {patent.year}
        </div>
      </div>
    </motion.div>
  );
}

export default function Patents() {
  const [titleRef, titleInView] = useScrollAnimation({ threshold: 0.3 });

  return (
    <section
      id="patents"
      style={{
        padding: '8rem 2rem',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* Section Header */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <h2 className="font-space" style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}>
            INVENTIONS
          </h2>
          <span style={{
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '0.65rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            background: 'rgba(245,158,11,0.15)',
            color: '#FBBF24',
            border: '1px solid rgba(245,158,11,0.3)',
          }}>
            Patent Protected
          </span>
        </div>
        <p style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: '1rem',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          Original inventions. Protected intellectual property. Ideas that didn't exist before me.
        </p>
      </motion.div>

      {/* Patent Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {patents.map((patent, index) => (
          <PatentCard key={patent.id} patent={patent} index={index} />
        ))}
      </div>

      {/* Quote */}
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{
          marginTop: '5rem',
          textAlign: 'center',
          padding: '3rem 2rem',
          borderLeft: 'none',
          position: 'relative',
        }}
      >
        <span style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '4rem',
          color: 'rgba(99,102,241,0.2)',
          fontFamily: 'serif',
          lineHeight: 1,
        }}>
          "
        </span>
        <p className="font-space" style={{
          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.8)',
          fontStyle: 'italic',
          lineHeight: 1.6,
          width: '100%',
          margin: '0 auto',
        }}>
          Most people use technology. I build the ones they use next.
        </p>
      </motion.blockquote>
    </section>
  );
}
