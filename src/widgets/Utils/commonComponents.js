import React from "react";
import "../../styles/ExperincePage/experiencePage.css";
import ReadMore from "../Utils/readMore";
import {
  captialOneProjectDescription,
  captialOneYearsOfExpereince,
  companyNameFour,
  companyNameOne,
  companyNameThree,
  companyNameTwo,
  EYProjectDescription,
  EYYearsOfExpereince,
  HPProjectDescription,
  HPYearsOfExpereince,
  wealusProjectOneDescription,
  wealusProjectTwoDescription,
  wealusYearsOfExpereince,
} from "../Utils/commonUtils";

const ExpereinceDescription = () => {
  return (
    <div className="experience-container-tab" id="example-collapse-text">
      {/**Experience 1## Captial one starts*/}
      <div className="experience-container-tab-1">
        <header className="experience-container-tab-year">
          {captialOneYearsOfExpereince}
        </header>
        <h1 className="experience-container-tab-company">{companyNameFour}</h1>
        {/**Experience 1##  Captial one description */}
        <h1 className="experience-container-tab-company header">
          Data Analytics and reporting on Snowflake
        </h1>
        {/**Project 1 Captial One description*/}
        <ReadMore text={captialOneProjectDescription}></ReadMore>
        {/**Experience 1##  Captial one keybuttons */}
        <div className="experience-container-tab-company-keybuttons">
          <span className="experience-container-tab-company-keybuttons snowflake">
            Snowflake
          </span>
          <span className="experience-container-tab-company-keybuttons sql">
            SQL
          </span>
          <span className="experience-container-tab-company-keybuttons tableau">
            Tableau
          </span>
          <span className="experience-container-tab-company-keybuttons qa-performance">
            QA performance
          </span>
        </div>
      </div>
      {/**Experience 1##  Captial one experience ends */}

      {/**Experience 2## Wealus Technology Solutions Pvt Ltd starts */}
      <div className="experience-container-tab-1">
        <header className="experience-container-tab-year">
          {wealusYearsOfExpereince}
        </header>
        <h1 className="experience-container-tab-company">{companyNameThree}</h1>
        {/**Experience 2## Wealus Technology Solutions Pvt Ltd description */}
        <h1 className="experience-container-tab-company header">
          Big Data Analytics and Reporting on AWS
        </h1>
        {/**Project 2 Wealus Technology Solutions Pvt Ltd description*/}
        <ReadMore text={wealusProjectOneDescription}></ReadMore>

        {/**Experience 2## Wealus Technology Solutions Pvt Ltd description */}
        <h1 className="experience-container-tab-company header">
          Data Lake Implementation and Optimization on AWS
        </h1>
        {/**Project 2 Wealus Technology Solutions Pvt Ltd description*/}
        <ReadMore text={wealusProjectTwoDescription}></ReadMore>
        {/**Experience 2## Wealus Technology Solutions Pvt Ltd keybuttons */}
        <div className="experience-container-tab-company-keybuttons">
          <span className="experience-container-tab-company-keybuttons snowflake">
            Snowflake
          </span>
          <span className="experience-container-tab-company-keybuttons sql">
            SQL
          </span>
          <span className="experience-container-tab-company-keybuttons tableau">
            Business Insights
          </span>
          <span className="experience-container-tab-company-keybuttons qa-performance">
            ETL automation
          </span>
          <span className="experience-container-tab-company-keybuttons qa-performance">
            AWS
          </span>
          <span className="experience-container-tab-company-keybuttons qa-performance">
            Phyton
          </span>
        </div>
      </div>
      {/**Experience 2## Wealus Technology Solutions Pvt Ltd ends */}

      {/**Experience 3## Ernst & Young LLP starts */}
      <div className="experience-container-tab-1">
        <header className="experience-container-tab-year">
          {EYYearsOfExpereince}
        </header>
        <h1 className="experience-container-tab-company">{companyNameTwo}</h1>
        {/**Experience 3## Ernst & Young LLP description */}
        <h1 className="experience-container-tab-company header">
          Tax Calculation and Reporting (ETL Process)
        </h1>
        {/**Project 3 Ernst & Young LLPe description*/}
        <ReadMore text={EYProjectDescription}></ReadMore>
        {/**Experience 3## Ernst & Young LLP keybuttons */}
        <div className="experience-container-tab-company-keybuttons">
          <span className="experience-container-tab-company-keybuttons snowflake">
            Tableau dashboards
          </span>
          <span className="experience-container-tab-company-keybuttons sql">
            ETL processes
          </span>
          <span className="experience-container-tab-company-keybuttons tableau">
            SQL
          </span>
          <span className="experience-container-tab-company-keybuttons qa-performance">
            ETL automation
          </span>
          <span className="experience-container-tab-company-keybuttons qa-performance">
            Snowflake
          </span>
        </div>
      </div>
      {/**Experience 3## Ernst & Young LLP ends */}

      {/**Experience 4## HP starts */}
      <div className="experience-container-tab-1">
        <header className="experience-container-tab-year">
          {HPYearsOfExpereince}
        </header>
        <h1 className="experience-container-tab-company">{companyNameOne}</h1>
        {/**Experience 3## Ernst & Young LLP description */}
        <h1 className="experience-container-tab-company header">
          Legal Operations and Audit
        </h1>
        {/**Project 4 Hewlett-Packard Inc., description*/}
        <ReadMore text={HPProjectDescription}></ReadMore>
        {/**Experience 3## Ernst & Young LLP keybuttons */}
        <div className="experience-container-tab-company-keybuttons">
          <span className="experience-container-tab-company-keybuttons snowflake">
            Advanced Excel
          </span>
          <span className="experience-container-tab-company-keybuttons sql">
            SAP ERP
          </span>
        </div>
      </div>
      {/**Experience 4## HP ends */}
    </div>
  );
};

export { ExpereinceDescription };
