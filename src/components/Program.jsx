import React from "react";
import "./Program.css";

const Program = ({ text, icon, onClick }) => {
    return (
        <div className="h-20 w-16" onClick={onClick}>
            <div className="flex flex-col justify-center text-center">
                <img
                    src="document.webp"
                    className="object-fill h-18 w-16"
                ></img>
                <p className="flex justify-center text-white">{text}</p>
            </div>
        </div>
    );
};

export default Program;
