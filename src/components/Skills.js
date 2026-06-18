import { useEffect, useRef } from 'react';
import { MdCode } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';
import { MdPhoneIphone } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { MdChecklist } from 'react-icons/md';
import { MdSmartToy } from 'react-icons/md';

export const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    const items = sectionRef.current?.querySelectorAll('.fade-in-up');
    items?.forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.07}s`;
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: <MdCode size={28} />,
      title: 'Programming Languages',
      tags: ['JavaScript', 'TypeScript', 'Python', 'Java', 'PHP'],
    },
    {
      icon: <TbWorldWww size={28} />,
      title: 'Web Technologies',
      tags: ['React.js', 'Next.js', 'Node.js', 'Angular', 'Redux', 'GraphQL', 'Laravel', 'Django', 'Flask'],
    },
    {
      icon: <MdPhoneIphone size={28} />,
      title: 'Mobile Development',
      tags: ['Flutter', 'React Native'],
    },
    {
      icon: <FaTools size={24} />,
      title: 'Tools & DevOps',
      tags: ['Git', 'Docker', 'AWS S3', 'DigitalOcean', 'CloudPanel', 'Jira'],
    },
    {
      icon: <FaDatabase size={24} />,
      title: 'Database Systems',
      tags: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
    },
    {
      icon: <MdChecklist size={28} />,
      title: 'Practices & Methodologies',
      tags: ['Agile', 'Unit Testing', 'REST APIs', 'Technical Documentation'],
    },
    {
      icon: <MdSmartToy size={28} />,
      title: 'AI & Integrations',
      tags: ['OpenAI API', 'Python ML', 'Strapi', 'EmailJS'],
    },
  ];

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <div className="container-custom">
        <div className="section-header fade-in-up">
          <div className="section-eyebrow">What I know</div>
          <h2 className="section-title">Skills & <span>Technologies</span></h2>
        </div>

        <div className="skill-grid">
          {skills.map((skill, i) => (
            <div className="skill-card fade-in-up" key={i}>
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.title}</h4>
              <div className="skill-tags">
                {skill.tags.map(tag => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};