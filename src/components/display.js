import React from "react";

export default function Display(props) {
  return (
    <div className="form">
      <div className="displays-wrap">
        <div className="displays">
          <div>
            Tip Amount <p>/ person</p>
          </div>
          <div className="disp">
            <img src="./images/icon-dollar.svg" alt="" />
            {props.tipAmount() !== Infinity || NaN
              ? `${props.tipAmount()}`
              : " 0 "}
          </div>
        </div>
        <div className="displays">
          <div>
            Total <p>/ person</p>
          </div>
          <div className="disp">
            <img src="./images/icon-dollar.svg" alt="" />
            {props.totalTip() !== Infinity || NaN
              ? `${props.totalTip()}`
              : " 0"}
          </div>
        </div>
      </div>
      <button
        onClick={props.handleReset}
        className="button"
        type="reset"
        id="reset"
      >
        RESET
      </button>
    </div>
  );
}
