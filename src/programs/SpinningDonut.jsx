import React from "react";
import Donut from "./Donut";

const SpinningDonut = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <div className="mt-4">
                <Donut />
            </div>

            <div className="flex flex-row text-md font-bold text-white mt-8">
                <p>Spinning Donut created with js-text-donut </p>
                <a
                    href="https://github.com/patrickoliveras/js-text-donut"
                    className="underline"
                >
                    {" "}
                    (Github){" "}
                </a>
                <p>, modified by me!</p>
            </div>
        </div>
    );
};

export default SpinningDonut;
