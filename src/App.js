import "./App.css";
import { useState } from "react";
import Program from "./components/Program";
import Window from "./components/Window";
import ExternalProgram from "./components/ExternalProgram";
import Taskbar from "./components/Taskbar";
import SpinningDonut from "./programs/SpinningDonut";
import AboutMe from "./programs/AboutMe";
import MyProjects from "./programs/MyProjects";
import Donut from "./programs/Donut";

/* TODO: 
  Add close icons to windows
  Add external links to icons
  Add taskbar
  Commandline

  Add linkedin icon
  Add email icon
  Contact me icon
*/

const App = () => {
    const [windows, setWindows] = useState([
        { program: "GitHub", show: false },
        { program: "Resume", show: false },
        { program: "About Me", show: false, toRender: <AboutMe /> },
        { program: "My Projects", show: false, toRender: <MyProjects /> },
        { program: "Contact Me", show: false },
        { program: "LinkedIn", show: false },
        { program: "Email", show: false },
        {
            program: "Spinning Donut",
            show: false,
            toRender: <SpinningDonut />,
            background: "bg-black",
            minX: window.innerWidth / 2 - window.innerWidth / 15,
            minY: window.innerHeight * 0.75 - window.innerHeight / 20,
        },
    ]);

    const handleOnClick = (program) => {
        setWindows(
            windows.map((window) => {
                if (window.program === program) {
                    window.show = true;
                }
                return window;
            })
        );
    };

    const handleClose = (program) => {
        setWindows(
            windows.map((window) => {
                if (window.program === program) {
                    window.show = false;
                }
                return window;
            })
        );
    };

    return (
        <div className="h-screen w-screen bg-default bg-cover flex flex-col justify-between">
            <div className="grid grid-cols-12 mb-auto">
                <div>
                    <ExternalProgram text="Resume" link="resume.pdf" />
                </div>
                <div>
                    <Program
                        text="About Me"
                        onClick={() => handleOnClick("About Me")}
                    />
                </div>
                <div>
                    <Program
                        text="My Projects"
                        onClick={() => handleOnClick("My Projects")}
                    />
                </div>
                <div>
                    <ExternalProgram
                        text="GitHub"
                        link="https://github.com/lucasz-hu"
                    />
                </div>

                <div>
                    <Program
                        text="Spinning Donut"
                        onClick={() => handleOnClick("Spinning Donut")}
                    />
                </div>

                {windows.map((window, key) => (
                    <Window
                        show={window.show}
                        program={window.program}
                        key={key}
                        onClose={() => handleClose(window.program)}
                        toRender={window?.toRender}
                        background={window?.background}
                        minX={window?.minX}
                        minY={window?.minY}
                    />
                ))}
            </div>
            <Taskbar programs={windows}></Taskbar>
        </div>
    );
};

export default App;
