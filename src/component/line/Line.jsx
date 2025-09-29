import React from "react";
const Line = () => {
    return (
        <section className="w-full h-[200px] ">
            <svg
                viewBox="0 0 600 200"
                className="w-full h-[200px]"
                fill="none"
                stroke="#FE9A00"
                strokeWidth="5"
                strokeDasharray="10 10"
            >
                {/* নিচের path এ curve দেওয়া হয়েছে */}
                <path d="M 0 0 V 100 Q 0 200 100 200 H 600" />
            </svg>
        </section>
    );
};

export default Line;
