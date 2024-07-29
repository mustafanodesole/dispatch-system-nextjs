import Connect from "@/lib/dbConfig";
import { NextResponse, NextRequest } from "next/server";

export  async function GET(request:NextRequest) {
    
    await Connect();
    return NextResponse.json({message : "Get Request"})

    
}