import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimations';
import { projects, filterCategories } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [titleRef, titleInView] = useScrollAnimation({ threshold: 0.3 });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.domain === activeFilter);

  return (
    <section
      id="work"
      style={{
        padding: '8rem 2rem',
        maxWidth: '1400px',
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
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <h2 className="font-space" style={{
          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}>
          THE WORK
        </h2>
        <p className="font-mono" style={{
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.85rem',
          letterSpacing: '0.05em',
        }}>
          20+ systems built. Every domain. No limits.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
      }}>
        {filterCategories.map((cat) => (
          <button
            key={cat}
            data-magnetic
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: '8px 20px',
              borderRadius: '100px',
              border: '1px solid',
              borderColor: activeFilter === cat ? '#6366F1' : 'rgba(255,255,255,0.1)',
              background: activeFilter === cat ? 'rgba(99,102,241,0.15)' : 'transparent',
              color: activeFilter === cat ? '#fff' : 'rgba(255,255,255,0.5)',
              fontSize: '0.8rem',
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              letterSpacing: '0.03em',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== cat) {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.5)';
                e.currentTarget.style.color = '#fff';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== cat) {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
              }
            }}
          >
            {cat === 'AI/ML' ? 'AI·ML' : cat}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <motion.div layout className="bento-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
