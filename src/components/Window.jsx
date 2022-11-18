import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "../resize.css";

const Window = ({
    show,
    program,
    count,
    onClose,
    toRender,
    background,
    minX,
    minY,
}) => {
    const [width, setWidth] = useState(window.innerWidth / 2);
    const [height, setHeight] = useState(window.innerHeight * 0.75);
    const [rnd, setRnd] = useState();
    let x = window.innerWidth / 15;
    let y = window.innerHeight / 8;

    if (program === "GitHub") {
        x += 35;
        y += 35;
    }

    const onOpen = () => {
        rnd.updateSize({
            width: window.innerWidth - 10,
            height: window.innerHeight - 75,
        });
        rnd.updatePosition({ x: 0, y: 0 });
    };
    return (
        <Rnd
            default={{
                x: y,
                y: x,
                width: width,
                height: height,
            }}
            minHeight={minY ? minY : window.innerHeight * 0.15}
            minWidth={minX ? minX : window.innerWidth * 0.15}
            dragHandleClassName="handle"
            bounds="body"
            className={`rounded-md border-2 border-black ${
                background ? background : "bg-gray-100"
            } ${show ? "fade-in" : "fade-out"}`}
            ref={(c) => {
                setRnd(c);
            }}
        >
            <div className="">
                <div className="flex justify-between handle cursor-move bg-green-300">
                    <div className="bg-gray-200 ">{program}</div>
                    <div className="flex flex-row space-x-2">
                        <div
                            className="bg-gray-400 cursor-pointer"
                            onClick={onOpen}
                        >
                            O
                        </div>
                        <div
                            className="bg-gray-400 cursor-pointer"
                            onClick={onClose}
                        >
                            X
                        </div>
                    </div>
                </div>

                <div>{toRender}</div>
            </div>
        </Rnd>
    );
};

export default Window;
