import React from "react";
import { useState } from "react";
import "../styles/Education/education.css";
import {
  degreeCollegeCourse,
  degreeCollegeName,
  degreeCourseWork,
  mastersCollegeCourse,
  mastersCollegeName,
  mastersCourseWork,
} from "./Utils/commonUtils";
import { ArrowCloseSvg, ArrowOpenSvg } from "./Utils/iconsUtils";

const Education = () => {
  const [openeducationBtn, seteducationBtnOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="education-container">
        {/**Desktop view starts */}
        <div className="education-container-desktop-view">
          <button
            className="education-container-icon"
            onClick={() => seteducationBtnOpen(!openeducationBtn)}
          >
            Education
          </button>
          <div className="education-container">
            {/**Education## UTD*/}
            <div className="education-container-tab">
              <h1 className="education-container-tab-collegeName">
                {/**Education## UTD collegeName and college course*/}
                {mastersCollegeName} - <span>{mastersCollegeCourse}</span>
              </h1>
              <h1 className="education-container-tab-collegeName">
                {/**Education## UTD Course work*/}
                CourseWork : <span>{mastersCourseWork}</span>
              </h1>
            </div>

            {/**Education## Bangalore University*/}
            <div className="education-container-tab">
              <h1 className="education-container-tab-collegeName">
                {/**Education## Bangalore University collegeName and college course*/}
                {degreeCollegeName} - <span>{degreeCollegeCourse}</span>
              </h1>
              <h1 className="education-container-tab-collegeName">
                {/**Education## Bangalore University Course work*/}
                CourseWork : <span>{degreeCourseWork}</span>
              </h1>
            </div>
          </div>
        </div>
        {/**Desktop view ends */}

        {/**Mobile view starts */}
        <div className="education-container-mobile-view">
          <button
            className="education-container-icon"
            onClick={() => seteducationBtnOpen(!openeducationBtn)}
          >
            Education
            {/**arrow icon */}
            {!openeducationBtn ? (
              <ArrowOpenSvg />
            ) : (
              <ArrowCloseSvg />
            )}
          </button>
          {openeducationBtn ? (
            <div className="education-container">
              {/**Education## UTD*/}
              <div className="education-container-tab">
                <h1 className="education-container-tab-collegeName">
                  {/**Education## UTD collegeName and college course*/}
                  {mastersCollegeName} - <span>{mastersCollegeCourse}</span>
                </h1>
                <h1 className="education-container-tab-collegeName">
                  {/**Education## UTD Course work*/}
                  CourseWork : <span>{mastersCourseWork}</span>
                </h1>
              </div>

              {/**Education## Bangalore University*/}
              <div className="education-container-tab">
                <h1 className="education-container-tab-collegeName">
                  {/**Education## Bangalore University collegeName and college course*/}
                  {degreeCollegeName} - <span>{degreeCollegeCourse}</span>
                </h1>
                <h1 className="education-container-tab-collegeName">
                  {/**Education## Bangalore University Course work*/}
                  CourseWork : <span>{degreeCourseWork}</span>
                </h1>
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

export default Education;
