import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/icons8-github.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Contact = () => {
  const sectionRef = useRef(null);
  const initial = { firstName: '', lastName: '', email: '', phone: '', message: '' };
  const [form, setForm] = useState(initial);
  const [btnText, setBtnText] = useState('Send Message');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll('.fade-in-up');
    items?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.08}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

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
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="container-custom">
        <div className="section-header fade-in-up">
          <div className="section-eyebrow">Work with me</div>
          <h2 className="section-title">Get In <span>Touch</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '32px', alignItems: 'start' }}>
          <div className="contact-info-card fade-in-up">
            <h3>Let's build something great together</h3>
            <p>
              I'm always open to new opportunities, freelance projects, or just a great conversation
              about tech. Drop me a message and I'll reply within 24 hours.
            </p>

            <div className="contact-social-links">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer" className="contact-social-link">
                  <img src={s.icon} alt={s.label} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-card fade-in-up">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={e => update('firstName', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={e => update('lastName', e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={e => update('email', e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="tel"
                    placeholder="Phone (optional)"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project…"
                  rows={6}
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  required
                />
              </div>
              <button
                className="form-submit"
                type="submit"
                disabled={btnText !== 'Send Message'}
              >
                {btnText}
              </button>
              {status && (
                <div className={`status-msg ${status.ok ? 'success' : 'error'}`}>
                  {status.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};