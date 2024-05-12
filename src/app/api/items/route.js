import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

import db from "@/lib/firebase/db";

export const GET = async () => {
  try {
    const query = await getDocs(collection(db, "items"));

    return NextResponse.json({
      message: "Get all items",
      items: query.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    });
  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
};
