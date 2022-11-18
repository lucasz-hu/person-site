import React from "react";
import TaskbarProgram from "./TaskbarProgram";

const Taskbar = ({ programs }) => {
    return (
        <div className="h-10 bg-blue-300 flex flex-row">
            <div className="">Start</div>
            {programs.map((program) =>
                program.show ? (
                    <TaskbarProgram program={program.program} />
                ) : null
            )}
        </div>
    );
};

export default Taskbar;
