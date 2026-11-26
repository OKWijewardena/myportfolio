import { motion } from 'framer-motion';
import { MdCode } from 'react-icons/md';
import { TbWorldWww } from 'react-icons/tb';
import { MdPhoneIphone } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { MdChecklist } from 'react-icons/md';
import { MdSmartToy } from 'react-icons/md';

const ease = [0.22, 1, 0.36, 1];

// Card: rises, un-blurs, then staggers its icon / title / tags.
const cardV = {
  hidden: { opacity: 0, y: 60, scale: 0.92, filter: 'blur(10px)' },
  show: (i = 0) => ({
    opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
    transition: { duration: 0.8, ease, delay: (i % 3) * 0.12, staggerChildren: 0.06, delayChildren: 0.25 + (i % 3) * 0.12 },
  }),
};
const iconV = {
  hidden: { opacity: 0, scale: 0, rotate: -35 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 260, damping: 14 } },
};
const titleV = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
};
const tagsV = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const tagV = {
  hidden: { opacity: 0, scale: 0.5, y: 10 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 380, damping: 16 } },
};

// Title words slide up out of a mask.
const wordV = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease } },
};
const headV = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export const Skills = () => {
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
    <section className="skills-section" id="skills">
      <div className="container-custom">
        <motion.div
          className="section-header"
          variants={headV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <motion.div
            className="section-eyebrow"
            variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}
          >
            What I know
          </motion.div>
          <h2 className="section-title">
            <span className="word-mask"><motion.span variants={wordV} style={{ display: 'inline-block', color: 'var(--text)' }}>Skills &amp;</motion.span></span>{' '}
            <span className="word-mask"><motion.span variants={wordV} style={{ display: 'inline-block' }}>Technologies</motion.span></span>
          </h2>
        </motion.div>

        <div className="skill-grid">
          {skills.map((skill, i) => (
            <motion.div
              className="reveal-fill"
              key={i}
              custom={i}
              variants={cardV}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="skill-card">
                <motion.div className="skill-icon" variants={iconV}>{skill.icon}</motion.div>
                <motion.h4 variants={titleV}>{skill.title}</motion.h4>
                <motion.div className="skill-tags" variants={tagsV}>
                  {skill.tags.map(tag => (
                    <motion.span className="skill-tag" variants={tagV} key={tag}>{tag}</motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};