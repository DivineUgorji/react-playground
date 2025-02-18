import React from "react";
import "../style.css";
import Button from "./Button";
import openImage from "../assets/Open.png";
import shareImage from "../assets/share.png";

function ProfileCard(name, title, image, message) {
  const [count, setCount] = React.useState(0);
  console.log(setCount);
  return (
    <div className="profile-card flow-content">
      <div className="profile-card__heading">
        <div className="profile-img__container">
          <img src={image} alt="User profile picture" />
        </div>
        <div className="profile-heading-text">
          <h2>{title}</h2>
          <p>
            8 hours ago by <span>{name}</span>
          </p>
        </div>
        <p className="view-text">
          views<span> {count}</span>
        </p>
      </div>
      <p>{message}</p>
      <div className="flex-style">
        <Button className={`btn btn--open`} icon={openImage}>
          Open
        </Button>
        <Button className={`btn btn--share`} icon={shareImage}>
          Share
        </Button>
        <Button className={`btn btn--plus`} onClick={() => setCount(count + 1)}>
          increase +
        </Button>
      </div>
    </div>
  );
}

export default ProfileCard;
