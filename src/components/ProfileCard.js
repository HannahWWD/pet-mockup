import React from "react";
import "./ProfileCard.scss";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Chip from "@material-ui/core/Chip";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function ProfileCard() {
  return (
    <div
      className="profile-wrapper"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1583524505974-6facd53f4597?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80")`,
      }}
    >
      <div className="profile-top">
        <LocationOnOutlinedIcon />
        <p>PAWS Cat City</p>
      </div>
      <div className="profile-bottom">
        <div>
          <h3>Alexis</h3>
          <p>1 years, 3 months</p>
          <div className="chip-groups">
            <Chip
              icon={<EmojiEmotionsIcon />}
              label="Friendly"
              variant="outlined"
            />
            <Chip
              icon={<EmojiEmotionsIcon />}
              label="Friendly"
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
