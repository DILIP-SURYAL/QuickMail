import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import { PiDotsNineBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";

import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={"20px"} />
          </div>
          <img
            className="w-8"
            src={"https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"}
            alt=""
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size="24px" className="text-gray-700" />
          <input
            type="text"
            placeholder="Search mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
            // Removed onChange and value props
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <FaRegQuestionCircle size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoSettingsOutline size={"20px"} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={"20px"} />
          </div>
          <div className="relative cursor-pointer">
            <img
              className="size-9"
              src="data:image/png;base64,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"
              alt=""
            />
            {/* Removed AnimatePresence and motion.div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
