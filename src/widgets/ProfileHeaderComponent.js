import React from "react";
import "../styles/BannerImage/bannerImage.css";

import {
  profileFirstName,
  profileLastName,
  bannerDesignation,
  profileLocation,
  profileTagLine
} from "./Utils/commonUtils";

const ProfileHeaderComponent = () => {
  return (
    <React.Fragment>
      <div className="banner-overlay">
        {/*Profile Name*/}
        <h1>
          {profileFirstName} {profileLastName}
        </h1>
        {/*designation and location*/}
        <div className="banner-overlay-des-loc">
          <p>{bannerDesignation}</p>
          <p>{profileLocation}</p>
        </div>
        {/*Profile TagLine*/}
        <div className="banner-overlay-profile-tagline">
            <p>{profileTagLine}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileHeaderComponent;
