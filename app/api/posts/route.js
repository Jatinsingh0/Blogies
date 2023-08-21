
import connectDB from "@/app/utils/db";
import Postt from "@/app/modals/Postt";
import { NextResponse } from "next/server"

export const GET = async(request) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("username");
    try{
        console.log("connecting DB")
        await connectDB()
        console.log("connected DB")

        console.log("retrieving data")
        const posts = await Postt.find();  //When you use the find() method in your application while connected to MongoDB, it allows you to retrieve documents from a specified collection based on your query conditions.
        console.log(posts)
        return new NextResponse(JSON.stringify(posts), {status: 200})
        
    }catch(error){
         return new NextResponse("Database error", {status: 500})
    }
};


export const POST = async(request) => {
    const body = await request.json();
    const newPost = new Postt(body);

    try{
        await connectDB()
        await newPost.save()
        return new NextResponse("Post has been uploaded", {status: 201})

    }catch(error){
         return new NextResponse("Database error", {status: 500})
    }
};