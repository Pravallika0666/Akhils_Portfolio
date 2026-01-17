const renderBoldText = (text) => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="bold-text">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

const profileFirstName = "Akhil"; //firstName
const profileLastName = "Veluru"; //lastName
const bannerDesignation = "Senior Data Engineer"; // Designation
const profileLocation = "Plano, TX"; //Location
//Summary
const profileTagLine =
  "Data-driven professional with an MSc in Business Analytics and 5+ years of experience transforming raw data into actionable insights. Proficient in end-to-end data solutions, from extraction and modeling to visualization, with expertise in optimizing workflows and collaborating across teams to drive business impact.";

//Company name and designation respectively
const companyNameOne = "Hewlett-Packard Inc.,, Advanced Associate"; // HP 
const companyNameTwo = "Ernst & Young LLP, Procurement Ops Associate"; //EY
const companyNameThree = "Wealus Technology Solutions Pvt Ltd, Data Consultant"; //Wealus
const companyNameFour = "Capital One, Senior Data Analyst"; // Captial One
//Company years of expereinces
const HPYearsOfExpereince = "2016 – 2017"; //HP
const EYYearsOfExpereince = "2015 – 2016"; //EY
const wealusYearsOfExpereince = "2018 – 2021"; //Wealus
const captialOneYearsOfExpereince = "2024 – Present"; //CaptialOne

//Captial One Project Description
const captialOneProjectDescription =
  "Developed and managed QA performance metrics using **Snowflake, driving insights** into customer engagement and operational efficiency. Monitored and managed daily and weekly refreshes of 10 key datapoint reports using Snowflake, **ensuring timely updates of performance metrics and addressing refresh failures to maintain report availability**. **Optimized SQL scripts** within Snowflake to enhance query performance,reducing refresh times and improving the overall efficiency of performance dashboards tracking QA associates’ contribution to auto loan processes **Developed custom dashboards using Tableau** providing business stake holders and operations managers with actionable insights into QA performance, customer satisfaction, and key operational metrics.Executed adhoc SQL data transformations in Snowflake, enabling the business to adjust performance metrics and analyzedata based on real-time requirements from the auto loan customer service team. Collaborated cross-functionally with QA managers, operations teams,and business stakeholders to align data outputs and dashboards with business objectives, ensuring effective monitoring of associate performance. Ensured **data accuracy and validation, conducting regular audits of data pipelines and performance metrics** stored in Snowflake to guarantee high-quality insights.";
