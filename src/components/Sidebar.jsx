import React from "react";
import { LuPencil } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
import {
  MdOutlineWatchLater,
  MdOutlineKeyboardArrowDown,
  MdOutlineDrafts,
  MdInbox,
} from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setOpen } from "../store/appSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md"
        >
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>

      <div className="text-gray-500">
        <div className="hover:bg-gray-200 hover:text-black flex pl-6 py-1 rounded-r-full items-center gap-4 my-2 hover:cursor-pointer">
          <MdInbox size={"20px"} />
          <p>Inbox</p>
        </div>
        <div className="hover:bg-gray-200 hover:text-black flex pl-6 py-1 rounded-r-full items-center gap-4 my-2 hover:cursor-pointer">
          <IoMdStar size={"20px"} />
          <p>Starred</p>
        </div>
        <div className="hover:bg-gray-200 hover:text-black flex pl-6 py-1 rounded-r-full items-center gap-4 my-2 hover:cursor-pointer">
          <MdOutlineWatchLater size={"20px"} />
          <p>Snoozed</p>
        </div>
        <div className="hover:bg-gray-200 hover:text-black flex pl-6 py-1 rounded-r-full items-center gap-4 my-2 hover:cursor-pointer">
          <TbSend2 size={"20px"} />
          <p>Sent</p>
        </div>
        <div className="hover:bg-gray-200 hover:text-black flex pl-6 py-1 rounded-r-full items-center gap-4 my-2 hover:cursor-pointer">
          <MdOutlineDrafts size={"20px"} />
          <p>Drafts</p>
        </div>

        <div className="flex items-center pl-6 gap-4 cursor-pointer hover:bg-gray-200 rounded-r-full py-1">
          <MdOutlineKeyboardArrowDown size={"20px"} />
          <span>More</span>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Sidebar;
