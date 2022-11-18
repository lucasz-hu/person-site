import React from "react";
import "./Program.css";

const ExternalProgram = ({ text, icon, link }) => {
    return (
        <div className="flex flex-col justify-center text-center">
            <a
                className="h-20 w-16"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="document.webp"
                    className="object-fill h-18 w-16"
                ></img>
                <p className="flex justify-center text-white">{text}</p>
            </a>
        </div>
    );
};

export default ExternalProgram;
