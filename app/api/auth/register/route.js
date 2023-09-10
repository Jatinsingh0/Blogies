import User from "@/app/modals/User";
import connectDB from "@/app/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  
    const { name, email, password } = await request.json();

    console.log("Connecting to the database...");
    await connectDB();

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    try {
    console.log("Saving user to the database...");
    await newUser.save();

    console.log("User has been created successfully.");

    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err) {
    console.error("Error creating user:", err);

    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
