import React from "react";

export default function ProductImage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className="
          overflow-hidden
          w-80 h-80
          rounded-xl
          shadow-lg
          cursor-crosshair   /* hover হলে zoom cursor */
        "
      >
        <img
          src="materials-1.png" // আপনার ইমেজ path
          alt="Product"
          className="
            w-full h-full object-cover
            transition-transform duration-300
            hover:scale-110   /* hover হলে zoom */
          "
        />
      </div>
    </div>
  );
}
