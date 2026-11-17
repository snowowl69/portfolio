import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { domainColors } from '../data/projects';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function ProjectCard({ project, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const colors = domainColors[project.domain] || domainColors['Web'];
  const hasValidLink = project.github && project.github !== '#';

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, rotate: 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={project.span}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="gradient-border"
        style={{
          height: '100%',
          padding: '1.75rem',
          display: 'flex',
          flexDirection: 'column',
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered
            ? 'transform 0.1s ease-out, box-shadow 0.3s ease'
            : 'transform 0.4s ease-out, box-shadow 0.3s ease',
          boxShadow: isHovered ? `0 12px 40px ${colors.bg}` : 'none',
          willChange: 'transform',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Domain tag & GitHub link */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}>
          <span style={{
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '0.65rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: colors.bg,
            color: colors.text,
            border: `1px solid ${colors.border}33`,
          }}>
            {colors.emoji} {project.domain}
          </span>

          {/* GitHub link button */}
          {hasValidLink && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-magnetic
              title={`View ${project.name} on GitHub`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '0.7rem',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
                color: isHovered ? '#fff' : 'rgba(255,255,255,0.7)',
                background: isHovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)',
                border: isHovered ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.25s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = colors.border;
                e.currentTarget.style.background = colors.bg;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = isHovered ? '#fff' : 'rgba(255,255,255,0.7)';
                e.currentTarget.style.borderColor = isHovered ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.1)';
                e.currentTarget.style.background = isHovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.04)';
              }}
            >
              <GithubIcon size={13} />
              <span>Code</span>
              <ExternalLink size={11} style={{ opacity: 0.7 }} />
            </motion.a>
          )}
        </div>

        {/* Project name */}
        <h3 className="font-space" style={{
          fontSize: '1.3rem',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '0.5rem',
          lineHeight: 1.3,
        }}>
          {project.name}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: '0.85rem',
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.6,
          marginBottom: '1rem',
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Hover highlight */}
        <motion.p
          initial={{ height: 0, opacity: 0 }}
          animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: '0.8rem',
            color: colors.text,
            fontStyle: 'italic',
            marginBottom: isHovered ? '1rem' : 0,
            overflow: 'hidden',
            lineHeight: 1.5,
          }}
        >
          → {project.highlight}
        </motion.p>

        {/* Tech stack */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginTop: 'auto',
        }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono"
              style={{
                fontSize: '0.65rem',
                padding: '3px 8px',
                borderRadius: '4px',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
