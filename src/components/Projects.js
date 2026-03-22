import { useState, useEffect, useRef } from 'react';
import proj1 from '../assets/img/1.png';
import proj2 from '../assets/img/2.png';
import proj3 from '../assets/img/3.png';
import proj4 from '../assets/img/4.png';
import proj5 from '../assets/img/5.png';
import proj6 from '../assets/img/6.jpg';
import proj7 from '../assets/img/7.jpg';
import proj8 from '../assets/img/8.jpg';
import proj9 from '../assets/img/9.jpg';
import proj10 from '../assets/img/10.jpg';
import proj11 from '../assets/img/11.jpg';
import proj12 from '../assets/img/12.jpg';
import proj13 from '../assets/img/13.jpeg';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('industrial');
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
  }, [activeTab]);

  const tabs = [
    { id: 'industrial', label: 'Industry' },
    { id: 'university', label: 'University' },
    { id: 'research', label: 'Research' },
  ];

  const projectData = {
    industrial: [
      { title: 'Thinkable', description: 'Event management platform with dual user roles — hosts and attendees. Hosts request admin approval, then list events with details and ticketing. Built with Strapi + Node.js backend and Next.js frontend.', imgUrl: proj3, projectLink: 'https://github.com/OKWijewardena/Thinkable_Frontend.git' },
      { title: 'SmartCo', description: 'SaaS platform for a Qatar-based company. Supports admin, employee, super admin, and customer roles. Built with Node.js + Express backend and React.js with Material UI.', imgUrl: proj1, projectLink: 'https://github.com/OKWijewardena/SmarCo.git' },
      { title: 'LocalShop', description: 'SaaS web app that lets customers create and manage their own online stores. Implemented with PHP Laravel.', imgUrl: proj2, projectLink: 'https://app.localshop.lk/login' },
      { title: 'SmartCo Mobile', description: 'Flutter mobile app for SmartCo Qatar customers, consuming Express.js APIs for data handling.', imgUrl: proj5, projectLink: 'https://github.com/OKWijewardena/SmartCo_monile_app.git' },
      { title: 'Ministore', description: 'SaaS platform enabling customers to build and run their own online stores, built with PHP Laravel.', imgUrl: proj4, projectLink: 'https://app.ministore.lk/login' },
      { title: 'AI Code Generator', description: 'Python + OpenAI powered app that generates style-matched code snippets based on user requirements.', imgUrl: proj6, projectLink: 'https://github.com/OKWijewardena/Table-converter-App.git' },
      { title: 'AI Table Creator', description: 'Python + OpenAI app that auto-generates structured tables from natural language descriptions.', imgUrl: proj6, projectLink: 'https://github.com/OKWijewardena/Table-converter-App.git' },
      { title: 'PDF Q&A App', description: 'AI-powered tool that reads PDF files and answers multiple questions using OpenAI and Python.', imgUrl: proj6, projectLink: 'https://github.com/OKWijewardena/PDF-Questions-App.git' },
      { title: 'Social Media AI', description: 'Python + OpenAI app that generates complete social media marketing strategies from a brief.', imgUrl: proj6, projectLink: 'https://github.com/OKWijewardena/Social-media-marketing-app.git' },
    ],
    university: [
      { title: 'Institute Management (MERN)', description: 'Class management system for a coaching institute built with MongoDB, Express, React, and Node.js.', imgUrl: proj7, projectLink: 'https://github.com/OKWijewardena/Institute-Management-System-MERN' },
      { title: 'Tea Collecting App', description: 'Finance management module for a tea factory using the MERN stack.', imgUrl: proj8, projectLink: 'https://github.com/OKWijewardena/Tea-Collecting-Website' },
      { title: 'IoT Button Mobile App', description: 'Doctor/nurse calling system connected to a physical IoT button, built with Java and Firebase in Android Studio.', imgUrl: proj9, projectLink: 'https://github.com/OKWijewardena/IotButtonMobileApp.git' },
      { title: 'Hotel Event Planner', description: 'Hotel event planning system built with Java and Apache Tomcat.', imgUrl: proj10, projectLink: 'https://github.com/OKWijewardena/Hotel-Management.git' },
      { title: 'AutoCare Mobile App', description: 'Supplier item management for a vehicle service and spare parts system, built with Java and SQLite.', imgUrl: proj11, projectLink: 'https://github.com/OKWijewardena/AutoCare-MAD-Project-.git' },
      { title: 'SoundSpace Store', description: 'Musical instruments e-commerce store built with HTML, CSS, JavaScript, and PHP.', imgUrl: proj12, projectLink: 'https://github.com/OKWijewardena/SoundSpace.git' },
    ],
    research: [
      { title: 'ML Movie Casting App', description: 'Machine learning web application using Python Flask as the backend and React.js as the frontend for intelligent movie casting recommendations.', imgUrl: proj13, projectLink: 'https://github.com/OKWijewardena/Movie-Casting-App.git' },
    ],
  };

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      <div className="container-custom">
        <div className="section-header fade-in-up">
          <div className="section-eyebrow">What I've built</div>
          <h2 className="section-title">Featured <span>Projects</span></h2>
        </div>

        <div className="tab-nav fade-in-up">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projectData[activeTab].map((project, i) => (
            <div className="project-card fade-in-up" key={i}>
              <div className="project-img-wrap">
                <img src={project.imgUrl} alt={project.title} />
                <div className="project-img-overlay" />
              </div>
              <div className="project-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link-btn"
                >
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};