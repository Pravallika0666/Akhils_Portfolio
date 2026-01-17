import React from "react";
import bannerImg from "../assets/banner.jpeg";

// const BannerComponent = () => {
//   return (
//     <React.Fragment>
//       {/*Banner image*/}
//       <div className="banner-container">
//         <div className="portfolio-banner-image"></div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default BannerComponent;


const BannerComponent = () => {
  return (
    <div className="banner-container">
      <img src={bannerImg} alt="banner" className="banner-image" />
    </div>
  );
};

export default BannerComponent;
