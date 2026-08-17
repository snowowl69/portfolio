import { techStack } from '../data/projects';

export default function TechMarquee() {
  // Duplicate for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      padding: '1rem 0',
    }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono"
              style={{
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.35)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              {tech}
              <span style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#6366F1',
                opacity: 0.5,
                flexShrink: 0,
              }} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
