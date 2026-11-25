import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SiReact, SiNodedotjs, SiNextdotjs, SiTypescript, SiFlutter, SiPython } from 'react-icons/si';

// Badges sit on the isometric plane and float up/down along Z.
const badges = [
  { Icon: SiReact,      x: 50, y: 24, size: 78, z: 70, dur: 5.5, delay: 0,   color: '#61dafb', big: true },
  { Icon: SiTypescript, x: 36, y: 40, size: 66, z: 55, dur: 6.5, delay: 0.6, color: '#3d8bff' },
  { Icon: SiNextdotjs,  x: 56, y: 46, size: 66, z: 55, dur: 6,   delay: 1.1, color: '#ffffff' },
  { Icon: SiNodedotjs,  x: 68, y: 30, size: 44, z: 45, dur: 7,   delay: 0.3, color: '#7bd05a' },
  { Icon: SiFlutter,    x: 30, y: 24, size: 40, z: 40, dur: 6.8, delay: 0.9, color: '#54c5f8' },
  { Icon: SiPython,     x: 44, y: 56, size: 40, z: 40, dur: 7.4, delay: 1.5, color: '#ffd343' },
];

const tiles = [
  { x: 6,  y: 40, w: 46, h: 46, label: 'hello world!' },
  { x: 46, y: 70, w: 44, h: 44 },
];

export const HeroScene = () => {
  // Mouse parallax: gently tilts the whole plane.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotateX = useTransform(sy, [-1, 1], [64, 52]);
  const rotateZ = useTransform(sx, [-1, 1], [-52, -38]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <div className="hero-scene" onMouseMove={onMove} onMouseLeave={onLeave} aria-hidden="true">
      <motion.div className="scene-stage" style={{ rotateX, rotateZ }}>
        <div className="scene-grid" />

        {tiles.map((t, i) => (
          <div
            key={i}
            className="scene-tile"
            style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.w}%`, height: `${t.h}%` }}
          >
            <span /><span /><span />
          </div>
        ))}

        {/* Vortex */}
        <div className="scene-vortex" style={{ left: '50%', top: '38%' }}>
          <svg viewBox="0 0 200 200" className="vortex-svg">
            {[92, 76, 60, 44, 28].map((r, i) => (
              <circle
                key={r}
                cx="100" cy="100" r={r}
                fill="none"
                stroke="currentColor"
                strokeOpacity={0.14 + i * 0.06}
                strokeWidth="1"
                strokeDasharray={i % 2 ? '2 5' : 'none'}
              />
            ))}
            <circle cx="100" cy="100" r="16" fill="#000" fillOpacity="0.9" />
          </svg>
        </div>

        {/* Floating tech badges */}
        {badges.map(({ Icon, x, y, size, z, dur, delay, color }, i) => (
          <motion.div
            key={i}
            className="scene-badge"
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, color }}
            initial={{ opacity: 0, z: 0 }}
            animate={{ opacity: 1, z: [z, z + 26, z] }}
            transition={{
              opacity: { duration: 0.8, delay: 0.5 + i * 0.12 },
              z: { duration: dur, delay, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <Icon size={size * 0.5} />
          </motion.div>
        ))}

        <motion.div
          className="scene-chip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, z: [30, 46, 30] }}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            z: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          hello world!
        </motion.div>
      </motion.div>
    </div>
  );
};
