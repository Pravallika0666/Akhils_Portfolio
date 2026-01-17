import React from "react";
import { useState } from "react";
import "../styles/TechnicalSkills/technicalSkills.css";
import { technicalSkills } from "./Utils/commonUtils";
import ReadMore from "./Utils/readMore";
import { ArrowOpenSvg, ArrowCloseSvg } from "./Utils/iconsUtils";

const TechnicalSkills = () => {
  const [opentechnicalSkillsBtn, settechnicalSkillsBtnOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="technicalSkills-container">
        {/**Desktop View code starts */}
        <div className="technicalSkills-container-desktop-view">
          <div className="technicalSkills-container-description">
            {/**Technical skills starts*/}
            <button className="technicalSkills-container-icon">
              Technical Skills
            </button>
            <div className="technicalSkills-container-description-tab">
              {/**Technical skills description*/}
              <ReadMore text={technicalSkills}></ReadMore>
            </div>
          </div>
        </div>
        {/**Desktop View code End */}

        {/**Mobile View code starts */}
        <div className="technicalSkills-container-mobile-view">
          <button
            className="technicalSkills-container-icon"
            onClick={() => settechnicalSkillsBtnOpen(!opentechnicalSkillsBtn)}
          >
            Technical Skills
            {/**arrow icon */}
            {!opentechnicalSkillsBtn ? (
              <ArrowOpenSvg />
            ) : (
              <ArrowCloseSvg />
            )}
          </button>
          {opentechnicalSkillsBtn ? (
            <div className="technicalSkills-container-description">
              {/**Technical skills starts*/}
              <div className="technicalSkills-container-description-tab">
                {/**Technical skills description*/}
                <ReadMore text={technicalSkills}></ReadMore>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TechnicalSkills;
