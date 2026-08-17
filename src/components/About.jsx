import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useAnimations';

const skillGroups = [
  { domain: 'AI/ML', color: '#6366F1', skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'DQN', 'OpenCV', 'Pandas'] },
  { domain: 'Systems', color: '#F59E0B', skills: ['Spark', 'Kafka', 'AWS', 'Docker', 'Microservices', 'Spring Boot'] },
  { domain: 'Security', color: '#A855F7', skills: ['Face Recognition', 'Cybersecurity', 'Patent-level Expertise'] },
  { domain: 'Web', color: '#22C55E', skills: ['React', 'Vite', 'TypeScript', 'MERN', 'Flask', 'Node.js'] },
  { domain: 'Languages', color: '#22D3EE', skills: ['Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'Bash'] },
];

export default function About() {
  const [titleRef, titleInView] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" style={{ padding: '8rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'flex-start' }}>
        {/* LEFT — Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ flex: '0 0 320px', position: 'relative' }}
        >
          <div style={{ width: '320px', height: '400px', borderRadius: '20px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: '-3px', borderRadius: '22px', background: 'conic-gradient(from 0deg, #6366F1, #F59E0B, #22D3EE, #A855F7, #6366F1)', animation: 'border-rotate 4s linear infinite', zIndex: 0 }} />
            <div style={{ position: 'absolute', inset: '3px', borderRadius: '18px', background: 'linear-gradient(135deg, #12121A, #1A1A2E)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366F1, #F59E0B)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>R</div>
                <p className="font-space" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>RAGHAV GOYAL</p>
                <p className="font-mono" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }}>ENGINEER · INVENTOR</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Content */}
        <motion.div ref={titleRef} initial={{ opacity: 0, y: 30 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} style={{ flex: 1 }}>
          <span className="font-mono" style={{ fontSize: '0.75rem', color: '#6366F1', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>THE BUILDER BEHIND THE BUILD</span>
          <h2 className="font-space" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '2rem' }}>
            I don't just write code.{' '}<span style={{ background: 'linear-gradient(135deg, #6366F1, #F59E0B)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>I invent.</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>I'm Raghav Goyal, a last year student in VIT VELLORE. I'm a polymath engineer working across AI, cybersecurity, distributed systems, and full-stack development. While most developers specialize in one corner, I build across the entire stack — from neural networks that teach themselves to drive, to hardware IoT devices that sync with the cloud.</p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>With <span style={{ color: '#F59E0B', fontWeight: 600 }}>2 granted patents in cybersecurity</span> and more in progress, I don't just use existing tools — I create intellectual property that didn't exist before. Holding a patent isn't about prestige. It's proof that you solved a problem no one else had.</p>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>Every project I start is one I wish already existed. That's the bar. If it already exists and works well, I'm not interested. I build what's missing.</p>
          </div>

          {/* Skills Tags */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {skillGroups.map((group, gi) => (
              <motion.div key={group.domain} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: gi * 0.1 }}>
                <span className="font-mono" style={{ fontSize: '0.7rem', color: group.color, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>[{group.domain}]</span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag" style={{ borderColor: `${group.color}33`, background: `${group.color}11`, color: `${group.color}cc` }}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`@media(max-width:900px){#about>div{flex-direction:column!important;align-items:center!important}#about>div>div:first-child{flex:1 1 auto!important;width:260px!important}#about>div>div:first-child>div:first-child{width:260px!important;height:320px!important}}`}</style>
    </section>
  );
}
