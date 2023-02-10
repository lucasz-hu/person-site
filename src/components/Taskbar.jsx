import React from "react";
import TaskbarProgram from "./TaskbarProgram";

const Taskbar = ({ programs }) => {
  return (
    <div
      className="h-14 flex flex-row"
      style={{
        background: "rgb(36,94,220)",
        background:
          "linear-gradient(180deg, rgba(36,94,220,1) 0%, rgba(73,147,230,1) 4%, rgba(49,104,213,1) 21%, rgba(49,104,213,1) 100%)",
      }}
    >
      <div className="flex flex-row items-center bg-green-700 basis-1/12 cursor-pointer">
        <img
          src="start.png"
          className="object-contain w-10 h-10 mx-3"
          alt="Start taskbar"
        ></img>
        <div className="text-white text-2xl">START</div>
      </div>
      <div className="grow basis-8/12 flex flex-row cursor-default">
        {programs.map((program) =>
          program.show ? <TaskbarProgram program={program.program} /> : null
        )}
      </div>

      <div
        className="basis-1/12 border-l-2 border-[#092e51] text-white flex items-center align-center justify-center text-2xl"
        style={{
          background: "rgb(13,141,234)",
          background:
            "linear-gradient(180deg, rgba(13,141,234,1) 0%, rgba(25,185,243,1) 6%, rgba(13,141,234,1) 14%, rgba(13,141,234,1) 100%) ",
        }}
      >
        4:57 PM
      </div>
    </div>
  );
};

export default Taskbar;
