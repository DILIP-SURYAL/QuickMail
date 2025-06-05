import React, { useState } from "react";
import {
  MdCropSquare,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdInbox,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdRefresh, IoMdMore } from "react-icons/io";
import { GoTag } from "react-icons/go";
import Message from "./Message";

const Inbox = () => {
  const [activeTab, setActiveTab] = useState(0);
  const mailArray = [
    {
      mailType: <MdInbox size={"20px"} />,
      name: "Primary",
    },
    {
      mailType: <MdInbox size={"20px"} />,
      name: "Promotions",
    },
    {
      mailType: <MdInbox size={"20px"} />,
      name: "Social",
    },
  ];

  const setActive = (i) => {
    setActiveTab(i);
  };
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
          {mailArray.map((mail, index) => (
            <button
              onClick={() => {
                setActiveTab(index);
              }}
              className={`w-52 flex items-center gap-5 p-4 border-b-4  hover:bg-gray-100 ${
                activeTab === index
                  ? "border-b-4 border-blue-600 text-blue-600 bg-blue-50"
                  : "border-b-4 border-transparent text-gray-700 hover:bg-gray-100"
              }`}
            >
              {mail.mailType}
              <span>{mail.name}</span>
            </button>
          ))}
        </div>

        {/* Messages Placeholder */}
        <div className="p-4 text-gray-500">
          <Message />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
