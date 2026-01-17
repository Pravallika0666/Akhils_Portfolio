import React from "react";
import { useState } from "react";
import "../styles/ExperincePage/experiencePage.css";
import { ArrowCloseSvg, ArrowOpenSvg } from "./Utils/iconsUtils";
import { ExpereinceDescription } from "./Utils/commonComponents";

const Experience = () => {
  const [openExperienceBtn, setExperienceBtnOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="experience-container">
        {/**Desktop View code starts */}
        <div className="experience-container-desktop-view">
          <button className="technicalSkills-container-icon">Expereince</button>
          <div className="experience-container-icon">

            <ExpereinceDescription />
          </div>
        </div>
        {/**Desktop View code End */}

        {/**Mobile view code starts */}
        <div className="experience-container-mobile-view">
          <button
            className="experience-container-icon"
            onClick={() => setExperienceBtnOpen(!openExperienceBtn)}
          >
            Experience
            {/**arrow icon */}
            {!openExperienceBtn ? <ArrowOpenSvg /> : <ArrowCloseSvg />}
          </button>
          {openExperienceBtn ? <ExpereinceDescription /> : ""}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Experience;
