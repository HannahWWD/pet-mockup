import React from "react";
import "./Result.scss";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ProfileCard from "../components/ProfileCard";

export default function Result() {
  return (
    <div className="result">
      <div className="result-text">
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="inherit">Adopt</Typography>
          <Typography color="textPrimary">Recommendations</Typography>
        </Breadcrumbs>
        <div className="result-title">
          <h2>CATS FOR YOU AT</h2>
          <LocationOnIcon />
          <h2>SETTLE</h2>
        </div>
        <div className="result-instruction">
          <p>
            The following is a collection of available cats in shelters within
            100 miles of Seattle.
          </p>
          <p>
            Change your mind? <span>Retake the assessment</span>
          </p>
        </div>
      </div>

      <div className="result-wrapper">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
      </div>
    </div>
  );
}
