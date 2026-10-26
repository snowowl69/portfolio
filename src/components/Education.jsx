import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimations';

const educationData = [
  {
    level: 'Graduation',
    institution: 'Vellore Institute of Technology',
    location: 'Vellore',
    score: '7.3 CGPA',
    period: '2023 – Present',
    color: '#6366F1',
    icon: '🎓',
    tag: 'B.Tech',
    description: 'Pursuing a B.Tech degree with focus on Computer Science, AI/ML, and cybersecurity innovations.',
    highlights: ['AI/ML Research', 'Cybersecurity', '2× Patent Holder'],
  },
  {
    level: 'Intermediate',
    institution: 'ST Xaviers School',
    location: 'Fatehabad',
    score: '72.6%',
    period: '2021 – 2023',
    color: '#F59E0B',
    icon: '📘',
    tag: 'Class XII',
    description: 'Completed Higher Secondary Education with a focus on Science and Mathematics.',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    level: 'Matriculation',
    institution: 'D A V School',
    location: 'Fatehabad',
    score: '83.6%',
    period: '2009 – 2021',
    color: '#22D3EE',
    icon: '📚',
    tag: 'Class X',
    description: 'Completed foundational education building strong academic skills and discipline.',
    highlights: ['Science', 'Mathematics', 'English'],
  },
];

export default function Education() {
  const [titleRef, titleInView] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="education" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
      {/* Section header */}
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ textAlign: 'center', marginBottom: '5rem' }}
      >
        <span className="font-mono" style={{ fontSize: '0.75rem', color: '#6366F1', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
          THE FOUNDATION OF EXCELLENCE
        </span>
        <h2 className="font-space" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1 }}>
          Academic{' '}
          <span style={{ background: 'linear-gradient(135deg, #6366F1, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Journey
          </span>
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
          background: 'linear-gradient(to bottom, #6366F1, #F59E0B, #22D3EE)',
          opacity: 0.3,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.level}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                position: 'relative',
              }}
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
                  background: edu.color,
                  boxShadow: `0 0 20px ${edu.color}66`,
                  zIndex: 2,
                  border: '3px solid #0A0A0F',
                }}
              />

              {/* Card */}
              <div
                style={{
                  width: 'calc(50% - 3rem)',
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid ${edu.color}33`,
                  borderRadius: '20px',
                  padding: '2rem',
                  position: 'relative',
                  backdropFilter: 'blur(20px)',
                  transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = `${edu.color}88`;
                  e.currentTarget.style.boxShadow = `0 12px 40px ${edu.color}22`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = `${edu.color}33`;
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: `${edu.color}1A`,
                      border: `1px solid ${edu.color}44`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem',
                    }}>
                      {edu.icon}
                    </div>
                    <div>
                      <span className="font-mono" style={{ fontSize: '0.7rem', color: edu.color, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block' }}>
                        {edu.tag}
                      </span>
                      <span className="font-space" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                        {edu.level}
                      </span>
                    </div>
                  </div>

                  {/* Score badge */}
                  <div style={{
                    padding: '6px 16px',
                    borderRadius: '100px',
                    background: `${edu.color}1A`,
                    border: `1px solid ${edu.color}44`,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: edu.color,
                  }}>
                    {edu.score}
                  </div>
                </div>

                {/* Institution */}
                <h3 className="font-space" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
                  {edu.institution}
                </h3>
                <p className="font-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.45)', marginBottom: '1rem', letterSpacing: '0.05em' }}>
                  📍 {edu.location} &nbsp;·&nbsp; 📅 {edu.period}
                </p>

                {/* Description */}
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '1.2rem' }}>
                  {edu.description}
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '100px',
                        fontSize: '0.72rem',
                        fontWeight: 500,
                        background: `${edu.color}11`,
                        border: `1px solid ${edu.color}33`,
                        color: `${edu.color}cc`,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>



      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          #education > div:nth-child(3) > div > div:last-child {
            width: calc(100% - 2rem) !important;
            justify-content: flex-start !important;
          }
          #education > div:nth-child(3) > div > div {
            justify-content: flex-start !important;
          }
          #education > div:nth-child(3) > div > div:last-child {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
