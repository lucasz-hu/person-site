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
    if (
      width === window.innerWidth - 15 &&
      height === window.innerHeight - 70
    ) {
      setWidth(window.innerWidth / 2);
      setHeight(window.innerHeight * 0.75);
      rnd.updateSize({
        width: window.innerWidth / 2,
        height: window.innerHeight * 0.75,
      });
      setWidth(window.innerWidth / 2);
      setHeight(window.innerHeight * 0.75);
      rnd.updatePosition({ x: 50, y: 50 });
    } else {
      rnd.updateSize({
        width: window.innerWidth - 15,
        height: window.innerHeight - 70,
      });
      setWidth(window.innerWidth - 15);
      setHeight(window.innerHeight - 70);
      rnd.updatePosition({ x: 5, y: 5 });
    }
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
      className={`rounded-md border-4 border-[#2b6dd1] overflow-hidden ${
        background ? background : "bg-gray-100"
      } ${show ? "fade-in" : "fade-out"}`}
      ref={(c) => {
        setRnd(c);
      }}
      onResizeStop={(e, dir, ref, delta, pos) => {
        console.log(e);
        console.log(dir);
        console.log(ref);
        console.log(delta);
        console.log(pos);
        setWidth(width + delta[width]);
        setHeight(height + delta[height]);
      }}
    >
      <div className="">
        <div
          className="flex justify-between handle cursor-move"
          style={{
            background: "rgb(36,94,220)",
            background:
              "linear-gradient(180deg, rgba(36,94,220,1) 0%, rgba(73,147,230,1) 4%, rgba(49,104,213,1) 21%, rgba(49,104,213,1) 100%)",
          }}
        >
          <div className="text-white ml-3 my-1">{program}</div>
          <div className="flex flex-row items-center space-x-3 mr-2">
            <div
              className="bg-[#0667f5] hover:bg-[#0067ff] outline-white outline cursor-pointer rounded-[1px] text-white"
              onClick={onOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </div>
            <div
              className="bg-red-300 hover:bg-red-400 outline-white outline cursor-pointer  rounded-[1px] text-white"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>{toRender}</div>
      </div>
    </Rnd>
  );
};

export default Window;
