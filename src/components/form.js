import React from "react";
import People from "./people";

export default function Form(props) {
  const value = [5, 10, 15, 25, 50];

  return (
    <form className="form-wrap">
      <div className="form-section1">
        <label htmlFor="bill"> Bill</label>
        <div className="input">
          <img src={props.dollarIcon} alt="" />
          <input
            type="number"
            name="bill"
            value={props.info.bill}
            id="1"
            placeholder="0"
            onChange={(event) => props.handleBill(event)}
          />
        </div>
      </div>
      <p>Select Tip %</p>
      <div className="form-section2">
        <div
          className="button"
          onClick={() => props.handleCLick(value[0] / 100)}
        >
          5%
        </div>
        <div
          className="button"
          onClick={() => props.handleCLick(value[1] / 100)}
        >
          10%
        </div>
        <div
          className="button"
          onClick={() => props.handleCLick(value[2] / 100)}
        >
          15%
        </div>
        <div
          className="button"
          onClick={() => props.handleCLick(value[3] / 100)}
        >
          25%
        </div>
        <div
          className="button"
          onClick={() => props.handleCLick(value[4] / 100)}
        >
          50%
        </div>
        <div
          className="button"
          id="custom"
          onClick={() => props.handleCustom()}
        >
          Custom
        </div>
      </div>
      {props.info.isCustom && (
        <People
          info={props.info}
          handlePercent={(event) => props.handlePercent(event)}
        />
      )}
      <div className="form-section1">
        <label htmlFor="numOfPeople">Number of People</label>
        <div className="input">
          <img src={props.userIcon} alt="" />
          <input
            type="number"
            name="numOfPeople"
            value={props.info.numberOfPeople}
            id="2"
            placeholder="0"
            onChange={(event) => props.handlePeople(event)}
          />
        </div>
      </div>
    </form>
  );
}
