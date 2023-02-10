import React from "react";
import "./Program.css";

/**
 * Component for program icons + text on homepage
 * @param {string} text name of program
 * @param {string} icon location of file of icon
 * @param {function} onClick function for when program is clicked
 * @returns
 */
const Program = ({ text, icon, onClick }) => {
  return (
    <div className="h-20 w-16" onClick={onClick}>
      <div className="flex flex-col justify-center text-center">
        <img
          src="document.webp"
          className="object-fill h-18 w-16"
          alt="Program Icon"
        ></img>
        <p className="flex justify-center text-white">{text}</p>
      </div>
    </div>
  );
};

export default Program;
