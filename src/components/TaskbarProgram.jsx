import React from "react";

/**
 * Rendered component for text on bottom programs on taskbar
 * @param {string} program string name for program
 * @returns
 */
const TaskbarProgram = ({ program }) => {
  return (
    <div className="overflow-hidden bg-[#558ce6] flex flex-row items-center m-2 text-white pr-8 px-2 w-48 h-3/4 hover:bg-[#1e64d6]">
      <img
        src="document.webp"
        className="object-fill h-8 w-8 mr-2"
        alt="Taskbar Program Icon"
      ></img>
      <div className="">{program}</div>
    </div>
  );
};

export default TaskbarProgram;
