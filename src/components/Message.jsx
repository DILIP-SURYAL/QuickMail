import React from "react";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setSelectedMail } from "../store/appSlice";
import { useNavigate } from "react-router-dom";

const Message = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openEmail = () => {
    dispatch(setSelectedMail(email));
    navigate(`/mail/${email.id}`);
  };

  if (!email) navigate("/"); // Handle case where email is not defined
  return (
    <div
      onClick={openEmail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-3 text-sm hover:bg-gray-100 transition-all cursor-pointer"
    >
      {/* Left Side: Icons and Sender */}
      <div className="flex items-center gap-3">
        <MdCropSquare className="w-5 h-5 text-gray-400" />
        <RiStarLine className="w-5 h-5 text-gray-400" />
        <h1 className="font-semibold text-gray-800">
          {email ? email.to : navigate("/")}
        </h1>
      </div>

      {/* Center: Message preview */}
      <div className="flex-1 ml-4">
        <p className="text-gray-600 truncate max-w-full">
          {`${
            email.message.length > 130
              ? `${email?.message.substring(0, 130)}...`
              : email.message
          }`}
        </p>
      </div>

      {/* Right: Time */}
      <div className="flex-none text-gray-500 text-xs whitespace-nowrap pl-2">
        <p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p>
      </div>
    </div>
  );
};

export default Message;
