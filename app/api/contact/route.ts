import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const client = new MongoClient(process.env.MONGODB!);

export async function POST(req: Request) {
  try {
    const { name } = await req.json();

    if (typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { error: "name required" },
        { status: 400 }
      );
    }

    await client.connect();

    await client
      .db("porfolio")
      .collection("contacts")
      .insertOne({ name: name.trim() });

    return NextResponse.json({ message: "name saved" });
  } catch {
    return NextResponse.json(
      { error: "failed" },
      { status: 500 }
    );
  }
}