
import './StaffCard.css';
import React from 'react';

function StaffCard(props) {

  return (
    <div className="staff-card">
        <div id="left-side">
            <img src={props.image} id="staff-image"></img>
        </div>

        <div id="right-side">
            <h2 id="staff-card-name">{props.name}</h2>
            <h3 id="staff-card-title">{props.title}</h3>
            <h3 id="staff-card-email">{props.email}</h3>
        </div>
    </div>
  );
}

export default StaffCard;
