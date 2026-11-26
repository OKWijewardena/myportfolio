import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { badges, actions, spring, loop } from './HeroScene';
import profile from '../assets/img/profile.png';

const ease = [0.22, 1, 0.36, 1];

// Where each tech badge floats around the portrait (percent of the frame),
// and how strongly it reacts to the mouse (depth).
const layout = {
  'React':      { left: 2,  top: 12, size: 76, depth: 1.0, dur: 5.5, delay: 0 },
  'TypeScript': { left: 84, top: 20, size: 64, depth: 0.8, dur: 6.5, delay: 0.6 },
  'Next.js':    { left: -3, top: 46, size: 58, depth: 0.7, dur: 6,   delay: 1.1 },
  'Node.js':    { left: 88, top: 50, size: 54, depth: 0.9, dur: 7,   delay: 0.3 },
  'Flutter':    { left: 8,  top: 76, size: 50, depth: 0.6, dur: 6.8, delay: 0.9 },
  'Python':     { left: 82, top: 78, size: 50, depth: 0.5, dur: 7.4, delay: 1.5 },
};

const FloatBadge = ({ b, i, sx, sy }) => {
  const l = layout[b.name];
  const px = useTransform(sx, [-1, 1], [-40 * l.depth, 40 * l.depth]);
  const py = useTransform(sy, [-1, 1], [-30 * l.depth, 30 * l.depth]);
  const { Icon } = b;
  const act = actions[b.action];

  const faceV = {
    rest: { scale: 1, rotateY: 0, transition: spring },
    hover: { ...act.face, z: 0, transition: spring },
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
      className="portrait-badge"
      style={{ left: `${l.left}%`, top: `${l.top}%`, width: l.size, height: l.size, color: b.color, x: px, y: py }}
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.9 + i * 0.12 }}
    >
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: l.dur, delay: l.delay, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        <motion.div
          className="scene-badge-face"
          style={{ '--glow': b.color, transformPerspective: 600 }}
          variants={faceV}
          initial="rest"
          animate="rest"
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
        >
          <motion.span className="badge-ring" variants={ringV} />
          <motion.span className="badge-icon" variants={iconV}>
            <Icon size={l.size * 0.5} />
          </motion.span>
        </motion.div>
        <span className="badge-label">{b.name}</span>
      </motion.div>
    </motion.div>
  );
};

export const HeroPortrait = () => {
  const [active, setActive] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 16 });
  const sy = useSpring(my, { stiffness: 60, damping: 16 });

  // The photo drifts slightly against the cursor and turns toward it.
  const photoX = useTransform(sx, [-1, 1], [14, -14]);
  const photoY = useTransform(sy, [-1, 1], [8, -8]);
  const photoRotY = useTransform(sx, [-1, 1], [-7, 7]);
  const ringX = useTransform(sx, [-1, 1], [-22, 22]);
  const ringY = useTransform(sy, [-1, 1], [-16, 16]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => { setActive(false); mx.set(0); my.set(0); };

  return (
    <div
      className={`hero-portrait${active ? ' is-active' : ''}`}
      onMouseMove={onMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={onLeave}
    >
      {/* Backdrop: breathing glow + slowly rotating rings (they shift opposite the photo) */}
      <motion.div className="portrait-backdrop" style={{ x: ringX, y: ringY }}>
        <div className="portrait-glow" />
        <svg viewBox="0 0 400 400" className="portrait-rings">
          <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1" strokeDasharray="3 7" className="ring-a" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(108,99,255,0.35)" strokeWidth="1" className="ring-b" />
          <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="1 6" className="ring-a" />
        </svg>
      </motion.div>

      {/* Photo: rises in with a blur-to-sharp reveal, then floats gently */}
      <motion.div
        className="portrait-photo-wrap"
        style={{ x: photoX, y: photoY, rotateY: photoRotY, transformPerspective: 1100 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 90, scale: 0.94, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.3, ease }}
        >
          <motion.img
            src={profile}
            alt="Oshan Wijewardena"
            className="portrait-photo"
            draggable={false}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {badges.map((b, i) => (
        <FloatBadge key={b.name} b={b} i={i} sx={sx} sy={sy} />
      ))}
    </div>
  );
};
