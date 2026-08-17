import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { domainColors } from '../data/projects';
import { ExternalLink } from 'lucide-react';

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
        {/* Domain tag */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
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

          {/* GitHub link */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            style={{
              color: 'rgba(255,255,255,0.5)',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
          >
            <ExternalLink size={16} />
          </motion.a>
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
