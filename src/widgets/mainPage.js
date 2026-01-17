import React from "react";
import ProfileHeaderComponent from "./ProfileHeaderComponent";
import Experience from "./Experience";
import BannerComponent from "./BannerComponent";
import FooterComponent from "./footer";
import TechnicalSkills from "./technicalSkillsComponent";
import Education from "./educationComponent";

const MainPage = () => {
  return (
    <React.Fragment>
      <div className="container">
        {/**Profile image and profile name, designation */}
        <ProfileHeaderComponent />
        {/*Banner image*/}
        <BannerComponent />

        <div className="container-page">
          {/**Technical skills */}
          <TechnicalSkills />

          {/**Experience */}
          <Experience />

          {/**Education */}
          <Education />
        </div>

        {/**Footer */}
      </div>
      <div className="container-mobile">
        {/*Banner image*/}
        <BannerComponent />

        <div className="container-page">
          {/**Profile image and profile name, designation */}
          <ProfileHeaderComponent />

          {/**Technical skills */}
          <TechnicalSkills />

          {/**Experience */}
          <Experience />

          {/**Education */}
          <Education />
        </div>

        {/**Footer */}
      </div>
      <FooterComponent />
    </React.Fragment>
  );
};

export default MainPage;
