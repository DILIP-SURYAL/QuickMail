import React, { useEffect, useState } from "react";
import Message from "./Message";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../store/appSlice";

const Messages = () => {
  const { searchText, emails } = useSelector((store) => store.app);
  const [filterEmail, setFilterEmail] = useState(emails);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setEmails(allEmails));
    });
    console.log("Subscribed to emails collection", emails);
    return () => unsubscribe(); // Cleanup function to unsubscribe when component unmounts
  }, [dispatch]);

  useEffect(() => {
    const filteredEmails = emails?.filter((email) => {
      const query = (searchText || "").toLowerCase();

      const subject = (email?.subject || "").toLowerCase();
      const to = (email?.to || "").toLowerCase();
      const message = (email?.message || "").toLowerCase();

      return (
        subject.includes(query) || to.includes(query) || message.includes(query)
      );
    });

    setFilterEmail(filteredEmails);
    console.log("Filtered Emails:", filteredEmails);
  }, [searchText, emails]);

  return (
    <div>
      {filterEmail?.map((email, index) => (
        <Message key={index} email={email} />
      ))}
    </div>
  );
};

export default Messages;
