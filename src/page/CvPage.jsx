import React from "react";
import "./CvPage.css";
import ProfileSection from "../components/sections/ProfileSection";
import HobbiesSection from "../components/sections/HobbiesSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";
import EducationSection from "../components/sections/EducationSection";

function CvPage() {
  return (
    <div className="cv-container">
      <div className="left-section">
        <ProfileSection />
        <HobbiesSection />
      </div>
      
      <div className="right-section">
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </div>
  );
}

export default CvPage;