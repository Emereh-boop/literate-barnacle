import React from "react";

export default function People(props) {
  return (
    <div className="form-section1">
      <label htmlFor="numOfPeople">Enter custom percentage</label>
      <div className="input">
        <img src={props.userIcon} alt="" />
        <input
          type="number"
          name="tipPercentage"
          value={props.info.tipPercentage}
          id="2"
          placeholder="0"
          onChange={(event) => props.handlePercent(event)}
        />
      </div>
    </div>
  );
}
