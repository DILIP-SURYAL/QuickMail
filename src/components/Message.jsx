import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";

const Message = () => {
  return (
    <div className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:bg-gray-100 transition-all cursor-pointer">
      {/* Left Side: Icons and Sender */}
      <div className="flex items-center gap-3">
        <MdCropSquare className="w-5 h-5 text-gray-400" />
        <RiStarLine className="w-5 h-5 text-gray-400" />
        <h1 className="font-semibold text-gray-800">sender@email.com</h1>
      </div>

      {/* Center: Message preview */}
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate max-w-full">
          This is a preview of the email message content that may be
          truncated...
        </p>
      </div>

      {/* Right: Time */}
      <div className="flex-none text-gray-500 text-xs whitespace-nowrap pl-2">
        <p>Thu, 05 Jun 2025 12:00:00 GMT</p>
      </div>
    </div>
  );
};

export default Message;
