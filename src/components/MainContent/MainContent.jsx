import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSeciton';
import ProjectsSection from './ProjectsSection';

function MainContent(){
    return(
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </div>
    )
}

export default MainContent;