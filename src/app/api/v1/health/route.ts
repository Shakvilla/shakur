// app/api/v1/users/profile/route.ts
import { NextResponse } from "next/server";
// import { getUserById } from "@/lib/database";

export async function GET(request: Request) {
//   const userId = request.headers.get("user-id");

// //   const userProfile = await getUserById(userId);
//   if (!userProfile) {
//     return NextResponse.json({ message: "User not found" }, { status: 404 });
//   }

  return NextResponse.json({ message: "OK" }, { status: 200 });
}
