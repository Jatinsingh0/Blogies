import connect from "@/app/utils/db"
import Postt from "@/app/modals/Postt"
import { NextResponse } from "next/server"

export const GET = async(request) => {
    try{
        await connect()
        const posts = await Postt.find();  //When you use the find() method in your application while connected to MongoDB, it allows you to retrieve documents from a specified collection based on your query conditions.
        return new NextResponse(JSON.stringify(posts), {status: 200})

    }catch(error){
         return new NextResponse("Database error", {status: 500})
    }
}