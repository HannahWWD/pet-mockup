import React from "react";
import "./ProfileCard.scss";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Chip from "@material-ui/core/Chip";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function ProfileCard(props) {
  return (
    <div
      className="profile-wrapper"
      style={{
        backgroundImage: `url(${props.link})`,
      }}
    >
      <div className="profile-top">
        <LocationOnOutlinedIcon />
        <p>{props.shelter}</p>
      </div>
      <div className="profile-bottom">
        <div>
          <h3>{props.name}</h3>
          <p>{`${props.age[0]} years, ${props.age[1]} months`}</p>
          <div className="chip-groups">
            <Chip
              icon={<EmojiEmotionsIcon />}
              label={props.tags[0]}
              variant="outlined"
            />
            <Chip
              icon={<EmojiEmotionsIcon />}
              label={props.tags[1]}
              variant="outlined"
            />
          </div>
        </div>
        <div>
            <ChevronRightIcon />
          </div>
      </div>
    </div>
  );
}