//Wealus Project description One
const wealusProjectOneDescription = "Analyzed Wayfair’s sales data using SQL on Snowflake to identify key revenue drivers and customer behavior patterns. Utilized **SAS for advanced statistic alanalysis**, such as regression models and trend analysis, to forecast sales performance and identify key factors influencing customer behavior. Designed and developed interactive Tableau dashboards to visually represent keymetrics and KPIs, offering stakeholders actionable insights on product trends, sales growth, and customer satisfaction. Responded to adhoc requests from stakeholders by performing detailed analysis on sales performance and customer purchasing patterns, delivering data-driven recommendations in a timely manner. Wrote and optimized complex SQL queries on Snowflake to ensure fast data retrieval and efficient data handling for dashboards and reporting purposes. Used **Python for custom data transformation and manipulation**, automating routine analytical tasks and processing data for more advanced analysis and reporting. Worked closely with **business teams, product managers, and other analysts** to understand their needs and translated business questions into data queries and actionable insights. Developed regular reporting on key sales metrics,customer acquisition,and product lifecycles, enabling business leaders to track and measure performance against goals. Ensured the accuracy of sales data through regular validation checks, using a mix of SQL and SAS to verify data quality and integrity.";
//Wealus Project Description two
const wealusProjectTwoDescription = "Contributed to the migration of a client's data infrastructure from an on-premises network to AWS, integrating existing tools like Alteryx and Tableau with AWS services to improve data processing and analytics. Assisted in designing a secure architecture, including VPN setup for data transfer and deployment of Alteryx on EC2 instances, utilizing AWS services such as **S3, Glue, and Athena for data storage and ETL processes**. Worked closely with the team to adapt and optimize the client's existing ETL logic for the cloud environment, ensuring continuity of workflows with enhanced features. Participated in the implementation of a comprehensive BI solution, focusing on security, governance, and audit ability using AWS tools like KMS, SNS, CloudWatch, Lambda, and IAM, enhancing overall performance and data security. Played a key role in the year-long project, contributing to a successful transition to a **scalable, cloud-based system, enabling advanced analytical insights and more efficient data management**. ";
//EY Project Description
const EYProjectDescription = "Led the development of comprehensive tax preparation status reports, utilizing advanced data analysis and visualization techniques in Tableau to enhance decision-making for client engagement teams. Managed critical aspects of the ETL process, focusing on the accurate and efficient handling of large-scale financial data for streamlined tax reporting. Performed in-depth **financial data analysis, leveraging SQL for complex data querying, transformation, and insights extraction**.  Communicated extensively with Client Engagement Management teams, providing detailed analytical reports and insights to support strategic decisions. Coordinated with **HM Revenue & Customs(HMRC) for tax notice discrepancies resolution, ensuring data accuracy and compliance through meticulous analysis and reporting**. ";
//HP Project description
const HPProjectDescription = "Conducted comprehensive audits and analyses of legal agreements with U.S.lawfirms, utilizing advanced **Microsoft Excel algorithms and SAP-based ERP applications**. This involved identifying discrepancies in legal documents and payments, leading to the implementation of cost-saving strategies. My meticulous auditing and analytical approach resulted in uncovering substantial financial discrepancies. Collaborated with vendors to establish a data-driven item cataloging process, enhancing supply chain analytics. Additionally, generated **ad-hoc reports for senior management**, providing vital insights into contract compliance and financial operations, which contributed to multi-million-dollar savings for Hewlett-Packard.";
//Technical skills
const technicalSkills = "Proficient in Python and R, SQL (MySQL, PostgreSQL), Snowflake, Redshift, and NoSQL (Dynamo DB), alongside big data technologies like Spark, Airflow, and Kafka. Skilled in Excel, Tableau for visualization, experienced with Microsoft Azure and AWS, and familiar with Agile (Scrum) methodologies. Industry knowledge includes Financial Services, Investment Management, automotive, and manufacturing.";
//Education Details 
const mastersCollegeName = "The University of Texas at Dallas"; //UTD
const mastersCollegeCourse = "MSc in Business Analytics"; //Course in UTD
const mastersCourseWork = "Business Analytics with R, Programming for Data Science, Database Management Systems, BigData Analytics, Spreadsheet Analytics, Predictive analytics, Prescriptive Analytics"; //CourseWork in UTD
const degreeCollegeName = "Bangalore University"; //Bangalore University
const degreeCollegeCourse = "Bachelors in Business Management"; // Course in Bangalore University
const degreeCourseWork = "Organizational Behavior, Financial Reporting and analysis, Quantitative Methods Marketing Management, Customer Behavior and analysis"; //Course work in Bangalore University


export {
  profileFirstName,
  profileLastName,
  bannerDesignation,
  profileLocation,
  profileTagLine,
  companyNameOne,
  companyNameTwo,
  companyNameThree,
  companyNameFour,
  HPYearsOfExpereince,
  EYYearsOfExpereince,
  wealusYearsOfExpereince,
  captialOneYearsOfExpereince,
  renderBoldText,
  captialOneProjectDescription,
  wealusProjectOneDescription,
  wealusProjectTwoDescription,
  EYProjectDescription,
  HPProjectDescription,
  technicalSkills,
  mastersCollegeName,
  mastersCollegeCourse,
  mastersCourseWork,
  degreeCollegeName,
  degreeCollegeCourse,
  degreeCourseWork
};
