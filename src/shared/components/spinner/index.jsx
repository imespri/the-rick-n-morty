import React from "react";
import "./spinner.scss";
import spinnerIMG from "../../../assets/images/spinner.png";

export const Spinner = () => {
  return (
    <div className="spinner">
      <img className="spinner__image" src={spinnerIMG} alt="Loading..." />
    </div>
  );
};
