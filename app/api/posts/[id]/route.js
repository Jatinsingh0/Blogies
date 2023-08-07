import connect from "@/app/utils/db"
import Postt from "@/app/modals/Postt"
import { NextResponse } from "next/server"

export const GET = async(request, {params}) => {
    const {id} = params;
    try{
        await connect()
        const post = await Postt.findById(id);  
        return new NextResponse(JSON.stringify(post), {status: 200})

    }catch(error){
         return new NextResponse("Database error", {status: 500})
    }
}

export const DELETE = async(request, {params}) => {
    const {id} = params;
    try{
        await connect()
        await Postt.findByIdAndDelete(id);  
        return new NextResponse("post has been deleted", {status: 200})

    }catch(error){
         return new NextResponse("Database error", {status: 500})
    }
}