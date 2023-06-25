import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSeciton';

function MainContent(){
    return(
        <div>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
        </div>
    )
}

export default MainContent;