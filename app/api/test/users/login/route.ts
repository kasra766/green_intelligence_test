import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  console.log(JSON.stringify(data, null, 2));
  if (data.uname !== "admin" || data.pass !== "admin") {
    const respondData = {
      timestamp: new Date(),
      status: 400,
      error: "Bad Request",
      message: "Invalid Username or Password",
      path: "/test/users/login",
    };
    return NextResponse.json(respondData, { status: 400 });
  }

  const respondData = {
    ticket: "YOUR TICKET",
    Lname: "Intelligence",
    name: "Green",
  };
  return NextResponse.json(respondData, { status: 200 });
}
