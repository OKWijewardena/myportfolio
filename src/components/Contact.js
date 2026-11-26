import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const ease = [0.22, 1, 0.36, 1];
const vp = { once: false, amount: 0.25 };

// Heading: letters drop in one by one with a bounce.
const headV = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const charV = {
  hidden: { opacity: 0, y: -60, rotate: -18 },
  show: { opacity: 1, y: 0, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 12 } },
};
const eyebrowV = {
  hidden: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};
const Chars = ({ text }) => (
  <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
    {text.split('').map((c, i) => (
      <motion.span key={i} variants={charV} style={{ display: 'inline-block' }}>{c}</motion.span>
    ))}
  </span>
);

// Info card swings in from the left, content follows from the left.
const infoV = {
  hidden: { opacity: 0, x: -110, rotateY: 28 },
  show: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.9, ease, staggerChildren: 0.1, delayChildren: 0.3 } },
};
const itemL = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

// Form card swings in from the right, fields fill in one by one.
const formV = {
  hidden: { opacity: 0, x: 110, rotateY: -28 },
  show: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.9, ease, delay: 0.15, staggerChildren: 0.09, delayChildren: 0.45 } },
};
const fieldV = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
};
const submitV = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 320, damping: 14 } },
};

export const Contact = () => {
  const initial = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [form, setForm] = useState(initial);
  const [btnText, setBtnText] = useState('Send Message');
  const [status, setStatus] = useState(null);

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText('Sending…');
    try {
      const res = await emailjs.send(
        'service_2m00ra8',
        'template_8etz0yb',
        form,
        'SKajrO3qsUzptAUzX'
      );
      if (res.status === 200) {
        setStatus({ ok: true, msg: '✓ Message sent! I\'ll get back to you soon.' });
        setForm(initial);
      } else throw new Error();
    } catch {
      setStatus({ ok: false, msg: '✕ Something went wrong. Please try again.' });
    } finally {
      setBtnText('Send Message');
    }
  };

  const socials = [
    { href: 'https://www.linkedin.com/in/oshan-wijewardena-853995217/', icon: navIcon1, label: 'LinkedIn — Connect professionally' },
    { href: 'https://github.com/OKWijewardena', icon: navIcon2, label: 'GitHub — See my code' },
    { href: 'https://www.instagram.com/oshanwijewardhane', icon: navIcon3, label: 'Instagram — Follow me' },
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="container-custom">
        <motion.div
          className="section-header"
          variants={headV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div className="section-eyebrow" variants={eyebrowV}>Work with me</motion.div>
          <h2 className="section-title">
            <Chars text="Get" />{' '}<Chars text="In" />{' '}<span><Chars text="Touch" /></span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '32px', alignItems: 'start' }}>
          <motion.div
            className="reveal-fill"
            variants={infoV}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            style={{ transformPerspective: 1200 }}
          >
          <div className="contact-info-card">
            <motion.h3 variants={itemL}>Let's build something great together</motion.h3>
            <motion.p variants={itemL}>
              I'm always open to new opportunities, freelance projects, or just a great conversation
              about tech. Drop me a message and I'll reply within 24 hours.
            </motion.p>

            <motion.div className="contact-social-links" variants={itemL}>
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="contact-social-link">
                  <img src={s.icon} alt={s.label} />
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>
          </motion.div>

          <motion.div
            className="reveal-fill"
            variants={formV}
            initial="hidden"
            whileInView="show"
            viewport={vp}
            style={{ transformPerspective: 1200 }}
          >
          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <motion.div className="form-group" variants={fieldV}>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={e => update('firstName', e.target.value)}
                    required
                  />
                </motion.div>
                <motion.div className="form-group" variants={fieldV}>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={e => update('lastName', e.target.value)}
                    required
                  />
                </motion.div>
              </div>
              <div className="form-row">
                <motion.div className="form-group" variants={fieldV}>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    required
                  />
                </motion.div>
                <motion.div className="form-group" variants={fieldV}>
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                  />
                </motion.div>
              </div>
              <motion.div className="form-group" variants={fieldV}>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project…"
                  rows={6}
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  required
                />
              </motion.div>
              <motion.div variants={submitV}>
                <button
                  className="form-submit"
                  type="submit"
                  disabled={btnText !== 'Send Message'}
                >
                  {btnText}
                </button>
              </motion.div>
              {status && (
                <div className={`status-msg ${status.ok ? 'success' : 'error'}`}>
                  {status.msg}
                </div>
              )}
            </form>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};