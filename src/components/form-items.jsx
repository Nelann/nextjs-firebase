"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "@/lib/firebase/db";

export default function FormItems() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "items"), {
        name: title,
      });
      console.log("Document written with ID: ", docRef.id);
      setTitle("");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col space-y-1">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="w-full px-2 border py-1.5"
          placeholder="Add a new item"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full py-2 text-lg font-semibold text-white bg-blue-500 rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
