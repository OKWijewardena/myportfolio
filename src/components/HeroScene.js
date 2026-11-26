import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { SiReact, SiNodedotjs, SiNextdotjs, SiTypescript, SiFlutter, SiPython } from 'react-icons/si';

// Badges sit on the isometric plane and float up/down along Z.
export const badges = [
  { Icon: SiReact,      name: 'React', action: 'spin',      x: 50, y: 24, size: 78, z: 70, dur: 5.5, delay: 0,   color: '#61dafb' },
  { Icon: SiTypescript, name: 'TypeScript', action: 'shake', x: 36, y: 40, size: 66, z: 55, dur: 6.5, delay: 0.6, color: '#3d8bff' },
  { Icon: SiNextdotjs,  name: 'Next.js', action: 'flip',    x: 56, y: 46, size: 66, z: 55, dur: 6,   delay: 1.1, color: '#ffffff' },
  { Icon: SiNodedotjs,  name: 'Node.js', action: 'pulse',    x: 68, y: 30, size: 44, z: 45, dur: 7,   delay: 0.3, color: '#7bd05a' },
  { Icon: SiFlutter,    name: 'Flutter', action: 'wobble',    x: 30, y: 24, size: 40, z: 40, dur: 6.8, delay: 0.9, color: '#54c5f8' },
  { Icon: SiPython,     name: 'Python', action: 'hop',     x: 44, y: 56, size: 40, z: 40, dur: 7.4, delay: 1.5, color: '#ffd343' },
];

const tiles = [
  { x: 6,  y: 40, w: 46, h: 46 },
  { x: 46, y: 70, w: 44, h: 44 },
];

// Distinct hover action per badge: [face animation, icon animation]
export const loop = (extra) => ({ repeat: Infinity, ...extra });
export const actions = {
  spin:   { face: { scale: 1.3, z: 60 },                 icon: { rotate: 360, transition: loop({ duration: 2.4, ease: 'linear' }) } },
  shake:  { face: { scale: 1.3, z: 60 },                 icon: { x: [0, -6, 6, -6, 6, 0], transition: loop({ duration: 0.6 }) } },
  flip:   { face: { scale: 1.3, z: 60, rotateY: 180 },   icon: { rotateY: 180 } },
  pulse:  { face: { scale: 1.3, z: 60 },                 icon: { scale: [1, 1.4, 1], transition: loop({ duration: 0.7 }) } },
  wobble: { face: { scale: 1.3, z: 60 },                 icon: { rotate: [0, -22, 22, -22, 0], transition: loop({ duration: 0.9 }) } },
  hop:    { face: { scale: 1.3, z: 60 },                 icon: { y: [0, -12, 0], transition: loop({ duration: 0.55, ease: 'easeOut' }) } },
};
export const spring = { type: 'spring', stiffness: 300, damping: 12 };

// Each badge shifts with the cursor by an amount proportional to its height,
// and plays its own action when hovered.
const Badge = ({ b, i, sx, sy }) => {
  const k = b.z / 70;
  const px = useTransform(sx, [-1, 1], [-34 * k, 34 * k]);
  const py = useTransform(sy, [-1, 1], [-34 * k, 34 * k]);
  const { Icon } = b;
  const act = actions[b.action];

  const faceV = {
    rest: { scale: 1, z: 0, rotateY: 0, transition: spring },
    hover: { ...act.face, transition: spring },
  };
  const iconV = {
    rest: { rotate: 0, rotateY: 0, x: 0, y: 0, scale: 1, transition: { duration: 0.3 } },
    hover: act.icon,
  };
  const ringV = {
    rest: { opacity: 0, scale: 1 },
    hover: { opacity: [0.7, 0], scale: [1, 1.9], transition: loop({ duration: 1.1, ease: 'easeOut' }) },
  };

  return (
    <motion.div
      className="scene-badge"
      style={{ left: `${b.x}%`, top: `${b.y}%`, width: b.size, height: b.size, color: b.color, x: px, y: py }}
      initial={{ opacity: 0, z: 0 }}
      animate={{ opacity: 1, z: [b.z, b.z + 26, b.z] }}
      transition={{
        opacity: { duration: 0.8, delay: 0.5 + i * 0.12 },
        z: { duration: b.dur, delay: b.delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    >
      <motion.div
        className="scene-badge-face"
        style={{ '--glow': b.color }}
        variants={faceV}
        initial="rest"
        animate="rest"
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
      >
        <motion.span className="badge-ring" variants={ringV} />
        <motion.span className="badge-icon" variants={iconV}>
          <Icon size={b.size * 0.5} />
        </motion.span>
      </motion.div>
      <span className="badge-label">{b.name}</span>
    </motion.div>
  );
};

export const HeroScene = () => {
  const [active, setActive] = useState(false);
  const [chipHover, setChipHover] = useState(false);

  // Mouse position, normalised to -1..1 and smoothed with a spring.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 16 });
  const sy = useSpring(my, { stiffness: 70, damping: 16 });

  // Stronger plane tilt than before.
  const rotateX = useTransform(sy, [-1, 1], [68, 48]);
  const rotateZ = useTransform(sx, [-1, 1], [-58, -32]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onEnter = () => setActive(true);
  const onLeave = () => { setActive(false); mx.set(0); my.set(0); };

  return (
    <div
      className={`hero-scene${active ? ' is-active' : ''}`}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <motion.div className="scene-stage" style={{ rotateX, rotateZ }}>
        <div className="scene-grid" />

        {tiles.map((t, i) => (
          <motion.div
            key={i}
            className="scene-tile"
            style={{ left: `${t.x}%`, top: `${t.y}%`, width: `${t.w}%`, height: `${t.h}%` }}
            variants={{
              rest: { z: 0, transition: { type: 'spring', stiffness: 200, damping: 18 } },
              hover: { z: 26, transition: { type: 'spring', stiffness: 200, damping: 14 } },
            }}
            initial="rest"
            animate="rest"
            whileHover="hover"
          >
            {[0, 1, 2].map(n => (
              <motion.span
                key={n}
                variants={{
                  rest: { y: 0, background: 'rgba(255,255,255,0.06)' },
                  hover: { y: [0, -8, 0], background: 'rgba(255,255,255,0.28)', transition: { duration: 0.6, delay: n * 0.12, repeat: Infinity, repeatDelay: 0.4 } },
                }}
              />
            ))}
          </motion.div>
        ))}

        {/* Vortex + orbiting dots */}
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
          <div className="orbit orbit-1"><i /></div>
          <div className="orbit orbit-2"><i /></div>
        </div>

        {badges.map((b, i) => (
          <Badge key={b.name} b={b} i={i} sx={sx} sy={sy} />
        ))}

        <motion.div
          className="scene-chip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, z: [30, 46, 30] }}
          whileHover={{ scale: 1.15, rotate: -4 }}
          onHoverStart={() => setChipHover(true)}
          onHoverEnd={() => setChipHover(false)}
          transition={{
            opacity: { duration: 0.8, delay: 1 },
            z: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {chipHover ? "hi, I'm Oshan 👋" : 'hello world!'}
        </motion.div>
      </motion.div>
    </div>
  );
};
