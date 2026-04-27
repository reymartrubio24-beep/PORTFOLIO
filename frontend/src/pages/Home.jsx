import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStackExperience from '../components/TechStackExperience';
import Projects from '../components/Projects';
import CertificationsRecommendations from '../components/CertificationsRecommendations';
import MembershipSocials from '../components/MembershipSocials';
import Gallery from '../components/Gallery';
import ContactFooter from '../components/ContactFooter';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="bg-white dark:bg-black transition-colors duration-500 min-h-screen">
      <SEO 
        title="Rey-Dev | IT BOI " 
        description="A full-stack Web Developer specializing in JavaScript, Python, and PHP. Community builder and content creator." 
      />
      <Hero />
      <About />
      <TechStackExperience />
      <Projects />
      <CertificationsRecommendations />
      <MembershipSocials />
      <Gallery />
      <ContactFooter />
    </div>
  );
};

export default Home;
