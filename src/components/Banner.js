import { useState, useEffect, useRef } from 'react';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120);
  const toRotate = ['Full Stack Developer', 'Mobile App Developer', 'SaaS Architect'];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(n => n + 1);
      setDelta(120);
    } else if (isDeleting) {
      setDelta(60);
    } else {
      setDelta(100 + Math.random() * 40);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="banner" id="home">
      <div className="banner-grid" />
      <div className="banner-orb banner-orb-1" />
      <div className="banner-orb banner-orb-2" />
      <div className="banner-orb banner-orb-3" />

      <div className="container-custom" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div className="banner-content">
            <div className="tagline-pill">Available for freelance work</div>

            <h2 className="banner-title">
              <div className="name">Hi, I'm Oshan</div>
              <div className="role-wrap">
                Software Engineer
              </div>
            </h2>

            <p className="banner-desc">
              I am a adapted software engineer with a strong background in full-stack web development, specializing in SaaS applications and mobile applications. Proficient in JavaScript, TypeScript, Python, and PHP, I excel in web technologies like React.js and Node.js and mobile technologies like Flutter and React Native. My skills in code quality, performance optimization, and collaboration enable me to contribute effectively while continuously seeking professional growth.
            </p>

            <div className="banner-cta">
              <button className="btn-primary-custom" onClick={scrollToContact}>
                Let's Connect
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a href="#projects" className="btn-ghost-custom">
                View Projects
              </a>
            </div>

            <div className="stats-row">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>

          <div className="banner-image-wrap">
            <img src={headerImg} alt="Oshan Wijewardena" />
          </div>
        </div>
      </div>
    </section>
  );
};