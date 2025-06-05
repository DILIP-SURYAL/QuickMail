import React from "react";
import {
  MdCropSquare,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdInbox,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdRefresh, IoMdMore } from "react-icons/io";
import { GoTag } from "react-icons/go";

const Inbox = () => {
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      {/* Top Toolbar */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-500">1-50 of 200</p>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>

      {/* Tabs and Messages */}
      <div className="h-[90vh] overflow-y-auto">
        {/* Tab Buttons */}
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-5 p-4 border-b-4 border-b-blue-600 text-blue-600 w-52 hover:bg-gray-100">
            <MdInbox size={"20px"} />
            <span>Primary</span>
          </button>
          <button className="flex items-center gap-5 p-4 border-b-4 border-b-transparent w-52 hover:bg-gray-100">
            <GoTag size={"20px"} />
            <span>Promotions</span>
          </button>
          <button className="flex items-center gap-5 p-4 border-b-4 border-b-transparent w-52 hover:bg-gray-100">
            <FaUserFriends size={"20px"} />
            <span>Social</span>
          </button>
        </div>

        {/* Messages Placeholder */}
        <div className="p-4 text-gray-500">
          [Messages will be displayed here]
        </div>
      </div>
    </div>
  );
};

export default Inbox;
