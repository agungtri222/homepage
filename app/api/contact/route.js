import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();

        const { name, email, message } = body;

        if (!email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const client = await clientPromise;

        const db = client.db(process.env.MONGODB_DB);

        await db.collection("contact").insertOne({
            name,
            email,
            message,
            createdAt: new Date(),
        });

        return NextResponse.json({
            success: true,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}