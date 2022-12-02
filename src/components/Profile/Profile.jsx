import React from "react";
import { User } from "../Header/Header";
import "./Profile.css";

const PopupItem = ({field, content}) => {
  return (
    <div className="popup_item">
      <h2>{field}</h2>
      <span>{content}</span>
    </div>
  )
}

function PopupProfile({setTrigger}){
    return (
        <div className="popup_background">
          <div className="popup">
            <button onClick={() => setTrigger(false)} style={{marginBottom: "-1em"}} id="close_button">X</button>
            <User profile={true} />
            <PopupItem field="Username:" content="Alexander"/>
            <PopupItem field="Email:" content="alexanderthegreat@gmail.com"/>
            <PopupItem field="Tel:" content="0909991238"/>
            <PopupItem field="Address:" content="1 Vo Van Ngan"/>
            <PopupItem field="Membership:" content="Diamond"/>
          </div>
        </div>
    );
}

export default PopupProfile