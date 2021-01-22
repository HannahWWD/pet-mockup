import React from "react";
import "./Result.scss";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ProfileCard from "../components/ProfileCard";
import mockProfiles from "../data/mockprofiles";
import {Link} from 'react-router-dom';

export default function Result(props) {
    let recommendations = [];
  //const tempAns = ["1", "2", "0", "1", "2", "0", "1"];
  if(props.finalAnswer){
    const finalAnswer = props.finalAnswer;
    const result = finalAnswer.reduce((sum, current) => {
        return +sum + +current;
      });
      if (result < 6) {
        recommendations = mockProfiles.slice(0, 6);
      } else if (result < 12) {
        recommendations = mockProfiles.slice(6, 12);
      } else if (result <= 18) {
        recommendations = mockProfiles.slice(12);
      }

  }
  

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
            Change your mind? <Link to="/">Retake the assessment</Link>
          </p>
        </div>
      </div>

      <div className="result-wrapper">
        {recommendations.length ?
          recommendations.map((recommendation) => (
            <ProfileCard
              key={recommendation.name}
              shelter={recommendation.shelter}
              name={recommendation.name}
              tags={recommendation.tags}
              age={recommendation.age}
              link={recommendation.link}
            />
          )):<div className="empty-ans-error">
            <p>We don't have recommendations for you.</p>
            <Link to="/">Try Again</Link>
          </div>}
      </div>
    </div>
  );
}
