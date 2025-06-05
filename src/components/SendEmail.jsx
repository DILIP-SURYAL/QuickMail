import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../store/appSlice";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
const SendEmail = () => {
  const [formData, setFormData] = useState({
    recipients: "",
    subject: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const open = useSelector((state) => state.app.open);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setOpen(false));
    await addDoc(collection(db, "emails"), {
      to: formData.recipients,
      subject: formData.subject,
      message: formData.message,
      createdAt: serverTimestamp(),
    });

    setFormData({
      recipients: "",
      subject: "",
      message: "",
    });
    alert("Email sent successfully!");
  };
  return (
    <div
      className={`bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md ${
        open ? "block" : "hidden"
      }`}
    >
      {/* Header */}
      <div className="flex px-3 py-2 bg-[#F2F6FC] items-center justify-between rounded-t-md">
        <h1 className="font-medium">New Message</h1>
        <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
          <RxCross2 onClick={() => dispatch(setOpen(false))} />
        </div>
      </div>

      {/* Form (UI only) */}
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          name="recipients"
          type="text"
          onChange={changeHandler}
          value={formData.recipients}
          placeholder="Recipients"
          className="outline-none py-1 border-b border-gray-300"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          placeholder="Subject"
          onChange={changeHandler}
          className="outline-none py-1 border-b border-gray-300"
        />
        <textarea
          cols="30"
          rows="10"
          name="message"
          value={formData.message}
          onChange={changeHandler}
          placeholder="Message"
          className="outline-none py-1 border border-gray-200 rounded-md p-2"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0B57D0] rounded-full w-fit px-4 py-1 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
