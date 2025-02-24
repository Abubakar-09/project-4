import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/connection";
import Linktree from "@/models/linktree";

export async function GET() {
        await ConnectDB(); // Ensure the DB connection is established
        let data = await Linktree.find();
        return NextResponse.json(data, { status: 200 });
   
}


export async function POST(req) {
        // Parse request body
        const data = await req.json();

        if (!data?.email || !data?.url || !data?.text) {
            return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
        }

        await ConnectDB();

        // Check if user already exists in DB
        let userEntry = await Linktree.findOne({ email: data.email });

        if (userEntry) {
            // If user exists, update `data`
            let exist = []
            exist = JSON.parse(userEntry.data || "[]"); // Ensure valid array
            exist.push({ url: data.url, text: data.text }); // Push new data
            userEntry.data = JSON.stringify(exist);
            await userEntry.save();
        } else {
            // If user does not exist, create a new record
            userEntry = new Linktree({ 
                email: data.email, 
                data: JSON.stringify([{ url: data.url, text: data.text }]) 
            });
            await userEntry.save();
        }

        return NextResponse.json({ success: true, message: "Data stored successfully" });
}
